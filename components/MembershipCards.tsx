import Link from "next/link";

function Card({ title, price, period, bullets, ctaHref, ctaLabel, note } : {
  title: string; price: string; period: string; bullets: string[]; ctaHref: string; ctaLabel: string; note?: string;
}) {
  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-4"><div className="text-3xl font-extrabold">{price}</div><div className="text-sm text-slate-500">{period}</div></div>
      <ul className="mt-6 space-y-2 text-slate-700">{bullets.map((b,i)=><li key={i}>• {b}</li>)}</ul>
      <Link href={ctaHref} className="mt-6 inline-block w-full text-center rounded-xl bg-slate-900 text-white py-3 font-semibold hover:opacity-90">{ctaLabel}</Link>
      {note ? <p className="mt-3 text-xs text-slate-500">{note}</p> : null}
    </div>
  );
}

export default function MembershipCards(){
  return (
    <section className="container py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">Zwei Bereiche. Ein Anspruch: wirksam verhandeln.</h2>
        <p className="mt-3 text-slate-600">Wähle die Mitgliedschaft, die zu deiner Verantwortung und deinem Taktungsniveau passt.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card title="Open" price="10 €" period="pro Monat, monatlich kündbar"
          bullets={["Monatlicher Fokus-Impuls (Live)","Bibliothek mit Playbooks & Checklisten","Community-Forum (kuratiert)","Deal-Reviews im Plenum (Auswahl)","Mitglieder-Newsletter"]}
          ctaHref="/open" ctaLabel="Mehr zu Open"/>
        <Card title="Inner" price="50.000 €" period="pro Jahr, exklusive Kohorte"
          bullets={["Vertrauliches Executive-Sparring (1:1)","Kuratiertes Board erfahrener Verhandler:innen","Closed-Door Deal Rooms (strikt NDA)","On-Demand Begleitung in kritischen Phasen","Jährliches Offsite & vertrauliche Dinners"]}
          ctaHref="/inner" ctaLabel="Mehr zu Inner" note="Aufnahme nach Einladung, Empfehlung oder Bewerbung."/>
      </div>
    </section>
  );
}