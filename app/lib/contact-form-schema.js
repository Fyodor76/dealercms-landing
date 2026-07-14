import { z } from "zod";

const phoneRegex =
  /^(\+7|8)?[\s\-()]*\d{3}[\s\-()]*\d{3}[\s\-()]*\d{2}[\s\-()]*\d{2}$/;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введите имя (минимум 2 символа)")
    .max(100, "Имя слишком длинное"),
  email: z
    .string()
    .trim()
    .min(1, "Введите e-mail")
    .email("Введите корректный e-mail"),
  phone: z
    .string()
    .trim()
    .min(1, "Введите телефон")
    .regex(phoneRegex, "Введите корректный номер телефона"),
  message: z
    .string()
    .trim()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(2000, "Сообщение слишком длинное"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Необходимо дать согласие на обработку данных" }),
  }),
});

export const contactFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};
