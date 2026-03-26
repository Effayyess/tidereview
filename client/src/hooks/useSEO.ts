// useSEO.ts — Per-page dynamic SEO meta tag management
// Sets document.title and meta tags for each page to maximise SEO
// Target keywords: tide bank review, tide review, tide business account review, REFER200

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  keywords?: string;
}

export function useSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  keywords,
}: SEOProps) {
  useEffect(() => {
    // Page title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [attrName, attrVal] = selector.replace("meta[", "").replace("]", "").split("=");
        el.setAttribute(attrName, attrVal.replace(/"/g, ""));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // Description
    setMeta('meta[name="description"]', "content", description);

    // Keywords
    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }

    // Canonical
    if (canonical) {
      setLink("canonical", canonical);
    }

    // Open Graph
    setMeta('meta[property="og:title"]', "content", ogTitle || title);
    setMeta('meta[property="og:description"]', "content", ogDescription || description);
    if (canonical) {
      setMeta('meta[property="og:url"]', "content", canonical);
    }

    // Twitter
    setMeta('meta[name="twitter:title"]', "content", ogTitle || title);
    setMeta('meta[name="twitter:description"]', "content", ogDescription || description);
  }, [title, description, canonical, ogTitle, ogDescription, keywords]);
}
