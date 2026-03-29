"use client";

import { Bot } from "lucide-react";
import {
  CustomAccordion,
  CustomAccordionItem,
  CustomAccordionTrigger,
  CustomAccordionContent,
} from "@/components/ui/faq-accordion";

const faqs = [
  {
    question: "Was ist Trackly und wie funktioniert es?",
    answer:
      "Trackly ist eine smarte Aftership-Kommunikationslösung, die alle Versanddienstleister in einem System vereint. Sendungsnummern werden automatisch importiert, der Carrier erkannt und Ihre Kunden erhalten Echtzeit-Updates per E-Mail in Ihrem Corporate Design.",
  },
  {
    question: "Welche Versanddienstleister werden unterstützt?",
    answer:
      "Trackly unterstützt alle großen Carrier wie DHL, DPD, UPS, Hermes, GLS, FedEx, TNT, Amazon Logistics und viele weitere. Durch unsere Multi-Carrier-Integration können Sie alle Sendungen zentral verwalten.",
  },
  {
    question: "Wie lässt sich Trackly in meinen Online-Shop integrieren?",
    answer:
      "Trackly bietet Integrationen für alle gängigen Shop-Systeme wie Shopify, WooCommerce, Shopware und Magento. Alternativ können Sie unsere REST API oder Webhooks nutzen, um Trackly in Ihr bestehendes ERP-System zu integrieren.",
  },
  {
    question: "Kann ich die Tracking-Mails individuell gestalten?",
    answer:
      "Ja! Trackly bietet vollständiges White-Labeling. Sie können E-Mails komplett in Ihrem Corporate Design gestalten, personalisierte Inhalte einfügen und sogar Cross-Selling-Elemente hinzufügen. Multi-Language-Support ist ebenfalls integriert.",
  },
  {
    question: "Wie schnell reduziert Trackly Kundenanfragen?",
    answer:
      "Unsere Kunden berichten im Durchschnitt von einer 50% Reduzierung der Kundenanfragen zum Sendungsstatus bereits in den ersten 4 Wochen. Durch proaktive Echtzeit-Kommunikation wissen Ihre Kunden immer, wo ihr Paket ist.",
  },
  {
    question: "Gibt es eine Mindestanzahl an Sendungen?",
    answer:
      "Trackly ist ideal für Unternehmen mit mehr als 100 Sendungen monatlich. Wir bieten flexible Tarife für verschiedene Sendungsvolumen – vom Startup bis zum Enterprise-Kunden.",
  },
  {
    question: "Wie sicher sind meine Daten bei Trackly?",
    answer:
      "Ihre Daten werden DSGVO-konform in deutschen Rechenzentren gespeichert. Wir verwenden modernste Verschlüsselungstechnologien und führen regelmäßige Sicherheitsaudits durch.",
  },
  {
    question: "Kann ich Trackly kostenlos testen?",
    answer:
      "Ja! Sie können Trackly 14 Tage lang kostenlos und unverbindlich testen. In dieser Zeit haben Sie Zugang zu allen Features und können die Plattform mit Ihrem eigenen Sendungsvolumen testen.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm font-medium text-accent mb-4">
            <Bot className="h-4 w-4" />
            Häufige Fragen
          </div>
          <h2 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl">
            Ihre Fragen,{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              unsere Antworten
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Finden Sie schnell Antworten auf die häufigsten Fragen zu Trackly.
          </p>
        </div>

        <CustomAccordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <CustomAccordionItem key={index} value={`item-${index}`}>
              <CustomAccordionTrigger>{faq.question}</CustomAccordionTrigger>
              <CustomAccordionContent>{faq.answer}</CustomAccordionContent>
            </CustomAccordionItem>
          ))}
        </CustomAccordion>
      </div>
    </section>
  );
}
