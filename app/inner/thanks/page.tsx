import Link from "next/link";
export default function InnerThanks(){
  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold">Danke für deine Bewerbung</h1>
      <p className="mt-2">Wir prüfen deine Angaben vertraulich und melden uns zeitnah zurück.</p>
      <p className="mt-4">Bis dahin: <Link href="/open" className="link">Open ansehen</Link> oder <a className="link" data-ms-modal="profile">Profil öffnen</a>.</p>
    </div>
  );
}