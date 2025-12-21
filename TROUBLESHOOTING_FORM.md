# Troubleshooting "Failed to fetch" Error

## Common Causes

### 1. Google Apps Script Not Deployed Correctly

**Check:**
- Go to your Google Apps Script project
- Click "Deploy" → "Manage deployments"
- Verify:
  - Status is "Active"
  - "Who has access" is set to **"Anyone"** (not "Only myself")
  - The URL matches what's in your GitHub secret

**Fix:**
- If "Who has access" is not "Anyone":
  1. Click the pencil icon to edit
  2. Change "Who has access" to **"Anyone"**
  3. Click "Deploy"
  4. Copy the new URL
  5. Update the GitHub secret with the new URL

### 2. Google Apps Script URL Incorrect

**Check:**
- The URL should be: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
- Make sure it ends with `/exec` (not `/dev`)

**Fix:**
- Get the correct URL from "Deploy" → "Manage deployments"
- Update the GitHub secret: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
- Redeploy the site

### 3. CORS Issues

Google Apps Script web apps should handle CORS automatically, but sometimes there are issues.

**Test the Script Directly:**
1. Open your Google Apps Script URL in a browser
2. You should see a page (might be blank or show an error)
3. If you see "This app isn't verified", that's normal - it should still work

**Test with curl:**
```bash
curl -X POST https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"1234567890"}'
```

### 4. Browser Console Errors

**Check:**
1. Open browser DevTools (F12)
2. Go to "Console" tab
3. Submit the form
4. Look for CORS errors or network errors
5. Go to "Network" tab and check the failed request

**Common Errors:**
- `CORS policy`: The script isn't allowing requests from your domain
- `Failed to fetch`: Network issue or script not accessible
- `404 Not Found`: Wrong URL

### 5. Verify GitHub Secret is Set

**Check:**
1. Go to: https://github.com/gits5213/gitsics-website/settings/secrets/actions
2. Verify `NEXT_PUBLIC_GOOGLE_SCRIPT_URL` exists
3. Check the value is correct (starts with `https://script.google.com`)

**Fix:**
- If missing or incorrect, update it
- Redeploy the site after updating

## Quick Fix Steps

1. **Verify Google Apps Script Deployment:**
   - Go to script.google.com
   - Check deployment settings
   - Ensure "Anyone" has access

2. **Test the Script URL:**
   - Open the URL in a browser
   - Should not show 404

3. **Update GitHub Secret:**
   - Verify the URL is correct
   - Update if needed

4. **Redeploy:**
   - Trigger a new deployment
   - Wait for completion

5. **Clear Browser Cache:**
   - Hard refresh: Ctrl+F5 or Cmd+Shift+R
   - Or use incognito/private mode

## Still Not Working?

If you've tried all the above:

1. **Check Google Apps Script Execution Logs:**
   - In your script, go to "Executions" (left sidebar)
   - See if requests are being received
   - Check for any errors

2. **Verify Spreadsheet Access:**
   - Make sure the spreadsheet ID in the script is correct
   - Ensure your Google account has access to the spreadsheet

3. **Test with a Simple Script:**
   - Create a minimal test script that just returns success
   - Test if that works first

4. **Check Website Domain:**
   - Make sure you're testing on the correct domain
   - The script should work from any domain if "Anyone" has access

## Alternative Solution

If Google Apps Script continues to have CORS issues, consider:
- Using a form submission service (Formspree, FormSubmit, etc.)
- Setting up a serverless function (Vercel, Netlify Functions)
- Using a different backend service

