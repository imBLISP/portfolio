"use client";

import { Badge } from "@/components/ui/badge";
import { MaxWidthWrapper } from "../layout/max-width-wrapper";
import { useSectionInView } from "./use-section-in-view";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContactForm } from "../forms/contact-form";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <section className="bg-gradient-to-b from-transparent from-40% to-[#fafafa] pb-20">
      <div ref={ref} id="contact">
        <MaxWidthWrapper>
          <div className="text-4xl font-bold pb-10 pt-10" id="projects">
            Contact
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Let&apos;s get to know each other</CardTitle>
              <CardDescription>
                Please contact me directly at {" "}
        <a className="underline" href="mailto:example@gmail.com">
          vineetnitinpatil@gmail.com
        </a>{" "} or by
                filling up this form.
              </CardDescription>
            </CardHeader>
            <CardContent>
               <ContactForm>
                </ContactForm> 
            </CardContent>
          </Card>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
