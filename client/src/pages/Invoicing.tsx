// Invoicing Page: Tide Invoicing Feature Review
// SEO: "Tide invoicing review", "Tide invoice feature"
import { CheckCircle, Star, FileText, Bell, Link2, BarChart3 } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const ACCOUNTING_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-accounting-oE5vVu49o7N2q8kZWWiL8K.webp";

export default function Invoicing() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Feature Review</span>
            <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Tide Invoicing Review 2026:<br />
              <span className="text-emerald-400">Create & Send Invoices for Free</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Tide's built-in invoicing tools let you create, send, and track professional invoices directly from your business account — no separate software needed. Here's our full review.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-white">
                <span className="text-emerald-400 font-bold">Free</span> — 3 invoices/month
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-white">
                <span className="text-emerald-400 font-bold">£5.99/mo</span> — Unlimited (Invoice Assistant)
              </div>
              <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-white">
                <span className="text-emerald-400 font-bold">Included</span> — Smart, Pro & Max plans
              </div>
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb items={[{label: "Features", href: "/features"}, {label: "Invoicing Review"}]} />

      {/* Score */}
      <section className="py-8 bg-white border-b border-slate-100">
        <div className="container">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-4xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>8.8</p>
                <p className="text-slate-400 text-xs">out of 10</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                  ))}
                </div>
                <p className="text-slate-600 font-semibold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>Invoicing Feature Score</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Free basic tier", "Automated reminders", "Payment links", "Invoice tracking", "MTD integration"].map(tag => (
                <span key={tag} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full border border-emerald-100">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <div className="lg:col-span-2 tide-prose">
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Overview: Tide's Invoicing Tools
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                One of the most compelling aspects of Tide's business account is that invoicing is built directly into the platform — not bolted on as an afterthought. For UK sole traders and small businesses that need to send invoices to clients, this integration is genuinely transformative. You can create a professional invoice, send it to a client, and have the payment automatically matched to your account — all without leaving the Tide app.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The free basic account includes up to <strong>3 invoices per month</strong>, which is sufficient for many freelancers and part-time sole traders. For businesses that invoice more frequently, the <strong>Invoice Assistant add-on at £5.99/month</strong> unlocks unlimited invoicing, automated payment reminders, and advanced payment link features. Alternatively, unlimited invoicing is included as standard on the Smart, Pro, and Max plans.
              </p>

              <h2 className="text-2xl font-black mb-4 mt-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Key Invoicing Features
              </h2>

              <div className="grid sm:grid-cols-2 gap-5 mb-8">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Professional Invoice Templates",
                    desc: "Create branded invoices with your logo, business details, and custom payment terms. Invoices look polished and professional — reflecting well on your business.",
                    color: "bg-blue-50 text-blue-600",
                  },
                  {
                    icon: <Bell className="w-6 h-6" />,
                    title: "Automated Payment Reminders",
                    desc: "Set up automatic reminder emails that chase overdue invoices on your behalf. Choose when reminders are sent and the tone of the message.",
                    color: "bg-amber-50 text-amber-600",
                  },
                  {
                    icon: <Link2 className="w-6 h-6" />,
                    title: "Instant Payment Links",
                    desc: "Add a payment link to every invoice so clients can pay instantly by card. Payments land directly in your Tide account and are automatically reconciled.",
                    color: "bg-emerald-50 text-emerald-600",
                  },
                  {
                    icon: <BarChart3 className="w-6 h-6" />,
                    title: "Invoice Tracking & Status",
                    desc: "See at a glance which invoices are paid, pending, or overdue. The Tide dashboard gives you a clear picture of your outstanding receivables.",
                    color: "bg-violet-50 text-violet-600",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-100 p-5">
                    <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Invoicing Plans & Pricing
              </h2>
              <div className="rounded-xl overflow-hidden border border-slate-100 mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'oklch(0.22 0.08 262)' }}>
                      <th className="text-left p-4 text-white font-semibold">Plan</th>
                      <th className="text-left p-4 text-white font-semibold">Monthly Cost</th>
                      <th className="text-left p-4 text-white font-semibold">Invoices</th>
                      <th className="text-left p-4 text-white font-semibold">Reminders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { plan: "Free", cost: "£0", invoices: "3/month", reminders: "Manual only" },
                      { plan: "Invoice Assistant Add-on", cost: "£5.99/mo", invoices: "Unlimited", reminders: "Automated" },
                      { plan: "Smart", cost: "£12.49/mo", invoices: "Unlimited", reminders: "Automated" },
                      { plan: "Pro", cost: "£24.99/mo", invoices: "Unlimited", reminders: "Automated" },
                      { plan: "Max", cost: "£69.99/mo", invoices: "Unlimited", reminders: "Automated" },
                    ].map((row, i) => (
                      <tr key={row.plan} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-4 font-medium text-slate-800">{row.plan}</td>
                        <td className="p-4 text-slate-600">{row.cost}</td>
                        <td className="p-4 text-slate-600">{row.invoices}</td>
                        <td className="p-4 text-slate-600">{row.reminders}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Integration with Accounting Software
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tide's invoicing integrates seamlessly with popular accounting platforms including <strong>Xero</strong>, <strong>QuickBooks</strong>, <strong>FreeAgent</strong>, and <strong>Sage</strong>. When a client pays an invoice, the transaction is automatically categorised and synced to your accounting software — dramatically reducing the time you spend on bookkeeping.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                For businesses using Tide's own accounting tools, invoices are automatically linked to the relevant income entries, making VAT returns and Self Assessment preparation significantly easier. This end-to-end integration — from invoice creation to tax filing — is one of Tide's most compelling differentiators from traditional business bank accounts.
              </p>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Our Invoicing Verdict
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tide's invoicing feature is excellent for small businesses. The free tier is generous enough for many sole traders, and the Invoice Assistant add-on at £5.99/month is outstanding value compared to standalone invoicing software like FreshBooks or Invoice Ninja. The automated payment reminders alone can save hours of awkward client chasing each month.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The seamless integration with your Tide bank account — where payments are automatically matched to invoices — is a genuine time-saver. For any UK business that regularly invoices clients, Tide's invoicing tools are a compelling reason to choose Tide over a traditional bank account.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ReferralBanner variant="compact" />
              
              <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.005 262)' }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                  Invoicing Score
                </h3>
                {[
                  { label: "Ease of Use", score: 9 },
                  { label: "Features", score: 9 },
                  { label: "Value for Money", score: 10 },
                  { label: "Automation", score: 8 },
                  { label: "Integration", score: 9 },
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
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                  Quick Summary
                </h3>
                {[
                  "3 free invoices/month on Free plan",
                  "Unlimited with Invoice Assistant (£5.99/mo)",
                  "Automated payment reminders",
                  "Instant payment links for clients",
                  "Automatic payment matching",
                  "Xero, QuickBooks, Sage integration",
                  "Professional branded templates",
                  "Invoice status tracking dashboard",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>

              <img
                src={ACCOUNTING_IMG}
                alt="Tide accounting and invoicing dashboard on laptop"
                className="rounded-2xl shadow-md w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
