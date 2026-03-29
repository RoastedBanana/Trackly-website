"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Trackly hat unsere Kundenkommunikation revolutioniert. Die Anfragen zum Sendungsstatus sind um 60% zurückgegangen – unser Support-Team kann sich endlich auf wichtigere Themen konzentrieren.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sarah Müller",
    role: "CEO, Fashion24",
  },
  {
    text: "Die Multi-Carrier-Integration spart uns täglich Stunden. Endlich alle Sendungen in einem Dashboard – von DHL bis Hermes.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Thomas Weber",
    role: "Head of Logistics, TechStore",
  },
  {
    text: "White-Label Tracking-Mails in unserem Branding – unsere Kunden lieben es. Die Öffnungsrate liegt bei über 80%!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Lisa Schneider",
    role: "Operations Manager, SportDirect",
  },
  {
    text: "Der Wechsel zu Trackly war die beste Entscheidung. Halbierte Kosten bei der Aftersale-Kommunikation und 23% mehr Upselling-Umsatz.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Marcus Hoffmann",
    role: "Gründer, GreenShop",
  },
  {
    text: "Seit Trackly können wir proaktiv kommunizieren, statt nur zu reagieren. Das macht einen riesigen Unterschied für die Kundenzufriedenheit.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Anna Bergmann",
    role: "Kundenservice, MöbelHaus",
  },
  {
    text: "Die API ist sauber dokumentiert und die Integration in unser Shopware ging in unter einem Tag. Absolute Empfehlung für jeden Online-Shop.",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    name: "David Chen",
    role: "CTO, PetWorld",
  },
  {
    text: "Dank Trackly generieren unsere Tracking-Mails jetzt zusätzlichen Umsatz. Cross-Selling direkt in der Versandbenachrichtigung – genial!",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Julia Krause",
    role: "Marketing Lead, BeautyBox",
  },
  {
    text: "Endlich eine Lösung, die mit unserem Wachstum mithält. Von 500 auf 10.000 Sendungen pro Monat – Trackly skaliert problemlos.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Felix Braun",
    role: "COO, AutoParts24",
  },
  {
    text: "Die Versandstatistiken geben uns Einblicke, die wir vorher nie hatten. Carrier-Performance auf einen Blick – das spart bares Geld.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Mira Jansen",
    role: "Supply Chain Manager, WeinKeller",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Rezensionen() {
  return (
    <section className="py-24 md:py-32 bg-surface relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent">
            Kundenstimmen
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-dark mt-5 text-center">
            Das sagen{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              unsere Kunden
            </span>
          </h2>
          <p className="text-center mt-4 text-lg text-muted">
            Über 500 Unternehmen vertrauen auf Trackly für ihre Sendungskommunikation.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
}
