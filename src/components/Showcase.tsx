"use client";

import { useCallback, useEffect, useState } from "react";
import { Monitor, Smartphone, Mail, BarChart3 } from "lucide-react";

const TOTAL_STEPS = 4;

const steps = [
  {
    id: "email",
    label: "White-Label E-Mails",
    icon: Mail,
    content: {
      title: "White-Label E-Mails",
      description: "Versenden Sie professionelle Tracking-Mails in Ihrem Corporate Design. Vollständig anpassbar.",
      features: ["Drag & Drop Editor", "Multi-Language Support", "Personalisierte Inhalte"],
    },
  },
  {
    id: "mobile",
    label: "Branded Tracking-Page",
    icon: Smartphone,
    content: {
      title: "Branded Tracking-Page",
      description: "Ihre eigene Tracking-Seite als Landing-Page. Cross-Selling Potenzial direkt nutzen.",
      features: ["Responsive Design", "Cross-Selling Integration", "Custom Domain möglich"],
    },
  },
  {
    id: "analytics",
    label: "Versandstatistiken",
    icon: BarChart3,
    content: {
      title: "Versandstatistiken",
      description: "Detaillierte Analysen zu Laufzeiten, Zustellquoten und Carrier-Performance.",
      features: ["Zustellquoten pro Carrier", "Laufzeitanalysen", "Automatische Reports"],
    },
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Monitor,
    content: {
      title: "Zentrales Dashboard",
      description: "Alle Sendungen, Carrier und Statistiken auf einen Blick. Echtzeit-Updates und übersichtliche Auswertungen.",
      features: ["Live-Tracking aller Sendungen", "Carrier-Performance Vergleich", "Export als CSV & PDF"],
    },
  },
];

function IconCheck({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className={className || "h-4 w-4"}>
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  );
}

export function Showcase() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % TOTAL_STEPS);
    }, 6000);
    return () => clearTimeout(timer);
  }, [step]);

  const active = steps[step];

  return (
    <section id="showcase" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl">
            Trackly{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              in Aktion
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Entdecken Sie die verschiedenen Ansichten und Funktionen unserer Plattform.
          </p>
        </div>

        {/* Main Card */}
        <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-white mb-12">
          <div className="p-8 lg:p-10 min-h-[500px] w-full">
            <div key={step} className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
              {/* Mock Preview */}
              <div className="rounded-xl bg-gradient-to-br from-accent/5 to-accent/5 p-8 min-h-[400px] flex flex-col justify-center border border-border">
                {active.id === "email" && <EmailMock />}
                {active.id === "mobile" && <TrackingPageMock />}
                {active.id === "analytics" && <AnalyticsMock />}
                {active.id === "dashboard" && <DashboardMock />}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-2xl font-bold text-dark md:text-3xl">
                  {active.content.title}
                </h3>
                <p className="mt-4 text-muted leading-relaxed">
                  {active.content.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {active.content.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent text-xs font-bold">
                        ✓
                      </span>
                      <span className="text-sm text-dark font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all"
                >
                  Demo anfragen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Step Navigation */}
        <nav aria-label="Progress" className="flex justify-center px-4">
          <ol className="flex w-full flex-wrap items-center justify-center gap-2" role="list">
            {steps.map((s, idx) => {
              const isCompleted = step > idx;
              const isCurrent = step === idx;
              return (
                <li key={s.id} className="relative">
                  <button
                    type="button"
                    className={`group flex items-center gap-2.5 rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${
                      isCurrent
                        ? "bg-accent text-white scale-100"
                        : "bg-white text-muted border border-border hover:bg-surface hover:text-dark scale-95 opacity-80"
                    }`}
                    onClick={() => setStep(idx)}
                  >
                    <s.icon className="h-4 w-4" />
                    <span className="hidden sm:inline-block">{s.label}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="h-4 w-32 rounded bg-accent/20" />
        <div className="h-4 w-20 rounded bg-accent/10" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {["2.847", "94%", "189"].map((val) => (
          <div key={val} className="rounded-lg bg-white p-4 text-center">
            <p className="text-lg font-bold text-accent">{val}</p>
            <div className="mt-1 h-2 w-12 mx-auto rounded bg-accent/10" />
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-white p-4">
        <div className="flex items-end justify-between gap-2 h-32">
          {[60, 80, 45, 90, 70, 85, 95, 65, 75, 88, 92, 78].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-accent to-blue"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function EmailMock() {
  return (
    <div className="mx-auto max-w-xs rounded-lg bg-white p-6">
      <div className="text-center mb-4">
        <div className="mx-auto h-8 w-24 rounded bg-accent/20 mb-3" />
        <p className="text-xs font-bold text-dark">Ihre Bestellung ist unterwegs!</p>
      </div>
      <div className="space-y-2 mb-4">
        {["Bestellt", "Verpackt", "Versendet", "In Zustellung"].map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`h-3 w-3 rounded-full ${i < 3 ? "bg-success" : "bg-accent animate-pulse"}`} />
            <span className="text-xs text-muted">{s}</span>
          </div>
        ))}
      </div>
      <div className="rounded bg-surface p-3 text-center">
        <p className="text-xs text-muted">Sendungsnummer</p>
        <p className="text-xs font-mono font-bold text-dark">TRK-2847-DHL</p>
      </div>
    </div>
  );
}

function TrackingPageMock() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-xl bg-white overflow-hidden">
        <div className="bg-gradient-to-r from-accent to-navy p-4 text-center text-white">
          <p className="text-xs font-bold">IHR LOGO</p>
          <p className="text-[10px] mt-1 opacity-80">Sendungsverfolgung</p>
        </div>
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted">Status</span>
            <span className="font-bold text-success">In Zustellung</span>
          </div>
          <div className="h-2 rounded-full bg-surface overflow-hidden">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-accent to-blue" />
          </div>
          <div className="rounded-lg bg-surface p-3 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-muted">Voraussichtlich</span>
              <span className="font-medium">Morgen, 10-14 Uhr</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted">Carrier</span>
              <span className="font-medium">DHL Express</span>
            </div>
          </div>
          <div className="rounded-lg bg-tint p-3 text-center">
            <p className="text-[10px] text-warning font-medium">Entdecken Sie unsere Neuheiten →</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMock() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Zustellquote", value: "97.3%" },
          { label: "Ø Laufzeit", value: "2.1 Tage" },
          { label: "Retouren", value: "3.2%" },
          { label: "Pünktlichkeit", value: "94.8%" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white p-4 text-center">
            <p className="text-lg font-bold text-accent">{stat.value}</p>
            <p className="text-xs text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-white p-4">
        <p className="text-xs font-bold text-dark mb-3">Carrier-Vergleich</p>
        {[
          { name: "DHL", pct: 95 },
          { name: "DPD", pct: 88 },
          { name: "UPS", pct: 92 },
          { name: "Hermes", pct: 82 },
        ].map((c) => (
          <div key={c.name} className="flex items-center gap-3 mb-2 last:mb-0">
            <span className="text-xs text-muted w-12">{c.name}</span>
            <div className="flex-1 h-3 rounded-full bg-surface overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-blue"
                style={{ width: `${c.pct}%` }}
              />
            </div>
            <span className="text-xs font-bold text-dark">{c.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
