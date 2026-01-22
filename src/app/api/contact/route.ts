import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    console.log("Attempting to send email...");
    console.log("User:", process.env.EMAIL_USER); // This will print your email to terminal to check if loaded

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("ERROR: Missing Environment Variables");
      return NextResponse.json({ error: 'Server config error: Missing env vars' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
      },
    });

    // Verify connection configuration
    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.error("Transporter Verification Error:", error);
          reject(error);
        } else {
          console.log("Server is ready to take our messages");
          resolve(success);
        }
      });
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #3b82f6;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p>${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error: any) {
    console.error('FINAL EMAIL ERROR:', error); // <--- CHECK THIS LINE IN TERMINAL
    return NextResponse.json(
      { error: error.message || 'Failed to send message' }, 
      { status: 500 }
    );
  }
}