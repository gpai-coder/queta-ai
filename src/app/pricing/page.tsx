import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { PricingPageView } from "@/components/pages/PricingPageView";
import { pricing } from "@/content/site-content";

export const metadata: Metadata = {
  title: pricing.metaTitle,
};

export default function PricingPage() {
  return (
    <SiteShell>
      <PricingPageView />
    </SiteShell>
  );
}
