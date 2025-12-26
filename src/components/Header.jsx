import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BRAND = { gold: "#d4af37", sub: "#f5e9c8", card: "#0e0c1a", border: "#2b2612" };

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const nav = [
    { label: "Areas", to: "/areas" },
    { label: "Contact", to: "/#contact" }, // Home 섹션 앵커 (SPA에서 Home일 때만 정확)
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/25" style={{ borderBottom: `1px solid ${BRAND.border}` }}>
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/BHlogo.png" alt="Blisshouse Logo" className="h-10 md:h-12 object-contain" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-[#f5e9c8]/80 hover:text-[#d4af37] transition">
              {n.label}
            </Link>
          ))}
          <a
            href="mailto:eklee808@gmail.com"
            className="px-4 py-2 border hover:bg-[#d4af37] hover:text-[#080722] transition"
            style={{ borderColor: BRAND.gold }}
          >
            Inquire
          </a>
        </nav>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 border" style={{ borderColor: BRAND.border }} onClick={() => setOpen(true)}>
          <div className="space-y-1.5">
            <div className="w-5 h-[2px]" style={{ background: BRAND.gold }} />
            <div className="w-5 h-[2px]" style={{ background: BRAND.gold }} />
            <div className="w-5 h-[2px]" style={{ background: BRAND.gold }} />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[84%] max-w-sm p-6" style={{ background: BRAND.card, borderLeft: `1px solid ${BRAND.border}` }}>
            <div className="flex items-center justify-between">
              <div className="font-display text-xl text-[#d4af37]">Menu</div>
              <button className="w-10 h-10 border" style={{ borderColor: BRAND.border }} onClick={() => setOpen(false)}>
                ✕
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-4 font-body">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-3 border-b text-[#f5e9c8]/85 hover:text-[#d4af37] transition"
                  style={{ borderColor: BRAND.border }}
                >
                  {n.label}
                </Link>
              ))}
              <a
                href="mailto:eklee808@gmail.com"
                onClick={() => setOpen(false)}
                className="mt-4 text-center px-4 py-3 border hover:bg-[#d4af37] hover:text-[#080722] transition"
                style={{ borderColor: BRAND.gold }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
