"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Package, Truck } from "lucide-react";
import {
  FaDhl, FaUps, FaFedex, FaAmazon, FaShopify, FaMagento,
} from "react-icons/fa";
import {
  SiShopware, SiWoo, SiSap,
} from "react-icons/si";


const iconConfigs = [
  { Icon: FaDhl, color: "#FFCC00", label: "DHL" },
  { Icon: FaUps, color: "#351C15", label: "UPS" },
  { Icon: FaFedex, color: "#4D148C", label: "FedEx" },
  { Icon: FaAmazon, color: "#FF9900", label: "Amazon" },
  { Icon: FaShopify, color: "#96BF48", label: "Shopify" },
  { Icon: SiWoo, color: "#96588A", label: "WooCommerce" },
  { Icon: SiShopware, color: "#189EFF", label: "Shopware" },
  { Icon: FaMagento, color: "#EE672F", label: "Magento" },
  { Icon: SiSap, color: "#0FAAFF", label: "SAP" },
  { Icon: null, label: "DPD", color: "#DC0032" },
  { Icon: null, label: "Hermes", color: "#009FE3" },
  { Icon: null, label: "GLS", color: "#003A7D" },
  { Icon: null, label: "TNT", color: "#FF6600" },
  { Icon: null, label: "REST API", color: "#1a56db" },
  { Icon: null, label: "Webhooks", color: "#06b6d4" },
];

const steps = [
  {
    step: "01",
    title: "Import",
    description: "Sendungsnummern manuell oder automatisch einlesen",
  },
  {
    step: "02",
    title: "Erkennung",
    description: "Automatische Identifikation des Versanddienstleisters",
  },
  {
    step: "03",
    title: "Updates",
    description: "Echtzeit-Statusmeldungen für Sie und Ihre Kunden",
  },
  {
    step: "04",
    title: "Übersicht",
    description: "Alle Bewegungen und Auswertungen im Dashboard",
  },
];

export function Integrationen() {
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

  const orbitCount = 3;
  const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

  return (
    <section id="integrationen" ref={ref} className="py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Integration Orbit Section */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 mb-24 overflow-hidden min-h-[30rem]">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 z-10">
            <h2 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl leading-tight">
              Nahtlose{" "}
              <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
                Integrationen
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed max-w-lg">
              Alle großen Versanddienstleister und E-Commerce-Plattformen in einem System.
              Verbinden Sie Trackly mit Ihrem bestehenden Stack in Minuten.
            </p>
            <div className="mt-8">
              <a href="#kontakt" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-navy transition-colors">
                Alle Integrationen ansehen
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right: Orbit Animation */}
          <div className="relative w-full lg:w-1/2 h-[28rem] lg:h-full flex items-center justify-center lg:justify-start overflow-hidden">
            <div className="relative w-[52rem] h-[52rem] lg:translate-x-[45%] flex items-center justify-center">
              {/* Center Icon */}
              <div className="w-20 h-20 rounded-full bg-white border border-border flex items-center justify-center z-10">
                <Package className="w-9 h-9 text-accent" />
              </div>

              {/* Orbits */}
              {[...Array(orbitCount)].map((_, orbitIdx) => {
                const sizeRem = 12 + 8 * (orbitIdx + 1);
                const size = `${sizeRem}rem`;
                const radiusPx = `${sizeRem / 2}rem`;
                const orbitIcons = iconConfigs.slice(
                  orbitIdx * iconsPerOrbit,
                  orbitIdx * iconsPerOrbit + iconsPerOrbit
                );
                const duration = 16 + orbitIdx * 8;
                const reverse = orbitIdx % 2 === 1;

                return (
                  <div
                    key={orbitIdx}
                    className="absolute rounded-full border-2 border-dashed border-border left-1/2 top-1/2"
                    style={{
                      width: size,
                      height: size,
                      marginLeft: `-${sizeRem / 2}rem`,
                      marginTop: `-${sizeRem / 2}rem`,
                      animation: `orbit-spin ${duration}s linear infinite${reverse ? " reverse" : ""}`,
                    }}
                  >
                    {orbitIcons.map((cfg, iconIdx) => {
                      const angleDeg = (iconIdx * 360) / orbitIcons.length;
                      const rad = (angleDeg * Math.PI) / 180;
                      const x = 50 + 50 * Math.cos(rad - Math.PI / 2);
                      const y = 50 + 50 * Math.sin(rad - Math.PI / 2);

                      return (
                        <div
                          key={iconIdx}
                          className="absolute"
                          style={{
                            left: `${x}%`,
                            top: `${y}%`,
                          }}
                        >
                          <div
                            className="bg-white rounded-full p-2 border border-border -translate-x-1/2 -translate-y-1/2"
                            style={{
                              animation: `orbit-spin ${duration}s linear infinite${reverse ? "" : " reverse"}`,
                            }}
                          >
                            {cfg.Icon ? (
                              <cfg.Icon className="w-6 h-6" style={{ color: cfg.color }} />
                            ) : (
                              <span
                                className="flex w-6 h-6 items-center justify-center text-[8px] font-bold rounded"
                                style={{ color: cfg.color }}
                              >
                                {cfg.label}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* So funktioniert's */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-heading font-semibold text-dark sm:text-4xl">
              So{" "}
              <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
                funktioniert&apos;s
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted">
              In vier einfachen Schritten zur automatisierten Sendungskommunikation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <div key={item.step} className="relative">
                <div
                  className={`rounded-xl bg-surface p-6 h-full ${
                    visible ? "animate-slide-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <span className="text-4xl font-heading font-semibold text-accent/10">{item.step}</span>
                  <h4 className="mt-2 text-lg font-bold text-dark">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-5 h-5 w-5 text-accent/30 -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
