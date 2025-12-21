# Quick Fix for "Event object (e) is undefined" Error

## This error means the script isn't receiving requests correctly

### IMMEDIATE FIX - Follow These Steps EXACTLY:

#### Step 1: Verify Script Deployment (CRITICAL)

1. Go to https://script.google.com/
2. Open your script project
3. Click **"Deploy"** → **"Manage deployments"**
4. **DELETE the existing deployment** (click the 3 dots → Delete)
5. Click **"New deployment"**
6. Click the **gear icon** ⚙️
7. Select **"Web app"** (NOT "API Executable")
8. Fill in:
   - **Description**: "GITSICS Enrollment Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: **"Anyone"** ← THIS IS CRITICAL!
9. Click **"Deploy"**
10. **Copy the Web App URL** (should end with `/exec`)
11. Click **"Done"**

#### Step 2: Update Your Script Code

1. In Google Apps Script editor, **DELETE ALL existing code**
2. Copy **ALL** code from `google-apps-script.js` file
3. Paste it into the editor
4. **Replace `YOUR_SPREADSHEET_ID`** with your actual spreadsheet ID:
   - Open your Google Sheet
   - Copy the ID from URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Replace `YOUR_SPREADSHEET_ID` in the script (around line 100)
5. Click **"Save"** (Ctrl+S or Cmd+S)

#### Step 3: Redeploy After Code Update

1. Click **"Deploy"** → **"Manage deployments"**
2. Click **"New version"** (or edit existing)
3. Make sure **"Who has access"** is still **"Anyone"**
4. Click **"Deploy"**
5. **Copy the NEW URL** (it might be the same, but copy it anyway)
6. Update your `.env.local` file with this URL
7. **Restart your dev server** (stop with Ctrl+C, then `npm run dev`)

#### Step 4: Test

1. Submit the enrollment form
2. Check Google Apps Script → **"Executions"** tab
3. You should see a new execution
4. Click on it to see:
   - Which function was called (`doPost` or `doGet`)
   - Any error messages
   - Log messages

#### Step 5: Verify the URL

Your script URL should:
- ✅ End with `/exec` (NOT `/dev`)
- ✅ Be from "Manage deployments" (NOT from the editor)
- ✅ Start with `https://script.google.com/macros/s/`

### Common Mistakes:

❌ **Using `/dev` URL** - This is for testing, not production
❌ **"Who has access" set to "Only myself"** - Must be "Anyone"
❌ **Not deployed as "Web app"** - Must be "Web app" type
❌ **Didn't redeploy after code changes** - Must redeploy after updating code
❌ **Didn't restart dev server** - Must restart after updating `.env.local`

### Still Not Working?

If you've done all the above and still get the error:

1. **Check execution logs**:
   - Go to Google Apps Script → Executions
   - Look for the most recent execution
   - What function was called? (`doPost`, `doGet`, or something else?)
   - What's the error message?

2. **Test the URL directly**:
   - Open the script URL in a browser
   - What do you see? (Should be blank or an error page)

3. **Try a fresh script**:
   - Create a NEW Google Apps Script project
   - Copy the code from `google-apps-script.js`
   - Deploy as web app with "Anyone" access
   - Test with the new URL

4. **Check browser console**:
   - Open DevTools (F12)
   - Go to Network tab
   - Submit the form
   - Look for request to `script.google.com`
   - What's the status? What's the request/response?

### Need More Help?

Share:
1. Screenshot of "Manage deployments" page
2. Execution logs from Google Apps Script
3. Browser console errors (F12 → Console)
4. Network tab showing the request to script.google.com
