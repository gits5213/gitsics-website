/**
 * GITSICS Request a Consultation (QA Proposal) Form Handler
 *
 * Saves "Request a Consultation" submissions to a Google Sheet when users
 * submit the form on the QA proposal / staffing page.
 *
 * Instructions:
 * 1. Create a Google Sheet (or use existing) and note its ID.
 *    Sheet ID for QA Proposal: 13XMOHp1VjCRROvXx10fVKDonR9f9Vovfhnuq2myvWW0
 * 2. Copy this entire code to Google Apps Script (script.google.com)
 * 3. Deploy as a web app with "Anyone" access
 * 4. Copy the deployment URL to your .env.local (GOOGLE_SCRIPT_QA_PROPOSAL_URL)
 *    and optionally NEXT_PUBLIC_GOOGLE_SCRIPT_QA_PROPOSAL_URL for static deploy fallback
 *
 * The script will use the first sheet or create a "consultations" worksheet
 * with the expected headers in your Google Drive spreadsheet.
 */

/**
 * Parse application/x-www-form-urlencoded body string into an object.
 * Used when the client POSTs form-urlencoded and Apps Script does not populate e.parameter.
 */
function parseFormUrlEncoded(str) {
  var out = { name: '', company: '', companyEmail: '', role: '', projectNeed: '', timeline: '' };
  if (!str || typeof str !== 'string') return out;
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split('=');
    if (parts.length < 2) continue;
    var key = decodeURIComponent(parts[0].replace(/\+/g, ' '));
    var value = decodeURIComponent(parts.slice(1).join('=').replace(/\+/g, ' '));
    if (key === 'name') out.name = value;
    else if (key === 'company') out.company = value;
    else if (key === 'companyEmail' || key === 'company_email') out.companyEmail = value;
    else if (key === 'role') out.role = value;
    else if (key === 'projectNeed' || key === 'project_need') out.projectNeed = value;
    else if (key === 'timeline') out.timeline = value;
  }
  return out;
}

