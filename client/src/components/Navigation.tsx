// Navigation component for TideReview.co.uk
// Design: Compact single-line sticky header — Tide navy, Sora font, tight CTA
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Features", href: "/features", dropdown: [
      { label: "All Features", href: "/features" },
      { label: "Invoicing", href: "/invoicing" },
      { label: "Accounting & VAT", href: "/accounting" },
      { label: "Card Reader", href: "/card-reader" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "vs Competitors", href: "/compare" },
  {
    label: "Business Guide", href: "/business-vs-personal", dropdown: [
      { label: "Business vs Personal", href: "/business-vs-personal" },
      { label: "Company Setup", href: "/company-setup" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <header className="sticky-header">
      <div className="container">
        <div className="flex items-center justify-between h-14 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 no-underline flex-shrink-0">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
              <span className="text-white font-black text-xs" style={{ fontFamily: 'Sora, sans-serif' }}>T</span>
            </div>
            <span className="text-white font-bold text-base leading-none" style={{ fontFamily: 'Sora, sans-serif' }}>
              TideReview<span className="text-emerald-400">.co.uk</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-all whitespace-nowrap"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                  >
                    {link.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                  <div
                    className="absolute top-full left-0 mt-1 w-52 rounded-xl shadow-2xl overflow-hidden"
                    style={{
                      background: 'oklch(0.18 0.06 262)',
                      border: '1px solid oklch(0.32 0.10 262)',
                      opacity: openDropdown === link.label ? 1 : 0,
                      pointerEvents: openDropdown === link.label ? 'auto' : 'none',
                      transform: openDropdown === link.label ? 'translateY(0)' : 'translateY(-6px)',
                      transition: 'all 0.15s ease',
                      zIndex: 100,
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 text-xs text-slate-200 hover:text-white hover:bg-white/10 transition-colors no-underline"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 text-xs rounded-md transition-all no-underline whitespace-nowrap ${
                    location === link.href
                      ? 'text-white bg-white/15 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button — compact */}
          <div className="hidden xl:flex items-center flex-shrink-0">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-3 py-1.5 rounded-lg text-xs font-bold no-underline flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="font-mono font-black bg-black/20 px-1.5 py-0.5 rounded text-emerald-200 text-xs">REFER200</span>
              <span>Claim £200</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden border-t border-white/10" style={{ background: 'oklch(0.18 0.06 262)' }}>
          <div className="container py-3 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-3 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors no-underline"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 border-l border-white/10 pl-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors no-underline"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 cta-primary px-4 py-2.5 rounded-lg text-sm font-semibold text-center no-underline"
              onClick={() => setMobileOpen(false)}
            >
              🎁 Claim £200 Free — Code: REFER200
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
