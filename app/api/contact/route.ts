import { NextRequest, NextResponse } from "next/server";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const RECIPIENT_EMAIL = "drnpmfreeman@gmail.com";
const SENDER_NAME = "Balanced State Wellness";

export async function POST(request: NextRequest) {
  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.CONTACT_EMAIL;
  if (!apiKey || apiKey === "your-brevo-api-key-here") {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }
  if (!senderEmail) {
    return NextResponse.json(
      { error: "Sender email not configured" },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, subject, message } = body;

  // Validation
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  if (name.length > 100) {
    return NextResponse.json(
      { error: "Name must be under 100 characters" },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "Please provide a valid email address" },
      { status: 400 }
    );
  }

  const allowedSubjects = [
    "General Inquiry",
    "Class Information",
    "Private Session",
    "Group Workshop",
    "Consulting Services",
  ];
  if (!allowedSubjects.includes(subject)) {
    return NextResponse.json({ error: "Invalid subject" }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json(
      { error: "Message must be under 2000 characters" },
      { status: 400 }
    );
  }

  // Simple honeypot/rate check - reject if message is suspiciously short
  if (message.trim().length < 10) {
    return NextResponse.json(
      { error: "Message must be at least 10 characters" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: senderEmail },
        to: [{ email: RECIPIENT_EMAIL, name: "Dr. Nikki Freeman" }],
        replyTo: { email, name },
        subject: `[BSW Contact] ${subject} - from ${name}`,
        htmlContent: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
          <hr />
          <p style="color: #999; font-size: 12px;">
            Sent from the Balanced State Wellness website contact form.
            Reply directly to this email to respond to ${escapeHtml(name)}.
          </p>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error("Brevo API error:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
