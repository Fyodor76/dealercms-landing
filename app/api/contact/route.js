import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { contactFormSchema } from "../../lib/contact-form-schema";
import { sendContactEmail } from "../../lib/mail";

export async function POST(request) {
  try {
    const body = await request.json();
    const data = contactFormSchema.parse(body);

    await sendContactEmail({
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Некорректные данные формы", details: error.issues },
        { status: 400 },
      );
    }

    if (error instanceof Error && error.message === "Mail is not configured") {
      console.error("Contact form: Unisender Go is not configured");
      return NextResponse.json(
        { error: "Сервис отправки временно недоступен" },
        { status: 503 },
      );
    }

    console.error("Contact form send error:", error);
    return NextResponse.json(
      { error: "Не удалось отправить заявку. Попробуйте позже." },
      { status: 500 },
    );
  }
}
