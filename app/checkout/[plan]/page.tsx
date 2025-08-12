export default function Checkout({ params }: { params: { plan: "open" | "inner" } }) {
  const isOpen = params.plan === "open";
  return (
    <div className="container py-16">
      <div className="max-w-xl card p-6">
        <h1 className="text-2xl font-bold">{isOpen ? "Open beitreten" : "Inner – Bewerbung"}</h1>
        <p className="mt-2 text-slate-700">Preis: {isOpen ? "10 € / Monat" : "50.000 € / Jahr"}</p>
        {isOpen ? (
          <p className="mt-2 text-slate-700">Open wird monatlich abgerechnet. Der Zugang wird nach erfolgreicher Zahlung automatisch freigeschaltet.</p>
        ) : (
          <p className="mt-2 text-slate-700">Inner hat keinen Direktkauf. Zugang nur über Einladung, Empfehlung oder Bewerbung.</p>
        )}
        <div className="mt-6 grid gap-3">
          {isOpen ? (
            <a data-ms-modal="signup" data-ms-plan="pln_open-circle-fee-ec8b0no6" className="inline-block w-full text-center rounded-xl bg-slate-900 text-white py-3 font-semibold hover:opacity-90 cursor-pointer">Checkout öffnen</a>
          ) : (
            <a data-ms-modal="signup" data-ms-plan="pln_inner-circle-application-klab0w6h" className="inline-block w-full text-center rounded-xl bg-slate-900 text-white py-3 font-semibold hover:opacity-90 cursor-pointer">Jetzt bewerben</a>
          )}
          <a href="/inner/apply" className="inline-block w-full text-center rounded-xl ring-1 ring-slate-200 py-3 font-semibold">Bewerbung per E-Mail</a>
          <a href="mailto:info@ismanundpartner.com?subject=The Negotiators Club" className="inline-block w-full text-center rounded-xl ring-1 ring-slate-200 py-3 font-semibold">Kontakt per E-Mail</a>
        </div>
      </div>
    </div>
  );
}