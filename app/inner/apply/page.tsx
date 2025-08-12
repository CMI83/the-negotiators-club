"use client";
import { useState } from "react";
export default function InnerApply(){
  const [name,setName]=useState(""),[email,setEmail]=useState(""),[role,setRole]=useState(""),[org,setOrg]=useState(""),[motivation,setMotivation]=useState(""),[refs,setRefs]=useState("");
  function submit(e:any){ e.preventDefault();
    const subject = `Inner Bewerbung – ${name||"Unbekannt"}`;
    const body = `Name: ${name}
E-Mail: ${email}
Rolle/Titel: ${role}
Organisation: ${org}

Kurz: Worum geht es in Ihren Verhandlungen?
${motivation}

Referenzen (optional):
${refs}`;
    window.location.href = `mailto:info@ismanundpartner.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <div className="container py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold">Bewerbung – Inner</h1>
        <p className="mt-3 text-slate-700">Der Inner-Bereich ist kuratiert. Bitte gib uns ein paar Eckdaten – wir melden uns vertraulich zurück.</p>
        <form onSubmit={submit} className="mt-6 card p-6 space-y-4">
          <div><label className="block text-sm font-medium">Name</label><input required value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
          <div><label className="block text-sm font-medium">E-Mail</label><input required type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium">Rolle/Titel</label><input value={role} onChange={e=>setRole(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
            <div><label className="block text-sm font-medium">Organisation</label><input value={org} onChange={e=>setOrg(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
          </div>
          <div><label className="block text-sm font-medium">Kurz: Worum geht es in deinen Verhandlungen?</label><textarea rows={5} value={motivation} onChange={e=>setMotivation(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
          <div><label className="block text-sm font-medium">Referenzen (optional)</label><textarea rows={3} value={refs} onChange={e=>setRefs(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2"/></div>
          <button type="submit" className="w-full rounded-xl bg-slate-900 text-white py-3 font-semibold hover:opacity-90">Bewerbung per E-Mail vorbereiten</button>
          <p className="text-xs text-slate-500">Hinweis: Der Button öffnet dein E-Mail-Programm mit einer vorbefüllten Nachricht an info@ismanundpartner.com.</p>
        </form>
      </div>
    </div>
  );
}