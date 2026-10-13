"use client";

import { useState, type FormEvent } from "react";
import Section from "./Section";
import { profile } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "w-full border-0 border-b border-line bg-transparent py-3 text-base outline-none transition-colors placeholder:text-mute/60 focus:border-b-2 focus:border-accent";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [note, setNote] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    // No backend: without a form service, open the visitor's email app instead.
    if (!endpoint) {
      const subject = encodeURIComponent(`Message from ${data.name}`);
      const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setNote("Your email app should open with the message ready to send.");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("sent");
      setNote("Message sent. I'll reply soon.");
    } catch {
      setStatus("error");
      setNote("Message not sent. Check your connection and try again, or email me directly.");
    }
  }

  return (
    <Section id="contact" title="Contact">
      <form onSubmit={onSubmit} className="max-w-xl space-y-8">
        <div>
          <label htmlFor="name" className="text-sm text-mute">
            Your name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-mute">
            Your email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-mute">
            Message
          </label>
          <textarea id="message" name="message" required rows={4} className={`${fieldClass} resize-y`} />
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center rounded-full bg-ink px-8 py-3 text-sm text-paper transition-colors duration-300 hover:bg-accent disabled:opacity-60"
          >
            {status === "sending" ? "Sending" : "Send message"}
          </button>
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${status === "error" ? "text-red-700" : "text-mute"}`}
          >
            {note}
          </p>
        </div>
      </form>

      <p className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-sm">
        <a href={`mailto:${profile.email}`} className="underline underline-offset-4 hover:text-accent">
          {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent">
          LinkedIn
        </a>
      </p>
    </Section>
  );
}
