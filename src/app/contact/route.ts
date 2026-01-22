import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // 1. Configure the transporter
    // Tip: For Gmail, use an "App Password" (Security > 2-Step Verification > App Passwords)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or use 'host' and 'port' for other SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sending to yourself
      replyTo: email, // So you can hit "Reply" to answer the user
      subject: `Portfolio Contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #3b82f6;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <div style="background: #f4f4f5; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    };

    // 3. Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' }, 
      { status: 500 }
    );
  }
}