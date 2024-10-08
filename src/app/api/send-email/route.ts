// /api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587, // Use 465 for SSL
      secure: false, // Set to true if using port 465
      auth: {
        user: 'rmarin@kingoffreight.com',
        pass: 'Barcelona0429' // Use an app password if using 2FA
      }
    });

    // Email options
    const mailOptions = {
      from: "rmarin@kingoffreight.com",
      to: "raulm0429@icloud.com", // Sending email to the user
      subject: `New message from ${name}`,
      text: `Inquiry: ${message} \n\n Email to reply to: ${email}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}