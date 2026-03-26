// Company Setup Page
// SEO: "Tide company formation", "register limited company UK", "Tide company registration review"
import { CheckCircle, Building2, Clock, FileCheck, Shield, ChevronRight } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const COMPANY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-company-setup-KqtchMr3TvS9Zdb7AL59TL.webp";

const steps = [
  {
    step: "1",
    title: "Choose Your Company Name",
    desc: "Search for your desired company name to check availability on Companies House. Tide's tool checks in real time and suggests alternatives if your first choice is taken.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    step: "2",
    title: "Provide Director & Shareholder Details",
    desc: "Enter the details of all directors and shareholders. You'll need full names, addresses, dates of birth, and nationality. For most small businesses, this is just the founder.",
    icon: <FileCheck className="w-5 h-5" />,
  },
  {
    step: "3",
    title: "Choose Your Registered Address",
    desc: "Select your company's registered office address. You can use your home address, a business address, or Tide's London registered address service for an additional fee.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    step: "4",
    title: "Verify Your Identity",
    desc: "Complete a quick digital identity verification using your passport or driving licence. This is required by Companies House and takes just a few minutes.",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    step: "5",
    title: "Pay & Submit",
    desc: "Pay the £24.99 formation fee and Tide submits your application to Companies House. Your Certificate of Incorporation is typically issued within one business day.",
    icon: <Clock className="w-5 h-5" />,
  },
];

const benefits = [
  { title: "Limited Liability Protection", desc: "As a limited company director, your personal assets are protected. If the business fails, creditors can only pursue the company's assets — not your personal savings or home." },
  { title: "Tax Efficiency", desc: "Limited companies pay Corporation Tax (currently 19-25%) rather than Income Tax, which can be significantly lower for profitable businesses. Directors can also take dividends, which are taxed at lower rates than salary." },
  { title: "Professional Credibility", desc: "Operating as 'Smith Consulting Ltd' rather than 'John Smith' signals professionalism and permanence to clients, suppliers, and partners. Many larger companies prefer to work with limited companies." },
  { title: "Easier to Raise Investment", desc: "Limited companies can issue shares to investors, making it far easier to raise capital for growth. Sole traders have no equivalent mechanism." },
  { title: "Business Continuity", desc: "A limited company exists independently of its directors and shareholders. The business can continue even if ownership changes, making it easier to sell or transfer." },
];

export default function CompanySetup() {
  return (
    <div>
      {/* Hero */}
      <Breadcrumb items={[{label: "Business Guide", href: "/company-setup"}, {label: "Company Formation Guide"}]} />
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Business Guide</span>
              <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                Setting Up a Limited Company<br />
                <span className="text-emerald-400">with Tide: Full Review</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Tide offers a complete company formation service that lets you register a UK limited company and open a business bank account in one seamless process — for just £24.99.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-emerald-400 font-black text-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>£24.99</p>
                  <p className="text-slate-300 text-xs">Formation fee</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-emerald-400 font-black text-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>1 day</p>
                  <p className="text-slate-300 text-xs">Certificate issued</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-emerald-400 font-black text-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>5 min</p>
                  <p className="text-slate-300 text-xs">To apply</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={COMPANY_IMG}
                alt="UK company formation documents and registration"
                className="rounded-3xl shadow-2xl w-full object-cover"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why Form a Limited Company */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Why Incorporate?</span>
            <h2 className="text-3xl font-black mt-2" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              5 Reasons to Register as a Limited Company
            </h2>
          </div>
          <div className="space-y-5">
            {benefits.map((benefit, i) => (
              <div key={benefit.title} className="flex gap-5 p-5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black" style={{ background: 'oklch(0.35 0.16 262)', fontFamily: 'Sora, sans-serif' }}>
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Register with Tide */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Step-by-Step Guide</span>
            <h2 className="text-3xl font-black mt-2" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              How to Register Your Limited Company with Tide
            </h2>
            <p className="text-slate-500 mt-2">The entire process takes as little as 5 minutes and can be completed entirely online.</p>
          </div>
          <div className="space-y-5">
            {steps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex gap-5">
                <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-lg" style={{ background: 'linear-gradient(135deg, oklch(0.45 0.20 148), oklch(0.38 0.18 148))', fontFamily: 'Sora, sans-serif' }}>
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href={REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary inline-block px-8 py-4 rounded-xl font-bold no-underline text-lg"
            >
              Register Your Company + Get £200 Free (Code: REFER200) →
            </a>
            <p className="text-slate-400 text-sm mt-3">£24.99 company formation fee applies. Referral bonus on business account opening.</p>
          </div>
        </div>
      </section>

      {/* Tide vs Companies House Direct */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Tide Company Formation vs. Going Direct to Companies House
          </h2>
          <div className="rounded-xl overflow-hidden border border-slate-100 shadow-sm mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'oklch(0.22 0.08 262)' }}>
                  <th className="text-left p-4 text-white font-semibold">Feature</th>
                  <th className="text-center p-4 text-white font-semibold">Tide (£24.99)</th>
                  <th className="text-center p-4 text-white font-semibold">Companies House Direct (£100)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Formation fee", tide: "£24.99", ch: "£100" },
                  { feature: "Business bank account included", tide: "✓ Free", ch: "✗ Separate" },
                  { feature: "Digital application", tide: "✓", ch: "✓" },
                  { feature: "Certificate turnaround", tide: "1 business day", ch: "1-3 business days" },
                  { feature: "Invoicing tools included", tide: "✓", ch: "✗" },
                  { feature: "Accounting tools included", tide: "✓", ch: "✗" },
                  { feature: "Registered address service", tide: "Available", ch: "Not offered" },
                  { feature: "REFER200 bonus (up to £200)", tide: "✓", ch: "✗" },
                ].map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 text-slate-700">{row.feature}</td>
                    <td className="p-4 text-center font-medium text-emerald-600">{row.tide}</td>
                    <td className="p-4 text-center text-slate-500">{row.ch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="tide-prose mb-8">
            <p className="text-slate-600 leading-relaxed mb-4">
              Registering directly with Companies House now costs <strong>£100</strong> and gives you just the incorporation certificate. You'd then need to separately open a business bank account, set up invoicing software, and find accounting tools — all at additional cost and effort.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Tide's £24.99 company formation service saves you £75.01 versus the £100 Companies House direct fee, and it bundles the bank account and business tools into one seamless process. You can go from idea to incorporated company with a fully functional business bank account in a single afternoon.
            </p>
            <p className="text-slate-600 leading-relaxed">
              And with referral code <strong>REFER200</strong>, you can earn up to <strong>£200 free cash</strong> on top of all these savings — making Tide's company formation service an outstanding value proposition for any new UK business owner.
            </p>
          </div>

          <ReferralBanner variant="full" />
        </div>
      </section>
    </div>
  );
}
