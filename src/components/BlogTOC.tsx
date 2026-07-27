import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const BlogTOC = () => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;
    const nodes = Array.from(article.querySelectorAll("h2")) as HTMLHeadingElement[];
    const used = new Set<string>();
    const list: Heading[] = nodes.map((h) => {
      const text = h.textContent?.trim() ?? "";
      let id = h.id || slugify(text);
      let unique = id;
      let i = 2;
      while (used.has(unique)) unique = `${id}-${i++}`;
      used.add(unique);
      h.id = unique;
      h.style.scrollMarginTop = "80px";
      return { id: unique, text };
    });
    setHeadings(list);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
  };

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="not-prose my-8 rounded-xl border border-border bg-muted/40 p-5"
    >
      <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-foreground">
        <List className="w-4 h-4 text-primary" />
        Table of Contents
      </div>
      <ol className="space-y-2 list-decimal list-inside text-sm">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => handleClick(e, h.id)}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BlogTOC;
