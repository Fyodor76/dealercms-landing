const DEFAULT_API_URL =
  "https://goapi.unisender.ru/ru/transactional/api/v1/email/send.json";

function getMailConfig() {
  const apiKey = process.env.UNISENDER_API_KEY;
  const fromEmail = process.env.MAIL_FROM || "noreply@dealercms.ru";
  const to = process.env.MAIL_TO || "fydorzbinyakov@gmail.com";

  if (!apiKey) {
    throw new Error("Mail is not configured");
  }

  return {
    apiKey,
    apiUrl: process.env.UNISENDER_API_URL || DEFAULT_API_URL,
    fromEmail,
    fromName: process.env.MAIL_FROM_NAME || "DealerCMS",
    to,
  };
}

export async function sendContactEmail({ name, email, phone, message }) {
  const { apiKey, apiUrl, fromEmail, fromName, to } = getMailConfig();

  const phoneLine = phone?.trim() || "не указан";
  const messageLine = message?.trim() || "не указано";

  const text = [
    "Новая заявка с сайта DealerCMS",
    "",
    `Имя: ${name}`,
    `E-mail: ${email}`,
    `Телефон: ${phoneLine}`,
    "",
    "Сообщение:",
    messageLine,
  ].join("\n");

  const phoneHtml = phone?.trim()
    ? `<a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>`
    : "не указан";

  const html = `
    <h2>Новая заявка с сайта DealerCMS</h2>
    <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
    <p><strong>Телефон:</strong> ${phoneHtml}</p>
    <p><strong>Сообщение:</strong></p>
    <p>${escapeHtml(messageLine).replace(/\n/g, "<br>")}</p>
  `;

  const payload = {
    message: {
      recipients: [{ email: to }],
      skip_unsubscribe: 1,
      body: {
        html,
        plaintext: text,
      },
      subject: `Заявка с сайта DealerCMS — ${name}`,
      from_email: fromEmail,
      from_name: fromName,
      reply_to: email,
      track_links: 0,
      track_read: 0,
    },
  };

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-API-KEY": apiKey,
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok || result?.status === "error") {
    const detail =
      result?.message ||
      result?.error ||
      JSON.stringify(result) ||
      response.statusText;
    throw new Error(`Unisender Go send failed: ${detail}`);
  }

  return result;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
