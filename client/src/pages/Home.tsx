// Home Page: The Ultimate Tide Bank Review 2026
// SEO Target: "Tide bank review"
// Design: Navy hero, clean editorial layout, prominent REFER200 throughout
// Mobile-first: all sections fully responsive, images visible on mobile
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { CheckCircle, XCircle, Star, Shield, Zap, Users, TrendingUp, CreditCard, FileText, Calculator, Building2, ChevronRight } from "lucide-react";
import { updatedLabel, currentYear } from "@/lib/dateUtils";
import ReferralBanner from "@/components/ReferralBanner";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-hero-hand_acd7411e.webp";
const MOBILE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-app-screenshot_b4d1c8cc.webp";

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
  { value: "4.4/5", label: "Trustpilot" },
  { value: "32k+", label: "Reviews" },
  { value: "£120k", label: "FSCS" },
];

export default function Home() {
  useSEO({
    title: "Tide Bank Review 2026 | Honest UK Business Account Review + REFER200 (£200 Free)",
    description: "The most comprehensive Tide bank review for UK businesses in 2026. Compare plans, features, Trustpilot ratings and claim up to £200 free cash with referral code REFER200.",
    canonical: "/",
    keywords: "tide bank review, tide review 2026, tide business account review, tide referral code, REFER200, tide bank uk",
  });
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.18 0.08 262) 0%, oklch(0.28 0.12 262) 60%, oklch(0.22 0.10 262) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.55 0.22 148) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.55 0.22 262) 0%, transparent 40%)",
          }}
        />

        <div className="container relative pt-8 pb-10 lg:py-24">

          {/* ── MOBILE layout: stacked ── */}
          <div className="lg:hidden">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
              ⭐ {updatedLabel()}
            </div>

            {/* Headline */}
            <h1
              className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4"
              style={{ fontFamily: "Sora, sans-serif", wordBreak: "break-word", overflowWrap: "break-word" }}
            >
              The Ultimate{" "}
              <span className="text-emerald-400">Tide Bank</span>{" "}
              Review 2026
            </h1>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              Everything you need to know about Tide's business banking platform — from features and pricing to real customer reviews. Use our exclusive referral code to claim up to{" "}
              <strong className="text-white">£200 free cash</strong>.
            </p>

            {/* Hero image — full width on mobile */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full mb-5" style={{ height: "220px" }}>
              <img
                src={HERO_IMG}
                alt="Hand holding Tide Mastercard business debit card"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)" }} />
              {/* Trustpilot badge on mobile image */}
              <div className="absolute bottom-3 left-3 bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 z-20">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4].map((i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  <svg width="12" height="12" viewBox="0 0 24 24" className="flex-shrink-0">
                    <defs><clipPath id="star-m"><rect x="0" y="0" width="9.6" height="24" /></clipPath></defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#d1d5db" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#fbbf24" clipPath="url(#star-m)" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-bold text-xs" style={{ fontFamily: "Sora, sans-serif" }}>4.4 Excellent</p>
                  <p className="text-slate-500 text-xs">32k+ reviews</p>
                </div>
              </div>
            </div>

            {/* Referral Code Box */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 mb-5">
              <p className="text-slate-300 text-xs mb-2">🎁 Exclusive Referral Code — Limited Time Offer</p>
              <p className="text-white font-mono font-black text-2xl tracking-widest mb-1">REFER200</p>
              <p className="text-emerald-400 text-xs mb-3">Up to £200 free cash when you sign up</p>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary block w-full px-4 py-3 rounded-xl font-bold no-underline text-sm text-center"
              >
                Claim £200 Free →
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-2">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-white font-black text-sm" style={{ fontFamily: "Sora, sans-serif" }}>{stat.value}</p>
                  <p className="text-slate-400 text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── DESKTOP layout: side by side ── */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                ⭐ {updatedLabel()}
              </div>
              <h1
                className="text-5xl xl:text-6xl font-black text-white leading-tight mb-6"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                The Ultimate<br />
                <span className="text-emerald-400">Tide Bank</span><br />
                Review 2026
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Everything you need to know about Tide's business banking platform — from features and pricing to real customer reviews. Plus, use our exclusive referral code to claim up to{" "}
                <strong className="text-white">£200 free cash</strong>.
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
                    <p className="text-white font-black text-xl" style={{ fontFamily: "Sora, sans-serif" }}>{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: hero image — full 520px on desktop */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: "520px" }}>
                <img
                  src={HERO_IMG}
                  alt="Hand holding Tide Mastercard business debit card"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)" }} />
              </div>
              {/* Trustpilot badge */}
              <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3 z-20">
                <div className="flex items-center gap-0.5">
                  {[1,2,3,4].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  <svg width="16" height="16" viewBox="0 0 24 24" className="flex-shrink-0">
                    <defs><clipPath id="star-d"><rect x="0" y="0" width="9.6" height="24" /></clipPath></defs>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#d1d5db" />
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#fbbf24" clipPath="url(#star-d)" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 font-bold text-sm" style={{ fontFamily: "Sora, sans-serif" }}>4.4 Excellent</p>
                  <p className="text-slate-500 text-xs">32,660 Trustpilot reviews</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHAT IS TIDE? ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Overview
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2 mb-4"
                style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.22 0.08 262)" }}
              >
                What is Tide Bank?
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
              <div className="tide-prose">
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                  Tide is one of the UK's leading digital business banking platforms, specifically built for sole traders, freelancers, startups, and small-to-medium enterprises. Founded in 2015 and headquartered in London, Tide has grown to serve over{" "}
                  <strong>1.5 million businesses</strong> — representing more than 10% of all UK SMEs.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Unlike traditional high-street banks, Tide operates as an authorised electronic money institution regulated by the Financial Conduct Authority (FCA). Business accounts are powered by{" "}
                  <strong>ClearBank</strong>, which means eligible deposits are protected by the{" "}
                  <strong>FSCS up to £120,000</strong> — giving you the same level of protection you'd expect from a mainstream bank.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  What sets Tide apart is its relentless focus on saving business owners time and money. From a free basic account with no monthly fees to built-in invoicing, VAT tools, and a card reader for in-person payments, Tide is a genuine all-in-one business finance platform.
                </p>
              </div>
              <div>
                <div
                  className="rounded-2xl p-5 sm:p-6"
                  style={{ background: "oklch(0.97 0.01 262)" }}
                >
                  <h3
                    className="font-bold text-lg mb-3"
                    style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.22 0.08 262)" }}
                  >
                    Key Facts at a Glance
                  </h3>
                  {[
                    { label: "Founded", value: "2015, London" },
                    { label: "Customers", value: "1.5M+ UK businesses" },
                    { label: "FCA Authorised", value: "Firm ref: 900843" },
                    { label: "FSCS Protection", value: "Up to £120,000 (via ClearBank)" },
                    { label: "Trustpilot", value: "4.4/5 Excellent (32,660 reviews)" },
                    { label: "Basic Account", value: "Free — no monthly fee" },
                    { label: "Signup Time", value: "As little as 5 minutes" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-start py-2 border-b border-slate-100 last:border-0 gap-2"
                    >
                      <span className="text-slate-500 text-sm flex-shrink-0">{item.label}</span>
                      <span className="text-slate-800 text-sm font-semibold text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROS & CONS ── */}
      <section className="py-12 sm:py-16" style={{ background: "oklch(0.97 0.005 262)" }}>
        <div className="container">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Honest Assessment
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2"
              style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.22 0.08 262)" }}
            >
              Tide Bank: Pros &amp; Cons
            </h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-5 sm:gap-6">
            {/* Pros */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-emerald-100">
              <h3
                className="font-bold text-base sm:text-lg text-emerald-700 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0" /> What We Love
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
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-red-100">
              <h3
                className="font-bold text-base sm:text-lg text-red-600 mb-4 flex items-center gap-2"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                <XCircle className="w-5 h-5 flex-shrink-0" /> Worth Knowing
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

      {/* ── FEATURES GRID ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Full Feature Review
            </span>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2 mb-3 sm:mb-4"
              style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.22 0.08 262)" }}
            >
              Everything Tide Offers Your Business
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
              Tide is far more than a business bank account. Here's a comprehensive overview of every major feature — click any card to read our detailed review.
            </p>
          </div>
          {/* 1 col on mobile, 2 on sm, 3 on lg */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden no-underline hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${feature.color}`} />
                <div className="p-5 sm:p-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-3 sm:mb-4`}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    className="font-bold text-base sm:text-lg text-slate-800 mb-2 group-hover:text-blue-700 transition-colors"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-3 sm:mb-4">
                    {feature.desc}
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read full review <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERRAL BANNER ── */}
      <section className="py-12 sm:py-16" style={{ background: "oklch(0.97 0.005 262)" }}>
        <div className="container">
          <ReferralBanner variant="full" />
        </div>
      </section>

      {/* ── HOW TO SIGN UP ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Getting Started
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2 mb-3 sm:mb-4"
                style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.22 0.08 262)" }}
              >
                How to Open a Tide Account &amp; Claim Your £200
              </h2>
              <p className="text-slate-500 text-sm sm:text-base">
                The entire process takes as little as 5 minutes. Here's exactly what to do:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Steps */}
              <div className="space-y-5 sm:space-y-6">
                {[
                  {
                    step: "1",
                    title: "Visit the Tide Sign-Up Page",
                    desc: "Click our referral link below to go directly to Tide's signup page. The referral code REFER200 will be pre-applied for you.",
                  },
                  {
                    step: "2",
                    title: "Enter Your Business Details",
                    desc: "Provide your business name, type (sole trader, limited company, etc.), and personal details. Make sure the code REFER200 is visible in the referral field.",
                  },
                  {
                    step: "3",
                    title: "Verify Your Identity",
                    desc: "Take a photo of your passport or driving licence and a quick selfie. Tide's verification is fast and entirely digital — no branch visits required.",
                  },
                  {
                    step: "4",
                    title: "Activate Your Account & Earn £200",
                    desc: "Your account is ready in minutes. Complete £100 of card transactions within 30 days for your £75 bonus, then deposit £5,000 in the Instant Saver for the additional £125.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-black text-base sm:text-lg"
                      style={{ background: "oklch(0.35 0.16 262)", fontFamily: "Sora, sans-serif" }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-slate-800 mb-1 text-sm sm:text-base"
                        style={{ fontFamily: "Sora, sans-serif" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
                <a
                  href={REFERRAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary inline-block px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold no-underline text-center w-full mt-4 text-sm sm:text-base"
                >
                  🎁 Open Account — Use Code REFER200 →
                </a>
              </div>

              {/* App screenshot — visible on ALL sizes */}
              <div className="flex items-center justify-center mt-6 md:mt-0">
                <img
                  src={MOBILE_IMG}
                  alt="Tide mobile app showing business account balance and Tide Mastercard"
                  className="w-full max-w-xs md:max-w-sm object-contain drop-shadow-2xl mx-auto"
                  style={{ maxHeight: "420px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST & SECURITY ── */}
      <section className="py-12 sm:py-16" style={{ background: "oklch(0.22 0.08 262)" }}>
        <div className="container">
          <div className="text-center mb-8 sm:mb-10">
            <h2
              className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Is Tide Safe &amp; Regulated?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Tide takes security and regulation seriously. Here's why you can bank with confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Shield className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "FCA Authorised",
                desc: "Tide is authorised by the Financial Conduct Authority under firm reference number 900843 for the issuing of electronic money.",
              },
              {
                icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "FSCS Protected",
                desc: "Business accounts are provided by ClearBank, meaning eligible deposits are protected up to £120,000 by the FSCS.",
              },
              {
                icon: <Star className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "4.4/5 Trustpilot",
                desc: "Over 32,660 verified customer reviews on Trustpilot give Tide an 'Excellent' rating. Tide responds to 99% of reviews.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 rounded-2xl p-5 sm:p-6 text-center">
                <div className="text-emerald-400 flex justify-center mb-3 sm:mb-4">{item.icon}</div>
                <h3
                  className="text-white font-bold text-base sm:text-lg mb-2"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR VERDICT ── */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Our Verdict
              </span>
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-black mt-2"
                style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.22 0.08 262)" }}
              >
                Is Tide Worth It in {currentYear()}?
              </h2>
            </div>

            {/* Score */}
            <div
              className="rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 text-center"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))",
              }}
            >
              <p
                className="text-slate-300 text-sm mb-2"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                TideReview.co.uk Overall Score
              </p>
              <div className="flex items-center justify-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 sm:w-8 sm:h-8 ${i <= 4 ? "fill-amber-400 text-amber-400" : "text-slate-500"}`}
                  />
                ))}
              </div>
              <p
                className="text-white text-4xl sm:text-5xl font-black mb-1"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                9.2<span className="text-xl sm:text-2xl text-slate-400">/10</span>
              </p>
              <p className="text-emerald-400 font-semibold text-sm sm:text-base">
                Highly Recommended
              </p>
            </div>

            <div className="tide-prose">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                After thoroughly reviewing every aspect of Tide's business banking platform, our verdict is clear:{" "}
                <strong>
                  Tide is an outstanding choice for the vast majority of UK small businesses, sole traders, and freelancers.
                </strong>
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                The free basic account alone offers more value than many paid accounts at traditional banks — with no monthly fees, built-in invoicing, free MTD-ready accounting tools, and a business Mastercard included as standard. For businesses that need more, the Smart (£12.49/mo), Pro (£24.99/mo), and Max (£69.99/mo) plans unlock unlimited transfers, team access, and advanced features at genuinely competitive prices.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                The fact that Tide is trusted by over 1.5 million UK businesses and holds a 4.4/5 Excellent rating on Trustpilot from over 32,000 reviews speaks volumes. And with our exclusive referral code{" "}
                <strong>REFER200</strong>, new customers can earn up to £200 in free cash — making this an even more compelling proposition.
              </p>
            </div>

            <ReferralBanner variant="compact" />
          </div>
        </div>
      </section>

      {/* ── EXPLORE MORE ── */}
      <section className="py-10 sm:py-12" style={{ background: "oklch(0.97 0.005 262)" }}>
        <div className="container">
          <h2
            className="text-xl sm:text-2xl font-black text-center mb-6 sm:mb-8"
            style={{ fontFamily: "Sora, sans-serif", color: "oklch(0.22 0.08 262)" }}
          >
            Explore Our Full Review
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl p-3 sm:p-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all no-underline group"
              >
                <span className="text-xl sm:text-2xl flex-shrink-0">{item.emoji}</span>
                <span
                  className="text-slate-700 font-semibold text-xs sm:text-sm group-hover:text-blue-700 transition-colors leading-tight"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  {item.label}
                </span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-slate-300 group-hover:text-blue-400 ml-auto flex-shrink-0 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
