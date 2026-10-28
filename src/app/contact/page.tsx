import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactForm } from "@/components/pages/ContactForm";
import { contact } from "@/content/site-content";

export const metadata: Metadata = {
  title: contact.metaTitle,
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactForm />
    </SiteShell>
  );
}
