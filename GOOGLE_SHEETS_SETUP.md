# Google Sheets Integration Setup

This guide will help you set up Google Sheets integration to store student enrollment form submissions.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console
3. A Google Drive account

## Step 1: Install Required Package

First, install the `googleapis` package:

```bash
npm install googleapis
```

## Step 2: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on "Select a project" → "New Project"
3. Enter a project name (e.g., "GITSICS Enrollment")
4. Click "Create"

## Step 3: Enable Google Sheets API

1. In your Google Cloud project, go to "APIs & Services" → "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

## Step 4: Create a Service Account

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "Service Account"
3. Enter a name (e.g., "enrollment-service")
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

## Step 5: Create and Download Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" → "Create new key"
4. Select "JSON" format
5. Click "Create" - this will download a JSON file

**Important:** Keep this JSON file secure and never commit it to version control!

## Step 6: Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it **"studentList"** (exactly as specified)
4. Copy the Spreadsheet ID from the URL:
   - The URL looks like: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy the `SPREADSHEET_ID` part

## Step 7: Share Spreadsheet with Service Account

1. Open your "studentList" spreadsheet
2. Click the "Share" button
3. Add the service account email (found in the JSON file as `client_email`)
4. Give it "Editor" permissions
5. Click "Send"

## Step 8: Set Up Email Notifications (Optional but Recommended)

To receive email notifications when students enroll, you'll need to configure SMTP settings.

### Option A: Using Gmail SMTP (Recommended)

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to "Security" → "2-Step Verification" (enable it if not already enabled)
3. Go to "App passwords": https://myaccount.google.com/apppasswords
4. Select "Mail" and "Other (Custom name)"
5. Enter "GITSICS Enrollment" as the name
6. Click "Generate"
7. Copy the 16-character app password (you'll use this in Step 9)

### Option B: Using Other SMTP Providers

You can use any SMTP provider (SendGrid, Mailgun, etc.) by configuring the appropriate settings.

## Step 9: Set Environment Variables

Create a `.env.local` file in your project root (if it doesn't exist) and add:

```env
# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-spreadsheet-id-here

# Email Notification Configuration (Optional)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
NOTIFICATION_EMAIL=mdzaman.gits@gmail.com
```

### Getting the Values:

**Google Sheets:**
1. **GOOGLE_SERVICE_ACCOUNT_EMAIL**: Found in the downloaded JSON file as `client_email`
2. **GOOGLE_PRIVATE_KEY**: Found in the downloaded JSON file as `private_key` (keep the quotes and `\n` characters)
3. **GOOGLE_SHEET_ID**: The spreadsheet ID from Step 6

**Email Notifications:**
1. **EMAIL_HOST**: `smtp.gmail.com` for Gmail (or your SMTP provider's host)
2. **EMAIL_PORT**: `587` for Gmail (or `465` for SSL)
3. **EMAIL_SECURE**: `false` for port 587, `true` for port 465
4. **EMAIL_USER**: Your Gmail address (e.g., `mdzaman.gits@gmail.com`)
5. **EMAIL_PASSWORD**: The app password from Step 8 (for Gmail) or your SMTP password
6. **NOTIFICATION_EMAIL**: Email address to receive notifications (default: `mdzaman.gits@gmail.com`)

### Example `.env.local`:

```env
# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_EMAIL=enrollment-service@gitsics-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms

# Email Notification Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=mdzaman.gits@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
NOTIFICATION_EMAIL=mdzaman.gits@gmail.com
```

**Note:** If you don't configure email settings, the enrollment will still be saved to Google Sheets, but you won't receive email notifications.

## Step 10: Install Required Packages

Install the required npm packages:

```bash
npm install googleapis nodemailer
```

## Step 11: Verify Setup

1. Restart your Next.js development server
2. Fill out the enrollment form on `/enroll`
3. Submit the form
4. Check your Google Sheet - you should see:
   - A worksheet named "students" (created automatically)
   - Headers in the first row
   - Your submission data in the second row
5. Check your email inbox (`mdzaman.gits@gmail.com`) - you should receive a notification email with all the enrollment details

## Troubleshooting

### Error: "Spreadsheet not found"
- Verify `GOOGLE_SHEET_ID` is correct
- Make sure the spreadsheet is shared with the service account email

### Error: "The caller does not have permission"
- Ensure Google Sheets API is enabled
- Verify the service account has "Editor" access to the spreadsheet

### Error: "Invalid credentials"
- Check that `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `GOOGLE_PRIVATE_KEY` are correct
- Ensure the private key includes the `\n` characters and is wrapped in quotes

### Data not appearing in sheet
- Check the browser console for errors
- Verify the API route is being called (check Network tab)
- Check server logs for detailed error messages

### Email notifications not working
- Verify all email environment variables are set correctly
- For Gmail: Make sure you're using an App Password, not your regular password
- Check that 2-Step Verification is enabled on your Google Account
- Verify `EMAIL_HOST`, `EMAIL_PORT`, and `EMAIL_SECURE` match your SMTP provider
- Check server logs for email-related errors (email failures won't prevent form submission)

## Security Notes

- Never commit `.env.local` to version control
- Keep your service account JSON file secure
- Regularly rotate service account keys
- Use environment-specific credentials for production

## Support

If you encounter issues, check:
1. Google Cloud Console for API quotas/limits
2. Server logs for detailed error messages
3. Google Sheets API documentation: https://developers.google.com/sheets/api

