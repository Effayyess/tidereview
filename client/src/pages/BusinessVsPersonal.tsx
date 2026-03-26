// Business vs Personal Account Page
// SEO: "business bank account vs personal", "do I need a business bank account UK"
import { CheckCircle, XCircle, AlertTriangle, Building2, User } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-hero-g3S6sJ5gBV4g64vsBa75fh.webp";

const reasons = [
  {
    title: "It's a Legal Requirement for Limited Companies",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "bg-red-50 text-red-600",
    content: "If you operate as a limited company, using a personal bank account for business transactions is not just inadvisable — it's potentially illegal. A limited company is a separate legal entity from its directors and shareholders, and its finances must be kept entirely separate. Mixing personal and business funds in a limited company can constitute a breach of your director's duties and may expose you to personal liability that would otherwise be protected by the corporate veil.",
  },
  {
    title: "Personal Account T&Cs Prohibit Business Use",
    icon: <XCircle className="w-6 h-6" />,
    color: "bg-amber-50 text-amber-600",
    content: "Almost every major UK bank's personal account terms and conditions explicitly prohibit using the account for business purposes. If your bank discovers you're running a business through your personal account, they can close your account with little or no notice — leaving you without access to your funds at a critical moment. This is a risk no business owner should take.",
  },
  {
    title: "Tax Compliance Becomes a Nightmare",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600",
    content: "When business and personal transactions are mixed in the same account, calculating your taxable income and deductible expenses becomes extremely complex and time-consuming. HMRC requires you to keep accurate records of all business income and expenses, and mixing accounts makes this far harder. A dedicated business account creates a clean, auditable record of all business activity — making your Self Assessment or Corporation Tax return significantly easier to prepare.",
  },
  {
    title: "Professional Image and Client Trust",
    icon: <Building2 className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600",
    content: "When you invoice a client and ask them to pay 'John Smith' rather than 'Smith Consulting Ltd', it immediately signals that you're not operating as a proper business. Clients — particularly larger companies — may question your professionalism and legitimacy. A business bank account with your trading name builds credibility and trust, and can be the difference between winning and losing a contract.",
  },
  {
    title: "Building Business Credit History",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600",
    content: "A dedicated business bank account helps you build a business credit history, which is essential if you ever need to apply for a business loan, credit card, or commercial mortgage. Lenders look at your business banking history when assessing creditworthiness — a strong, consistent record of business transactions demonstrates financial stability and responsibility.",
  },
  {
    title: "Access to Business-Specific Features",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "bg-teal-50 text-teal-600",
    content: "Business bank accounts like Tide come with features specifically designed for businesses: invoicing tools, VAT filing, expense categorisation, team expense cards, accounting software integrations, and more. These tools can save you hours of admin time each month — time that's better spent growing your business.",
  },
];

export default function BusinessVsPersonal() {
  return (
    <div>
      {/* Hero */}
      <Breadcrumb items={[{label: "Business Guide", href: "/business-vs-personal"}, {label: "Business vs Personal Account"}]} />
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Business Guide</span>
            <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Business Bank Account vs Personal:<br />
              <span className="text-emerald-400">Why Every Business Needs One</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Many UK sole traders and new business owners make the mistake of using their personal bank account for business transactions. Here's why that's a serious mistake — and why Tide is the perfect solution.
            </p>
          </div>
        </div>
      </section>
      {/* Quick Comparison */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-center mb-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              Personal vs Business Account: At a Glance
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border-2 border-red-100 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                    <User className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-xl text-red-700" style={{ fontFamily: 'Sora, sans-serif' }}>Personal Account</h3>
                </div>
                {[
                  { text: "Prohibited for business use by T&Cs", bad: true },
                  { text: "Legally required to be separate for Ltd companies", bad: true },
                  { text: "No invoicing or VAT tools", bad: true },
                  { text: "Tax records become complicated", bad: true },
                  { text: "Looks unprofessional to clients", bad: true },
                  { text: "No business credit history built", bad: true },
                  { text: "Bank can close account without notice", bad: true },
                  { text: "No team expense cards", bad: true },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-2 text-sm text-slate-700 mb-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {item.text}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border-2 border-emerald-200 p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-xl text-emerald-700" style={{ fontFamily: 'Sora, sans-serif' }}>Tide Business Account</h3>
                </div>
                {[
                  "Designed specifically for business use",
                  "Legally compliant for limited companies",
                  "Built-in invoicing & VAT filing tools",
                  "Clean, auditable financial records",
                  "Professional business name on payments",
                  "Builds business credit history",
                  "FCA regulated & FSCS protected",
                  "Team expense cards with spending limits",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-700 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Reasons */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                6 Reasons You Must Have a Business Bank Account
              </h2>
            </div>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={reason.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${reason.color} flex items-center justify-center flex-shrink-0`}>
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-slate-800 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {index + 1}. {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">{reason.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs a Business Account? */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Who Needs a Business Bank Account?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "Limited Companies",
                mandatory: true,
                desc: "If you've registered a limited company with Companies House, a separate business bank account is legally required. Your company's finances must be kept entirely separate from your personal finances.",
              },
              {
                title: "Sole Traders",
                mandatory: false,
                desc: "While not legally required for sole traders, a business account is strongly recommended. It simplifies tax returns, looks more professional, and protects you from having your personal account closed.",
              },
              {
                title: "Freelancers & Contractors",
                mandatory: false,
                desc: "Freelancers who invoice clients regularly will benefit enormously from a business account with built-in invoicing tools, expense tracking, and accounting integrations.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-black text-lg" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>{item.title}</h3>
                  {item.mandatory && (
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full">Required</span>
                  )}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="tide-prose mb-8">
            <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              Why Tide is the Best Business Account for UK Businesses
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Once you've decided to open a business bank account — and you absolutely should — the next question is which provider to choose. Traditional high-street banks like Barclays, Lloyds, and NatWest offer business accounts, but they typically come with monthly fees, lengthy application processes, and limited digital features.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Tide stands out because it was built from the ground up for small businesses. The free basic account includes invoicing, expense tracking, and MTD-ready accounting tools that traditional banks charge separately for. The application process takes as little as 5 minutes and is entirely digital — no branch visits, no paper forms, no waiting weeks for a decision.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              And with our exclusive referral code <strong>REFER200</strong>, you can earn up to <strong>£200 in free cash</strong> just for opening your account and meeting simple spending milestones. That's a compelling incentive to make the switch today.
            </p>
          </div>

          <ReferralBanner variant="full" />
        </div>
      </section>
    </div>
  );
}
