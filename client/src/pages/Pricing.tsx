// Pricing Page: Tide Business Account Plans
// SEO: "Tide pricing", "Tide business account plans"
import { CheckCircle, XCircle, Star } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

const plans = [
  {
    name: "Free",
    price: "£0",
    period: "/month",
    tagline: "Perfect for sole traders just starting out",
    color: "from-slate-500 to-slate-700",
    highlight: false,
    features: [
      "1 business current account",
      "Tide Mastercard debit card",
      "5 free bank transfers/month (then 20p each)",
      "Free invoicing (3 per month)",
      "Basic accounting tools",
      "Instant Saver account (4% AER variable)",
      "ATM withdrawals (£1 each)",
      "Cash deposits at Post Office (0.99%)",
      "FCA regulated & FSCS protected",
    ],
    notIncluded: [
      "Unlimited transfers",
      "Multiple team members",
      "Cashback on spending",
      "Dedicated account manager",
    ],
  },
  {
    name: "Smart",
    price: "£12.49",
    period: "/month + VAT",
    tagline: "For growing businesses needing more flexibility",
    color: "from-blue-500 to-blue-700",
    highlight: false,
    features: [
      "Everything in Free",
      "Unlimited free bank transfers",
      "Free invoicing (unlimited)",
      "3 free team member cards",
      "Scheduled payments",
      "Priority customer support",
      "Accounting integrations (Xero, QuickBooks)",
      "Expense categorisation",
    ],
    notIncluded: [
      "Cashback on spending",
      "Dedicated account manager",
      "Multi-currency accounts",
    ],
  },
  {
    name: "Pro",
    price: "£24.99",
    period: "/month + VAT",
    tagline: "The most popular plan for established businesses",
    color: "from-emerald-500 to-emerald-700",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Smart",
      "0.5% cashback on card spending",
      "5 free team member cards",
      "Multi-user access with permissions",
      "Advanced expense management",
      "VAT filing tools (MTD ready)",
      "Priority phone support",
      "Free ATM withdrawals (5/month)",
    ],
    notIncluded: [
      "Dedicated account manager",
      "Multi-currency accounts",
    ],
  },
  {
    name: "Max",
    price: "£69.99",
    period: "/month + VAT",
    tagline: "For larger teams needing the full suite",
    color: "from-violet-500 to-violet-700",
    highlight: false,
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Unlimited team member cards",
      "1% cashback on card spending",
      "Multi-currency accounts",
      "Advanced reporting & analytics",
      "API access",
      "Unlimited free ATM withdrawals",
    ],
    notIncluded: [],
  },
];

const addOns = [
  { name: "Invoice Assistant", price: "£5.99/mo", desc: "Unlimited invoices with automated payment reminders and payment links" },
  { name: "Tide Accounting", price: "From £10/mo", desc: "Full accounting software with Self Assessment, Corporation Tax estimates, and HMRC filing" },
  { name: "Card Reader", price: "£159 one-off", desc: "Portable card reader accepting all major cards and contactless payments" },
  { name: "Card Reader Plus", price: "£199 one-off", desc: "Advanced card reader with larger screen and receipt printer" },
  { name: "Company Formation", price: "£24.99 one-off", desc: "Register a UK limited company — certificate issued within 1 business day" },
];

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container text-center">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Pricing Review</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Tide Business Account<br />Pricing & Plans 2026
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
            A comprehensive breakdown of every Tide plan — from the free basic account to the full-featured Max plan. Find the right plan for your business.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-5 py-3">
            <span className="text-slate-300 text-sm">Use referral code</span>
            <span className="font-mono font-black text-emerald-400 text-lg">REFER200</span>
            <span className="text-slate-300 text-sm">for up to</span>
            <span className="text-white font-bold">£200 free cash</span>
          </div>
        </div>
      </section>
      <Breadcrumb items={[{label: "Pricing & Plans"}]} />

      {/* Plans Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl overflow-hidden border-2 transition-all ${
                  plan.highlight
                    ? 'border-emerald-400 shadow-2xl shadow-emerald-100 scale-105'
                    : 'border-slate-100 shadow-sm'
                }`}
              >
                {plan.highlight && (
                  <div className="bg-emerald-500 text-white text-xs font-bold text-center py-2 uppercase tracking-wider" style={{ fontFamily: 'Sora, sans-serif' }}>
                    ⭐ {plan.badge}
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${plan.color}`} />
                <div className="p-6">
                  <h2 className="text-2xl font-black mb-1" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                    {plan.name}
                  </h2>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-3xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: plan.highlight ? 'oklch(0.45 0.20 148)' : 'oklch(0.22 0.08 262)' }}>
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-sm">{plan.period}</span>
                  </div>
                  <p className="text-slate-500 text-sm mb-5 leading-relaxed">{plan.tagline}</p>
                  
                  <a
                    href={REFERRAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-2.5 rounded-lg text-sm font-bold no-underline mb-6 transition-all ${
                      plan.highlight
                        ? 'cta-primary'
                        : 'border-2 border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700'
                    }`}
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    Get Started — Code: REFER200
                  </a>

                  <div className="space-y-2">
                    {plan.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm text-slate-400">
                        <XCircle className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Optional Extras</span>
            <h2 className="text-3xl font-black mt-2" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              Tide Add-Ons & Extras
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              Enhance your Tide account with these optional paid add-ons, available on any plan.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-800 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{addon.name}</h3>
                  <p className="text-slate-500 text-sm">{addon.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-blue-700" style={{ fontFamily: 'Sora, sans-serif' }}>{addon.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Verdict */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              Our Pricing Verdict
            </h2>
          </div>
          <div className="tide-prose">
            <p className="text-slate-600 text-lg leading-relaxed mb-4">
              Tide's pricing structure is genuinely one of the most competitive in UK business banking. The free tier is remarkably generous — most sole traders and micro-businesses will find it covers everything they need without spending a penny on monthly fees.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Smart plan at £12.49/month is excellent value for businesses that make more than a handful of bank transfers each month, as unlimited transfers alone justify the cost. The Pro plan's 0.5% cashback on card spending is a standout feature — for businesses spending £5,000/month on their card, that's £25 back each month, effectively making the plan free.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Whichever plan you choose, starting with referral code <strong>REFER200</strong> means you can earn up to £200 in free cash just for opening your account and meeting the simple spending milestones.
            </p>
          </div>

          {/* Score breakdown */}
          <div className="rounded-2xl p-6 mb-8" style={{ background: 'oklch(0.97 0.005 262)' }}>
            <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>Pricing Score Breakdown</h3>
            {[
              { label: "Value for Money", score: 9 },
              { label: "Free Plan Generosity", score: 10 },
              { label: "Paid Plan Features", score: 9 },
              { label: "Transparency", score: 8 },
              { label: "Add-on Value", score: 8 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 mb-3">
                <span className="text-slate-600 text-sm w-44 flex-shrink-0">{item.label}</span>
                <div className="flex-1 bg-slate-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ width: `${item.score * 10}%`, background: 'oklch(0.55 0.22 148)' }}
                  />
                </div>
                <span className="text-slate-800 font-bold text-sm w-8">{item.score}/10</span>
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-3 h-3 ${i <= Math.round(item.score / 2) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <ReferralBanner variant="compact" />
        </div>
      </section>
    </div>
  );
}
