"use server";

import z from "zod";
import { formSchema } from "./schema";
import { Resend } from 'resend';
import EmailTemplate from "@/emails/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitForm = async (formData: z.infer<typeof formSchema>) => {
  try {
    await resend.emails.send({
    from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
    to: ['khantzawthein21@gmail.com'],
    subject: `Portfolio Message`,
    replyTo: formData.email,
    headers: {
    'X-Entity-Ref-ID': `${Date.now()}`,
    },
    react: EmailTemplate({ name: formData.name, email: formData.email, message: formData.message, subject: "Portfolio Message" }),
  });

  { /*
    await resend.emails.send({
    from: `Portfolio <${process.env.RESEND_FROM_EMAIL}>`,
    to: [`${formData.email}`],
    subject: `Thanks for reaching out!`,
    replyTo: formData.email,
    headers: {
    'X-Entity-Ref-ID': `${Date.now()}`,
    },
    react: EmailTemplate({ name: "Cody", email: "codyk9627@gmail.com", message: "Thanks for reaching out!", subject: "Thank you" })
  })
  */}
  

  return { success: true, message: "✓ Success! I'll get back to you as soon as possible." }
  } catch (error) {
    console.error("Email error:", error);
    return { success: false, message: "An unexpected error occurred" }
  }
};
