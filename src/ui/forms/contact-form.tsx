"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { sendEmail } from "@/ui/forms/send-email-action";
// import {experimental_useFormState as useFormStatus} from "react-dom";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email."),
  message: z.string(),
});

export function ContactForm() {
//   const { pending } = useFormStatus();
  const pending = false

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(formData: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(formData);
    const {data, error} = await sendEmail(formData);

    if (error) {
        console.log(error)
        return;
    }

    console.log("Email sent successfully")
    console.log(JSON.stringify(data, undefined, 2))
    console.log(JSON.stringify(error, undefined, 2))
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="vineetnitinpatil@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field}></Textarea>
              </FormControl>
              <FormDescription>Feel free to ask me anything</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between">
          <div></div>

          <Button type="submit" disabled={pending}>
          {pending? (
            <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
            </>
          ): (
            <>
            Submit
            </>
          )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
