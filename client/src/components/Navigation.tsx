// Navigation component for TideReview.co.uk
// Design: Tide navy (#1a2e5a) sticky header, Sora font, green CTA button for REFER200
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features", dropdown: [
    { label: "Invoicing", href: "/invoicing" },
    { label: "Accounting & VAT", href: "/accounting" },
    { label: "Card Reader", href: "/card-reader" },
  ]},
  { label: "Pricing", href: "/pricing" },
  { label: "Business vs Personal", href: "/business-vs-personal" },
  { label: "Company Setup", href: "/company-setup" },
  { label: "Reviews", href: "/reviews" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky-header">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-black text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>T</span>
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
                TideReview
                <span className="text-emerald-400">.co.uk</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-md transition-all"
                    style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {/* Dropdown */}
                  <div
                    className="absolute top-full left-0 mt-1 w-52 rounded-xl shadow-2xl overflow-hidden transition-all"
                    style={{
                      background: 'oklch(0.18 0.06 262)',
                      border: '1px solid oklch(0.32 0.10 262)',
                      opacity: featuresOpen ? 1 : 0,
                      pointerEvents: featuresOpen ? 'auto' : 'none',
                      transform: featuresOpen ? 'translateY(0)' : 'translateY(-8px)',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-slate-200 hover:text-white hover:bg-white/10 transition-colors no-underline"
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
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
                  className={`px-3 py-2 text-sm rounded-md transition-all no-underline ${
                    location === link.href
                      ? 'text-white bg-white/15 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-4 py-2 rounded-lg text-sm font-semibold no-underline flex items-center gap-2"
            >
              <span className="text-emerald-200 font-mono font-bold text-xs bg-black/20 px-1.5 py-0.5 rounded">REFER200</span>
              Claim £200 Free
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10" style={{ background: 'oklch(0.18 0.06 262)' }}>
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm text-slate-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors no-underline"
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
                        className="block px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors no-underline"
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
              className="mt-3 cta-primary px-4 py-3 rounded-lg text-sm font-semibold text-center no-underline"
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