function doPost(e) {
  try {
    // When you click Run in the editor, no event is passed — that's normal. Use testDoPost() to test, or deploy and POST from the form.
    if (!e) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'No request data. Run testDoPost() from the editor to test, or deploy as web app and POST from your form.'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      var contentType = (e.postData.type || '').toLowerCase();
      var raw = e.postData.contents;
      if (contentType.indexOf('x-www-form-urlencoded') !== -1 || (e.parameter && Object.keys(e.parameter).length > 0)) {
        // Form-urlencoded: use e.parameter if populated, else parse raw body (browser POST often sends body here)
        if (e.parameter && (e.parameter.name || e.parameter.company || e.parameter.companyEmail)) {
          data = {
            name: e.parameter.name || '',
            company: e.parameter.company || '',
            companyEmail: e.parameter.companyEmail || e.parameter.company_email || '',
            role: e.parameter.role || '',
            projectNeed: e.parameter.projectNeed || e.parameter.project_need || '',
            timeline: e.parameter.timeline || ''
          };
        } else {
          data = parseFormUrlEncoded(raw);
        }
      } else {
        try {
          data = JSON.parse(raw);
        } catch (parseError) {
          data = parseFormUrlEncoded(raw);
          if (!data.name && !data.company) {
            Logger.log('JSON parse error: ' + parseError);
            return ContentService.createTextOutput(JSON.stringify({
              success: false,
              error: 'Invalid JSON body'
            })).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }
    } else if (e.parameter) {
      data = {
        name: e.parameter.name || '',
        company: e.parameter.company || '',
        companyEmail: e.parameter.companyEmail || e.parameter.company_email || '',
        role: e.parameter.role || '',
        projectNeed: e.parameter.projectNeed || e.parameter.project_need || '',
        timeline: e.parameter.timeline || ''
      };
    }
    // Fallback: browser POST may send body in postData.contents without type/parameter set — parse as form
    if (e.postData && e.postData.contents && (!data.name && !data.company && !data.companyEmail)) {
      var parsed = parseFormUrlEncoded(e.postData.contents);
      if (parsed.name || parsed.company || parsed.companyEmail) {
        data = parsed;
        Logger.log('Parsed data from postData.contents (fallback)');
      }
    }
    if (!data || (!data.name && !data.company && !data.companyEmail)) {
      Logger.log('Error: No postData.contents or parameter or parsed data empty. postData.type=' + (e.postData && e.postData.type) + ' contents length=' + (e.postData && e.postData.contents ? e.postData.contents.length : 0));
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid request: Missing body or parameters'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    Logger.log('Received consultation request');
    Logger.log('Parameters:', JSON.stringify(data));

    var spreadsheetId = '13XMOHp1VjCRROvXx10fVKDonR9f9Vovfhnuq2myvWW0';
    var spreadsheet;

    try {
      spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      Logger.log('Opened spreadsheet with ID: ' + spreadsheetId);
    } catch (error) {
      Logger.log('Error accessing spreadsheet: ' + error);
      throw new Error('Failed to access spreadsheet. Please check the spreadsheet ID and ensure the script has access to it.');
    }

    // Get or create the "consultations" worksheet (same pattern as enrollment "students" sheet)
    var headers = ['Timestamp', 'Name', 'Company', 'Company Email', 'Role', 'Project Need', 'Timeline'];
    var sheet = spreadsheet.getSheetByName('consultations');
    if (!sheet) {
      // Use first sheet for backward compatibility, or create "consultations" if spreadsheet is empty
      sheet = spreadsheet.getSheets()[0] || spreadsheet.insertSheet('consultations');
      Logger.log('Using sheet: ' + sheet.getName());
    }
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([headers]);
    }

    var timestamp = new Date().toISOString();
    var nameVal = (data.name || '').toString().trim();
    var companyVal = (data.company || '').toString().trim();
    var companyEmailVal = (data.companyEmail || data.company_email || '').toString().trim();
    var roleVal = (data.role || '').toString().trim();
    var projectNeedVal = (data.projectNeed || data.project_need || '').toString().trim();
    var timelineVal = (data.timeline || '').toString().trim();

    var rowData = [
      timestamp,
      nameVal,
      companyVal,
      companyEmailVal,
      roleVal,
      projectNeedVal,
      timelineVal
    ];

    sheet.appendRow(rowData);
    Logger.log('Row appended successfully');

    // Send email notification
    try {
      var recipientEmail = 'mdzaman.gits@gmail.com';
      var subject = 'New Request a Consultation: ' + (nameVal || 'Unknown') + ' - ' + (companyVal || 'Unknown');
      var spreadsheetUrl = spreadsheet.getUrl();
      var emailBody = [
        'New Request a Consultation submission',
        '',
        'Contact:',
        '- Name: ' + nameVal,
        '- Company: ' + companyVal,
        '- Company Email: ' + (companyEmailVal || 'Not provided'),
        '- Role: ' + roleVal,
        '',
        'Project need:',
        projectNeedVal || 'Not provided',
        '',
        'Timeline: ' + (timelineVal || 'Not provided'),
        '',
        'Timestamp: ' + timestamp,
        '',
        '---',
        'View full details in Google Sheet: ' + spreadsheetUrl
      ].join('\n');

      MailApp.sendEmail({
        to: recipientEmail,
        subject: subject,
        body: emailBody
      });

      Logger.log('Email notification sent successfully');
    } catch (emailError) {
      Logger.log('Failed to send email: ' + emailError);
      // Don't throw - data is already saved
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Request received successfully'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);

    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight requests
function doOptions() {
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.JSON);
}

// GET is called when someone opens the web app URL in a browser, or when a POST is redirected (e.g. not "Anyone" access).
function doGet() {
  Logger.log('doGet was called - if this appears when you submit the form, the POST was likely redirected (set deployment to Anyone)');
  return ContentService.createTextOutput(JSON.stringify({
    ok: true,
    message: 'GITSICS Request a Consultation endpoint. Submit form data via POST.'
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this from the editor (Run → testDoPost) to test the script with sample data.
 * This simulates a form submission and will add a row to your sheet and send an email.
 */
function testDoPost() {
  var e = {
    postData: {
      type: 'application/x-www-form-urlencoded',
      contents: 'name=Test+User&company=Test+Co&companyEmail=test%40example.com&role=Manager&projectNeed=QA+help&timeline=ASAP'
    }
  };
  var result = doPost(e);
  Logger.log(result.getContent());
  return result;
}
