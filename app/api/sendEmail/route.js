import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, phone } = await req.json();

    console.log("Received:", { email, phone });
    console.log("Password loaded:", !!process.env.EMAIL_PASSWORD);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "k224508@nu.edu.pk",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Verify the transporter before sending
    await transporter.verify();
    console.log("SMTP Connection verified ✅");

    await transporter.sendMail({
      from: '"Popup Form" <k224508@nu.edu.pk>',
      to: "k224508@nu.edu.pk",
      subject: "Popup Card Filled",
      text: `Popup Card Filled\n\nEmail: ${email}\nPhone: ${phone}`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ message: error.message || "Internal server error" }),
      { status: 500 }
    );
  }
}
