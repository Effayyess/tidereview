// Home Page: The Ultimate Tide Bank Review 2026
// SEO Target: "Tide bank review"
// Design: Navy hero, clean editorial layout, prominent REFER200 throughout
import { Link } from "wouter";
import { CheckCircle, XCircle, Star, Shield, Zap, Users, TrendingUp, CreditCard, FileText, Calculator, Building2, ChevronRight } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-hero-hand_acd7411e.webp";
const MOBILE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-mobile-app-VNtjRaibWhjzEYsaepd7Bv.webp";

const pros = [
  "Free basic business account with no monthly fee",
  "5-minute digital signup — no paperwork required",
  "FSCS protected up to £120,000 via ClearBank",
  "Free MTD-ready accounting tools built in",
  "Instant Saver account earning up to 4% AER",
  "Seamless Xero, QuickBooks & accounting integration",
  "Tide Card Reader for in-person payments",
  "Company registration for just £24.99 (saving £75.01 vs Companies House £100 fee)",
  "Over 1.5 million UK businesses trust Tide",
  "4.4/5 Excellent rating on Trustpilot (32,000+ reviews)",
];

const cons = [
  "Cash deposits carry a fee (0.99% at Post Office)",
  "ATM withdrawals cost £1 each",
  "Free plan limited to 5 bank transfers per month",
  "Not a full bank — operates as an e-money institution",
  "Some users report account review delays",
];

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Smart Invoicing",
    desc: "Create, send and track professional invoices directly from the app. Automated payment reminders chase overdue payments so you don't have to.",
    href: "/invoicing",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Accounting & VAT",
    desc: "HMRC-recognised, Making Tax Digital-ready tools built into your account. File VAT returns and Self Assessment directly from the Tide app.",
    href: "/accounting",
    color: "from-violet-500 to-violet-700",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Tide Card Reader",
    desc: "Take card payments anywhere with the portable Tide Card Reader. Accepts Visa, Mastercard, Amex, Apple Pay and Google Pay.",
    href: "/card-reader",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Business Savings",
    desc: "Earn up to 4% AER (variable) on up to £75,000 in the Tide Instant Saver. No penalties for withdrawals — access your money anytime.",
    href: "/pricing",
    color: "from-amber-500 to-amber-700",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Team Expense Cards",
    desc: "Issue expense cards to team members with customisable spending limits. Full visibility of all team spending in one dashboard.",
    href: "/features",
    color: "from-rose-500 to-rose-700",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Company Formation",
    desc: "Register a UK limited company for just £24.99 — saving £75.01 versus the £100 Companies House direct fee. Certificate issued within one business day.",
    href: "/company-setup",
    color: "from-teal-500 to-teal-700",
  },
];

