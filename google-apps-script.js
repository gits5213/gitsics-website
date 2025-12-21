/**
 * GITSICS Enrollment Form Handler
 * 
 * Instructions:
 * 1. Replace 'YOUR_SPREADSHEET_ID' below with your actual Google Sheet ID
 * 2. Deploy as a web app with "Anyone" access
 * 3. Copy the deployment URL to your .env.local and GitHub secrets
 */

function doPost(e) {
  // CRITICAL: Handle undefined e parameter - this should never happen but does with some deployments
  if (typeof e === 'undefined' || e === null) {
    Logger.log('CRITICAL ERROR: Event object (e) is undefined or null');
    Logger.log('This usually means:');
    Logger.log('1. Script is not deployed as a web app');
    Logger.log('2. Script deployment has wrong access settings');
    Logger.log('3. Request is not reaching doPost correctly');
    
    // Try to return a helpful error
    try {
      const output = ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid request: Event object is missing. Please ensure the script is deployed as a web app with "Anyone" access.'
      })).setMimeType(ContentService.MimeType.JSON);
      return output;
    } catch (err) {
      Logger.log('Could not create output: ' + err);
      return null;
    }
  }
  
  try {
    
    Logger.log('Received request');
    Logger.log('e:', e ? 'exists' : 'undefined');
    Logger.log('e.parameter:', e.parameter ? JSON.stringify(e.parameter) : 'undefined');
    Logger.log('e.postData:', e.postData ? 'exists' : 'undefined');
    
    let formData;
    
    // Try to get data from e.parameter first (form-encoded data)
    if (e.parameter && e.parameter.data) {
      try {
        formData = JSON.parse(e.parameter.data);
        Logger.log('Parsed data from e.parameter.data');
      } catch (parseError) {
        Logger.log('Failed to parse e.parameter.data: ' + parseError);
        throw new Error('Failed to parse form data from parameter: ' + parseError.toString());
      }
    }
    // Try e.postData.contents (for JSON or form-encoded body)
    else if (e.postData && e.postData.contents) {
      const contents = e.postData.contents;
      Logger.log('Got data from e.postData.contents');
      
      // Try parsing as JSON first
      try {
        formData = JSON.parse(contents);
        Logger.log('Parsed as JSON');
      } catch {
        // If that fails, try parsing as form-encoded
        try {
          const params = new URLSearchParams(contents);
          const dataField = params.get('data');
          if (dataField) {
            formData = JSON.parse(dataField);
            Logger.log('Parsed as form-encoded');
          } else {
            throw new Error('No data field found in form-encoded body');
          }
        } catch (formError) {
          Logger.log('Failed to parse form-encoded: ' + formError);
          throw new Error('Failed to parse request data: ' + formError.toString());
        }
      }
    }
    // Try e.parameter directly (for individual form fields)
    else if (e.parameter) {
      // Check if data is in individual parameters (form fields sent directly)
      if (e.parameter.firstName || e.parameter.email) {
        formData = e.parameter;
        Logger.log('Using e.parameter directly (individual form fields)');
        Logger.log('Form data keys:', Object.keys(formData));
      } else {
        Logger.log('e.parameter exists but no form fields found');
        Logger.log('e.parameter keys:', Object.keys(e.parameter));
        throw new Error('No valid data found in request parameters');
      }
    }
    else {
      Logger.log('No data found in request');
      Logger.log('e:', JSON.stringify(e));
      throw new Error('No post data received. Check that form is sending data correctly.');
    }
    
    Logger.log('Form data parsed successfully:', JSON.stringify(formData));
    
    // Use the shared processFormData function
    return processFormData(formData);
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    const output = ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
    
    return output;
  }
}

// Handle GET requests (sometimes no-cors POST requests get converted to GET)
function doGet(e) {
  Logger.log('=== doGet called ===');
  
  // Handle undefined e
  if (typeof e === 'undefined' || e === null) {
    Logger.log('doGet: e is undefined');
    e = { parameter: {} };
  }
  
  Logger.log('doGet e.parameter:', e.parameter ? JSON.stringify(e.parameter) : 'undefined');
  
  // Check if we have form data in parameters (from no-cors POST that became GET)
  if (e.parameter && (e.parameter.firstName || e.parameter.email || e.parameter.data)) {
    Logger.log('doGet: Found form data, processing...');
    // Process the data using the same logic as doPost
    return processFormData(e.parameter);
  }
  
  // No data, return error
  return ContentService.createTextOutput(JSON.stringify({
    success: false,
    error: 'This endpoint only accepts POST requests with form data. Please use the enrollment form.'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Shared function to process form data (used by both doGet and doPost)
function processFormData(params) {
  try {
    Logger.log('processFormData called');
    Logger.log('params:', JSON.stringify(params));
    
    let formData;
    
    // Try to parse JSON from 'data' parameter
    if (params.data) {
      try {
        formData = JSON.parse(params.data);
        Logger.log('Parsed JSON from params.data');
      } catch (parseError) {
        Logger.log('Failed to parse params.data as JSON, using params directly');
        formData = params;
      }
    } else {
      // Use params directly (individual form fields)
      formData = params;
      Logger.log('Using params directly as form data');
    }
    
    Logger.log('Form data:', JSON.stringify(formData));
    
    // Get or create the spreadsheet
    const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your spreadsheet ID
    
    if (spreadsheetId === 'YOUR_SPREADSHEET_ID') {
      throw new Error('Please set your spreadsheet ID in the script. Find it in your Google Sheet URL.');
    }
    
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    
    // Get or create the "students" sheet
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
    Logger.log('Row appended to sheet successfully');
    
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
View full details: https://docs.google.com/spreadsheets/d/${spreadsheetId}
      `;
      
      MailApp.sendEmail({
        to: recipientEmail,
        subject: subject,
        body: emailBody
      });
      
      Logger.log('Email sent successfully');
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
    Logger.log('processFormData error: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight requests
function doOptions(e) {
  Logger.log('doOptions called');
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.JSON);
}

// Test function - you can run this to verify the script works
function test() {
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    selectedCourse: 'qa-manual',
    trainingFormat: 'online'
  };
  
  const mockEvent = {
    parameter: {
      data: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log('Test result:', result.getContent());
}

