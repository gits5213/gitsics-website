# Fix: "Event object (e) is undefined" Error

## What This Error Means

This error occurs when Google Apps Script's `doPost` function receives an undefined event object. This shouldn't normally happen, but can occur with certain request types or deployment issues.

## Quick Fix Steps

### Step 1: Verify Script Deployment

1. Go to https://script.google.com/
2. Open your script project
3. Click **"Deploy"** → **"Manage deployments"**
4. Check:
   - **Status**: Must be "Active"
   - **Who has access**: Must be **"Anyone"** (critical!)
   - **Version**: Should be latest

**If "Who has access" is NOT "Anyone":**
1. Click the pencil icon (edit) next to the deployment
2. Change **"Who has access"** to **"Anyone"**
3. Click **"Deploy"**
4. Copy the NEW Web App URL
5. Update your `.env.local` file with the new URL
6. Restart your dev server

### Step 2: Check Execution Logs

1. In Google Apps Script, click **"Executions"** (left sidebar)
2. Find the most recent execution
3. Click on it to see details
4. Look for:
   - What function was called (`doPost`, `doGet`, etc.)
   - Any error messages
   - Log messages showing what data was received

### Step 3: Test the Script Directly

Open your browser console (F12) and run:

```javascript
// Replace with your actual script URL
const scriptUrl = 'YOUR_SCRIPT_URL_HERE';

fetch(scriptUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'data=' + encodeURIComponent(JSON.stringify({
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    phone: '1234567890',
    selectedCourse: 'qa-manual',
    trainingFormat: 'online'
  })),
  mode: 'no-cors'
}).then(() => {
  console.log('Request sent - check Google Apps Script executions');
}).catch(err => {
  console.error('Error:', err);
});
```

Then check:
- Google Apps Script Executions tab - see if request was received
- Your Google Sheet - data should appear
- Your email - notification should arrive

### Step 4: Verify Script Code

Make sure your script has the updated code from `google-apps-script.js`:

1. The script should have a check for undefined `e` at the start
2. It should handle data from `e.parameter.data`
3. It should have proper error handling

### Step 5: Common Issues

#### Issue: Script URL ends with `/dev` instead of `/exec`
**Fix**: Use the `/exec` URL from "Manage deployments", not the `/dev` URL

#### Issue: Script not deployed as web app
**Fix**: Make sure you're deploying as "Web app", not just saving the script

#### Issue: Permissions not granted
**Fix**: 
1. Run the script manually once (click Run → select `doPost` or `test`)
2. Grant permissions when prompted
3. Redeploy

#### Issue: Spreadsheet ID not set
**Fix**: Replace `YOUR_SPREADSHEET_ID` in the script with your actual spreadsheet ID

## Alternative: Use a Different Approach

If the issue persists, try sending data as individual form fields instead of JSON:

**In your form (app/enroll/page.tsx):**
```typescript
// Instead of:
formDataToSend.append('data', JSON.stringify(formData));

// Try:
Object.keys(formData).forEach(key => {
  formDataToSend.append(key, formData[key] || '');
});
```

**In Google Apps Script:**
The script already handles `e.parameter` directly, so this should work.

## Still Not Working?

1. Check browser Network tab (F12 → Network)
2. Submit the form
3. Look for the request to `script.google.com`
4. Check:
   - Request method (should be POST)
   - Request payload (should contain your data)
   - Response status (might be opaque with no-cors)

5. Share the execution logs from Google Apps Script for further debugging

