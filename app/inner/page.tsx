export const metadata = { title: "Inner – The Negotiators Club" };

export default function Inner() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl">
        <img src="/inner-logo.png" alt="The Inner Circle" className="h-20 w-auto" />
        <h1 className="text-4xl font-bold mt-4">Inner</h1>
        <p className="mt-3 text-slate-700">
          Die exklusive Kohorte für Entscheidungsträger:innen, die in kritischen, komplexen und politisierten Verhandlungen
          Verantwortung tragen. Strikt vertraulich, klar in der Linie, wirksam in der Umsetzung.
        </p>
        <div className="mt-6 card p-6">
          <h2 className="text-xl font-semibold">Leistungsumfang</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>• Vertrauliches Executive-Sparring (1:1, Kontingent)</li>
            <li>• Closed-Door Deal Rooms & Red-Team-Reviews</li>
            <li>• Kuratiertes Peer-Board (moderiert)</li>
            <li>• On-Demand Begleitung in kritischen Phasen</li>
            <li>• Jahres-Offsite, vertrauliche Dinners & Schwerpunkt-Workshops</li>
          </ul>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-semibold">Invest</h3>
            <p className="mt-2 text-3xl font-extrabold">50.000 €</p>
            <p className="text-sm text-slate-500">pro Jahr · limitierte Plätze</p>
            <a data-ms-modal="signup" data-ms-plan="pln_inner-circle-application-klab0w6h" className="mt-4 inline-block w-full text-center rounded-xl bg-slate-900 text-white py-3 font-semibold hover:opacity-90 cursor-pointer">
              Jetzt bewerben
            </a>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Aufnahme</h3>
            <p className="mt-2 text-slate-700">
              Zugang nur über: (a) persönliche Einladung, (b) Empfehlung eines Inner-Mitglieds oder (c) Bewerbung.
            </p>
            <p className="mt-2 text-slate-700">
              Empfehlungen bitte an <a className="link" href="mailto:info@ismanundpartner.com">info@ismanundpartner.com</a> senden.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold text-lg">Diskretion</h3>
          <p className="text-slate-700">Keine Namenslisten. Keine Außenkommunikation ohne ausdrückliche Zustimmung.</p>
        </div>
      </div>
    </div>
  );
}