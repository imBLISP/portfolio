"use client";

import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { useSectionInView } from "./use-section-in-view";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "../forms/contact-form";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section className="pt-10 bg-gradient-to-b from-transparent from-40% to-[#fafafa] dark:to-[#111111] pb-10">
      <div ref={ref} id="contact">
        <MaxWidthWrapper>
          <div className="text-4xl font-bold pb-10 pt-10" id="projects">
            Contact
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Let&apos;s get to know each other</CardTitle>
              <CardDescription className="pt-5">
                You can contact me directly at {" "}
        <a className="underline" href="mailto:example@gmail.com">
          vineetnitinpatil@gmail.com
        </a>{" "} or by
                filling up this form.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <ContactForm/>
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
