import Link from "next/link";
import { about, navigation } from "@/content/site-content";

export function AboutPageView() {
  return (
    <>
      <section className="pt-24 pb-10 bg-gradient-to-br from-violet-50 via-white to-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            {about.hero.eyebrow}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {about.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{about.hero.intro}</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            {about.mission.eyebrow}
          </p>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            {about.mission.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            {about.founders.eyebrow}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            {about.founders.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">{about.founders.intro}</p>
          <p className="text-muted-foreground leading-relaxed mb-10">{about.founders.closing}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.founders.people.map((person) => (
              <div key={person.role} className="rounded-2xl border border-border bg-white p-8">
                <h3 className="text-xl font-bold text-foreground mb-1">{person.role}</h3>
                <p className="text-sm font-semibold text-primary mb-4">{person.area}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            {about.principles.eyebrow}
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
            {about.principles.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.principles.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border p-7">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-violet-950 to-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{about.cta.title}</h2>
          <p className="text-slate-400 mb-8">{about.cta.description}</p>
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
