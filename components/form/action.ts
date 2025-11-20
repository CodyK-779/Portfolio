"use server";

import z from "zod";
import { formSchema } from "./schema";
import { Resend } from 'resend';
import EmailTemplate from "@/emails/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitForm = async (formData: z.infer<typeof formSchema>) => {
  await resend.emails.send({
    from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
    to: ['codyk9627@gmail.com'],
    subject: 'Job',
    react:  EmailTemplate({ name: formData.name, email: formData.email, message: formData.message, subject: "Job" }),
  });

  await resend.emails.send({
    from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
    to: [`${formData.email}`],
    subject: `Thanks for reaching out!`,
    react: EmailTemplate({ name: "Cody", email: "codyk9627@gmail.com", message: "Thanks for reaching out!", subject: "Thank you" })
  })

  return Response.json({ success: true });
};
