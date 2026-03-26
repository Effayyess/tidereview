// Floating sticky CTA bar that appears after scrolling
// Shows the REFER200 referral code prominently
import { useState, useEffect } from "react";
import { X, Gift } from "lucide-react";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true);
      } else if (window.scrollY <= 400) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.28 0.12 262))',
        borderTop: '2px solid oklch(0.55 0.22 148)',
        boxShadow: '0 -4px 30px rgba(0,0,0,0.3)',
      }}
    >
      <div className="container py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Gift className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white text-sm font-semibold hidden sm:block" style={{ fontFamily: 'Sora, sans-serif' }}>
                Get up to £200 free cash with Tide
              </span>
              <span className="font-mono font-black text-emerald-400 text-base bg-black/20 px-2 py-0.5 rounded">
                REFER200
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-4 py-2 rounded-lg text-sm font-bold no-underline whitespace-nowrap"
            >
              Claim £200 →
            </a>
            <button
              onClick={() => { setDismissed(true); setVisible(false); }}
              className="text-slate-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
