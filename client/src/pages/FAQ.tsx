// FAQ Page — TideReview.co.uk
// SEO targets: "Is Tide bank safe?", "Does Tide have FSCS protection?", "Tide bank review questions"
// Design: Navy hero, accordion FAQ, structured data via JSON-LD in head
import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { updatedLabel, currentMonthYear, currentYear, lastReviewedLabel } from "@/lib/dateUtils";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";
import { Link } from "wouter";
import Breadcrumb from "@/components/Breadcrumb";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

interface FAQItem {
  q: string;
  a: React.ReactNode;
  category: string;
}

const faqs: FAQItem[] = [
  // Safety & Regulation
  {
    category: "Safety & Regulation",
    q: "Is Tide bank safe?",
    a: (
      <p>Yes, Tide is a safe and legitimate financial platform regulated by the <strong>Financial Conduct Authority (FCA)</strong> under firm reference number 900843. Tide operates as an authorised electronic money institution, and business accounts are powered by <strong>ClearBank</strong>, which is a fully authorised UK bank. This means eligible deposits held in your Tide account are protected by the <strong>Financial Services Compensation Scheme (FSCS) up to £120,000</strong> — significantly higher than the standard £85,000 limit offered by most high-street banks.</p>
    ),
  },
  {
    category: "Safety & Regulation",
    q: "Does Tide have FSCS protection?",
    a: (
      <p>Yes. Tide's business accounts are powered by ClearBank, which is an FCA-authorised bank. This means eligible deposits are protected by the FSCS up to <strong>£120,000</strong> per person. This is actually higher than the standard FSCS limit of £85,000 because ClearBank holds deposits separately from Tide's own funds. You can find full details of the protection on the Tide website and ClearBank's FSCS information sheet.</p>
    ),
  },
  {
    category: "Safety & Regulation",
    q: "Is Tide a real bank?",
    a: (
      <p>Tide is not a bank in the traditional sense — it operates as an <strong>authorised electronic money institution (EMI)</strong> regulated by the FCA. However, because Tide's accounts are powered by ClearBank (a fully licensed bank), your deposits receive the same FSCS protection as a traditional bank account. For all practical purposes, Tide functions like a bank account: you get a sort code, account number, Mastercard debit card, and full banking features. Over 1.5 million UK businesses use Tide as their primary business account.</p>
    ),
  },
  {
    category: "Safety & Regulation",
    q: "Is Tide regulated by the FCA?",
    a: (
      <p>Yes. Tide Platform Limited is authorised by the Financial Conduct Authority (FCA) as an electronic money institution under firm reference number <strong>900843</strong>. You can verify this on the FCA register at register.fca.org.uk. Tide is also registered with the Information Commissioner's Office (ICO) for data protection purposes.</p>
    ),
  },

  // Account Opening
  {
    category: "Opening an Account",
    q: "How long does it take to open a Tide account?",
    a: (
      <p>Tide is designed for speed. Most applications are approved within <strong>5 minutes</strong>, and the entire process is completed through the Tide mobile app. You'll need to provide your name, address, date of birth, and business details. For limited companies, you'll also need your Companies House registration number. In some cases, Tide may request additional identity verification documents, which can extend the process by 1–2 business days.</p>
    ),
  },
  {
    category: "Opening an Account",
    q: "Who can open a Tide business account?",
    a: (
      <div>
        <p className="mb-3">Tide is available to a wide range of UK business structures, including:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>Sole traders</li>
          <li>Freelancers and contractors</li>
          <li>Limited companies (Ltd)</li>
          <li>Limited liability partnerships (LLPs)</li>
          <li>Startups and new businesses</li>
          <li>Established SMEs</li>
        </ul>
        <p className="mt-3">You must be aged 18 or over, a UK resident, and your business must be registered in the UK. Tide is not currently available for charities, trusts, or businesses in certain restricted industries.</p>
      </div>
    ),
  },
  {
    category: "Opening an Account",
    q: "What documents do I need to open a Tide account?",
    a: (
      <div>
        <p className="mb-3">For most applicants, you'll need:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>A valid UK passport or driving licence (for identity verification)</li>
          <li>Your home address and date of birth</li>
          <li>Your business name and type</li>
          <li>Your Companies House registration number (for limited companies)</li>
          <li>Details of any other directors or significant shareholders (25%+)</li>
        </ul>
        <p className="mt-3">Tide uses automated identity verification, so you won't need to post any documents. The process is entirely digital.</p>
      </div>
    ),
  },
  {
    category: "Opening an Account",
    q: "How do I use the Tide referral code REFER200?",
    a: (
      <div>
        <p className="mb-3">Using the REFER200 referral code is simple:</p>
        <ol className="list-decimal pl-5 space-y-1 text-slate-600">
          <li>Click our referral link to go directly to the Tide signup page</li>
          <li>Download the Tide app and begin your application</li>
          <li>The referral code REFER200 will be applied automatically if you use our link</li>
          <li>Complete your application and receive your Tide card</li>
          <li>Spend £100 within 30 days to receive £75 free cash</li>
          <li>Spend a further £500 within 90 days to receive an additional £125</li>
        </ol>
        <p className="mt-3">Total reward: up to <strong>£200 free cash</strong> — paid directly into your Tide account.</p>
        <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 cta-primary px-5 py-2.5 rounded-xl font-bold no-underline text-sm">
          Claim £200 with REFER200 →
        </a>
      </div>
    ),
  },

  // Fees & Pricing
  {
    category: "Fees & Pricing",
    q: "Is Tide free to use?",
    a: (
      <p>Tide's <strong>Free plan</strong> has no monthly fee and includes a Mastercard debit card, a UK sort code and account number, 5 free bank transfers per month, and basic invoicing tools. Additional transfers cost £0.20 each, and ATM withdrawals cost £1 each. Tide also offers paid plans — <strong>Plus (£9.99/month)</strong>, <strong>Pro (£18.99/month)</strong>, and <strong>Max (£49.99/month)</strong> — which include unlimited transfers, cashback, and additional features.</p>
    ),
  },
  {
    category: "Fees & Pricing",
    q: "What are the Tide bank transfer fees?",
    a: (
      <div>
        <p className="mb-3">Bank transfer fees depend on your Tide plan:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li><strong>Free plan:</strong> 5 free transfers per month, then £0.20 each</li>
          <li><strong>Plus plan:</strong> Unlimited free transfers</li>
          <li><strong>Pro plan:</strong> Unlimited free transfers</li>
          <li><strong>Max plan:</strong> Unlimited free transfers</li>
        </ul>
        <p className="mt-3">If you make more than 50 transfers per month, upgrading to the Plus plan (£9.99/month) is likely to save you money compared to paying per-transfer fees.</p>
      </div>
    ),
  },
  {
    category: "Fees & Pricing",
    q: "Does Tide charge for cash deposits?",
    a: (
      <p>Yes. Tide does not have its own branch network, so cash deposits must be made at a <strong>Post Office branch</strong>. The fee is <strong>0.99% of the deposit amount</strong> (minimum £1). For example, depositing £500 would cost £4.95. This is a common limitation of digital business banks — if you regularly handle large amounts of cash, a traditional high-street bank may be more cost-effective for this specific need.</p>
    ),
  },
  {
    category: "Fees & Pricing",
    q: "How much does the Tide card reader cost?",
    a: (
      <p>Tide offers two card reader models. The <strong>Tide Card Reader</strong> costs <strong>£159</strong> and accepts chip and PIN, contactless, Apple Pay, and Google Pay. The <strong>Tide Card Reader Pro</strong> costs <strong>£199</strong> and adds a built-in receipt printer. Both charge a transaction fee of <strong>1.5% per transaction</strong> (1.25% on Pro and Max plans). There are no monthly rental fees — you own the device outright.</p>
    ),
  },

  // Features
  {
    category: "Features & Tools",
    q: "Does Tide have invoicing?",
    a: (
      <p>Yes. Tide has <strong>built-in invoicing tools</strong> available on all plans, including the free plan. You can create professional invoices with your logo and branding, send them directly from the app, set up automatic payment reminders for overdue invoices, and track payment status in real time. Paid plans unlock additional features including recurring invoices and invoice templates. This is a significant advantage over competitors like Starling and Monzo, which do not offer built-in invoicing.</p>
    ),
  },
  {
    category: "Features & Tools",
    q: "Does Tide support Making Tax Digital (MTD)?",
    a: (
      <p>Yes. Tide's accounting tools are <strong>HMRC-recognised and fully MTD-compliant</strong>. You can file MTD VAT returns directly from the Tide app without needing separate accounting software. Tide also integrates with leading MTD-compatible accounting platforms including Xero, QuickBooks, Sage, and FreeAgent, giving you flexibility in how you manage your tax obligations.</p>
    ),
  },
  {
    category: "Features & Tools",
    q: "Can I use Tide for international payments?",
    a: (
      <p>International payment capabilities depend on your Tide plan. The <strong>Pro and Max plans</strong> include international payments in 30+ currencies via Tide's partnership with Wise. The Free and Plus plans have limited international payment functionality. If international payments are a core requirement for your business, you may also want to consider Revolut Business, which specialises in multi-currency accounts and international transfers.</p>
    ),
  },
  {
    category: "Features & Tools",
    q: "Does Tide have a savings account?",
    a: (
      <p>Yes. Tide offers an <strong>Instant Saver account</strong> that currently pays up to <strong>4% AER (variable)</strong> on balances up to £75,000. The account is available on all plans and there are no penalties for withdrawals — you can access your money at any time. This is the most competitive savings rate currently offered by any of the major digital business banks, making it an excellent option for businesses that hold cash reserves.</p>
    ),
  },
  {
    category: "Features & Tools",
    q: "Can I have multiple Tide accounts?",
    a: (
      <p>Yes. Tide allows you to open <strong>multiple business accounts</strong> under the same login — useful if you run multiple businesses or want to separate different income streams. You can switch between accounts within the app. Each account has its own sort code and account number. Note that each account is subject to Tide's standard account opening checks.</p>
    ),
  },

  // Trustpilot & Reviews
  {
    category: "Trustpilot & Reputation",
    q: "What is Tide's Trustpilot rating?",
    a: (
      <p>Tide has an <strong>Excellent 4.4 out of 5</strong> rating on Trustpilot, based on over <strong>32,000 customer reviews</strong>. Approximately 72% of reviewers give Tide 5 stars. Common themes in positive reviews include the speed of account opening, the quality of the mobile app, and the usefulness of the built-in business tools. Tide is one of the highest-rated business banks on Trustpilot in the UK.</p>
    ),
  },
  {
    category: "Trustpilot & Reputation",
    q: "Are there any negative reviews of Tide?",
    a: (
      <p>Like any financial platform, Tide does receive some negative reviews. The most common complaints relate to <strong>account freezes or reviews</strong> — a regulatory requirement for all financial institutions to prevent fraud and money laundering. Some customers report that these reviews can take several days to resolve. Other complaints mention customer support response times during peak periods. It's worth noting that Tide's overall rating of 4.4/5 is excellent for a financial services provider, and the vast majority of customers report positive experiences.</p>
    ),
  },

  // Company Formation
  {
    category: "Company Formation",
    q: "Can I register a limited company with Tide?",
    a: (
      <p>Yes. Tide offers a <strong>company registration service</strong> for just <strong>£24.99</strong> — saving £75.01 compared to registering directly with Companies House (which now charges <strong>£100</strong> for the standard online registration, plus requires separate bank account setup). Through Tide, you can register your limited company and open your business bank account in a single, streamlined process. Your Certificate of Incorporation is typically issued within one business day.</p>
    ),
  },
  {
    category: "Company Formation",
    q: "Does Tide offer a registered address service?",
    a: (
      <p>Yes. Tide offers a <strong>registered address service</strong> that allows you to use a professional London address as your company's registered address, rather than your home address. This is particularly valuable for home-based businesses that don't want their personal address publicly listed on the Companies House register. The service is available as an add-on when registering your company through Tide.</p>
    ),
  },
];

