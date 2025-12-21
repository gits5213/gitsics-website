import { NextRequest, NextResponse } from "next/server";

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

    // Form submission endpoint - Google Sheets integration removed
    // You can implement your own storage solution here
    
    console.log("Enrollment received:", formData);

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

