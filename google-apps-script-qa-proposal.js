/**
 * GITSICS QA Proposal (Download) Form Handler
 *
 * Saves "Request a Consultation" submissions to a Google Sheet when users
 * request the Corporate QA Proposal PDF.
 *
 * Setup:
 * 1. Create a Google Sheet (or use existing) and note its ID.
 *    Sheet ID for QA Proposal: 13XMOHp1VjCRROvXx10fVKDonR9f9Vovfhnuq2myvWW0
 * 2. In script.google.com, create a new project, paste this code, save.
 * 3. Deploy as Web app: Execute as "Me", Who has access "Anyone".
 * 4. Copy the Web App URL and set GOOGLE_SCRIPT_QA_PROPOSAL_URL in .env.local / GitHub secrets.
 */

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Invalid request: Missing body",
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseError) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: "Invalid JSON body",
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var spreadsheetId = "13XMOHp1VjCRROvXx10fVKDonR9f9Vovfhnuq2myvWW0";
    var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    var sheet = spreadsheet.getSheets()[0];

    if (!sheet) {
      sheet = spreadsheet.insertSheet("QA Proposal");
    }

    // Ensure header row (row 1) has the correct 7 columns: Timestamp first, Company Email included
    var headers = [
      "Timestamp",
      "Name",
      "Company",
      "Company Email",
      "Role",
      "Project Need",
      "Timeline",
    ];
    var lastRow = sheet.getLastRow();
    if (lastRow === 0) {
      sheet.getRange(1, 1, 1, 7).setValues([headers]);
      lastRow = 1;
    } else {
      // Fix header row if it has wrong number of columns or is missing Company Email
      var existingHeader = sheet.getRange(1, 1, 1, 7).getValues()[0];
      var headerNeedsUpdate = !existingHeader[0] || existingHeader[0] !== "Timestamp" || existingHeader[3] !== "Company Email";
      if (headerNeedsUpdate) {
        sheet.getRange(1, 1, 1, 7).setValues([headers]);
      }
    }

    var timestamp = new Date().toISOString();
    var nameVal = (data.name || "").toString().trim();
    var companyVal = (data.company || "").toString().trim();
    // Support both camelCase and snake_case in case payload keys differ
    var companyEmailVal = (data.companyEmail || data.company_email || "").toString().trim();
    var roleVal = (data.role || "").toString().trim();
    var projectNeedVal = (data.projectNeed || data.project_need || "").toString().trim();
    var timelineVal = (data.timeline || "").toString().trim();

    // Append new row in columns A–G: Timestamp first (A), Company Email in D
    var nextRow = sheet.getLastRow() + 1;
    sheet.getRange(nextRow, 1, nextRow, 7).setValues([[
      timestamp,
      nameVal,
      companyVal,
      companyEmailVal,
      roleVal,
      projectNeedVal,
      timelineVal,
    ]]);

    // Send email notification
    try {
      var recipientEmail = "mdzaman.gits@gmail.com";
      var subject = "New QA Proposal Request: " + (companyVal || "Unknown");
      var body =
        "New Corporate QA Proposal / Request a Consultation submission\n\n" +
        "Name: " + nameVal + "\n" +
        "Company: " + companyVal + "\n" +
        "Company Email: " + (companyEmailVal || "(not provided)") + "\n" +
        "Role: " + roleVal + "\n" +
        "Project need: " + projectNeedVal + "\n" +
        "Timeline: " + timelineVal + "\n\n" +
        "Timestamp: " + timestamp + "\n\n" +
        "---\nView all submissions in your Google Sheet.";
      MailApp.sendEmail({
        to: recipientEmail,
        subject: subject,
        body: body,
      });
    } catch (emailError) {
      Logger.log("QA Proposal email failed: " + emailError);
      // Don't fail the request — data is already saved
    }

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: "Request received successfully",
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: (error && error.toString()) || "Unknown error",
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(JSON.stringify({
    ok: true,
    message: "GITSICS QA Proposal endpoint. Submit form data via POST.",
  })).setMimeType(ContentService.MimeType.JSON);
}

function doOptions() {
  return ContentService.createTextOutput("").setMimeType(ContentService.MimeType.JSON);
}
