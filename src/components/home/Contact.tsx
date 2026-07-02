"use client";

import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
import { CONTACT } from "@/lib/site-data";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);
    toast.success("¡Gracias! Un asesor de EXA se pondrá en contacto contigo.");
    event.currentTarget.reset();
  }

  return (
    <section id="contacto" className="py-24 lg:py-32">
      <Container>
        <div className="grid overflow-hidden rounded-3xl shadow-xl shadow-black/5 lg:grid-cols-2">
          <div className="flex flex-col justify-between bg-gradient-to-br from-brand to-brand-dark p-10 text-white lg:p-12">
            <div>
              <Eyebrow light>Contacto</Eyebrow>
              <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
                ¿Tienes alguna duda?
              </h2>
              <p className="mt-4 text-white/70">
                Rellena el formulario y un asesor de EXA se pondrá en contacto
                contigo a la brevedad.
              </p>
            </div>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Mail className="h-4 w-4" />
                </span>
                {CONTACT.email}
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <Phone className="h-4 w-4" />
                </span>
                {CONTACT.phone}
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  <MapPin className="h-4 w-4" />
                </span>
                {CONTACT.address}
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white p-10 sm:grid-cols-2 lg:p-12">
            <Field label="Nombre y apellido" name="name" className="sm:col-span-2" required />
            <Field label="Nombre de la empresa" name="company" />
            <Field label="Correo electrónico" name="email" type="email" required />
            <Field label="Teléfono" name="phone" className="sm:col-span-2" />
            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-ink/70">
                Mensaje
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
            </label>
            <Button
              type="submit"
              disabled={submitting}
              className="sm:col-span-2 mt-2 w-full disabled:opacity-60"
            >
              {submitting ? "Enviando..." : "Enviar"}
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="mb-1.5 block text-sm font-semibold text-ink/70">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
      />
    </label>
  );
}
