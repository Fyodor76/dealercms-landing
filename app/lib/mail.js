import nodemailer from "nodemailer";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !user || !password) {
    throw new Error("SMTP is not configured");
  }

  return {
    host,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass: password },
  };
}

export async function sendContactEmail({ name, email, phone, message }) {
  const transporter = nodemailer.createTransport(getSmtpConfig());

  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const to = process.env.SMTP_TO || process.env.SMTP_USER;

  const text = [
    "Новая заявка с сайта DealerCMS",
    "",
    `Имя: ${name}`,
    `E-mail: ${email}`,
    `Телефон: ${phone}`,
    "",
    "Сообщение:",
    message,
  ].join("\n");

  const html = `
    <h2>Новая заявка с сайта DealerCMS</h2>
    <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Телефон:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></p>
    <p><strong>Сообщение:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: `Заявка с сайта DealerCMS — ${name}`,
    text,
    html,
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
