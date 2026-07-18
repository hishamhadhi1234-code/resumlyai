const SITE_URL = "https://resumlyai.lovable.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/placeholder.svg`;

type SEOOptions = {
  title: string;
  description: string;
  path: string; // e.g. "/blog/..."
  image?: string;
  type?: "website" | "article";
  publishedTime?: string; // ISO date
  author?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function setSEO({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "article",
  publishedTime,
  author = "Resumly",
}: SEOOptions) {
  const url = `${SITE_URL}${path}`;

  document.title = title;

  upsertMeta("name", "description", description);
  upsertMeta("name", "author", author);
  upsertLink("canonical", url);

  // Open Graph
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", type);
  upsertMeta("property", "og:url", url);
  upsertMeta("property", "og:image", image);
  upsertMeta("property", "og:site_name", "Resumly");

  if (type === "article" && publishedTime) {
    upsertMeta("property", "article:published_time", publishedTime);
    upsertMeta("property", "article:author", author);
  }

  // Twitter
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", image);

  // Article JSON-LD for blog posts
  const ldId = "route-jsonld";
  document.getElementById(ldId)?.remove();
  if (type === "article") {
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.id = ldId;
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      image,
      author: { "@type": "Organization", name: author },
      publisher: {
        "@type": "Organization",
        name: "Resumly",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/placeholder.svg` },
      },
      datePublished: publishedTime,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    });
    document.head.appendChild(ld);
  }
}
