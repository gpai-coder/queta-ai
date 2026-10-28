import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { ContactForm } from "@/components/pages/ContactForm";
import { contact } from "@/content/site-content";

export const metadata: Metadata = {
  title: contact.metaTitle,
};

export default function ContactPage() {
  return (
    <SiteShell>
      <Suspense
        fallback={
          <div className="pt-24 pb-16 text-center text-muted-foreground text-sm">Loading…</div>
        }
      >
        <ContactForm />
      </Suspense>
    </SiteShell>
  );
}
