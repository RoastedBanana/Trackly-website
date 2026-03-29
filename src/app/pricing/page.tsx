"use client";

import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "/ Monat",
    description: "Perfekt für kleine Online-Shops mit bis zu 500 Sendungen.",
    features: [
      "Bis zu 500 Sendungen/Monat",
      "Multi-Carrier-Tracking",
      "Standard Tracking-Mails",
      "Dashboard & Statistiken",
      "E-Mail Support",
    ],
    cta: "Kostenlos testen",
    popular: false,
  },
  {
    name: "Professional",
    price: "149",
    period: "/ Monat",
    description: "Für wachsende Unternehmen mit anspruchsvollem Tracking.",
    features: [
      "Bis zu 5.000 Sendungen/Monat",
      "Multi-Carrier-Tracking",
      "White-Label E-Mails",
      "Branded Tracking-Page",
      "Multi-Language-Support",
      "API-Zugang",
      "Drip-Campaigns",
      "Priority Support",
    ],
    cta: "Kostenlos testen",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Individuell",
    period: "",
    description: "Maßgeschneiderte Lösung für Großkunden und Fulfillment-Anbieter.",
    features: [
      "Unbegrenzte Sendungen",
      "Alle Professional Features",
      "Custom API-Integration",
      "Dedicated Account Manager",
      "SLA-Garantie",
      "Custom Reporting",
      "Onboarding & Schulung",
      "24/7 Premium Support",
    ],
    cta: "Kontakt aufnehmen",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h1 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl">
            Transparente{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              Preise
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted">
            Wählen Sie den Tarif, der zu Ihrem Sendungsvolumen passt. Alle Pläne 14 Tage kostenlos testen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-6 sm:p-8 transition-colors duration-200 ${
                plan.popular
                  ? "bg-white ring-2 ring-accent md:scale-105"
                  : "bg-white border border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-xs font-bold text-white">
                    Beliebteste Wahl
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-heading font-semibold text-dark">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-heading font-semibold text-dark">
                  {plan.price === "Individuell" ? "" : "€"}
                  {plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-accent mt-0.5" />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#kontakt"
                className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                  plan.popular
                    ? "bg-navy text-white hover:bg-blue"
                    : "bg-surface text-dark border border-border hover:bg-tint"
                }`}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted">
            Alle Preise zzgl. MwSt. &middot; 14 Tage kostenlos testen &middot; Keine Kreditkarte nötig
          </p>
        </div>
      </div>
    </div>
  );
}
