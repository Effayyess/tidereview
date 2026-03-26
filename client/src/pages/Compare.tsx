// Compare Page: Tide vs Starling vs Monzo vs Revolut Business
// SEO: "Tide vs Starling", "Tide vs Monzo Business", "best UK business bank account 2026"
import { CheckCircle, XCircle, Minus, Star, Trophy } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

type CellVal = string | boolean | null;

interface CompareRow {
  feature: string;
  category?: boolean;
  tide: CellVal;
  starling: CellVal;
  monzo: CellVal;
  revolut: CellVal;
}

const rows: CompareRow[] = [
  { feature: "Account Basics", category: true, tide: null, starling: null, monzo: null, revolut: null },
  { feature: "Monthly fee (basic)", tide: "Free", starling: "Free", monzo: "Free", revolut: "Free" },
  { feature: "FCA regulated", tide: true, starling: true, monzo: true, revolut: true },
  { feature: "FSCS protection", tide: "£120k (ClearBank)", starling: "£85k", monzo: "£85k", revolut: "£85k" },
  { feature: "Mastercard debit card", tide: true, starling: true, monzo: true, revolut: true },
  { feature: "Mobile app (iOS & Android)", tide: true, starling: true, monzo: true, revolut: true },
  { feature: "Instant account opening", tide: true, starling: true, monzo: true, revolut: true },

  { feature: "Business Tools", category: true, tide: null, starling: null, monzo: null, revolut: null },
  { feature: "Built-in invoicing", tide: true, starling: false, monzo: false, revolut: false },
  { feature: "VAT filing (MTD)", tide: true, starling: false, monzo: false, revolut: "Via integrations" },
  { feature: "Accounting software integrations", tide: "Xero, QBO, Sage, FreeAgent +5", starling: "Xero, QBO, FreeAgent", monzo: "Xero, QBO", revolut: "Xero, QBO, Sage" },
  { feature: "Receipt capture", tide: true, starling: true, monzo: false, revolut: true },
  { feature: "Expense categorisation", tide: true, starling: true, monzo: true, revolut: true },
  { feature: "Team expense cards", tide: "3–unlimited (plan dependent)", starling: "Available", monzo: "Available", revolut: "Available" },

  { feature: "Payments & Banking", category: true, tide: null, starling: null, monzo: null, revolut: null },
  { feature: "Free bank transfers (basic)", tide: "5/month", starling: "Unlimited", monzo: "Unlimited", revolut: "5/month" },
  { feature: "Free ATM withdrawals", tide: "£1 each (free on Pro+)", starling: "2/month free", monzo: "£200/month free", revolut: "£200/month free" },
  { feature: "International payments", tide: "30+ currencies (Pro/Max)", starling: "35+ currencies", monzo: "Limited", revolut: "30+ currencies" },
  { feature: "Cash deposits", tide: "Post Office (0.99%)", starling: "Post Office (0.7%)", monzo: "PayPoint (£1 + 3%)", revolut: "Not available" },
  { feature: "Business savings account", tide: "4% AER (Instant Saver)", starling: "3.25% AER", monzo: "Not available", revolut: "Not available" },

  { feature: "In-Person Payments", category: true, tide: null, starling: null, monzo: null, revolut: null },
  { feature: "Card reader available", tide: "£159 / £199", starling: false, monzo: false, revolut: "Via Revolut Reader" },
  { feature: "Tap to Pay (iPhone)", tide: true, starling: false, monzo: false, revolut: true },
  { feature: "Payment links", tide: true, starling: false, monzo: false, revolut: true },

  { feature: "Business Formation", category: true, tide: null, starling: null, monzo: null, revolut: null },
  { feature: "Company registration", tide: "£24.99", starling: false, monzo: false, revolut: false },
  { feature: "Registered address service", tide: true, starling: false, monzo: false, revolut: false },

  { feature: "Rewards & Offers", category: true, tide: null, starling: null, monzo: null, revolut: null },
  { feature: "Cashback on spending", tide: "0.5%–1% (Pro/Max)", starling: false, monzo: false, revolut: "0.1%–1% (paid plans)" },
  { feature: "New customer referral bonus", tide: "Up to £200 (REFER200)", starling: "Occasional offers", monzo: "Occasional offers", revolut: "Occasional offers" },

  { feature: "Customer Satisfaction", category: true, tide: null, starling: null, monzo: null, revolut: null },
  { feature: "Trustpilot rating", tide: "4.4 ★ Excellent", starling: "4.3 ★ Excellent", monzo: "4.4 ★ Excellent", revolut: "4.2 ★ Great" },
  { feature: "Number of reviews", tide: "32,000+", starling: "38,000+", monzo: "25,000+", revolut: "150,000+" },
  { feature: "UK business customers", tide: "1.5M+", starling: "500k+", monzo: "500k+", revolut: "500k+" },
];

