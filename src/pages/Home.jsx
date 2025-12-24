// src/pages/Home.jsx
import { useEffect, useState } from "react";

const BRAND = {
  bg: "#080722",
  gold: "#d4af37",
  sub: "#f5e9c8",
  card: "#0e0c1a",
  border: "#2b2612",
};

export default function Home() {
  const [open, setOpen] = useState(false);

  // 모바일 메뉴 열렸을 때 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const nav = [
    { label: "Properties", href: "#properties" },
    { label: "About", href: "#about" },
    { label: "Categories", href: "#categories" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: BRAND.bg, color: BRAND.gold }}
    >
      {/* HEADER */}
      <header
        className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/25"
        style={{ borderBottom: `1px solid ${BRAND.border}` }}
      >
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img
                src="/BHlogo.png"
                alt="Blisshouse Logo"
                className="h-10 md:h-12 object-contain"
            />
        </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-body text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[#f5e9c8]/80 hover:text-[#d4af37] transition"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-4 py-2 border hover:bg-[#d4af37] hover:text-[#080722] transition"
              style={{ borderColor: BRAND.gold }}
            >
              Inquire
            </a>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border"
            style={{ borderColor: BRAND.border }}
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <div className="space-y-1.5">
              <div className="w-5 h-[2px]" style={{ background: BRAND.gold }} />
              <div className="w-5 h-[2px]" style={{ background: BRAND.gold }} />
              <div className="w-5 h-[2px]" style={{ background: BRAND.gold }} />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute right-0 top-0 h-full w-[84%] max-w-sm p-6"
            style={{ background: BRAND.card, borderLeft: `1px solid ${BRAND.border}` }}
          >
            <div className="flex items-center justify-between">
              <div className="font-display text-xl">Menu</div>
              <button
                className="w-10 h-10 border"
                style={{ borderColor: BRAND.border }}
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-4 font-body">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b text-[#f5e9c8]/85 hover:text-[#d4af37] transition"
                  style={{ borderColor: BRAND.border }}
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 text-center px-4 py-3 border hover:bg-[#d4af37] hover:text-[#080722] transition"
                style={{ borderColor: BRAND.gold }}
              >
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-5 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-body text-xs tracking-[0.25em] text-[#f5e9c8]/70">
              PHUKET · THAILAND
            </p>
            <h1 className="font-display text-5xl sm:text-6xl leading-tight mt-4">
              Premium Properties,
              <br />
              Curated for Lifestyle & ROI
            </h1>
            <p className="font-body text-[#f5e9c8]/80 mt-6 max-w-xl">
              Discover luxury pool villas, beachfront condos, and investment-grade land
              with a trusted Phuket-based team.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#properties"
                className="text-center px-8 py-3 border hover:bg-[#d4af37] hover:text-[#080722] transition"
                style={{ borderColor: BRAND.gold }}
              >
                Explore Properties
              </a>
              <a
                href="#contact"
                className="text-center px-8 py-3 border text-[#f5e9c8]/85 hover:text-[#d4af37] transition"
                style={{ borderColor: BRAND.border }}
              >
                Get Consultation
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { k: "Local", v: "Phuket Specialists" },
                { k: "Secure", v: "Buyer Assistance" },
                { k: "Yield", v: "Rental Strategy" },
              ].map((x) => (
                <div
                  key={x.k}
                  className="p-4 border"
                  style={{ borderColor: BRAND.border, background: "rgba(255,255,255,0.02)" }}
                >
                  <div className="font-display text-xl">{x.k}</div>
                  <div className="font-body text-xs text-[#f5e9c8]/75 mt-1">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual block */}
          <div
            className="h-[420px] sm:h-[520px] border relative overflow-hidden"
            style={{ borderColor: BRAND.border, background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(8,7,34,0.2))" }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl"
              style={{ background: "rgba(212,175,55,0.18)" }}
            />
            <div className="absolute bottom-10 left-10 right-10 border p-6"
              style={{ borderColor: BRAND.border, background: "rgba(14,12,26,0.75)" }}
            >
              <div className="font-display text-2xl">Phuket Highlights</div>
              <div className="font-body text-sm text-[#f5e9c8]/80 mt-2">
                Chalong · Wichit · Rawai · Kata · Bang Tao
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section id="properties" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl text-center mb-10">Featured Properties</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Luxury Pool Villa", meta: "3–5 BR · Private Pool · Hillside View" },
            { title: "Beachfront Condo", meta: "Sea View · Facilities · Rental Ready" },
            { title: "Investment Land", meta: "Prime Plot · Development Potential" },
          ].map((p) => (
            <div
              key={p.title}
              className="border overflow-hidden"
              style={{ borderColor: BRAND.border, background: BRAND.card }}
            >
              <div className="h-48 bg-black/30" />
              <div className="p-6">
                <h3 className="font-display text-xl">{p.title}</h3>
                <p className="font-body text-sm text-[#f5e9c8]/80 mt-2">{p.meta}</p>
                <button
                  className="mt-5 px-5 py-2 border hover:bg-[#d4af37] hover:text-[#080722] transition"
                  style={{ borderColor: BRAND.gold }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20" style={{ background: BRAND.card }}>
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-3xl mb-6">About Blisshouse</h2>
          <p className="font-body text-[#f5e9c8]/80 max-w-3xl">
            Blisshouse is a Phuket-based real estate team specializing in luxury villas,
            beachfront condominiums, and investment-grade land. We support international
            buyers with property selection, due diligence guidance, and rental yield strategy.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-3xl mb-10">Property Categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-body">
          {["Luxury Villas", "Condos", "Investment Land", "Rental Management"].map((c) => (
            <div
              key={c}
              className="border p-6 hover:bg-[#d4af37] hover:text-[#080722] transition"
              style={{ borderColor: BRAND.border, background: "rgba(255,255,255,0.02)" }}
            >
              <div className="font-display text-2xl">{c}</div>
              <div className="text-sm mt-2 opacity-80">
                Curated listings with local insights.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 text-center">
        <h2 className="font-display text-3xl mb-6">Contact Us</h2>
        <p className="font-body text-[#f5e9c8]/85">
          📍 89/40 Wichit, Mueang Phuket, Phuket <br />
          ✉️ eklee808@gmail.com
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            className="px-8 py-3 border hover:bg-[#d4af37] hover:text-[#080722] transition"
            style={{ borderColor: BRAND.gold }}
            href="mailto:eklee808@gmail.com"
          >
            Email Us
          </a>
          <a
            className="px-8 py-3 border text-[#f5e9c8]/85 hover:text-[#d4af37] transition"
            style={{ borderColor: BRAND.border }}
            href="#"
          >
            WhatsApp / LINE (Add later)
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-8 text-center font-body text-sm text-[#f5e9c8]/70"
        style={{ borderTop: `1px solid ${BRAND.border}` }}
      >
        © 2025 Blisshouse Real Estate · Phuket, Thailand
      </footer>
    </div>
  );
}
