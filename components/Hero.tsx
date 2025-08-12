import Link from "next/link";
export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
      <div className="container pt-24 pb-24 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            A Circle of Minds<br/>Who Negotiate Differently.
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Der Club für Menschen, die Verhandeln als Disziplin verstehen: präzise vorbereitet, ruhig im Druck, wirksam im Ergebnis.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/open" className="rounded-2xl bg-white text-slate-900 px-5 py-3 font-semibold shadow">Open beitreten</Link>
            <Link href="/inner" className="rounded-2xl ring-1 ring-white/60 px-5 py-3 font-semibold hover:bg-white/10">Inner ansehen</Link>
          </div>
        </div>
      </div>
    </section>
  );
}