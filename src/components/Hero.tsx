"use client";

import { Mail, Star, TrendingUp, ShoppingBag } from "lucide-react";
import AvatarGroup from "@/components/ui/avatar-group";
import { FlowButton } from "@/components/ui/flow-button";

const trustAvatars = [
  { id: 1, name: "Sarah Müller", designation: "CEO, Fashion24", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Thomas Weber", designation: "Head of Logistics", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Lisa Schneider", designation: "Operations Manager", image: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, name: "Marcus Hoffmann", designation: "Gründer, GreenShop", image: "https://randomuser.me/api/portraits/men/75.jpg" },
  ...Array.from({ length: 500 }, (_, i) => ({ id: i + 5, name: "", designation: "", image: "" })),
];

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-bg pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-0">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent mb-6 sm:mb-8">
              <TrendingUp className="h-4 w-4" />
              Tracking-Mails, die verkaufen
            </div>

            {/* Headline */}
            <h1 className="text-3xl font-heading font-semibold tracking-tight text-dark sm:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1]">
              Mach deine Tracking-Mails zum{" "}
              <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
                stärksten Upselling-Kanal
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted leading-relaxed">
              Deine Kunden öffnen Tracking-Mails 4x häufiger als jeden Newsletter.
              Trackly verwandelt jede Versandbenachrichtigung in eine
              Upselling-Maschine – mit personalisierten Produktempfehlungen,
              die wirklich konvertieren.
            </p>

            {/* Value Props */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3 border border-border">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tint text-success">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">+23% Umsatz</p>
                  <p className="text-[11px] text-muted">pro Tracking-Mail</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-white/70 p-3 border border-border">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-tint text-accent">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-dark">78% Öffnungsrate</p>
                  <p className="text-[11px] text-muted">vs. 21% Newsletter</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4">
              <FlowButton text="Kostenlos starten" href="#kontakt" variant="primary" />
              <FlowButton text="Demo ansehen" href="#demo" variant="secondary" />
            </div>

            {/* Trust indicators */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3 text-sm text-muted">
              <AvatarGroup items={trustAvatars} maxVisible={4} size="sm" className="justify-start" />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />
                ))}
                <span className="ml-0.5 text-xs font-medium">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right: Image with floating popups */}
          <div className="hidden sm:block relative sm:min-h-[400px] lg:h-[620px]">
            {/* Main image */}
            <div className="relative rounded-xl overflow-hidden lg:absolute lg:inset-0 lg:rounded-none lg:rounded-tl-[3rem]">
              <img
                src="/hero.jpg"
                alt="Kundin freut sich über personalisierte Liefernachricht"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Tracking Email Popup with Upselling */}
            <div className="hidden sm:block absolute top-4 right-0 sm:top-8 sm:-right-4 lg:top-10 lg:-right-12 z-20 animate-float">
              <div className="w-64 sm:w-72 lg:w-80 rounded-xl bg-white p-3 sm:p-4 border border-border">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10">
                      <Mail className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold text-muted">Tracking-Update</span>
                  </div>
                  <span className="text-[10px] text-muted/60">Gerade eben</span>
                </div>
                <p className="text-sm font-bold text-dark mb-1">
                  📦 Dein Paket ist unterwegs!
                </p>
                <p className="text-xs text-muted leading-relaxed mb-2 sm:mb-3">
                  Liebe Lena, deine Bestellung wird morgen zwischen 14–15 Uhr geliefert.
                </p>
                {/* Upselling Banner inside email */}
                <div className="rounded-xl bg-tint p-2 sm:p-3 border border-border">
                  <p className="text-[10px] font-semibold text-warning uppercase tracking-wider mb-1.5">Passend zu deiner Bestellung</p>
                  <div className="flex gap-2">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-white border border-border flex items-center justify-center">
                      <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5 text-warning" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-dark">Premium Lederhülle</p>
                      <p className="text-[10px] text-muted">Nur heute: <span className="font-bold text-success">-20%</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conversion Popup */}
            <div className="hidden sm:block absolute bottom-4 left-0 sm:bottom-16 sm:-left-4 lg:bottom-28 lg:-left-12 z-20 animate-float" style={{ animationDelay: "2s" }}>
              <div className="w-56 sm:w-64 lg:w-72 rounded-xl bg-white p-3 sm:p-4 border border-border">
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-tint">
                    <TrendingUp className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted">Cross-Sell Conversion</p>
                    <p className="text-base sm:text-lg font-heading font-semibold text-success">+31,4%</p>
                  </div>
                </div>
                <div className="flex items-end gap-1 h-8 sm:h-10">
                  {[25, 35, 28, 42, 38, 55, 48, 62, 58, 70, 65, 78].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-success"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
