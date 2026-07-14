import { z } from "zod";
import { RU_PHONE_MASK_REGEX } from "./phone-mask";

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
    .refine(
      (value) => !value || RU_PHONE_MASK_REGEX.test(value),
      "Введите номер телефона полностью",
    ),
  message: z
    .string()
    .trim()
    .refine(
      (value) => !value || value.length >= 10,
      "Сообщение должно содержать минимум 10 символов",
    )
    .refine(
      (value) => !value || value.length <= 2000,
      "Сообщение слишком длинное",
    ),
  consent: z.boolean().refine((value) => value === true, {
    message: "Необходимо дать согласие на обработку персональных данных",
  }),
});

export const contactFormDefaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};
