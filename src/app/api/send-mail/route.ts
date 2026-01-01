import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message,phone, title } = await req.json();

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
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @media only screen and (max-width:600px){
            .container{width:100%!important}
            .pad{padding:16px!important}
            .title{font-size:20px!important}
            .text{font-size:14px!important}
          }
        </style>
      </head>
      
      <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
      <td align="center" style="padding:24px 12px;">
      
      <!-- CARD -->
      <table class="container" width="100%" cellpadding="0" cellspacing="0"
      style="max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 10px 28px rgba(0,0,0,0.08);">
      
      <!-- HEADER -->
      <tr>
      <td class="pad" style="background:#0b2a3c;padding:22px;text-align:center;">
      <h1 class="title" style="margin:0;color:#ffffff;font-size:22px;">
      ${title || "Hom3li Chimney Services"}
      </h1>
      <p style="margin:6px 0 0;color:#fde68a;font-size:13px;font-weight:bold;">
      ⚠ IMPORTANT CONTACT REQUEST
      </p>
      </td>
      </tr>
      
      <!-- BODY -->
      <tr>
      <td class="pad" style="padding:24px;">
      
      <!-- IMPORTANT DETAILS -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #facc15;border-radius:10px;">
      <tr>
      <td style="padding:12px;background:#fffbeb;font-size:14px;">
      <b style="color:#92400e;">Name:</b><br/>
      <span style="color:#111827;font-weight:bold;">${name}</span>
      </td>
      </tr>
      <tr>
      <td style="padding:12px;border-top:1px solid #fde68a;background:#fffbeb;font-size:14px;">
      <b style="color:#92400e;">Phone Number:</b><br/>
      <span style="color:#111827;font-weight:bold;">+1 ${phone}</span>
      </td>
      </tr>
      <tr>
      <td style="padding:12px;border-top:1px solid #fde68a;background:#fffbeb;font-size:14px;">
      <b style="color:#92400e;">Email:</b><br/>
      <span style="color:#111827;font-weight:bold;">${email}</span>
      </td>
      </tr>
      </table>
      
      <!-- MESSAGE -->
      <div style="margin-top:20px;padding:18px;border:2px solid #facc15;background:#ffffff;border-radius:12px;">
      <p style="margin:0 0 8px;font-size:13px;font-weight:bold;color:#92400e;">
      📩 MESSAGE (IMPORTANT)
      </p>
      <p class="text" style="margin:0;font-size:15px;color:#111827;line-height:1.7;">
      ${message}
      </p>
      </div>
      
      </td>
      </tr>
      
      <!-- FOOTER -->
      <tr>
      <td style="background:#facc15;padding:14px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#1f2937;">
      © ${new Date().getFullYear()} Hom3li Chimney • Priority Lead
      </p>
      </td>
      </tr>
      
      </table>
      <!-- END CARD -->
      
      </td>
      </tr>
      </table>
      </body>
      </html>
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
