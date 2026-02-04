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

function doPost(e) {
  try {
    // Handle undefined event object
    if (!e) {
      Logger.log('Error: Event object is missing');
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid request: Missing form data'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        Logger.log('JSON parse error: ' + parseError);
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: 'Invalid JSON body'
        })).setMimeType(ContentService.MimeType.JSON);
      }
    } else if (e.parameter) {
      // Form-urlencoded (e.g. static deploy fallback from the site)
      data = {
        name: e.parameter.name || '',
        company: e.parameter.company || '',
        companyEmail: e.parameter.companyEmail || e.parameter.company_email || '',
        role: e.parameter.role || '',
        projectNeed: e.parameter.projectNeed || e.parameter.project_need || '',
        timeline: e.parameter.timeline || ''
      };
    } else {
      Logger.log('Error: No postData.contents or parameter');
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

// Optional: GET for health check (same as enrollment script pattern)
function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    ok: true,
    message: 'GITSICS Request a Consultation endpoint. Submit form data via POST.'
  })).setMimeType(ContentService.MimeType.JSON);
}
