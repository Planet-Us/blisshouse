import Seo from "../components/Seo.jsx";
import Header from "../components/Header.jsx";
import { areas } from "../data/areas.js";
import { Link } from "react-router-dom";

export default function AreasIndex() {
  return (
    <>
      <Seo
        title="Phuket Areas Real Estate | Rawai, Kata, Bang Tao – Blisshouse"
        description="Explore Phuket property areas. Local insights and curated listings for Rawai, Kata, Bang Tao and more."
        keywords="phuket areas real estate, rawai property, kata property, bang tao property, phuket villas, phuket condos"
        canonicalPath="/areas"
      />

      <Header />

      <div className="mx-auto max-w-6xl px-5 py-16">
        <h1 className="font-display text-4xl">Phuket Areas</h1>
        <p className="font-body text-[#f5e9c8]/80 mt-3 max-w-2xl">
          Area-focused SEO pages for Phuket buyers. Choose a location to explore property opportunities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 font-body">
          {areas.map((a) => (
            <Link
              key={a.slug}
              to={`/areas/${a.slug}`}
              className="border p-6 hover:bg-[#d4af37] hover:text-[#080722] transition"
              style={{ borderColor: "#2b2612", background: "rgba(255,255,255,0.02)" }}
            >
              <div className="font-display text-3xl">{a.name}</div>
              <div className="text-sm mt-2 opacity-80">
                Villas · Condos · Investment
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
