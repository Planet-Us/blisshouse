import { useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Header from "../components/Header.jsx";
import { areas } from "../data/areas.js";
import { Link } from "react-router-dom";

export default function AreaPage() {
  const { areaSlug } = useParams();
  const area = areas.find((a) => a.slug === areaSlug);

  if (!area) {
    return (
      <>
        <Header />
        <div className="mx-auto max-w-6xl px-5 py-16 font-body text-[#f5e9c8]/80">
          Area not found.
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title={area.title}
        description={area.description}
        keywords={area.keywords}
        canonicalPath={`/areas/${area.slug}`}
      />

      <Header />

      <div className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="font-display text-4xl">
          {area.name} Property for Sale in Phuket
        </h1>
        <p className="font-body text-[#f5e9c8]/80 mt-4 max-w-3xl">
          {area.description}
        </p>

        {/* SEO 텍스트 블록(중요) */}
        <section className="mt-12 border p-7" style={{ borderColor: "#2b2612", background: "rgba(255,255,255,0.02)" }}>
          <h2 className="font-display text-3xl mb-4">
            {area.name} Real Estate Guide
          </h2>
          <div className="font-body text-[#f5e9c8]/85 space-y-4">
            <p>
              Blisshouse provides curated property options in {area.name}, Phuket — including luxury villas,
              condos, and investment land. We help foreign buyers understand ownership pathways and support
              secure purchase processes.
            </p>
            <p>
              If you are searching for "{area.name.toLowerCase()} villa for sale" or "{area.name.toLowerCase()} condo for sale",
              this page is designed to help you explore opportunities and compare options efficiently.
            </p>
          </div>
        </section>

        {/* 내부 링크 (SEO) */}
        <div className="mt-12">
          <h3 className="font-display text-2xl mb-4">Explore Other Phuket Areas</h3>
          <div className="flex flex-wrap gap-3 font-body">
            {areas
              .filter((a) => a.slug !== area.slug)
              .map((a) => (
                <Link
                  key={a.slug}
                  to={`/areas/${a.slug}`}
                  className="px-4 py-2 border hover:bg-[#d4af37] hover:text-[#080722] transition"
                  style={{ borderColor: "#2b2612", background: "#0e0c1a" }}
                >
                  {a.name}
                </Link>
              ))}
          </div>
          <div className="mt-8">
            <Link className="underline font-body text-[#f5e9c8]/85 hover:text-[#d4af37]" to="/areas">
              ← Back to all areas
            </Link>
          </div>
        </div>

        {/* 문의 CTA */}
        <div className="mt-14 text-center">
          <a
            href="mailto:eklee808@gmail.com"
            className="inline-block px-8 py-3 border hover:bg-[#d4af37] hover:text-[#080722] transition"
            style={{ borderColor: "#d4af37" }}
          >
            Ask about {area.name} properties
          </a>
        </div>
      </div>
    </>
  );
}
