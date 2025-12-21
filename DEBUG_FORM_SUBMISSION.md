# Debugging Form Submission Issues

## Issue: Form submits but data doesn't save and no email received

### Step 1: Verify Environment Variable is Loaded

1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Submit the form
4. Look for these console messages:
   - "Submitting to: https://script.google.com..."
   - "Script URL configured: Yes"
   - "Form submission sent successfully"

If you see "Script URL configured: No", your `.env.local` file is not being loaded.

**Fix:**
- Make sure `.env.local` exists in the project root
- Restart your Next.js dev server after creating/editing `.env.local`
- The file should contain: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

### Step 2: Verify Google Apps Script is Deployed Correctly

1. Go to https://script.google.com/
2. Open your "GITSICS Enrollment Handler" project
3. Click "Deploy" → "Manage deployments"
4. Check:
   - **Status**: Should be "Active"
   - **Who has access**: Must be "Anyone" (not "Only myself")
   - **Version**: Should be "New version" or a version number

**If "Who has access" is not "Anyone":**
1. Click the pencil icon (edit) next to the deployment
2. Change "Who has access" to "Anyone"
3. Click "Deploy"
4. Copy the new Web App URL
5. Update your `.env.local` file with the new URL
6. Restart your dev server

### Step 3: Verify Spreadsheet ID in Script

1. In your Google Apps Script project, check line 44:
   ```javascript
   const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your spreadsheet ID
   ```
2. Replace `YOUR_SPREADSHEET_ID` with your actual Google Sheet ID
3. To find your Sheet ID:
   - Open your Google Sheet
   - Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the `SHEET_ID_HERE` part
4. Update the script and save
5. **Important**: After updating the script, you must redeploy:
   - Click "Deploy" → "Manage deployments"
   - Click "New version" or edit existing deployment
   - Click "Deploy"

### Step 4: Check Script Execution Logs

1. In Google Apps Script, click "Executions" (left sidebar)
2. Look for recent executions
3. If you see errors:
   - Click on the failed execution
   - Read the error message
   - Common errors:
     - "Cannot find spreadsheet": Wrong spreadsheet ID
     - "Permission denied": Script doesn't have access to the spreadsheet
     - "Invalid data format": The form data isn't being parsed correctly

### Step 5: Test the Script Directly

1. Open your browser's Developer Tools (F12)
2. Go to the Console tab
3. Run this test command (replace with your script URL):
   ```javascript
   fetch('YOUR_SCRIPT_URL_HERE', {
     method: 'POST',
     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
     body: 'data=' + encodeURIComponent(JSON.stringify({
       firstName: 'Test',
       lastName: 'User',
       email: 'test@example.com',
       phone: '1234567890',
       selectedCourse: 'qa-manual',
       trainingFormat: 'online'
     })),
     mode: 'no-cors'
   }).then(() => console.log('Request sent')).catch(err => console.error('Error:', err))
   ```
4. Check your Google Sheet - data should appear
5. Check your email - you should receive a notification

### Step 6: Verify Email Permissions

1. In Google Apps Script, the first time you run the script, Google will ask for permissions
2. Click "Review permissions"
3. Select your Google account
4. Click "Advanced" → "Go to [Project Name] (unsafe)"
5. Click "Allow"
6. This allows the script to:
   - Access your Google Sheets
   - Send emails on your behalf

### Step 7: Check Network Tab

1. Open Developer Tools (F12)
2. Go to the Network tab
3. Submit the form
4. Look for a request to `script.google.com`
5. Check:
   - **Status**: Should be 200 or show as "opaque" (for no-cors requests)
   - **Request Payload**: Should contain your form data
   - If you see 404 or 403, the script URL is wrong or not deployed correctly

## Common Issues and Solutions

### Issue: "Script URL configured: No"
**Solution**: Create `.env.local` file with `NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_url`

### Issue: "Failed to fetch" or Network Error
**Solution**: 
- Verify script is deployed with "Anyone" access
- Check script URL is correct
- Try opening the script URL directly in browser

### Issue: Data not saving to Sheet
**Solution**:
- Check spreadsheet ID is correct in script
- Verify script has permission to access the spreadsheet
- Check execution logs for errors

### Issue: No email received
**Solution**:
- Check script execution logs for email errors
- Verify email address in script (line 96) is correct
- Check spam folder
- Make sure MailApp permissions are granted

### Issue: Script works in browser test but not from form
**Solution**:
- Make sure you're using the same URL format
- Check that `.env.local` is loaded (restart dev server)
- Verify the form is sending data in the correct format

## Quick Checklist

- [ ] `.env.local` file exists with `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
- [ ] Dev server restarted after creating `.env.local`
- [ ] Google Apps Script is deployed with "Anyone" access
- [ ] Spreadsheet ID is set in the script (not `YOUR_SPREADSHEET_ID`)
- [ ] Script has been redeployed after updating spreadsheet ID
- [ ] Script has permissions to access Sheets and send emails
- [ ] Browser console shows "Form submission sent successfully"
- [ ] Script execution logs show successful runs

