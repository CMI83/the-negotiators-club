export default function NoAccess(){
  return (
    <div className="container py-16">
      <h1 className="text-2xl font-bold">Kein Zugriff</h1>
      <p className="mt-2">Diese Seite ist nur für Mitglieder zugänglich.</p>
      <ul className="mt-4 space-y-2">
        <li>• Schon Mitglied? <a data-ms-modal="login" className="link cursor-pointer">Hier einloggen</a></li>
        <li>• <a className="link" href="/open">Open beitreten</a> (10 €/Monat)</li>
        <li>• <a className="link" href="/inner">Inner</a>: Einladung, Empfehlung oder Bewerbung</li>
      </ul>
    </div>
  );
}