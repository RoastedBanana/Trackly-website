export default function ImpressumPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-semibold text-dark mb-8">Impressum</h1>

        <div className="prose prose-sm max-w-none text-muted space-y-6">
          <section>
            <h2 className="text-lg font-heading font-medium text-dark">Angaben gemäß § 5 TMG</h2>
            <p>
              Trackly GmbH<br />
              Musterstraße 1<br />
              20095 Hamburg<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">Vertreten durch</h2>
            <p>Geschäftsführer: Max Mustermann</p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">Kontakt</h2>
            <p>
              Telefon: +49 40 123456789<br />
              E-Mail: info@trackly.de
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Hamburg<br />
              Registernummer: HRB XXXXX
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE XXXXXXXXX
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Max Mustermann<br />
              Musterstraße 1<br />
              20095 Hamburg
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
