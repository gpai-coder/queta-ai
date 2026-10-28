"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contact } from "@/content/site-content";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="pt-12 pb-4 bg-gradient-to-br from-violet-50 via-white to-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            {contact.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground">{contact.hero.description}</p>
        </div>
      </section>
      <section className="py-6">
        <div className="max-w-xl mx-auto px-6">
          <div className="bg-white rounded-3xl border border-border shadow-xl shadow-violet-100 p-8 md:p-10">
            {submitted ? (
              <p className="text-center text-sm text-muted-foreground">
                Thanks for reaching out. This demo form does not submit to a backend.
              </p>
            ) : (
              <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">
                    {contact.form.fields.name.label}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={contact.form.fields.name.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-foreground">
                    {contact.form.fields.email.label}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={contact.form.fields.email.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                    {contact.form.fields.phone.label}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder={contact.form.fields.phone.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="comments" className="text-sm font-semibold text-foreground">
                    {contact.form.fields.comments.label}
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={5}
                    required
                    placeholder={contact.form.fields.comments.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-200 flex items-center justify-center gap-2"
                >
                  <Send size={15} />
                  {contact.form.submitLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
