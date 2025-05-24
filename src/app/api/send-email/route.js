import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { to, subject, html, confirmationEmail } = await request.json();

  // Configure Gmail SMTP with App Password
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Your App Password
    },
  });

  try {
    // Send main notification email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: to,
      subject: subject,
      html: html,
    });

    // Send confirmation email to the applicant
    if (confirmationEmail) {
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: confirmationEmail.to,
        subject: confirmationEmail.subject,
        html: confirmationEmail.html,
      });
    }

    return NextResponse.json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