const overallScores = [
  { bank: "Tide", score: 9.2, highlight: true, badge: "Best for SMEs", color: "from-emerald-500 to-emerald-700" },
  { bank: "Starling", score: 8.7, highlight: false, badge: "Best for Transfers", color: "from-violet-500 to-violet-700" },
  { bank: "Monzo Business", score: 8.1, highlight: false, badge: "Best App UX", color: "from-rose-500 to-rose-700" },
  { bank: "Revolut Business", score: 8.4, highlight: false, badge: "Best for International", color: "from-blue-500 to-blue-700" },
];

function Cell({ val, highlight }: { val: CellVal; highlight?: boolean }) {
  if (val === null) return null;
  if (val === true)
    return <CheckCircle className={`w-4 h-4 mx-auto ${highlight ? 'text-emerald-500' : 'text-emerald-400'}`} />;
  if (val === false)
    return <XCircle className="w-4 h-4 mx-auto text-slate-300" />;
  return (
    <span className={`text-xs leading-snug ${highlight ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
      {val}
    </span>
  );
}

export default function Compare() {
  return (
    <div>
      {/* Hero */}
      <Breadcrumb items={[{label: "Tide vs Competitors"}]} />
      <section className="py-14" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container text-center">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Head-to-Head Comparison</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Tide vs Starling vs Monzo vs Revolut:<br />
            <span className="text-emerald-400">Best UK Business Bank 2026</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            We've compared every major feature of the four leading UK digital business banks so you can make the right choice for your business.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
            <span className="text-slate-300 text-sm">Tide exclusive code:</span>
            <span className="font-mono font-black text-emerald-400 text-lg">REFER200</span>
            <span className="text-slate-300 text-sm">→ up to</span>
            <span className="text-white font-bold">£200 free cash</span>
          </div>
        </div>
      </section>
      {/* Overall Scores */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl font-black text-center mb-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Overall Scores at a Glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {overallScores.map((b) => (
              <div
                key={b.bank}
                className={`rounded-2xl overflow-hidden border-2 ${b.highlight ? 'border-emerald-400 shadow-xl shadow-emerald-50' : 'border-slate-100 shadow-sm'}`}
              >
                {b.highlight && (
                  <div className="bg-emerald-500 text-white text-xs font-bold text-center py-1.5 uppercase tracking-wider flex items-center justify-center gap-1">
                    <Trophy className="w-3 h-3" /> Our Top Pick
                  </div>
                )}
                <div className={`h-1.5 bg-gradient-to-r ${b.color}`} />
                <div className="p-5 text-center">
                  <p className="font-black text-lg mb-1" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>{b.bank}</p>
                  <p className="text-4xl font-black mb-1" style={{ fontFamily: 'Sora, sans-serif', color: b.highlight ? 'oklch(0.45 0.20 148)' : 'oklch(0.35 0.16 262)' }}>{b.score}</p>
                  <div className="flex justify-center mb-2">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i <= Math.round(b.score / 2) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                    ))}
                  </div>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${b.highlight ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                    {b.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="py-12" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <h2 className="text-2xl font-black text-center mb-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Full Feature Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-100">
            <table className="w-full min-w-[700px] text-sm bg-white">
              <thead>
                <tr style={{ background: 'oklch(0.22 0.08 262)' }}>
                  <th className="text-left p-4 text-white font-semibold w-48">Feature</th>
                  <th className="p-4 text-center w-44">
                    <div className="text-emerald-400 font-black text-base" style={{ fontFamily: 'Sora, sans-serif' }}>Tide</div>
                    <div className="text-emerald-300 text-xs font-medium">⭐ Our Top Pick</div>
                  </th>
                  <th className="p-4 text-center w-44">
                    <div className="text-white font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>Starling</div>
                    <div className="text-slate-400 text-xs">Business</div>
                  </th>
                  <th className="p-4 text-center w-44">
                    <div className="text-white font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>Monzo</div>
                    <div className="text-slate-400 text-xs">Business</div>
                  </th>
                  <th className="p-4 text-center w-44">
                    <div className="text-white font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>Revolut</div>
                    <div className="text-slate-400 text-xs">Business</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  if (row.category) {
                    return (
                      <tr key={row.feature} style={{ background: 'oklch(0.94 0.01 262)' }}>
                        <td colSpan={5} className="px-4 py-2.5 font-bold text-xs uppercase tracking-wider" style={{ color: 'oklch(0.35 0.16 262)', fontFamily: 'Sora, sans-serif' }}>
                          {row.feature}
                        </td>
                      </tr>
                    );
                  }
                  return (
                    <tr key={row.feature} className={`border-b border-slate-50 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                      <td className="p-3.5 text-slate-600 text-xs">{row.feature}</td>
                      <td className="p-3.5 text-center bg-emerald-50/40">
                        <Cell val={row.tide} highlight />
                      </td>
                      <td className="p-3.5 text-center"><Cell val={row.starling} /></td>
                      <td className="p-3.5 text-center"><Cell val={row.monzo} /></td>
                      <td className="p-3.5 text-center"><Cell val={row.revolut} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-xs mt-3 text-center">Data accurate as of March 2026. Always verify current terms on each provider's website.</p>
        </div>
      </section>

      {/* Detailed Verdicts */}
      <section className="py-14 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-10 text-center" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Our Detailed Verdicts
          </h2>

          {/* Tide */}
          <div className="rounded-2xl border-2 border-emerald-200 overflow-hidden mb-6 shadow-md">
            <div className="p-5 flex items-center justify-between" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-5 h-5 text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Our Top Pick</span>
                </div>
                <h3 className="text-white font-black text-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>Tide Business</h3>
              </div>
              <div className="text-right">
                <p className="text-4xl font-black text-emerald-400" style={{ fontFamily: 'Sora, sans-serif' }}>9.2</p>
                <p className="text-slate-300 text-xs">Overall Score</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed mb-4">
                Tide is our clear top pick for UK small businesses in 2026. The combination of a genuinely free basic account, built-in invoicing and MTD-ready accounting tools, a card reader for in-person payments, and company formation services makes Tide the most comprehensive all-in-one business banking platform available.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                What truly sets Tide apart from Starling, Monzo, and Revolut is the depth of its business tools. While competitors offer solid banking features, none match Tide's built-in invoicing, direct HMRC VAT filing, or the ability to register a limited company as part of the same onboarding journey. For any business owner who wants to spend less time on admin, Tide is the obvious choice.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                The Instant Saver account earning up to 4% AER is also the most competitive savings rate among the four providers — ideal for businesses that hold reserves. And with the exclusive referral code <strong>REFER200</strong>, new customers can earn up to <strong>£200 free cash</strong> — a benefit no competitor currently matches.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Best built-in business tools", "MTD VAT filing included", "Company registration", "4% AER savings", "Up to £200 welcome bonus"].map(t => (
                  <span key={t} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full border border-emerald-100">✓ {t}</span>
                ))}
              </div>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-block px-6 py-3 rounded-xl font-bold no-underline text-sm"
              >
                Open Tide Account — Code: REFER200 (£200 Free) →
              </a>
            </div>
          </div>

          {/* Starling */}
          <div className="rounded-2xl border border-slate-100 overflow-hidden mb-6 shadow-sm">
            <div className="p-5 flex items-center justify-between bg-gradient-to-r from-violet-600 to-violet-800">
              <h3 className="text-white font-black text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>Starling Business</h3>
              <div className="text-right">
                <p className="text-3xl font-black text-white" style={{ fontFamily: 'Sora, sans-serif' }}>8.7</p>
                <p className="text-violet-200 text-xs">Overall Score</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed mb-3">
                Starling is a strong competitor and deserves its excellent reputation. Its biggest advantage over Tide is <strong>unlimited free bank transfers</strong> on the free plan — ideal for businesses that make many payments each month. Starling is also a fully licensed bank (not an e-money institution), which some businesses prefer.
              </p>
              <p className="text-slate-600 leading-relaxed mb-3">
                However, Starling lacks Tide's built-in invoicing, direct VAT filing, card reader, and company formation services. Businesses that need these tools would need to pay for separate software, which often costs more than upgrading to a Tide paid plan.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Unlimited free transfers", "Full bank licence", "Good accounting integrations"].map(t => (
                  <span key={t} className="bg-violet-50 text-violet-700 text-xs font-medium px-3 py-1 rounded-full border border-violet-100">✓ {t}</span>
                ))}
                {["No invoicing tools", "No card reader", "No company formation"].map(t => (
                  <span key={t} className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full border border-red-100">✗ {t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Monzo */}
          <div className="rounded-2xl border border-slate-100 overflow-hidden mb-6 shadow-sm">
            <div className="p-5 flex items-center justify-between bg-gradient-to-r from-rose-500 to-rose-700">
              <h3 className="text-white font-black text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>Monzo Business</h3>
              <div className="text-right">
                <p className="text-3xl font-black text-white" style={{ fontFamily: 'Sora, sans-serif' }}>8.1</p>
                <p className="text-rose-200 text-xs">Overall Score</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed mb-3">
                Monzo Business is best known for its beautiful mobile app and strong personal banking heritage. The business account is solid for sole traders and freelancers who primarily need a clean, simple account to separate business and personal finances. Unlimited transfers on the free plan is a genuine advantage.
              </p>
              <p className="text-slate-600 leading-relaxed mb-3">
                However, Monzo Business lags behind Tide significantly in business tools. There's no built-in invoicing, no VAT filing, no card reader, and no savings account. For any business that needs more than a basic current account, Monzo's limitations become apparent quickly.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Excellent app design", "Unlimited free transfers", "Strong brand trust"].map(t => (
                  <span key={t} className="bg-rose-50 text-rose-700 text-xs font-medium px-3 py-1 rounded-full border border-rose-100">✓ {t}</span>
                ))}
                {["No invoicing", "No VAT tools", "No savings account", "No card reader"].map(t => (
                  <span key={t} className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full border border-red-100">✗ {t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Revolut */}
          <div className="rounded-2xl border border-slate-100 overflow-hidden mb-10 shadow-sm">
            <div className="p-5 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-800">
              <h3 className="text-white font-black text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>Revolut Business</h3>
              <div className="text-right">
                <p className="text-3xl font-black text-white" style={{ fontFamily: 'Sora, sans-serif' }}>8.4</p>
                <p className="text-blue-200 text-xs">Overall Score</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 leading-relaxed mb-3">
                Revolut Business is the strongest competitor for businesses with significant international operations. Its multi-currency accounts, competitive FX rates, and global payment capabilities are unmatched. If your business regularly pays overseas suppliers or receives international payments, Revolut deserves serious consideration.
              </p>
              <p className="text-slate-600 leading-relaxed mb-3">
                For UK-focused businesses, however, Revolut's free plan is quite restrictive (only 5 free transfers per month), and the business tools are less comprehensive than Tide's. Revolut also has a more complex pricing structure with multiple tiers, which can make it harder to predict monthly costs.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Best for international payments", "Multi-currency accounts", "Revolut Reader card reader"].map(t => (
                  <span key={t} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-100">✓ {t}</span>
                ))}
                {["Complex pricing", "Limited free transfers", "No company formation"].map(t => (
                  <span key={t} className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full border border-red-100">✗ {t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Who Should Choose What */}
          <h2 className="text-2xl font-black mb-6" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Which Bank Should You Choose?
          </h2>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {[
              { title: "Choose Tide if...", items: ["You need invoicing and accounting tools built in", "You want to register a limited company", "You take in-person card payments", "You want up to £200 free cash (code REFER200)", "You hold business reserves and want 4% AER savings"], color: "border-emerald-200 bg-emerald-50", titleColor: "text-emerald-700" },
              { title: "Choose Starling if...", items: ["You make many bank transfers each month", "You prefer a fully licensed bank", "You already use Xero or FreeAgent", "You don't need invoicing or VAT tools"], color: "border-violet-200 bg-violet-50", titleColor: "text-violet-700" },
              { title: "Choose Monzo if...", items: ["You want the best-designed mobile app", "You're a sole trader with simple needs", "You make many transfers each month", "You already use Monzo personally"], color: "border-rose-200 bg-rose-50", titleColor: "text-rose-700" },
              { title: "Choose Revolut if...", items: ["You regularly pay overseas suppliers", "You need multi-currency accounts", "You have a team with complex expense needs", "International FX rates are a priority"], color: "border-blue-200 bg-blue-50", titleColor: "text-blue-700" },
            ].map((item) => (
              <div key={item.title} className={`rounded-xl p-5 border ${item.color}`}>
                <h3 className={`font-bold text-base mb-3 ${item.titleColor}`} style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                {item.items.map((point) => (
                  <div key={point} className="flex items-start gap-2 text-sm text-slate-700 mb-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <ReferralBanner variant="full" />
        </div>
      </section>
    </div>
  );
}
