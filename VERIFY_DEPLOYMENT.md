# Verify Google Apps Script Deployment

## CRITICAL: If you're getting "Event object (e) is undefined"

This error means Google Apps Script is not receiving the request correctly. Follow these steps EXACTLY:

## Step 1: Verify Script is Deployed as Web App

1. Go to https://script.google.com/
2. Open your script project
3. Click **"Deploy"** → **"Manage deployments"**
4. You should see a deployment listed
5. If you DON'T see a deployment:
   - Click **"New deployment"**
   - Click the gear icon ⚙️
   - Select **"Web app"**
   - Fill in:
     - **Description**: "GITSICS Enrollment Handler"
     - **Execute as**: Me (your email)
     - **Who has access**: **"Anyone"** (THIS IS CRITICAL!)
   - Click **"Deploy"**
   - Copy the Web App URL (should end with `/exec`)

## Step 2: Verify Deployment Settings

Your deployment MUST have:
- ✅ **Type**: Web app (not "API Executable" or "Add-on")
- ✅ **Status**: Active
- ✅ **Who has access**: **Anyone** (NOT "Only myself")
- ✅ **URL ends with**: `/exec` (NOT `/dev`)

## Step 3: Test the Deployment URL

1. Copy your deployment URL
2. Open it in a browser
3. You should see either:
   - A blank page (normal for POST-only endpoints)
   - An error page (might say "This app isn't verified" - that's OK)
   - A JSON response

If you see a 404 or "Not Found", the deployment is wrong.

## Step 4: Check Execution Logs

1. In Google Apps Script, click **"Executions"** (left sidebar)
2. Submit your form
3. Wait a few seconds
4. Refresh the executions list
5. Look for a new execution

**If you see NO executions:**
- The request is not reaching the script
- Check your script URL is correct
- Verify the form is sending to the right URL

**If you see executions with errors:**
- Click on the execution
- Read the error message
- Check the logs

## Step 5: Common Issues

### Issue: "Who has access" is "Only myself"
**Fix**: 
1. Edit the deployment
2. Change to "Anyone"
3. Redeploy
4. Copy the NEW URL
5. Update your `.env.local`

### Issue: Using `/dev` URL instead of `/exec`
**Fix**: 
- `/dev` URLs are for testing and don't work the same way
- Use the `/exec` URL from "Manage deployments"

### Issue: Script not deployed as web app
**Fix**:
- Make sure you're deploying as "Web app", not just saving the script
- The deployment type should be "Web app"

### Issue: Script code has errors
**Fix**:
1. Click "Run" → select `test` function
2. Check for errors
3. Fix any syntax errors
4. Redeploy

## Step 6: Manual Test

Run this in your browser console (F12):

```javascript
// Replace with your ACTUAL script URL ending in /exec
const scriptUrl = 'YOUR_SCRIPT_URL_HERE';

fetch(scriptUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: 'firstName=Test&lastName=User&email=test@example.com&phone=1234567890&selectedCourse=qa-manual&trainingFormat=online',
  mode: 'no-cors'
}).then(() => {
  console.log('Request sent - check Google Apps Script executions');
}).catch(err => {
  console.error('Error:', err);
});
```

Then:
1. Check Google Apps Script → Executions
2. You should see a new execution
3. Click on it to see if it worked

## Still Not Working?

If after all these steps you still get "Event object (e) is undefined":

1. **Create a NEW script project**:
   - Go to script.google.com
   - Click "New Project"
   - Copy the code from `google-apps-script.js`
   - Deploy as web app with "Anyone" access
   - Test with the new URL

2. **Check browser console**:
   - Open DevTools (F12)
   - Go to Network tab
   - Submit form
   - Look for request to script.google.com
   - Check request details

3. **Try without no-cors**:
   - Temporarily remove `mode: "no-cors"` from the form
   - This will show CORS errors but might help debug
   - (Note: You'll need to add CORS headers to the script for this to work)

4. **Contact support** with:
   - Screenshot of "Manage deployments" page
   - Execution logs from Google Apps Script
   - Browser console errors