const stats = [
  { value: "1.5M+", label: "UK Businesses" },
  { value: "4.4/5", label: "Trustpilot Rating" },
  { value: "32,000+", label: "Customer Reviews" },
  { value: "£120k", label: "FSCS Protection" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, oklch(0.18 0.08 262) 0%, oklch(0.28 0.12 262) 60%, oklch(0.22 0.10 262) 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, oklch(0.55 0.22 148) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.55 0.22 262) 0%, transparent 40%)' }} />
        <div className="container relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                ⭐ Updated March 2026
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
                The Ultimate<br />
                <span className="text-emerald-400">Tide Bank</span><br />
                Review 2026
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Everything you need to know about Tide's business banking platform — from features and pricing to real customer reviews. Plus, use our exclusive referral code to claim up to <strong className="text-white">£200 free cash</strong>.
              </p>
              
              {/* Referral Code Box */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-5 mb-8">
                <p className="text-slate-300 text-sm mb-3">🎁 Exclusive Referral Code — Limited Time Offer</p>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white font-mono font-black text-3xl tracking-widest">REFER200</p>
                    <p className="text-emerald-400 text-sm mt-1">Up to £200 free cash when you sign up</p>
                  </div>
                  <a
                    href={REFERRAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-primary px-6 py-3 rounded-xl font-bold no-underline text-sm whitespace-nowrap flex-shrink-0"
                  >
                    Claim £200 Free →
                  </a>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-white font-black text-xl" style={{ fontFamily: 'Sora, sans-serif' }}>{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              {/* Hero photo — full cover, rounded */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '520px' }}>
                <img
                  src={HERO_IMG}
                  alt="Hand holding Tide Mastercard business debit card"
                  className="w-full h-full object-cover object-center"
                />
                {/* subtle dark vignette at bottom so badge is readable */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)' }} />
              </div>
              {/* Floating Trustpilot Badge — overlapping bottom-left, accurate 4.4 stars */}
              <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
                <div className="flex items-center gap-0.5">
                  {/* 4 full gold stars */}
                  {[1,2,3,4].map(i => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  {/* 5th star: 40% filled (4.4 - 4 = 0.4) using SVG clipPath */}
                  <svg width="16" height="16" viewBox="0 0 24 24" className="flex-shrink-0">
                    <defs>
                      <clipPath id="star-fill-40">
                        <rect x="0" y="0" width="9.6" height="24" />
                      </clipPath>
                    </defs>
                    {/* Grey empty star base */}
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="#d1d5db"
                    />
                    {/* Gold filled portion clipped to 40% */}
                    <path
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      fill="#fbbf24"
                      clipPath="url(#star-fill-40)"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>4.4 Excellent</p>
                  <p className="text-slate-500 text-xs">32,660 Trustpilot reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Tide? */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Overview</span>
              <h2 className="text-3xl lg:text-4xl font-black mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                What is Tide Bank?
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="tide-prose">
                <p className="text-slate-600 text-lg leading-relaxed mb-4">
                  Tide is one of the UK's leading digital business banking platforms, specifically built for sole traders, freelancers, startups, and small-to-medium enterprises. Founded in 2015 and headquartered in London, Tide has grown to serve over <strong>1.5 million businesses</strong> — representing more than 10% of all UK SMEs.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Unlike traditional high-street banks, Tide operates as an authorised electronic money institution regulated by the Financial Conduct Authority (FCA). Business accounts are powered by <strong>ClearBank</strong>, which means eligible deposits are protected by the <strong>FSCS up to £120,000</strong> — giving you the same level of protection you'd expect from a mainstream bank.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  What sets Tide apart is its relentless focus on saving business owners time and money. From a free basic account with no monthly fees to built-in invoicing, HMRC-recognised accounting tools, and a card reader for in-person payments — Tide brings everything a modern UK business needs into one powerful app.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.01 262)' }}>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>Key Facts at a Glance</h3>
                  {[
                    { label: "Founded", value: "2015, London" },
                    { label: "Customers", value: "1.5M+ UK businesses" },
                    { label: "FCA Authorised", value: "Firm ref: 900843" },
                    { label: "FSCS Protection", value: "Up to £120,000 (via ClearBank)" },
                    { label: "Trustpilot", value: "4.4/5 Excellent (32,660 reviews)" },
                    { label: "Basic Account", value: "Free — no monthly fee" },
                    { label: "Signup Time", value: "As little as 5 minutes" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-500 text-sm">{item.label}</span>
                      <span className="text-slate-800 text-sm font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Honest Assessment</span>
            <h2 className="text-3xl lg:text-4xl font-black mt-2" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              Tide Bank: Pros & Cons
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
              <h3 className="font-bold text-lg text-emerald-700 mb-4 flex items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                <CheckCircle className="w-5 h-5" /> What We Love
              </h3>
              <ul className="space-y-3">
                {pros.map((pro) => (
                  <li key={pro} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            {/* Cons */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
              <h3 className="font-bold text-lg text-red-600 mb-4 flex items-center gap-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                <XCircle className="w-5 h-5" /> Worth Knowing
              </h3>
              <ul className="space-y-3">
                {cons.map((con) => (
                  <li key={con} className="flex items-start gap-3 text-sm text-slate-700">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
              <div className="mt-5 p-4 bg-slate-50 rounded-xl">
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong>Our verdict:</strong> For the vast majority of UK small businesses and sole traders, Tide's benefits far outweigh these minor drawbacks. The free account tier alone offers exceptional value, and the paid plans unlock a genuinely comprehensive suite of business finance tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Full Feature Review</span>
            <h2 className="text-3xl lg:text-4xl font-black mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              Everything Tide Offers Your Business
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Tide is far more than a business bank account. Here's a comprehensive overview of every major feature — click any card to read our detailed review.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden no-underline hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2 group-hover:text-blue-700 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{feature.desc}</p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read full review <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Banner */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <ReferralBanner variant="full" />
        </div>
      </section>

      {/* How to Sign Up */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Getting Started</span>
              <h2 className="text-3xl lg:text-4xl font-black mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                How to Open a Tide Account & Claim Your £200
              </h2>
              <p className="text-slate-500">The entire process takes as little as 5 minutes. Here's exactly what to do:</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {[
                  { step: "1", title: "Visit the Tide Sign-Up Page", desc: "Click our referral link below to go directly to Tide's signup page. The referral code REFER200 will be pre-applied for you." },
                  { step: "2", title: "Enter Your Business Details", desc: "Provide your business name, type (sole trader, limited company, etc.), and personal details. Make sure the code REFER200 is visible in the referral field." },
                  { step: "3", title: "Verify Your Identity", desc: "Take a photo of your passport or driving licence and a quick selfie. Tide's verification is fast and entirely digital — no branch visits required." },
                  { step: "4", title: "Activate Your Account & Earn £200", desc: "Your account is ready in minutes. Complete £100 of card transactions within 30 days for your £75 bonus, then deposit £5,000 in the Instant Saver for the additional £125." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-lg" style={{ background: 'oklch(0.35 0.16 262)', fontFamily: 'Sora, sans-serif' }}>
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <a
                  href={REFERRAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary inline-block px-8 py-4 rounded-xl font-bold no-underline text-center w-full mt-4"
                >
                  🎁 Open Account — Use Code REFER200 →
                </a>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-app-screenshot_b4d1c8cc.webp"
                  alt="Tide mobile app showing business account balance and Tide Mastercard"
                  className="w-auto object-contain drop-shadow-2xl"
                  style={{ maxHeight: '520px', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16" style={{ background: 'oklch(0.22 0.08 262)' }}>
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
              Is Tide Safe & Regulated?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Tide takes security and regulation seriously. Here's why you can bank with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "FCA Authorised",
                desc: "Tide is authorised by the Financial Conduct Authority under firm reference number 900843 for the issuing of electronic money.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "FSCS Protected",
                desc: "Business accounts are provided by ClearBank, meaning eligible deposits are protected up to £120,000 by the FSCS.",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "4.4/5 Trustpilot",
                desc: "Over 32,660 verified customer reviews on Trustpilot give Tide an 'Excellent' rating. Tide responds to 99% of reviews.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-emerald-400 flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Verdict */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Verdict</span>
              <h2 className="text-3xl lg:text-4xl font-black mt-2" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Is Tide Worth It in 2026?
              </h2>
            </div>
            
            {/* Score */}
            <div className="rounded-2xl p-8 mb-8 text-center" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
              <p className="text-slate-300 text-sm mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>TideReview.co.uk Overall Score</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-8 h-8 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-500'}`} />
                ))}
              </div>
              <p className="text-white text-5xl font-black mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>9.2<span className="text-2xl text-slate-400">/10</span></p>
              <p className="text-emerald-400 font-semibold">Highly Recommended</p>
            </div>

            <div className="tide-prose">
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                After thoroughly reviewing every aspect of Tide's business banking platform, our verdict is clear: <strong>Tide is an outstanding choice for the vast majority of UK small businesses, sole traders, and freelancers.</strong>
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The free basic account alone offers more value than many paid accounts at traditional banks — with no monthly fees, built-in invoicing, free MTD-ready accounting tools, and a business Mastercard included as standard. For businesses that need more, the Smart (£12.49/mo), Pro (£24.99/mo), and Max (£69.99/mo) plans unlock unlimited transfers, team access, and advanced features at genuinely competitive prices.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The fact that Tide is trusted by over 1.5 million UK businesses and holds a 4.4/5 Excellent rating on Trustpilot from over 32,000 reviews speaks volumes. And with our exclusive referral code <strong>REFER200</strong>, new customers can earn up to £200 in free cash — making this an even more compelling proposition.
              </p>
            </div>

            <ReferralBanner variant="compact" />
          </div>
        </div>
      </section>

      {/* Navigation to other pages */}
      <section className="py-12" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <h2 className="text-2xl font-black text-center mb-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Explore Our Full Review
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Pricing & Plans", href: "/pricing", emoji: "💰" },
              { label: "Invoicing Review", href: "/invoicing", emoji: "📄" },
              { label: "Accounting & VAT", href: "/accounting", emoji: "📊" },
              { label: "Card Reader", href: "/card-reader", emoji: "💳" },
              { label: "Business vs Personal", href: "/business-vs-personal", emoji: "🏢" },
              { label: "Company Setup", href: "/company-setup", emoji: "🏛️" },
              { label: "Customer Reviews", href: "/reviews", emoji: "⭐" },
              { label: "Claim £200 Offer", href: "/claim-offer", emoji: "🎁" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all no-underline group"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-slate-700 font-semibold text-sm group-hover:text-blue-700 transition-colors" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {item.label}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-400 ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
