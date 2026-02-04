# Google Apps Script Setup for Enrollment Form

This guide will help you set up Google Apps Script to handle enrollment form submissions and save them to Google Drive (Google Sheets).

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click **"New Project"**
3. Delete the default code
4. Copy **ALL** code from `google-apps-script.js` file in this repository
5. Paste it into the Google Apps Script editor
6. Save the project (give it a name like "GITSICS Enrollment Handler")

## Step 2: Test the Script First (IMPORTANT!)

Before deploying, test that the script runs without errors:

1. Click the **"Run"** button (▶️) at the top
2. Select **"doPost"** from the function dropdown (if it appears)
3. If you see an authorization prompt, click **"Review permissions"** and authorize
4. If there are any errors, fix them before proceeding to deployment

**Note**: You might see an error about missing parameters - that's OK for testing. The important thing is that the script loads without syntax errors.

## Step 3: Deploy as Web App

1. Click **"Deploy"** → **"New deployment"**
2. Click the **gear icon** ⚙️ next to "Select type"
3. Select **"Web app"**
4. Fill in the deployment settings:
   - **Description**: "GITSICS Enrollment Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: **"Anyone"** ← THIS IS CRITICAL!
5. Click **"Deploy"**
6. **Authorize the script** if prompted:
   - Click **"Authorize access"**
   - Select your Google account
   - Click **"Advanced"** → **"Go to [Project Name] (unsafe)"**
   - Click **"Allow"**
7. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)
8. Click **"Done"**

## Troubleshooting "Bad Request Error 400"

If you get "Bad Request Error 400" when deploying:

### Fix 1: Check for Syntax Errors
1. Look at the script editor - are there any red error indicators?
2. Make sure all quotes are properly closed
3. Make sure all brackets `{}` and parentheses `()` are balanced
4. Try clicking **"Run"** → **"doPost"** to see if there are errors

### Fix 2: Save the Script First
1. Make sure you've clicked **"Save"** (Ctrl+S or Cmd+S) before deploying
2. The script must be saved before it can be deployed

### Fix 3: Try Deploying Without Authorization First
1. In deployment settings, try **"Execute as"** → **"Me"** (not "User accessing the web app")
2. Deploy
3. After successful deployment, you can update the settings

### Fix 4: Check Script Name
1. Make sure your script project has a name (not "Untitled Project")
2. Click the project name at the top and give it a name like "GITSICS Enrollment Handler"

### Fix 5: Copy Code Fresh
1. Delete all code in the script editor
2. Copy the entire code from `google-apps-script.js` again
3. Make sure you copy everything, including the `doPost` and `doOptions` functions
4. Save the script
5. Try deploying again

### Fix 6: Use Minimal Test Script First
If still having issues, try deploying this minimal script first to test:

```javascript
function doPost(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Test successful'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doOptions() {
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.JSON);
}
```

If this minimal script deploys successfully, then gradually add back the full code.

## Step 3: Grant Permissions

The first time you run the script, Google will ask for permissions:

1. Click **"Review permissions"**
2. Select your Google account
3. Click **"Advanced"** → **"Go to [Project Name] (unsafe)"**
4. Click **"Allow"**

This allows the script to:
- Access your Google Drive (to create/open spreadsheets)
- Send emails on your behalf

## Step 4: Test the Script

1. The script will automatically create a Google Sheet named **"studentList"** in your Google Drive
2. It will create a worksheet named **"students"** with headers
3. When a form is submitted, data will be saved to this sheet
4. You will receive an email notification at **mdzaman.gits@gmail.com**

## Step 5: Configure Environment Variables

### For Local Development

Create or update `.env.local` file in the project root:

```env
NEXT_PUBLIC_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from your deployment URL.

### For GitHub Pages Deployment

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Name: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
4. Value: Your Google Apps Script web app URL (from Step 2)
5. Click **"Add secret"**

## Step 6: Restart Development Server

After updating `.env.local`, restart your Next.js dev server:

```bash
# Stop the server (Ctrl+C)
# Then start again
npm run dev
```

## How It Works

1. Student fills out the enrollment form
2. Form data is sent to Google Apps Script via POST request
3. Script saves data to Google Sheet named **"studentList"** in worksheet **"students"**
4. Script sends email notification to **mdzaman.gits@gmail.com**
5. Form shows success message to student

## Troubleshooting

### Form shows "Form submission endpoint not configured"
- Make sure `.env.local` exists with `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
- Restart your dev server after creating/updating `.env.local`

### Data not saving to Google Sheet
- Check Google Apps Script → **"Executions"** tab for errors
- Verify the script has permission to access Google Drive
- Make sure "Who has access" is set to **"Anyone"**

### No email received
- Check spam folder
- Verify email address in script is correct: `mdzaman.gits@gmail.com`
- Check execution logs in Google Apps Script

### "Failed to fetch" error
- Verify script URL is correct (ends with `/exec`)
- Make sure script is deployed with **"Anyone"** access
- Check browser console (F12) for detailed errors

## Important Notes

- The spreadsheet **"studentList"** will be created automatically in your Google Drive
- The worksheet **"students"** will be created automatically with headers
- Each form submission adds a new row to the sheet
- Email notifications are sent to **mdzaman.gits@gmail.com**

---

## QA Proposal (Corporate PDF Request) – Optional Setup

When users click **"Download Proposal (xlsx file)"** on the QA proposal page, they must fill out the **Request a Consultation** form. Submissions can be saved to a Google Sheet.

### 1. Use the QA Proposal Google Sheet

Use an existing Google Sheet with ID: **13XMOHp1VjCRROvXx10fVKDonR9f9Vovfhnuq2myvWW0** (or create a new sheet and update the ID in the script below).

### 2. Create a separate Google Apps Script for QA Proposal

1. Go to [Google Apps Script](https://script.google.com/) and create a **New Project**.
2. Delete the default code and copy **all** code from **`google-apps-script-qa-proposal.js`** in this repo.
3. Paste into the editor and save (e.g. name: "GITSICS QA Proposal Handler").
4. Deploy as **Web app**: Deploy → New deployment → Web app → Execute as **Me**, Who has access **Anyone** → Deploy.
5. Copy the Web App URL (e.g. `https://script.google.com/macros/s/.../exec`).

### 3. Configure environment variable (required for form to work)

The form **always** submits to your own site at `/api/qa-proposal` (same origin), and the API route forwards to Google Apps Script. This avoids "Failed to fetch" / CORS errors that happen when the browser posts directly to Google.

- **Local (e.g. `npm run dev`):** In `.env.local` add (use the **server-side** variable, not `NEXT_PUBLIC_`):
  ```env
  GOOGLE_SCRIPT_QA_PROPOSAL_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
  ```
- **Deployments with API (e.g. Vercel):** Set the same variable in the project’s environment (e.g. `GOOGLE_SCRIPT_QA_PROPOSAL_URL`).

**Important:** The consultation form only works when the site is run on a host that supports API routes (e.g. `npm run dev` or Vercel). On a **static-only** host (e.g. GitHub Pages), `/api/qa-proposal` does not exist, so the form will show a network error and users can be directed to email you instead.

### 4. Sheet layout and email

The script appends one row per submission with columns: **Timestamp**, **Name**, **Company**, **Company Email**, **Role**, **Project Need**, **Timeline**. The first sheet in the workbook is used; if the first row is empty, headers are written automatically.

An **email notification** is sent to **mdzaman.gits@gmail.com** for each submission (subject includes the company name). If email fails (e.g. quota), the submission is still saved to the sheet.

