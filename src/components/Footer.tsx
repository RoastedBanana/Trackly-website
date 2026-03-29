import Link from "next/link";
import { Package, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
                <Package className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold">Trackly</span>
            </div>
            <p className="text-sm text-muted-2 leading-relaxed">
              Die smarte Aftership-Kommunikationslösung für Ihr Unternehmen.
              Mehr Transparenz, weniger Kundenanfragen.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-2">
              Produkt
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#leistungen" className="text-sm text-muted-2 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#integrationen" className="text-sm text-muted-2 hover:text-white transition-colors">
                  Integrationen
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-2 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#showcase" className="text-sm text-muted-2 hover:text-white transition-colors">
                  Showcase
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-2">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-sm text-muted-2 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-muted-2 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-2">
              Kontakt
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-2">
                <Mail className="h-4 w-4 text-accent" />
                info@trackly.de
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-2">
                <Phone className="h-4 w-4 text-accent" />
                +49 40 123456789
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-2">
                <MapPin className="h-4 w-4 text-accent" />
                Hamburg, Deutschland
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} Trackly. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
