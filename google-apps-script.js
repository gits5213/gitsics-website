/**
 * GITSICS Enrollment Form Handler
 * 
 * Instructions:
 * 1. Copy this entire code to Google Apps Script (script.google.com)
 * 2. Deploy as a web app with "Anyone" access
 * 3. Copy the deployment URL to your .env.local and GitHub secrets
 * 
 * The script will automatically create a spreadsheet named "studentList"
 * with a worksheet named "students" in your Google Drive.
 */

function doPost(e) {
  try {
    // Handle undefined event object
    if (!e || !e.parameter) {
      Logger.log('Error: Event object or parameters are missing');
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid request: Missing form data'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    Logger.log('Received enrollment request');
    Logger.log('Parameters:', JSON.stringify(e.parameter));
    
    // Get form data from parameters (individual fields)
    const formData = e.parameter;
    
    // Use the existing spreadsheet ID
    const spreadsheetId = '197k7aG27bxnrfY0ALaSQb6uDKRzKHejChlRKNSK5ZXA';
    let spreadsheet;
    
    try {
      // Open the spreadsheet by ID
      spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      Logger.log('Opened spreadsheet with ID: ' + spreadsheetId);
    } catch (error) {
      Logger.log('Error accessing spreadsheet: ' + error);
      throw new Error('Failed to access spreadsheet. Please check the spreadsheet ID and ensure the script has access to it.');
    }
    
    // Get or create the "students" worksheet
    let sheet = spreadsheet.getSheetByName('students');
    if (!sheet) {
      sheet = spreadsheet.insertSheet('students');
      // Add headers
      sheet.getRange(1, 1, 1, 15).setValues([[
        'Timestamp',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Address',
        'City',
        'State',
        'ZIP Code',
        'Country',
        'Selected Course',
        'Training Format',
        'Previous Experience',
        'How Did You Hear',
        'Additional Info'
      ]]);
      Logger.log('Created new worksheet: students');
    }
    
    // Prepare the row data
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      formData.firstName || '',
      formData.lastName || '',
      formData.email || '',
      formData.phone || '',
      formData.address || '',
      formData.city || '',
      formData.state || '',
      formData.zipCode || '',
      formData.country || '',
      formData.selectedCourse || '',
      formData.trainingFormat || '',
      formData.previousExperience || '',
      formData.howDidYouHear || '',
      formData.additionalInfo || ''
    ];
    
    // Append the new row
    sheet.appendRow(rowData);
    Logger.log('Row appended successfully');
    
    // Send email notification
    try {
      const recipientEmail = 'mdzaman.gits@gmail.com';
      
      const courses = {
        'qa-manual': 'QA Manual Testing',
        'qa-automation': 'QA Automation',
        'fullstack-sdet': 'Full-Stack SDET',
        'api-testing': 'API Testing & Automation',
        'devops-testers': 'DevOps Pipeline for Testers',
        'ai-qa': 'AI for QA',
        'performance-tester': 'Performance Tester',
        'security-tester': 'Security Tester',
        '508-compliance-tester': '508 Compliance Tester',
        'digital-marketing': 'Digital Marketing'
      };
      
      const formatLabels = {
        'in-person': 'In-Person',
        'online': 'Online',
        'corporate': 'Corporate'
      };
      
      const courseName = courses[formData.selectedCourse] || formData.selectedCourse || 'Not specified';
      const formatLabel = formatLabels[formData.trainingFormat] || formData.trainingFormat || 'Not specified';
      
      const subject = `New Student Enrollment: ${formData.firstName} ${formData.lastName} - ${courseName}`;
      
      const spreadsheetUrl = spreadsheet.getUrl();
      
      const emailBody = `
New Student Enrollment Received

Student Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Address: ${formData.address || 'Not provided'}
- City: ${formData.city || 'Not provided'}
- State: ${formData.state || 'Not provided'}
- ZIP Code: ${formData.zipCode || 'Not provided'}
- Country: ${formData.country || 'Not provided'}

Course Information:
- Selected Course: ${courseName}
- Training Format: ${formatLabel}
- Previous Experience: ${formData.previousExperience || 'Not provided'}
- How Did You Hear: ${formData.howDidYouHear || 'Not provided'}

Additional Information:
${formData.additionalInfo || 'None provided'}

Timestamp: ${timestamp}

---
View full details in Google Sheet: ${spreadsheetUrl}
      `;
      
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
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Enrollment submitted successfully'
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

