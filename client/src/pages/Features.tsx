// Features Overview Page
import { Link } from "wouter";
import { FileText, Calculator, CreditCard, TrendingUp, Users, Building2, ChevronRight, Smartphone, Globe, Shield } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

const featureGroups = [
  {
    category: "Banking Essentials",
    features: [
      { icon: <CreditCard className="w-5 h-5" />, title: "Business Mastercard", desc: "A free contactless Mastercard debit card included with every account. Use it anywhere Mastercard is accepted worldwide." },
      { icon: <Smartphone className="w-5 h-5" />, title: "Mobile App", desc: "Manage your entire business finances from your iPhone or Android. Real-time notifications, instant transfers, and full account control." },
      { icon: <TrendingUp className="w-5 h-5" />, title: "Instant Saver", desc: "Earn up to 4% AER (variable) on up to £75,000 in the Tide Instant Saver. No notice period — withdraw anytime." },
      { icon: <Globe className="w-5 h-5" />, title: "International Payments", desc: "Send money abroad in 30+ currencies with competitive exchange rates. Available on Pro and Max plans." },
    ],
  },
  {
    category: "Business Tools",
    features: [
      { icon: <FileText className="w-5 h-5" />, title: "Invoicing", desc: "Create, send and track professional invoices. Automated payment reminders chase overdue invoices automatically.", href: "/invoicing" },
      { icon: <Calculator className="w-5 h-5" />, title: "Accounting & VAT", desc: "HMRC-recognised MTD-ready tools. File VAT returns, track expenses, and estimate your tax bill.", href: "/accounting" },
      { icon: <Users className="w-5 h-5" />, title: "Team Expense Cards", desc: "Issue expense cards to team members with custom spending limits. Full visibility of all team spending." },
      { icon: <Shield className="w-5 h-5" />, title: "Spend Controls", desc: "Set spending limits, block merchants, and freeze cards instantly from the app." },
    ],
  },
  {
    category: "In-Person Payments",
    features: [
      { icon: <CreditCard className="w-5 h-5" />, title: "Tide Card Reader", desc: "Take card payments anywhere with the portable Tide Card Reader. Accepts all major cards and contactless.", href: "/card-reader" },
      { icon: <Smartphone className="w-5 h-5" />, title: "Tap to Pay", desc: "Turn your iPhone into a card reader with Tide's Tap to Pay feature — no hardware required." },
    ],
  },
  {
    category: "Business Formation",
    features: [
      { icon: <Building2 className="w-5 h-5" />, title: "Company Registration", desc: "Register a UK limited company for just £24.99. Certificate issued within one business day.", href: "/company-setup" },
      { icon: <Shield className="w-5 h-5" />, title: "Registered Address", desc: "Use Tide's London address as your company's registered office address." },
    ],
  },
];

export default function Features() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container text-center">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Feature Review</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Tide Features: The Complete Guide
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive review of every feature Tide offers UK businesses — from banking essentials to advanced accounting tools.
          </p>
        </div>
      </section>
      <Breadcrumb items={[{label: "Features & Tools"}]} />

      {/* Feature Groups */}
      <section className="py-16 bg-white">
        <div className="container">
          {featureGroups.map((group) => (
            <div key={group.category} className="mb-14">
              <h2 className="text-2xl font-black mb-6 pb-3 border-b border-slate-100" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                {group.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {group.features.map((feature) => (
                  feature.href ? (
                    <Link
                      key={feature.title}
                      href={feature.href}
                      className="group block bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all p-5 no-underline"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-3">{feature.desc}</p>
                      <span className="text-blue-600 text-xs font-semibold flex items-center gap-1">
                        Read review <ChevronRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ) : (
                    <div key={feature.title} className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                      <div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-600 flex items-center justify-center mb-3">
                        {feature.icon}
                      </div>
                      <h3 className="font-bold text-slate-800 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {feature.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container max-w-3xl mx-auto">
          <ReferralBanner variant="full" />
        </div>
      </section>
    </div>
  );
}
