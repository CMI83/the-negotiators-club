export const metadata = {
  title: "Open – The Negotiators Club",
  description: "Monatlicher Taktgeber für besseres Verhandeln.",
};

export default function Page() {
  return (
    <div className="container space-y-10">
      <h1 className="text-4xl font-bold">Open</h1>
      <p className="text-slate-600 max-w-3xl">
        Dein monatlicher Taktgeber für besseres Verhandeln. Kurz, fokussiert, umsetzbar – für alle, die ihre Verhandlungspraxis schärfen wollen.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border p-6 bg-white shadow-soft">
          <h2 className="text-xl font-semibold mb-4">Was du bekommst</h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>Live: monatlicher Fokus-Impuls (45–60 Min.)</li>
            <li>Bibliothek mit Playbooks, Checklisten & Templates</li>
            <li>Community-Forum mit kuratierten Diskussionen</li>
            <li>Deal-Reviews im Plenum (Einreichung möglich)</li>
            <li>Mitglieder-Newsletter mit kompakten Taktiken</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6 bg-white shadow-soft space-y-6">
          <div>
            <div className="text-sm text-slate-500">Preis</div>
            <div className="text-4xl font-bold">10 €</div>
            <div className="text-sm text-slate-500">pro Monat · monatlich kündbar</div>
          </div>

          {/* Memberstack Checkout */}
          <button
            type="button"
            data-ms-checkout="pln_open-circle-fee-ec8b0no6"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-slate-900 text-white hover:bg-slate-800 active:scale-[.99]"
          >
            Jetzt beitreten
          </button>

          <div className="text-sm text-slate-500">
            Zielgruppe: Praktiker:innen in Vertrieb, Einkauf, Projekt & Führung, die ihre Verhandlungsergebnisse kontinuierlich verbessern wollen.
          </div>
        </div>
      </div>
    </div>
  );
}
