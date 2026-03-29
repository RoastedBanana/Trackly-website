export default function DatenschutzPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-heading font-semibold text-dark mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-sm max-w-none text-muted space-y-6">
          <section>
            <h2 className="text-lg font-heading font-medium text-dark">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-base font-semibold text-dark mt-4">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">
              2. Verantwortliche Stelle
            </h2>
            <p>
              Trackly GmbH<br />
              Musterstraße 1<br />
              20095 Hamburg<br />
              E-Mail: info@trackly.de<br />
              Telefon: +49 40 123456789
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">3. Datenerfassung auf dieser Website</h2>
            <h3 className="text-base font-semibold text-dark mt-4">Cookies</h3>
            <p>
              Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf
              Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser
              Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>

            <h3 className="text-base font-semibold text-dark mt-4">Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
              Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des
              zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">4. Analyse-Tools und Werbung</h2>
            <p>
              Wir setzen auf unserer Website keine Analyse-Tools oder Werbung ein, die
              personenbezogene Daten verarbeiten, ohne Ihre ausdrückliche Einwilligung.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">5. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Die Einschränkung der Verarbeitung zu verlangen</li>
              <li>Der Verarbeitung zu widersprechen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">6. SSL-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
              Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
              dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-heading font-medium text-dark">7. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister gehostet. Die
              personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern
              des Hosters gespeichert. Die Server befinden sich in Deutschland.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
