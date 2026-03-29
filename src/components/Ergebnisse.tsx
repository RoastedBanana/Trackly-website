"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingDown, Eye, Clock, Heart } from "lucide-react";

const results = [
  {
    icon: TrendingDown,
    value: 50,
    suffix: "%",
    label: "Weniger Kundenanfragen",
    description: "Entlastung Ihres Kundenservice-Teams durch proaktive Kommunikation.",
    color: "bg-navy",
  },
  {
    icon: Eye,
    value: 100,
    suffix: "%",
    label: "Mehr Transparenz",
    description: "Voller Überblick über alle Pakete hinweg – in Echtzeit.",
    color: "bg-navy",
  },
  {
    icon: Clock,
    value: 30,
    suffix: "%",
    label: "Zeitersparnis",
    description: "Effizientere Prozesse durch Automatisierung.",
    color: "bg-navy",
  },
  {
    icon: Heart,
    value: 85,
    suffix: "%",
    label: "Kundenzufriedenheit",
    description: "Verbessertes Kundenerlebnis durch Informationsvorsprung.",
    color: "bg-navy",
  },
];

function AnimatedCounter({ target, suffix, visible }: { target: number; suffix: string; visible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, target]);

  return (
    <span className="text-5xl font-heading font-semibold text-white">
      {count}{suffix}
    </span>
  );
}

export function Ergebnisse() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl">
            Was dabei{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              herauskommt
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Messbare Ergebnisse, die Trackly für Ihr Unternehmen liefert.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item, idx) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-xl ${item.color} p-8 text-white transition-transform hover:-translate-y-1 ${
                visible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="absolute top-4 right-4 opacity-10">
                <item.icon className="h-20 w-20" />
              </div>
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <AnimatedCounter target={item.value} suffix={item.suffix} visible={visible} />
                <h3 className="mt-2 text-lg font-bold">{item.label}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
