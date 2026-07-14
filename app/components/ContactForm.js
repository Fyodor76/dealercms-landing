"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  contactFormDefaultValues,
} from "../lib/contact-form-schema";
import { getContactApiUrl } from "../lib/contact-api";
import { formatRuPhone, RU_PHONE_MASK_EMPTY } from "../lib/phone-mask";

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:ring-1 ${
    hasError
      ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
      : "border-border focus:border-accent/50 focus:ring-accent/30"
  }`;

function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1.5 text-sm text-red-400">{message}</p>;
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaultValues,
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    setSubmitError("");

    try {
      const response = await fetch(getContactApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(
          payload?.error || "Не удалось отправить заявку. Попробуйте позже.",
        );
      }

      setSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Не удалось отправить заявку. Попробуйте позже.",
      );
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              Контакты
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Хотите продавать
              <br />
              больше?
            </h2>
            <p className="mt-4 text-lg text-muted">
              Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:88003332349"
                className="flex items-center gap-4 text-lg transition-colors hover:text-accent"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted">Телефон</div>
                  <div className="font-semibold">8 (800) 333-23-49</div>
                </div>
              </a>

              <a
                href="mailto:info@dealercms.ru"
                className="flex items-center gap-4 text-lg transition-colors hover:text-accent"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-muted">E-mail</div>
                  <div className="font-semibold">info@dealercms.ru</div>
                </div>
              </a>
            </div>
          </div>

          <div className="gradient-card rounded-2xl border border-border p-6 sm:p-8">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold">Заявка отправлена</h3>
                <p className="mt-2 text-muted">
                  Мы свяжемся с вами в ближайшее время
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError("");
                  }}
                  className="mt-8 text-sm text-accent transition-colors hover:text-accent-hover"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Имя <span className="text-accent">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Ваше имя"
                    className={inputClass(errors.name)}
                    {...register("name")}
                  />
                  <FieldError message={errors.name?.message} />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    E-mail <span className="text-accent">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="email@company.ru"
                    className={inputClass(errors.email)}
                    {...register("email")}
                  />
                  <FieldError message={errors.email?.message} />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Телефон
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+7 (___) ___-__-__"
                        className={inputClass(errors.phone)}
                        value={field.value}
                        onChange={(event) => {
                          field.onChange(formatRuPhone(event.target.value));
                        }}
                        onFocus={() => {
                          if (!field.value) {
                            field.onChange(RU_PHONE_MASK_EMPTY);
                          }
                        }}
                        onBlur={() => {
                          if (field.value === RU_PHONE_MASK_EMPTY) {
                            field.onChange("");
                          }
                          field.onBlur();
                        }}
                      />
                    )}
                  />
                  <FieldError message={errors.phone?.message} />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Расскажите о вашем проекте или задайте вопрос"
                    className={`${inputClass(errors.message)} resize-none`}
                    {...register("message")}
                  />
                  <FieldError message={errors.message?.message} />
                </div>

                <div>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-border bg-surface accent-accent"
                      {...register("consent")}
                    />
                    <span className="text-sm leading-relaxed text-muted">
                      Я соглашаюсь с условиями{" "}
                      <a href="/privacy" className="text-accent underline-offset-2 hover:underline">
                        Политики обработки персональных данных
                      </a>{" "}
                      и даю{" "}
                      <a href="/soglasie" className="text-accent underline-offset-2 hover:underline">
                        Согласие на обработку персональных данных
                      </a>
                    </span>
                  </label>
                  <FieldError message={errors.consent?.message} />
                </div>

                {submitError && (
                  <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-accent py-4 font-semibold text-background transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Отправка..." : "Отправить"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
