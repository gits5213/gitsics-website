import { NextRequest, NextResponse } from "next/server";

const QA_PROPOSAL_SCRIPT_URL = process.env.GOOGLE_SCRIPT_QA_PROPOSAL_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, companyEmail, role, projectNeed, timeline } = body;

    const emailTrim = companyEmail?.trim();
    if (!name?.trim() || !company?.trim() || !emailTrim || !role?.trim() || !projectNeed?.trim() || !timeline?.trim()) {
      return NextResponse.json(
        { error: "All fields are required: name, company, company email, role, projectNeed, timeline" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)) {
      return NextResponse.json(
        { error: "Please enter a valid company email address" },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      company: company.trim(),
      companyEmail: emailTrim,
      role: role.trim(),
      projectNeed: projectNeed.trim(),
      timeline: timeline.trim(),
    };

    if (QA_PROPOSAL_SCRIPT_URL) {
      const res = await fetch(QA_PROPOSAL_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || (data && data.success === false)) {
        console.error("Google Apps Script QA proposal error:", data?.error || res.statusText);
        return NextResponse.json(
          { error: data?.error || "Failed to save request. Please try again." },
          { status: 502 }
        );
      }
    } else {
      console.log("QA Proposal consultation request (no sheet):", payload);
    }

    return NextResponse.json(
      { message: "Request received successfully", success: true },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("QA proposal submit error:", error);
    return NextResponse.json(
      { error: "Failed to submit request", details: message },
      { status: 500 }
    );
  }
}
