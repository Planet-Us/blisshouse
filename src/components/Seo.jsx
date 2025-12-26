// src/components/Seo.jsx
import { useEffect } from "react";

function upsertMeta(nameOrProp, key, content) {
  if (!content) return;
  const selector =
    key === "name"
      ? `meta[name="${nameOrProp}"]`
      : `meta[property="${nameOrProp}"]`;

  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, nameOrProp);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  keywords,
  canonicalPath = "/",
  ogImage = "/BHlogo.png",
}) {
  useEffect(() => {
    const siteUrl = "https://YOURDOMAIN.com"; // 나중에 실제 도메인으로 변경
    const canonical = siteUrl + canonicalPath;

    if (title) document.title = title;

    upsertMeta("description", "name", description);
    upsertMeta("keywords", "name", keywords);

    upsertLink("canonical", canonical);

    // Open Graph
    upsertMeta("og:title", "property", title);
    upsertMeta("og:description", "property", description);
    upsertMeta("og:type", "property", "website");
    upsertMeta("og:url", "property", canonical);
    upsertMeta("og:image", "property", siteUrl + ogImage);

    // Twitter (옵션)
    upsertMeta("twitter:card", "name", "summary_large_image");
    upsertMeta("twitter:title", "name", title);
    upsertMeta("twitter:description", "name", description);
    upsertMeta("twitter:image", "name", siteUrl + ogImage);
  }, [title, description, keywords, canonicalPath, ogImage]);

  return null;
}
