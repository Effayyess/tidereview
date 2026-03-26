// MobileBottomCTA — fixed bottom bar shown only on mobile/tablet (hidden on xl+)
// Displays the REFER200 code prominently with a full-width Claim £200 button
// Includes a dismiss button so users can hide it if they prefer
import { useState } from "react";
import { X, Gift } from "lucide-react";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

export default function MobileBottomCTA() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      className="xl:hidden fixed bottom-0 left-0 right-0 z-50 safe-area-bottom"
      style={{
        background: "linear-gradient(135deg, oklch(0.18 0.08 262) 0%, oklch(0.24 0.12 262) 100%)",
        borderTop: "1px solid oklch(0.35 0.12 262)",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.35)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="px-4 py-3">
        {/* Top row: label + dismiss */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Gift className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Exclusive Offer — Up to £200 Free
            </span>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white transition-colors p-0.5 rounded"
            aria-label="Dismiss offer bar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom row: code pill + CTA button */}
        <div className="flex items-center gap-3">
          {/* Code pill */}
          <div
            className="flex-shrink-0 rounded-lg px-3 py-2 text-center"
            style={{
              background: "oklch(0.12 0.06 262)",
              border: "1px solid oklch(0.40 0.15 262)",
            }}
          >
            <p className="text-slate-400 text-xs leading-none mb-0.5">Use code</p>
            <p
              className="text-white font-black text-base tracking-widest leading-none"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              REFER200
            </p>
          </div>

          {/* CTA button — fills remaining space */}
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 no-underline"
          >
            <div
              className="w-full rounded-xl py-3 text-center font-black text-white text-sm"
              style={{
                background: "linear-gradient(135deg, oklch(0.55 0.22 148) 0%, oklch(0.48 0.20 148) 100%)",
                boxShadow: "0 4px 16px oklch(0.55 0.22 148 / 40%)",
                fontFamily: "Sora, sans-serif",
              }}
            >
              Claim £200 Free →
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
