import { useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import { listings } from "../data/listings.js";

export default function ListingPage() {
  const { listingSlug } = useParams();
  const item = (listings || []).find((l) => l.slug === listingSlug);

  if (!item) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-16 font-body text-[#f5e9c8]/80">
        Listing not found.
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Seo
        title={`${item.title} | Phuket Property for Sale – Blisshouse`}
        description={`${item.title} in Phuket. ${item.summary}. Price ${item.price}. Contact Blisshouse for details.`}
        keywords={`phuket property, ${item.areaSlug} property, ${item.title}, villa for sale, condo for sale`}
        canonicalPath={`/properties/${item.slug}`}
      />

      <h1 className="font-display text-4xl">{item.title}</h1>
      <p className="font-body text-[#f5e9c8]/80 mt-4">{item.summary}</p>
      <p className="font-body mt-4">{item.price}</p>

      <div className="mt-10 border p-6 font-body text-[#f5e9c8]/85" style={{ borderColor: "#2b2612", background: "#0e0c1a" }}>
        <h2 className="font-display text-2xl">Inquire about this property</h2>
        <p className="mt-2">
          Email: <a className="underline" href="mailto:eklee808@gmail.com">eklee808@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