const categories = Array.from(new Set(faqs.map((f) => f.category)));

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl border border-slate-100 overflow-hidden"
          style={{ background: openIndex === i ? 'oklch(0.98 0.01 262)' : 'white' }}
        >
          <button
            className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-semibold text-slate-800 text-sm leading-snug" style={{ fontFamily: 'Sora, sans-serif' }}>
              {item.q}
            </span>
            {openIndex === i
              ? <ChevronUp className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              : <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
            }
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
              <div className="pt-4">{item.a}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  useSEO({
    title: "Tide Bank FAQ 2026 | Frequently Asked Questions About Tide Business Account",
    description: "Answers to the most common questions about Tide business banking — account safety, FSCS protection, fees, features, opening times, and the REFER200 referral offer.",
    canonical: "/faq",
    keywords: "tide bank faq, tide bank questions, is tide bank safe, tide FSCS protection, tide account opening time",
  });
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const displayCategories = ["All", ...categories];

  const filtered = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <Breadcrumb items={[{label: "Frequently Asked Questions"}]} />
      <section className="py-14" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Tide Bank FAQ 2026
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about Tide business banking — from safety and regulation to fees, features, and the REFER200 referral offer.
          </p>
        </div>
      </section>
      {/* FAQ Content */}
      <section className="py-14 bg-white">
        <div className="container max-w-4xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {displayCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
                style={activeCategory === cat ? { background: 'oklch(0.35 0.16 262)', fontFamily: 'Sora, sans-serif' } : { fontFamily: 'DM Sans, sans-serif' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQs grouped by category */}
          {activeCategory === "All" ? (
            categories.map((cat) => (
              <div key={cat} className="mb-10">
                <h2 className="text-xl font-black mb-4 pb-2 border-b border-slate-100" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                  {cat}
                </h2>
                <FAQAccordion items={faqs.filter((f) => f.category === cat)} />
              </div>
            ))
          ) : (
            <FAQAccordion items={filtered} />
          )}

          {/* Still have questions? */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: 'oklch(0.97 0.01 262)' }}>
            <h3 className="text-xl font-black mb-2" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              Still have questions?
            </h3>
            <p className="text-slate-500 text-sm mb-5">
              Browse our detailed review pages for in-depth information, or visit the Tide website directly.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/reviews" className="cta-navy px-5 py-2.5 rounded-xl text-sm font-semibold no-underline">
                Read Customer Reviews
              </Link>
              <Link href="/pricing" className="cta-navy px-5 py-2.5 rounded-xl text-sm font-semibold no-underline">
                View Pricing Plans
              </Link>
              <a href="https://www.tide.co/help" target="_blank" rel="noopener noreferrer" className="bg-slate-200 text-slate-700 hover:bg-slate-300 px-5 py-2.5 rounded-xl text-sm font-semibold no-underline transition-colors">
                Tide Help Centre ↗
              </a>
            </div>
          </div>

          <div className="mt-10">
            <ReferralBanner variant="full" />
          </div>
        </div>
      </section>
    </div>
  );
}
