"use client";
import { useState } from "react";
import { btn, waLink } from "@/lib/whatsapp";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim(), phone = String(f.get("phone") ?? "").replace(/[\s-]/g, ""), message = String(f.get("message") ?? "").trim();
    const err: Errors = {};
    if (name.length < 2) err.name = "Enter your name.";
    if (!/^(\+?91)?[6-9]\d{9}$/.test(phone)) err.phone = "Enter a valid 10-digit Indian mobile number.";
    if (message.length < 10) err.message = "Write at least 10 characters so we can help you.";
    setErrors(err); setDone(false);
    if (Object.keys(err).length) return;
    // No backend yet: the enquiry is sent through WhatsApp, which the store already monitors.
    window.open(waLink(`Hello Pune Ethnic, I am ${name} (${phone}). ${message}`), "_blank", "noopener");
    setDone(true); e.currentTarget.reset();
  }
  const field = "mt-1 w-full border border-beige bg-white px-4 py-3 text-sm focus:border-gold";
  return (
    <form onSubmit={submit} noValidate className="space-y-5">
      {([["name", "Name", "text"], ["phone", "Phone number", "tel"]] as const).map(([id, label, type]) => (
        <div key={id}>
          <label htmlFor={id} className="text-sm">{label}</label>
          <input id={id} name={id} type={type} className={field} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-e` : undefined} />
          {errors[id] && <p id={`${id}-e`} role="alert" className="mt-1 text-sm text-charcoal font-medium">{errors[id]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="text-sm">Message</label>
        <textarea id="message" name="message" rows={5} className={field} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-e" : undefined} />
        {errors.message && <p id="message-e" role="alert" className="mt-1 text-sm text-charcoal font-medium">{errors.message}</p>}
      </div>
      <button type="submit" className={btn.primary}>SEND ON WHATSAPP</button>
      {done && <p role="status" className="text-sm text-charcoal font-medium">WhatsApp is opening with your message. Press send there to reach the store.</p>}
    </form>
  );
}
