import Hero from "@/components/Hero";
import MembershipCards from "@/components/MembershipCards";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container py-10">
        <p className="text-center text-sm uppercase tracking-widest text-slate-500">A Circle of Minds Who Negotiate Differently</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-70">
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
          <div className="h-10 bg-slate-100 rounded" />
        </div>
      </section>
      <MembershipCards />
      <section className="bg-slate-50">
        <div className="container py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Worum es im Club geht</h2>
            <p className="mt-4 text-slate-700">
              Verhandeln ist kein Theater. Es ist Handwerk, Analyse, Timing und Haltung. Im Negotiators Club bündeln wir Methoden,
              Sparring und vertraulichen Austausch, damit du schneller zu tragfähigen Ergebnissen kommst – ohne verbrannte Erde.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/open" className="rounded-xl ring-1 ring-slate-200 px-4 py-2 font-semibold">Open ansehen</Link>
              <Link href="/inner" className="rounded-xl bg-slate-900 text-white px-4 py-2 font-semibold">Inner ansehen</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-200 aspect-video" />
        </div>
      </section>
    </>
  );
}