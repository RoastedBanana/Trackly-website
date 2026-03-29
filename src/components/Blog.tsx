"use client";

import { motion } from "framer-motion";
import { BlogPostCard } from "@/components/ui/blog-post-card";

const posts = [
  {
    tag: "E-Commerce",
    date: "15. März 2026",
    title: "5 Wege, wie proaktive Sendungskommunikation Ihren Umsatz steigert",
    description:
      "Erfahren Sie, wie Sie Tracking-Mails als Marketing-Kanal nutzen und Retouren reduzieren können.",
    href: "/blog",
  },
  {
    tag: "Logistik",
    date: "10. März 2026",
    title: "Multi-Carrier-Tracking: Warum ein zentrales System unverzichtbar ist",
    description:
      "Von DHL bis UPS – so behalten Sie alle Sendungen im Blick und optimieren Ihre Logistik.",
    href: "/blog",
  },
  {
    tag: "Kundenzufriedenheit",
    date: "5. März 2026",
    title: "White-Label vs. Standard: Was Kunden wirklich über Tracking-Mails denken",
    description:
      "Eine Studie zeigt: Personalisierte Tracking-Mails erhöhen die Kundenbindung um 40%.",
    href: "/blog",
  },
];

const featuredPost = {
  tag: "Case Study",
  date: "20. März 2026",
  title: "Wie Fashion24 mit Trackly 60% weniger Support-Tickets und 23% mehr Umsatz erreichte",
  description:
    "Ein Erfahrungsbericht aus erster Hand: Wie die Umstellung auf proaktive Sendungskommunikation den Kundenservice entlastet und gleichzeitig Cross-Selling-Umsätze generiert hat.",
  href: "/blog",
  imageUrl:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl">
            Aus dem{" "}
            <span className="bg-gradient-to-r from-accent to-blue bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted">
            Insights, Tipps und Best Practices rund um Sendungskommunikation.
          </p>
        </div>

        {/* Featured Post */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <BlogPostCard variant="featured" {...featuredPost} />
        </motion.div>

        {/* Grid of Posts */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BlogPostCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
