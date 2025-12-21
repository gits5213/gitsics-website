import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Initialize Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      console.error("GOOGLE_SHEET_ID is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare the row data
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone,
      formData.address || "",
      formData.city || "",
      formData.state || "",
      formData.zipCode || "",
      formData.country || "",
      formData.selectedCourse || "",
      formData.trainingFormat || "",
      formData.previousExperience || "",
      formData.howDidYouHear || "",
      formData.additionalInfo || "",
    ];

    // Check if worksheet exists, if not create it
    try {
      await sheets.spreadsheets.get({
        spreadsheetId,
      });
    } catch (error) {
      return NextResponse.json(
        { error: "Spreadsheet not found. Please check GOOGLE_SHEET_ID." },
        { status: 500 }
      );
    }

    // Get the worksheet or create it if it doesn't exist
    let worksheetExists = false;
    try {
      const spreadsheet = await sheets.spreadsheets.get({
        spreadsheetId,
      });

      const sheet = spreadsheet.data.sheets?.find(
        (s) => s.properties?.title === "students"
      );
      worksheetExists = !!sheet;
    } catch (error) {
      console.error("Error checking worksheet:", error);
    }

    // Create worksheet if it doesn't exist
    if (!worksheetExists) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: "students",
                },
              },
            },
          ],
        },
      });

      // Add headers
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "students!A1:O1",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              "Timestamp",
              "First Name",
              "Last Name",
              "Email",
              "Phone",
              "Address",
              "City",
              "State",
              "ZIP Code",
              "Country",
              "Selected Course",
              "Training Format",
              "Previous Experience",
              "How Did You Hear",
              "Additional Info",
            ],
          ],
        },
      });
    }

    // Append the new row
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "students!A:O",
      valueInputOption: "RAW",
      requestBody: {
        values: [rowData],
      },
    });

    // Send email notification
    try {
      await sendEmailNotification(formData, timestamp);
    } catch (emailError) {
      // Log email error but don't fail the request
      console.error("Failed to send email notification:", emailError);
    }

    return NextResponse.json(
      { message: "Enrollment submitted successfully", success: true },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error submitting enrollment:", error);
    return NextResponse.json(
      {
        error: "Failed to submit enrollment",
        details: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}

async function sendEmailNotification(formData: any, timestamp: string) {
  // Only send email if email configuration is provided
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.log("Email configuration not provided, skipping email notification");
    return;
  }

  const recipientEmail = process.env.NOTIFICATION_EMAIL || "mdzaman.gits@gmail.com";

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Get course name
  const courses: Record<string, string> = {
    "qa-manual": "QA Manual Testing",
    "qa-automation": "QA Automation",
    "fullstack-sdet": "Full-Stack SDET",
    "api-testing": "API Testing & Automation",
    "devops-testers": "DevOps Pipeline for Testers",
    "ai-qa": "AI for QA",
    "performance-tester": "Performance Tester",
    "security-tester": "Security Tester",
    "508-compliance-tester": "508 Compliance Tester",
    "digital-marketing": "Digital Marketing",
  };

  const courseName = courses[formData.selectedCourse] || formData.selectedCourse || "Not specified";

  // Get training format label
  const formatLabels: Record<string, string> = {
    "in-person": "In-Person",
    "online": "Online",
    "corporate": "Corporate",
  };

  const formatLabel = formatLabels[formData.trainingFormat] || formData.trainingFormat || "Not specified";

  // Email content
  const emailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .info-row { margin: 10px 0; padding: 10px; background: white; border-radius: 4px; }
        .label { font-weight: bold; color: #2563eb; }
        .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🎓 New Student Enrollment</h2>
          <p style="margin: 0;">A new student has submitted an enrollment application</p>
        </div>
        <div class="content">
          <div class="info-row">
            <span class="label">Timestamp:</span> ${new Date(timestamp).toLocaleString()}
          </div>
          <div class="info-row">
            <span class="label">Name:</span> ${formData.firstName} ${formData.lastName}
          </div>
          <div class="info-row">
            <span class="label">Email:</span> <a href="mailto:${formData.email}">${formData.email}</a>
          </div>
          <div class="info-row">
            <span class="label">Phone:</span> <a href="tel:${formData.phone}">${formData.phone}</a>
          </div>
          ${formData.address ? `<div class="info-row"><span class="label">Address:</span> ${formData.address}</div>` : ""}
          ${formData.city || formData.state || formData.zipCode ? `
            <div class="info-row">
              <span class="label">Location:</span> 
              ${[formData.city, formData.state, formData.zipCode].filter(Boolean).join(", ")}
              ${formData.country ? `, ${formData.country}` : ""}
            </div>
          ` : ""}
          <div class="info-row">
            <span class="label">Selected Course:</span> ${courseName}
          </div>
          <div class="info-row">
            <span class="label">Training Format:</span> ${formatLabel}
          </div>
          ${formData.previousExperience ? `
            <div class="info-row">
              <span class="label">Previous Experience:</span><br>
              ${formData.previousExperience}
            </div>
          ` : ""}
          ${formData.howDidYouHear ? `
            <div class="info-row">
              <span class="label">How They Heard About Us:</span> ${formData.howDidYouHear}
            </div>
          ` : ""}
          ${formData.additionalInfo ? `
            <div class="info-row">
              <span class="label">Additional Comments:</span><br>
              ${formData.additionalInfo}
            </div>
          ` : ""}
        </div>
        <div class="footer">
          <p>This is an automated notification from GITSICS Enrollment System</p>
          <p>View the full details in your Google Sheet: <a href="https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}">Open Spreadsheet</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

  const emailText = `
New Student Enrollment

Timestamp: ${new Date(timestamp).toLocaleString()}
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
${formData.address ? `Address: ${formData.address}` : ""}
${formData.city || formData.state ? `Location: ${[formData.city, formData.state, formData.zipCode].filter(Boolean).join(", ")}${formData.country ? `, ${formData.country}` : ""}` : ""}
Selected Course: ${courseName}
Training Format: ${formatLabel}
${formData.previousExperience ? `Previous Experience: ${formData.previousExperience}` : ""}
${formData.howDidYouHear ? `How They Heard About Us: ${formData.howDidYouHear}` : ""}
${formData.additionalInfo ? `Additional Comments: ${formData.additionalInfo}` : ""}

View full details: https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}
  `;

  // Send email
  await transporter.sendMail({
    from: `"GITSICS Enrollment" <${process.env.EMAIL_USER}>`,
    to: recipientEmail,
    subject: `New Student Enrollment: ${formData.firstName} ${formData.lastName} - ${courseName}`,
    text: emailText,
    html: emailHtml,
  });
}

