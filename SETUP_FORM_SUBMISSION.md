# Quick Setup: Enable Form Submission

## The Issue
You're seeing: **"Form submission endpoint not configured"**

This happens because the Google Apps Script URL hasn't been set up yet.

## Quick Fix (5 minutes)

### Step 1: Create Google Apps Script (2 minutes)

1. Go to: https://script.google.com/
2. Click **"New Project"**
3. Delete the default code and paste the code from `GOOGLE_APPS_SCRIPT_SETUP.md` (Step 2)
4. **Important:** Replace `YOUR_SPREADSHEET_ID` with your actual Google Sheet ID
   - Your Sheet ID is in the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
5. Click **Save** (Ctrl+S or Cmd+S)
6. Click **Deploy** → **New deployment**
7. Click the gear icon ⚙️ → **Web app**
8. Set:
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone**
9. Click **Deploy**
10. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/.../exec`)

### Step 2: Add GitHub Secret (1 minute)

1. Go to: https://github.com/gits5213/gitsics-website/settings/secrets/actions
2. Click **"New repository secret"**
3. Name: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
4. Value: Paste the Web App URL from Step 1
5. Click **"Add secret"**

### Step 3: Redeploy (2 minutes)

**Option A: Push empty commit**
```bash
git commit --allow-empty -m "Trigger deployment with Google Script URL"
git push origin master
```

**Option B: Manual trigger**
1. Go to: https://github.com/gits5213/gitsics-website/actions
2. Click **"Deploy to GitHub Pages"**
3. Click **"Run workflow"** → **"Run workflow"**

### Step 4: Test

1. Wait for deployment to complete (~2-3 minutes)
2. Go to your website's `/enroll` page
3. Fill out and submit the form
4. Check your Google Sheet - data should appear
5. Check your email - you should receive a notification

## Troubleshooting

**Still getting the error?**
- Make sure the GitHub secret name is exactly: `NEXT_PUBLIC_GOOGLE_SCRIPT_URL`
- Make sure you redeployed after adding the secret
- Check the GitHub Actions logs to see if the secret is being used

**Form submits but no data in sheet?**
- Check the Google Apps Script execution logs
- Verify the spreadsheet ID in the script is correct
- Make sure the spreadsheet is shared with your Google account

**Need help?**
- See `GOOGLE_APPS_SCRIPT_SETUP.md` for detailed instructions

