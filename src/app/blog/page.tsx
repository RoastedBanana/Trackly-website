import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    category: "E-Commerce",
    title: "5 Wege, wie proaktive Sendungskommunikation Ihren Umsatz steigert",
    excerpt:
      "Erfahren Sie, wie Sie Tracking-Mails als Marketing-Kanal nutzen und Retouren reduzieren können.",
    date: "15. März 2026",
    readTime: "5 Min.",
  },
  {
    category: "Logistik",
    title: "Multi-Carrier-Tracking: Warum ein zentrales System unverzichtbar ist",
    excerpt:
      "Von DHL bis UPS – so behalten Sie alle Sendungen im Blick und optimieren Ihre Logistik.",
    date: "10. März 2026",
    readTime: "7 Min.",
  },
  {
    category: "Kundenzufriedenheit",
    title: "White-Label vs. Standard: Was Kunden wirklich über Tracking-Mails denken",
    excerpt:
      "Eine Studie zeigt: Personalisierte Tracking-Mails erhöhen die Kundenbindung um 40%.",
    date: "5. März 2026",
    readTime: "4 Min.",
  },
  {
    category: "Technologie",
    title: "REST API vs. Webhooks: Welche Integration passt zu Ihrem Shop?",
    excerpt:
      "Ein technischer Vergleich der beiden Integrationsmethoden mit Praxisbeispielen.",
    date: "28. Februar 2026",
    readTime: "8 Min.",
  },
  {
    category: "Best Practices",
    title: "Cross-Selling in Tracking-Mails: Do's and Don'ts",
    excerpt:
      "Wie Sie Tracking-Mails für zusätzlichen Umsatz nutzen, ohne Ihre Kunden zu nerven.",
    date: "20. Februar 2026",
    readTime: "6 Min.",
  },
  {
    category: "Case Study",
    title: "Wie Fashion24 mit Trackly 60% weniger Support-Tickets erreichte",
    excerpt:
      "Ein Erfahrungsbericht aus erster Hand über die Umstellung auf proaktive Sendungskommunikation.",
    date: "15. Februar 2026",
    readTime: "5 Min.",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h1 className="text-3xl font-heading font-semibold text-dark sm:text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-lg text-muted">
            Insights, Tipps und Best Practices rund um Sendungskommunikation und E-Commerce-Logistik.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-xl bg-white p-6 border border-border transition-colors duration-200 hover:border-accent cursor-pointer"
            >
              <div className="mb-4">
                <span className="inline-flex rounded-full bg-tint px-3 py-1 text-xs font-medium text-accent">
                  {post.category}
                </span>
              </div>
              <h2 className="text-lg font-heading font-semibold text-dark leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-muted group-hover:text-accent transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
