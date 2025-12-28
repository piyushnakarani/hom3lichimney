import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "piyushnakarani2@gmail.com",
        pass: "wopl onru rzmv pfiv",
      },
    });

    await transporter.sendMail({
      from: `"Website Contact" <piyushnakarani2@gmail.com>`,
      to: "piyushnakarani2@gmail.com", // sender email
      replyTo: "piyushnakarani2005@gmail.com", //receiver email
      subject: `New Contact from ${name}`,
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Mail failed" },
      { status: 500 }
    );
  }
}
