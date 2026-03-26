// Claim Offer Page: How to Claim Your £200 Tide Referral Bonus
// SEO: "Tide referral code REFER200", "Tide £200 free cash", "Tide promo code"
import { CheckCircle, Gift, Clock, CreditCard, TrendingUp, AlertCircle } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

export default function ClaimOffer() {
  return (
    <div>
      {/* Hero */}
      <Breadcrumb items={[{label: "Claim REFER200 Offer"}]} />
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 262) 0%, oklch(0.28 0.12 262) 50%, oklch(0.22 0.10 262) 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, oklch(0.55 0.22 148) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.55 0.22 262) 0%, transparent 40%)' }} />
        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wider">
            <Gift className="w-4 h-4" />
            Exclusive Referral Offer
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Claim Your<br />
            <span className="text-emerald-400">£200 Free Cash</span>
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-8">
            Open a Tide business account using referral code <strong className="text-white font-mono">REFER200</strong> and earn up to £200 in free cash — just for banking with Tide.
          </p>
          
          {/* Big Code Display */}
          <div className="inline-block bg-white/10 backdrop-blur border-2 border-emerald-400/50 rounded-2xl px-10 py-6 mb-8">
            <p className="text-slate-300 text-sm mb-2">Your exclusive referral code</p>
            <p className="text-white font-mono font-black text-5xl tracking-widest">REFER200</p>
            <p className="text-emerald-400 text-sm mt-2">Up to £200 free cash</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary px-10 py-4 rounded-xl font-bold no-underline text-lg"
            >
              🎁 Open Account & Claim £200 →
            </a>
            <div className="flex items-center justify-center gap-2 text-slate-300 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              5-minute signup · No credit check
            </div>
          </div>
        </div>
      </section>
      {/* How the Offer Works */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              How to Earn Your £200 — Step by Step
            </h2>
            <p className="text-slate-500 mt-2">The offer is split into two milestones. Here's exactly what you need to do:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Milestone 1 */}
            <div className="rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-lg">
              <div className="p-6" style={{ background: 'linear-gradient(135deg, oklch(0.45 0.20 148), oklch(0.38 0.18 148))' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-emerald-100 text-sm font-semibold uppercase tracking-wider">Milestone 1</span>
                  <CreditCard className="w-6 h-6 text-emerald-200" />
                </div>
                <p className="text-white font-black text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>£75</p>
                <p className="text-emerald-100 text-sm">Free cash reward</p>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-slate-800 mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>Spend £100 on your Tide card</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Make at least £100 worth of purchases using your Tide Mastercard within <strong>30 days</strong> of opening your account. This can be any business purchases — fuel, supplies, subscriptions, or anything else your business needs.
                </p>
                <div className="flex items-center gap-2 text-sm text-emerald-600 font-medium">
                  <Clock className="w-4 h-4" />
                  Must be completed within 30 days of account opening
                </div>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="rounded-2xl overflow-hidden border-2 border-blue-200 shadow-lg">
              <div className="p-6" style={{ background: 'linear-gradient(135deg, oklch(0.35 0.16 262), oklch(0.28 0.12 262))' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Milestone 2</span>
                  <TrendingUp className="w-6 h-6 text-blue-200" />
                </div>
                <p className="text-white font-black text-4xl" style={{ fontFamily: 'Sora, sans-serif' }}>£125</p>
                <p className="text-blue-200 text-sm">Free cash reward</p>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-slate-800 mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>Deposit £5,000 in Instant Saver</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Deposit at least £5,000 into the Tide Instant Saver account and keep it there for <strong>30 days</strong>. The Instant Saver also earns you up to 4% AER (variable) interest during this time — so you're earning interest AND a cash bonus.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                  <Clock className="w-4 h-4" />
                  Must maintain balance for 30 consecutive days
                </div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="rounded-2xl p-6 text-center mb-10" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
            <p className="text-slate-300 text-sm mb-2">Complete both milestones and earn</p>
            <p className="text-white font-black text-6xl" style={{ fontFamily: 'Sora, sans-serif' }}>£200</p>
            <p className="text-emerald-400 font-semibold">Total free cash reward</p>
            <p className="text-slate-400 text-xs mt-2">£75 + £125 = £200 total</p>
          </div>

          {/* Step by Step */}
          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            How to Sign Up with Code REFER200
          </h2>
          <div className="space-y-4 mb-10">
            {[
              { step: "1", title: "Click the link below", desc: "Use our referral link to go directly to Tide's signup page. The code REFER200 will be automatically applied — you don't need to enter it manually." },
              { step: "2", title: "Choose your account type", desc: "Select whether you're a sole trader, limited company, or other business type. Tide supports all UK business structures." },
              { step: "3", title: "Enter your details", desc: "Provide your personal and business information. The process is entirely digital — no paperwork, no branch visits." },
              { step: "4", title: "Verify your identity", desc: "Take a photo of your ID (passport or driving licence) and a quick selfie. Tide's verification is fast and secure." },
              { step: "5", title: "Your account is ready", desc: "Most accounts are approved instantly. You'll receive your Tide Mastercard within 3-5 business days." },
              { step: "6", title: "Complete the milestones", desc: "Spend £100 on your card within 30 days for £75, and deposit £5,000 in the Instant Saver for 30 days for the additional £125." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black" style={{ background: 'oklch(0.35 0.16 262)', fontFamily: 'Sora, sans-serif' }}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-block px-12 py-5 rounded-xl font-black no-underline text-xl mb-4"
            >
              🎁 Open Account — Code: REFER200 →
            </a>
            <p className="text-slate-400 text-sm">5-minute signup · No credit check · FCA regulated</p>
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-12" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container max-w-3xl mx-auto">
          <div className="flex items-start gap-3 p-5 bg-amber-50 border border-amber-200 rounded-xl mb-6">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-amber-800 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Important: Offer Terms & Conditions</h3>
              <p className="text-amber-700 text-sm leading-relaxed">
                Please read the full terms and conditions on the Tide website before signing up. Key points are summarised below, but the official Tide terms take precedence.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Key Terms Summary</h3>
            <div className="space-y-3">
              {[
                "Offer available to new Tide customers only — not existing account holders",
                "Referral code REFER200 must be used at the time of account opening",
                "£75 reward: Spend at least £100 on your Tide Mastercard within 30 days of account opening",
                "£125 reward: Deposit at least £5,000 in the Tide Instant Saver and maintain the balance for 30 consecutive days",
                "Rewards are credited to your Tide account within 30 days of completing each milestone",
                "Offer subject to change or withdrawal at any time — check tide.co for current terms",
                "Available to UK residents opening a UK business account",
                "Tide reserves the right to withdraw the offer if terms are not met or if fraudulent activity is detected",
              ].map((term) => (
                <div key={term} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                  {term}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400">
                Always verify the current terms and conditions directly on the Tide website at <a href="https://www.tide.co" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">tide.co</a> before signing up. TideReview.co.uk is an independent review site and the offer details above are provided in good faith but may not reflect the most current terms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Do I need to enter the code REFER200 manually?",
                a: "If you use our referral link (the button above), the code REFER200 is automatically applied to your application. However, it's always worth double-checking that the code appears in the referral field during signup.",
              },
              {
                q: "Can I earn both the £75 and £125 rewards?",
                a: "Yes! The two milestones are independent of each other. You can earn both rewards, giving you a total of £200 in free cash. Simply complete both milestones within the specified timeframes.",
              },
              {
                q: "How long does it take to receive the rewards?",
                a: "Rewards are typically credited to your Tide account within 30 days of completing each milestone. You'll receive a notification in the Tide app when your reward has been applied.",
              },
              {
                q: "Is the Tide Instant Saver safe?",
                a: "Yes. The Tide Instant Saver is provided by ClearBank, which is a fully licensed UK bank. Eligible deposits are protected by the FSCS up to £120,000 — the same protection you'd get with a high-street bank.",
              },
              {
                q: "Can I withdraw from the Instant Saver during the 30 days?",
                a: "To qualify for the £125 reward, you must maintain a balance of at least £5,000 for 30 consecutive days. If you withdraw below £5,000 during this period, the 30-day clock resets.",
              },
              {
                q: "What counts as card spending for the £75 reward?",
                a: "Any purchases made using your Tide Mastercard debit card count towards the £100 spending requirement. This includes online purchases, in-store purchases, and contactless payments.",
              },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-slate-100 p-5 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Q: {faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.45 0.20 148), oklch(0.38 0.18 148))' }}>
        <div className="container text-center">
          <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Ready to Claim Your £200?
          </h2>
          <p className="text-emerald-100 text-lg mb-6 max-w-xl mx-auto">
            Join over 1.5 million UK businesses already banking with Tide. Use code <strong className="text-white font-mono">REFER200</strong> and get up to £200 free cash.
          </p>
          <a
            href={REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-700 font-black px-12 py-5 rounded-xl hover:bg-emerald-50 transition-colors no-underline text-xl shadow-2xl"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Open Tide Account — Code: REFER200 →
          </a>
          <p className="text-emerald-200 text-sm mt-4">5-minute signup · No credit check · FCA regulated · FSCS protected</p>
        </div>
      </section>
    </div>
  );
}
