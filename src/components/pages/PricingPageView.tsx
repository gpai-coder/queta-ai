import Link from "next/link";
import { Check } from "lucide-react";
import { navigation, pricing } from "@/content/site-content";

export function PricingPageView() {
  return (
    <>
      <section className="pt-24 pb-8 bg-gradient-to-br from-violet-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            {pricing.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto whitespace-pre-line">
            {pricing.hero.subtitle}
          </p>
        </div>
      </section>

      <section className="pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.name}
                className="relative rounded-3xl border flex flex-col border-border bg-white"
              >
                <div className="p-8 border-b border-border">
                  <p className="text-xs font-bold uppercase tracking-widest mb-3 text-muted-foreground">
                    {tier.name}
                  </p>
                  <div className="flex flex-col gap-2 mb-3">
                    {tier.prices.map((price) => (
                      <div key={price.amount + price.note} className="flex items-end gap-1">
                        <span className="text-4xl font-bold tracking-tight text-foreground">
                          {price.amount}
                        </span>
                        {price.note ? (
                          <span className="text-sm mb-1.5 text-muted-foreground">{price.note}</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tier.description}</p>
                </div>
                <ul className="p-8 flex flex-col gap-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="p-8 pt-0">
                  <Link
                    href={navigation.cta.href}
                    className="block w-full text-center py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">{pricing.disclaimer}</p>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              {pricing.why.eyebrow}
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-6">
              {pricing.why.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">{pricing.why.body}</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {pricing.why.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            {pricing.bottomCta.title}
          </h2>
          <p className="text-muted-foreground mb-8">{pricing.bottomCta.description}</p>
          <Link
            href={navigation.cta.href}
            className="inline-flex px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            {navigation.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
