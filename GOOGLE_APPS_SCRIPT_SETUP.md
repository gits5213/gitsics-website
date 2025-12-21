# Google Apps Script Setup for Enrollment Form

This guide will help you set up Google Apps Script to handle enrollment form submissions and save them to Google Drive (Google Sheets).

## Step 1: Create Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click **"New Project"**
3. Delete the default code
4. Copy **ALL** code from `google-apps-script.js` file in this repository
5. Paste it into the Google Apps Script editor
6. Save the project (give it a name like "GITSICS Enrollment Handler")

## Step 2: Deploy as Web App

1. Click **"Deploy"** → **"New deployment"**
2. Click the **gear icon** ⚙️ next to "Select type"
3. Select **"Web app"**
4. Fill in the deployment settings:
   - **Description**: "GITSICS Enrollment Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: **"Anyone"** ← THIS IS CRITICAL!
5. Click **"Deploy"**
6. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)
7. Click **"Done"**

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

