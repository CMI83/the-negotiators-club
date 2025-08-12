export const metadata = { title: "Open – The Negotiators Club" };

export default function Open() {
  return (
    <div className="container py-16">
      <div className="max-w-3xl">
        <img src="/open-logo.png" alt="The Open Circle" className="h-20 w-auto" />
        <h1 className="text-4xl font-bold mt-4">Open</h1>
        <p className="mt-3 text-slate-700">
          Dein monatlicher Taktgeber für besseres Verhandeln. Kurz, fokussiert, umsetzbar – für alle,
          die ihre Verhandlungspraxis schärfen wollen.
        </p>
        <div className="mt-6 card p-6">
          <h2 className="text-xl font-semibold">Was du bekommst</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
            <li>• Live: monatlicher Fokus-Impuls (45–60 Min.)</li>
            <li>• Bibliothek mit Playbooks, Checklisten & Templates</li>
            <li>• Community-Forum mit kuratierten Diskussionen</li>
            <li>• Deal-Reviews im Plenum (Einreichung möglich)</li>
            <li>• Mitglieder-Newsletter mit kompakten Taktiken</li>
          </ul>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="card p-6">
            <h3 className="font-semibold">Preis</h3>
            <p className="mt-2 text-3xl font-extrabold">10 €</p>
            <p className="text-sm text-slate-500">pro Monat · monatlich kündbar</p>
            <a data-ms-modal="signup" data-ms-plan="pln_open-circle-fee-ec8b0no6" className="mt-4 inline-block w-full text-center rounded-xl bg-slate-900 text-white py-3 font-semibold hover:opacity-90 cursor-pointer">
              Jetzt beitreten
            </a>
          </div>
          <div className="card p-6">
            <h3 className="font-semibold">Zielgruppe</h3>
            <p className="mt-2 text-slate-700">
              Für Praktiker:innen in Vertrieb, Einkauf, Projekt & Führung, die ihre Verhandlungsergebnisse
              kontinuierlich verbessern wollen.
            </p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="font-semibold text-lg">Fragen?</h3>
          <p className="text-slate-700">Schreib uns an <a className="link" href="mailto:kontakt@negotiators.club">kontakt@negotiators.club</a>.</p>
        </div>
      </div>
    </div>
  );
}