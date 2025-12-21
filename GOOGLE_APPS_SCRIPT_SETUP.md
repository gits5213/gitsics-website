# Google Apps Script Setup for Form Submissions

Since your site is deployed as a static export (GitHub Pages), API routes don't work. This guide shows you how to set up Google Apps Script to handle form submissions.

## Step 1: Create Google Apps Script Web App

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with the script below
4. Save the project (give it a name like "GITSICS Enrollment Handler")

## Step 2: Copy the Script Code

**Option 1: Copy from the script file**
- Open `google-apps-script.js` in this repository
- Copy the entire contents
- Paste into Google Apps Script editor

**Option 2: Copy from below**

```javascript
function doPost(e) {
  try {
    // Handle case where e is undefined or null
    if (!e) {
      Logger.log('Error: Event object (e) is undefined');
      const output = ContentService.createTextOutput(JSON.stringify({
        success: false,
        error: 'Invalid request: Event object is missing'
      })).setMimeType(ContentService.MimeType.JSON);
      return output;
    }
    
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
    // Try e.parameter directly (for GET requests or different encoding)
    else if (e.parameter) {
      // Check if data is in individual parameters
      if (e.parameter.firstName) {
        formData = e.parameter;
        Logger.log('Using e.parameter directly');
      } else {
        throw new Error('No valid data found in request');
      }
    }
    else {
      Logger.log('No data found in request');
      throw new Error('No post data received. Check that form is sending data correctly.');
    }
    
    Logger.log('Form data parsed successfully:', JSON.stringify(formData));
    
    // Get or create the spreadsheet
    const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your spreadsheet ID
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
    
    // Send email notification
    try {
      const recipientEmail = 'mdzaman.gits@gmail.com';
      const subject = `New Student Enrollment: ${formData.firstName} ${formData.lastName}`;
      
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
      
      const courseName = courses[formData.selectedCourse] || formData.selectedCourse || 'Not specified';
      
      const formatLabels = {
        'in-person': 'In-Person',
        'online': 'Online',
        'corporate': 'Corporate'
      };
      
      const formatLabel = formatLabels[formData.trainingFormat] || formData.trainingFormat || 'Not specified';
      
      const emailBody = `
New Student Enrollment

Timestamp: ${new Date(timestamp).toLocaleString()}
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.address ? `Address: ${formData.address}` : ''}
${formData.city || formData.state ? `Location: ${[formData.city, formData.state, formData.zipCode].filter(Boolean).join(', ')}${formData.country ? `, ${formData.country}` : ''}` : ''}
Selected Course: ${courseName}
Training Format: ${formatLabel}
${formData.previousExperience ? `Previous Experience: ${formData.previousExperience}` : ''}
${formData.howDidYouHear ? `How They Heard About Us: ${formData.howDidYouHear}` : ''}
${formData.additionalInfo ? `Additional Comments: ${formData.additionalInfo}` : ''}

View full details: https://docs.google.com/spreadsheets/d/${spreadsheetId}
      `;
      
      MailApp.sendEmail({
        to: recipientEmail,
        subject: subject,
        body: emailBody
      });
    } catch (emailError) {
      Logger.log('Failed to send email: ' + emailError);
    }
    
    // Return success response with CORS headers
    const output = ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Enrollment submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
    return output;
    
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    const output = ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
    
    return output;
  }
}

// Handle CORS preflight requests
function doOptions() {
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.JSON);
}
```

## Step 3: Configure the Script

1. Replace `YOUR_SPREADSHEET_ID` with your actual Google Sheet ID
2. Click the "Deploy" button → "New deployment"
3. Click the gear icon ⚙️ → "Web app"
4. Set:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click "Deploy"
6. **Copy the Web App URL** - you'll need this for the form

## Step 4: Configure Environment Variable

Add the Google Apps Script URL to your environment variables:

**For local development**, create a `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

**For GitHub Pages deployment**, add it as a GitHub Secret:
1. Go to your repository → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
4. Value: Your Google Apps Script web app URL
5. Click "Add secret"

Then update your GitHub Actions workflow to use it:
```yaml
- name: Build
  run: |
    if [ "${{ secrets.CUSTOM_DOMAIN }}" == "true" ]; then
      echo "Building for custom domain (no basePath)"
      CUSTOM_DOMAIN=true NEXT_PUBLIC_GOOGLE_SCRIPT_URL=${{ secrets.NEXT_PUBLIC_GOOGLE_SCRIPT_URL }} npm run build
    else
      echo "Building for GitHub Pages subdomain (with basePath)"
      NEXT_PUBLIC_BASE_PATH=/gitsics-website NEXT_PUBLIC_GOOGLE_SCRIPT_URL=${{ secrets.NEXT_PUBLIC_GOOGLE_SCRIPT_URL }} npm run build
    fi
```

**Note:** The form is already configured to use this environment variable.

## Step 5: Test the Setup

1. Submit a test enrollment form
2. Check your Google Sheet - the data should appear
3. Check your email - you should receive a notification

## Troubleshooting

- **403 Forbidden Error**: Make sure "Who has access" is set to "Anyone"
- **Data not appearing**: Check the spreadsheet ID is correct
- **Email not sending**: Verify MailApp permissions are granted

