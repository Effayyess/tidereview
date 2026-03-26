// Breadcrumb component — TideReview.co.uk
// Renders visible breadcrumb trail + JSON-LD BreadcrumbList structured data for Google rich results
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit for the current (last) item
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const SITE_URL = "https://www.tidereview.co.uk";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Inject JSON-LD BreadcrumbList into <head> for Google rich results
  useEffect(() => {
    const allItems = [{ label: "Home", href: "/" }, ...items];
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": allItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.href ? `${SITE_URL}${item.href}` : undefined,
      })),
    };

    const existing = document.getElementById("breadcrumb-jsonld");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "breadcrumb-jsonld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById("breadcrumb-jsonld");
      if (el) el.remove();
    };
  }, [items]);

  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 border-b border-slate-100 bg-white"
    >
      <div className="container">
        <ol className="flex items-center flex-wrap gap-1 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={index} className="flex items-center gap-1">
                {index === 0 && (
                  <Home className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="font-medium truncate max-w-[200px]"
                    style={{ color: "oklch(0.22 0.08 262)" }}
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-slate-500 hover:text-slate-700 transition-colors no-underline truncate max-w-[160px]"
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
