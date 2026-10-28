import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { AboutPageView } from "@/components/pages/AboutPageView";
import { about } from "@/content/site-content";

export const metadata: Metadata = {
  title: about.metaTitle,
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutPageView />
    </SiteShell>
  );
}
