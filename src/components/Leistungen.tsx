"use client";

import { useEffect, useRef, useState } from "react";
import {
  Globe,
  Truck,
  BarChart3,
  Code2,
  Palette,
  FileText,
  Cpu,
  Zap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multi-Language-Support",
    description: "Tracking-Mails automatisch in der Sprache Ihrer Kunden versenden.",
    color: "bg-accent text-white",
  },
  {
    icon: Truck,
    title: "Multi-Carrier-Tracking",
    description: "Alle Versanddienstleister in einem einzigen System vereint.",
    color: "bg-accent text-white",
  },
  {
    icon: BarChart3,
    title: "Versandstatistiken",
    description: "Alle Sendungen und Paketdienste und deren Performance im Überblick.",
    color: "bg-accent text-white",
  },
  {
    icon: Code2,
    title: "Moderne API",
    description: "Einfache Integration in bestehende Systeme wie WebShop oder ERP.",
    color: "bg-accent text-white",
  },
  {
    icon: Palette,
    title: "White-Label",
    description: "Komplett frei gestaltbare E-Mails in Ihrem Corporate Design.",
    color: "bg-accent text-white",
  },
  {
    icon: FileText,
    title: "Drip-Campaigns",
    description: "API für Custom Events und automatisierte Kampagnen nach Versand.",
    color: "bg-accent text-white",
  },
];

function CpuAnimation() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer ring */}
      <div className="absolute h-48 w-48 rounded-full border-2 border-dashed border-accent/20 animate-[spin_20s_linear_infinite]" />
      <div className="absolute h-64 w-64 rounded-full border border-accent/10 animate-[spin_30s_linear_infinite_reverse]" />

      {/* CPU Center */}
      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-navy">
        <Cpu className="h-12 w-12 text-white" />
      </div>

      {/* Connection lines and nodes */}
      {features.map((feature, i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={feature.title}
            className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-border transition-transform hover:scale-110"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <feature.icon className="h-5 w-5 text-accent" />
          </div>
        );
      })}

      {/* Pulse dots on connections */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i * 60 - 90) * (Math.PI / 180);
        const radius = 70;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-accent animate-pulse"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function Leistungen() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="leistungen" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent mb-4">
            <Zap className="h-4 w-4" />
            Leistungsstarke Features
          </div>
          <h2 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl">
            Alles, was Sie für smartes{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              Tracking brauchen
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Unser System verbindet alle Bausteine zu einer leistungsstarken Plattform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* CPU Animation */}
          <div className="flex justify-center order-2 lg:order-1 min-h-[250px] sm:min-h-[320px]">
            <div className={`transition-all duration-1000 scale-[0.7] sm:scale-[0.85] lg:scale-100 ${visible ? "opacity-100" : "opacity-0"}`}>
              <CpuAnimation />
            </div>
          </div>

          {/* Feature List */}
          <div className="order-1 lg:order-2 space-y-4">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group flex items-start gap-4 rounded-xl p-4 transition-all hover:bg-surface cursor-default ${
                  visible ? "animate-slide-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.color}`}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-dark group-hover:text-accent transition-colors">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
