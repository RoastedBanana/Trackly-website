"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Package } from "lucide-react";

const navLinks = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#integrationen", label: "Integrationen" },
  { href: "#showcase", label: "Showcase" },
  { href: "/pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-white">
              <Package className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold text-dark">Trackly</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors hover:text-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#kontakt"
              className="rounded-lg bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue"
            >
              Kostenlos starten
            </Link>
          </div>

          <button
            className="md:hidden p-3"
            onClick={() => setOpen(!open)}
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-dark"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-navy px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
