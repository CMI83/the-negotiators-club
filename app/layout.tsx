import "./globals.css";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "The Negotiators Club – A Circle of Minds Who Negotiate Differently.",
  description: "Open & Inner membership for people who negotiate differently.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        {/* Memberstack Bootstrap (muss VOR dem Script da sein) */}
        <Script id="ms-bootstrap" strategy="beforeInteractive">
          {`window.MemberStack = window.MemberStack || { onReady: [] };`}
        </Script>

        {/* Memberstack Library */}
        <Script
          id="ms-lib"
          src="https://api.memberstack.com/v2/memberstack.js"
          data-memberstack-app="pk_89825d0662d17a373e2b"
          strategy="afterInteractive"
        />
      </head>

      <body className="antialiased text-slate-800">
        <header className="fixed inset-x-0 top-0 z-50">
          <nav className="container">
            <div className="flex h-16 items-center justify-between rounded-2xl mt-3 px-3 bg-white/80 shadow-soft">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <img src="/tnc-logo.png" alt="The Negotiators Club" className="h-8 w-auto" />
                <span className="tracking-tight">The Negotiators Club</span>
              </Link>
              <ul className="hidden md:flex items-center gap-6 text-sm">
                <li><Link href="/open" className="hover:text-slate-900">Open</Link></li>
                <li><Link href="/inner" className="hover:text-slate-900">Inner</Link></li>
                <li><a data-ms-modal="login" className="hover:text-slate-900 cursor-pointer">Login</a></li>
                <li><a data-ms-modal="signup" className="hover:text-slate-900 cursor-pointer">Beitreten</a></li>
                <li><a data-ms-modal="profile" className="hover:text-slate-900 cursor-pointer">Profil</a></li>
                <li><Link href="/impressum" className="hover:text-slate-900">Impressum</Link></li>
                <li><Link href="/datenschutz" className="hover:text-slate-900">Datenschutz</Link></li>
              </ul>
            </div>
          </nav>
        </header>

        <main className="pt-24">{children}</main>

        <footer className="container py-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} The Negotiators Club
            </p>
            <div className="flex gap-4 text-sm">
              <Link href="/impressum" className="underline">Impressum</Link>
              <Link href="/datenschutz" className="underline">Datenschutz</Link>
            </div>
          </div>
        </footer>

        {/* Fallback: wenn das Auto-Binding von Memberstack mal nicht greift */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function attachMSCheckout(){
  function bind(){
    var ms = window.MemberStack;
    if(!ms || !ms.openCheckout){ return setTimeout(bind, 300); }
    document.querySelectorAll('[data-ms-checkout]').forEach(function(btn){
      if(btn.__msBound) return;
      btn.__msBound = true;
      btn.addEventListener('click', function(e){
        e.preventDefault();
        var plan = btn.getAttribute('data-ms-checkout');
        try { ms.openCheckout({ plans: [plan] }); } catch(_) {}
      });
    });
  }
  bind();
})();`,
          }}
        />
      </body>
    </html>
  );
}
