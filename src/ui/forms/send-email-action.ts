"use server";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/ui/emails/contact-form-email";
import {z} from "zod"

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  message: z.string(),
});

export const sendEmail = async (formData: z.infer<typeof formSchema>) => {
  formData = await formSchema.parseAsync(formData);

  const senderEmail = formData['email'];
  const message = formData['message'];

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "bytegrad@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};