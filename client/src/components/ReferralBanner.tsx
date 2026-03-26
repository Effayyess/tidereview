// Reusable referral code banner/CTA component
// Used throughout the site to promote REFER200
interface ReferralBannerProps {
  variant?: "full" | "compact" | "inline";
  className?: string;
}

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

export default function ReferralBanner({ variant = "full", className = "" }: ReferralBannerProps) {
  if (variant === "compact") {
    return (
      <div className={`rounded-xl p-5 text-white ${className}`} style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-300 mb-1">Exclusive Referral Code</p>
            <div className="flex items-center gap-3">
              <span className="font-mono font-black text-2xl text-emerald-400 tracking-widest">REFER200</span>
              <span className="text-slate-300 text-sm">→ Up to <strong className="text-white">£200 free cash</strong></span>
            </div>
          </div>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary px-5 py-2.5 rounded-lg text-sm font-semibold no-underline whitespace-nowrap flex-shrink-0"
          >
            Claim £200 Free →
          </a>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <span className="text-sm text-slate-600">Use code</span>
        <span className="font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-sm">REFER200</span>
        <span className="text-sm text-slate-600">for</span>
        <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 no-underline">
          up to £200 free cash →
        </a>
      </div>
    );
  }

  // Full variant
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`} style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262) 0%, oklch(0.30 0.14 262) 100%)' }}>
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
              🎁 Exclusive Offer
            </div>
            <h3 className="text-white text-2xl font-bold mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
              Get Up to £200 Free Cash
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Open a Tide business account using referral code <strong className="text-white font-mono">REFER200</strong> and earn:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-emerald-400 font-bold text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>£75</p>
                <p className="text-slate-300 text-xs">After £100 card spend in 30 days</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <p className="text-emerald-400 font-bold text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>£125</p>
                <p className="text-slate-300 text-xs">Deposit £5k in Instant Saver for 30 days</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 flex-shrink-0">
            <div className="text-center">
              <p className="text-slate-400 text-xs mb-1">Your referral code</p>
              <div className="bg-white/15 border-2 border-emerald-400/50 rounded-xl px-6 py-3">
                <p className="text-white font-mono font-black text-3xl tracking-widest">REFER200</p>
              </div>
            </div>
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-8 py-3.5 rounded-xl text-base font-bold no-underline text-center w-full"
            >
              Open Account Now →
            </a>
            <p className="text-slate-400 text-xs text-center">5-minute signup · No credit check</p>
          </div>
        </div>
      </div>
    </div>
  );
}
