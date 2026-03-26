// Accounting & VAT Page
// SEO: "Tide accounting review", "Tide VAT support", "Tide Making Tax Digital"
import { CheckCircle, Star, Calculator, Receipt, BarChart3, FileCheck } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const ACCOUNTING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-accounting-oE5vVu49o7N2q8kZWWiL8K.webp";

export default function Accounting() {
  return (
    <div>
      {/* Hero */}
      <Breadcrumb items={[{label: "Features", href: "/features"}, {label: "Accounting & VAT Review"}]} />
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.32 0.14 262))' }}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Feature Review</span>
            <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Tide Accounting & VAT Review:<br />
              <span className="text-emerald-400">Making Tax Digital Made Easy</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tide's HMRC-recognised accounting tools are built directly into your business account, making VAT returns, Self Assessment, and expense tracking simpler than ever before.
            </p>
          </div>
        </div>
      </section>
      {/* Score Bar */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="container flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-4xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>9.0</p>
              <p className="text-slate-400 text-xs">out of 10</p>
            </div>
            <div>
              <div className="flex mb-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                ))}
              </div>
              <p className="text-slate-600 font-semibold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>Accounting Feature Score</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["MTD Ready", "HMRC Recognised", "Auto-categorisation", "VAT Filing", "Self Assessment"].map(tag => (
              <span key={tag} className="bg-violet-50 text-violet-700 text-xs font-medium px-3 py-1 rounded-full border border-violet-100">✓ {tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 tide-prose">
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                What is Tide Accounting?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tide Accounting is a fully integrated accounting software suite built directly into the Tide business banking app. Unlike traditional banks that simply process transactions, Tide actively helps you manage your business finances by automatically categorising expenses, tracking VAT, and preparing your tax filings — all from the same platform you use to make and receive payments.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The accounting tools are <strong>HMRC-recognised</strong> and fully compliant with <strong>Making Tax Digital (MTD)</strong> requirements, meaning you can file your VAT returns directly to HMRC from within the Tide app. This is a significant advantage over traditional bank accounts, which require you to use separate accounting software at additional cost.
              </p>

              <h2 className="text-2xl font-black mb-4 mt-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Core Accounting Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {[
                  {
                    icon: <Receipt className="w-6 h-6" />,
                    title: "Automatic Expense Categorisation",
                    desc: "Tide automatically categorises your transactions using intelligent rules. You can review and adjust categories, and the system learns your preferences over time.",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    icon: <Calculator className="w-6 h-6" />,
                    title: "VAT Returns (MTD)",
                    desc: "File your VAT returns directly to HMRC from within Tide. The system calculates your VAT liability automatically based on your categorised transactions.",
                    color: "bg-violet-50 text-violet-600",
                  },
                  {
                    icon: <FileCheck className="w-6 h-6" />,
                    title: "Self Assessment Support",
                    desc: "Tide helps sole traders prepare their Self Assessment tax return with pre-populated income and expense figures drawn from your account activity.",
                    color: "bg-emerald-50 text-emerald-600",
                  },
                  {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "Profit & Loss Reports",
                    desc: "Generate real-time profit and loss reports to understand your business performance. Filter by date range, category, or client.",
                    color: "bg-amber-50 text-amber-600",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-100 p-5">
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3`}>{item.icon}</div>
                    <h3 className="font-bold text-slate-800 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Receipt Capture & Expense Management
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Tide app includes a receipt capture feature that lets you photograph receipts and attach them directly to the corresponding transaction. This creates a complete digital audit trail of your business expenses — invaluable for VAT reclaims and tax investigations. The receipt capture works with both the mobile app and desktop web interface.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                For businesses with multiple team members, expense cards can be issued to employees, with all receipts and expenses visible in the central Tide dashboard. This eliminates the traditional pain of collecting paper receipts and manually entering expenses into a spreadsheet.
              </p>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Making Tax Digital (MTD) Compliance
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                HMRC's Making Tax Digital initiative requires VAT-registered businesses to keep digital records and file VAT returns using MTD-compatible software. Tide is fully MTD-compatible, meaning you can connect your Tide account directly to HMRC's systems and file your quarterly VAT returns without needing a separate bridging tool or accounting package.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                As MTD is extended to cover Income Tax Self Assessment (ITSA) in the coming years, Tide is well-positioned to support sole traders and landlords through this transition. The platform already provides the digital record-keeping infrastructure that HMRC will require.
              </p>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Third-Party Accounting Integrations
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you already use accounting software, Tide integrates seamlessly with the most popular platforms:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {["Xero", "QuickBooks", "FreeAgent", "Sage", "Kashflow", "Coconut", "Crunch", "Ember"].map((software) => (
                  <div key={software} className="bg-slate-50 rounded-lg p-3 text-center">
                    <p className="text-slate-700 font-semibold text-sm">{software}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                These integrations mean your Tide transactions are automatically synced to your accounting software in real time, eliminating manual data entry and reducing the risk of errors. Your accountant can also be given read-only access to your Tide data, making year-end accounts preparation much faster.
              </p>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Accounting Plans & Pricing
              </h2>
              <div className="rounded-xl overflow-hidden border border-slate-100 mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'oklch(0.22 0.08 262)' }}>
                      <th className="text-left p-4 text-white font-semibold">Feature</th>
                      <th className="text-center p-4 text-white font-semibold">Free</th>
                      <th className="text-center p-4 text-white font-semibold">Smart</th>
                      <th className="text-center p-4 text-white font-semibold">Pro/Max</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Transaction categorisation", free: "✓", smart: "✓", pro: "✓" },
                      { feature: "Receipt capture", free: "✓", smart: "✓", pro: "✓" },
                      { feature: "P&L reports", free: "Basic", smart: "✓", pro: "Advanced" },
                      { feature: "VAT filing (MTD)", free: "✓", smart: "✓", pro: "✓" },
                      { feature: "Self Assessment prep", free: "Basic", smart: "✓", pro: "✓" },
                      { feature: "Accounting integrations", free: "—", smart: "✓", pro: "✓" },
                      { feature: "Team expense management", free: "—", smart: "3 cards", pro: "5+ cards" },
                    ].map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-4 text-slate-700">{row.feature}</td>
                        <td className="p-4 text-center text-slate-600">{row.free}</td>
                        <td className="p-4 text-center text-slate-600">{row.smart}</td>
                        <td className="p-4 text-center text-slate-600">{row.pro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Our Accounting Verdict
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tide's accounting tools represent exceptional value, particularly for sole traders and small businesses that would otherwise pay £20–£50/month for standalone accounting software. The fact that MTD-compliant VAT filing and basic accounting are included even on the free plan is remarkable.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The automatic transaction categorisation, receipt capture, and seamless integrations with Xero and QuickBooks make Tide a genuinely compelling all-in-one business finance platform. For any UK business owner who wants to spend less time on admin and more time running their business, Tide's accounting features are a major selling point.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ReferralBanner variant="compact" />
              <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.005 262)' }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>Accounting Score</h3>
                {[
                  { label: "MTD Compliance", score: 10 },
                  { label: "Ease of Use", score: 9 },
                  { label: "Value for Money", score: 10 },
                  { label: "Features Depth", score: 8 },
                  { label: "Integrations", score: 9 },
                ].map((item) => (
                  <div key={item.label} className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-bold text-slate-800">{item.score}/10</span>
                    </div>
                    <div className="bg-slate-200 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full" style={{ width: `${item.score * 10}%`, background: 'oklch(0.55 0.22 148)' }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-6 bg-white border border-slate-100 shadow-sm">
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>Key Facts</h3>
                {[
                  "HMRC-recognised software",
                  "Making Tax Digital compliant",
                  "Auto transaction categorisation",
                  "Receipt capture & storage",
                  "VAT returns filed directly to HMRC",
                  "Self Assessment support",
                  "8+ accounting software integrations",
                  "Real-time P&L reports",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <img src={ACCOUNTING_IMG} alt="Tide accounting dashboard" className="rounded-2xl shadow-md w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
