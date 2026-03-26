// Footer component for TideReview.co.uk
// Design: Navy background, clean grid layout, prominent REFER200 code
import { Link } from "wouter";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

export default function Footer() {
  return (
    <footer style={{ background: 'oklch(0.15 0.06 262)' }} className="text-slate-300">
      {/* Referral Banner */}
      <div style={{ background: 'linear-gradient(135deg, oklch(0.45 0.20 148), oklch(0.38 0.18 148))' }} className="py-8">
        <div className="container text-center">
          <p className="text-white text-lg font-semibold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
            Ready to open your Tide business account?
          </p>
          <p className="text-emerald-100 text-sm mb-4">
            Use referral code <strong className="text-white font-mono text-base bg-black/20 px-2 py-0.5 rounded">REFER200</strong> and get up to <strong className="text-white">£200 free cash</strong>
          </p>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 font-bold px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors no-underline text-sm"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Open Account — Get £200 Free →
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <span className="text-white font-black text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>T</span>
              </div>
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>
                TideReview<span className="text-emerald-400">.co.uk</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              The most comprehensive independent review of Tide business banking in the UK. We help UK business owners make informed decisions.
            </p>
            <div className="mt-4 p-3 rounded-lg" style={{ background: 'oklch(0.22 0.08 262)' }}>
              <p className="text-xs text-slate-400 mb-1">Exclusive Referral Code</p>
              <p className="text-white font-mono font-bold text-xl tracking-widest">REFER200</p>
              <p className="text-emerald-400 text-xs">Up to £200 free cash</p>
            </div>
          </div>

          {/* Review Pages */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Our Reviews
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Tide Bank Review", href: "/" },
                { label: "Pricing & Plans", href: "/pricing" },
                { label: "Invoicing Review", href: "/invoicing" },
                { label: "Accounting & VAT", href: "/accounting" },
                { label: "Card Reader Review", href: "/card-reader" },
                { label: "Customer Reviews", href: "/reviews" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Business Guides
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Business vs Personal Account", href: "/business-vs-personal" },
                { label: "Setting Up a Limited Company", href: "/company-setup" },
                { label: "Claim Your £200 Bonus", href: "/claim-offer" },
                { label: "FAQ", href: "/faq" },
                { label: "vs Competitors", href: "/compare" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 hover:text-emerald-400 transition-colors no-underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors no-underline font-semibold">
                  → Open Tide Account (REFER200)
                </a>
              </li>
              <li>
                <a href="https://www.tide.co" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors no-underline">
                  Tide Official Website
                </a>
              </li>
              <li>
                <a href="https://uk.trustpilot.com/review/tide.co" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors no-underline">
                  Tide on Trustpilot
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-xs text-slate-500 leading-relaxed mb-2">
            <strong className="text-slate-400">Disclaimer:</strong> TideReview.co.uk is an independent review website and is not affiliated with, endorsed by, or officially connected to Tide Platform Limited. We may earn a referral commission when you sign up using our referral code REFER200. All information is provided for informational purposes only and was accurate at the time of writing. Always check the latest terms and conditions on the Tide website before signing up.
          </p>
          <p className="text-xs text-slate-500">
            Tide is authorised by the Financial Conduct Authority (FCA) under firm reference number 900843. Eligible deposits are protected up to £120,000 by the FSCS via ClearBank. © {new Date().getFullYear()} TideReview.co.uk — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
