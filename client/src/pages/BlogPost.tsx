// BlogPost page — renders individual articles by slug
// All 5 articles are defined inline with full content
import { Link, useParams } from "wouter";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { blogPosts } from "./Blog";
import ReferralBanner from "@/components/ReferralBanner";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";

// ─── Article content map ────────────────────────────────────────────────────
const articleContent: Record<string, React.ReactNode> = {

  "tide-referral-code-refer200": (
    <div className="tide-prose">
      <p>If you're considering opening a Tide business account, you're in luck — there's currently an exclusive referral offer that gives new customers up to <strong>£200 in free cash</strong> simply for signing up. In this guide, we'll walk you through exactly how to claim it, what the terms are, and why Tide is worth opening an account with in the first place.</p>

      <h2>What is the Tide Referral Code REFER200?</h2>
      <p>The Tide referral code <strong>REFER200</strong> is an exclusive promotional code that entitles new Tide customers to a cash reward when they open a business account and meet certain spending milestones. The reward is structured in two tiers:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>£75 free cash</strong> when you spend £100 on your Tide card within the first 30 days</li>
        <li>An additional <strong>£125 free cash</strong> when you spend a further £500 on your Tide card within 90 days</li>
      </ul>
      <p>That's a total of up to <strong>£200 in free cash</strong> — one of the most generous welcome offers available from any UK business bank account in 2026.</p>

      <h2>How to Claim the Offer: Step by Step</h2>
      <p>Claiming the REFER200 offer is straightforward. Follow these steps:</p>
      <ol className="list-decimal pl-6 space-y-3 text-slate-600 mb-6">
        <li><strong>Click the referral link</strong> — Use our exclusive link: <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">tide.co/partners/refer-save-refer200</a></li>
        <li><strong>Download the Tide app</strong> — Available on iOS and Android. The signup process takes as little as 5 minutes.</li>
        <li><strong>Complete your application</strong> — You'll need your name, address, date of birth, and business details. Sole traders and limited companies are both eligible.</li>
        <li><strong>Enter code REFER200</strong> — Make sure the referral code is applied during signup. If you use our link above, it should be applied automatically.</li>
        <li><strong>Receive your Tide card</strong> — Your Mastercard debit card will arrive within 3–5 working days.</li>
        <li><strong>Spend £100 within 30 days</strong> — Use your Tide card for business purchases to trigger the first £75 reward.</li>
        <li><strong>Spend a further £500 within 90 days</strong> — Complete the second milestone to receive the additional £125.</li>
      </ol>

      <h2>Who is Eligible?</h2>
      <p>The REFER200 offer is available to <strong>new Tide customers only</strong> — meaning those who have not previously held a Tide account. Both sole traders and limited companies registered in the UK are eligible. You must be aged 18 or over and a UK resident.</p>

      <h2>When Will I Receive My Cash?</h2>
      <p>Tide typically credits the cash reward to your account within <strong>30 days</strong> of meeting each spending milestone. The rewards are paid directly into your Tide business account as cash — not vouchers or points.</p>

      <h2>Is the Offer Worth It?</h2>
      <p>Absolutely. Even if you only meet the first milestone (spending £100 in 30 days), you'll receive £75 in free cash — effectively giving you a 75% cashback rate on your first £100 of business spending. For most businesses, spending £100 in the first month is trivially easy.</p>
      <p>Meeting both milestones and earning the full £200 requires spending £600 total over 90 days — again, a realistic target for the vast majority of UK businesses. Given that Tide's basic account is free with no monthly fee, you're essentially being paid to switch your business banking.</p>

      <h2>Why Open a Tide Account?</h2>
      <p>Beyond the welcome offer, Tide is genuinely one of the best business banking platforms available in the UK. Over 1.5 million UK businesses use Tide, and the platform has earned a 4.4/5 Excellent rating on Trustpilot from over 32,000 reviews. Key benefits include:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li>Free basic account with no monthly fee</li>
        <li>Built-in invoicing and expense tracking</li>
        <li>HMRC-recognised MTD-ready accounting tools</li>
        <li>Tide Card Reader for in-person payments</li>
        <li>Instant Saver earning up to 4% AER</li>
        <li>Company registration for just £24.99</li>
        <li>FSCS protection up to £120,000 via ClearBank</li>
      </ul>
    </div>
  ),

  "making-tax-digital-guide-small-business": (
    <div className="tide-prose">
      <p>Making Tax Digital (MTD) is HMRC's flagship initiative to modernise the UK tax system by requiring businesses to keep digital records and submit tax returns using approved software. If you're a UK sole trader or limited company director, MTD will affect you — and understanding it now will save you significant stress and potential penalties later.</p>

      <h2>What is Making Tax Digital?</h2>
      <p>Making Tax Digital is a government programme that requires businesses and individuals to use digital tools to maintain tax records and file returns with HMRC. The goal is to reduce errors, improve efficiency, and give both taxpayers and HMRC a more accurate, real-time view of tax obligations.</p>
      <p>MTD is being rolled out in phases. MTD for VAT has been mandatory for VAT-registered businesses since April 2022. MTD for Income Tax Self Assessment (MTD ITSA) is being introduced for sole traders and landlords from April 2026.</p>

      <h2>MTD for VAT: What You Need to Know</h2>
      <p>If your business is VAT-registered (turnover above £90,000), you are already required to comply with MTD for VAT. This means you must:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li>Keep digital VAT records using HMRC-recognised software</li>
        <li>Submit VAT returns directly from that software (not manually via the HMRC portal)</li>
        <li>Maintain a digital audit trail linking your transactions to your VAT return</li>
      </ul>
      <p>Tide's built-in accounting tools are HMRC-recognised and fully MTD-compliant for VAT. You can file your VAT returns directly from the Tide app without needing separate accounting software.</p>

      <h2>MTD for Income Tax Self Assessment (MTD ITSA)</h2>
      <p>From April 2026, sole traders and landlords with annual income above £50,000 will be required to use MTD-compatible software to submit quarterly updates to HMRC, replacing the annual Self Assessment tax return. This threshold will drop to £30,000 in April 2027.</p>
      <p>This is a significant change. Instead of filing one annual return, affected businesses will need to submit four quarterly updates plus an end-of-year declaration. Digital record-keeping from day one becomes essential.</p>

      <h2>How Tide Helps with MTD Compliance</h2>
      <p>Tide has built MTD compliance directly into its business banking platform, making it one of the most MTD-ready options for UK small businesses. Key features include:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Automatic transaction categorisation</strong> — Tide categorises your income and expenses automatically, maintaining the digital records HMRC requires</li>
        <li><strong>Direct VAT filing</strong> — Submit MTD-compliant VAT returns directly from the Tide app</li>
        <li><strong>Accounting software integrations</strong> — Connect to Xero, QuickBooks, Sage, FreeAgent, and others for more advanced reporting</li>
        <li><strong>Receipt capture</strong> — Photograph receipts in the app to maintain a complete digital audit trail</li>
      </ul>

      <h2>Penalties for Non-Compliance</h2>
      <p>HMRC has introduced a points-based penalty system for MTD non-compliance. Each missed submission earns a penalty point, and once a threshold is reached, a £200 fine is issued. Persistent non-compliance can result in significantly higher penalties. Getting MTD-ready now is far easier than dealing with penalties later.</p>

      <h2>Getting Started with MTD on Tide</h2>
      <p>If you're already a Tide customer, MTD tools are available within your account. If you're not yet a Tide customer, opening an account is free and takes as little as 5 minutes. Use referral code <strong>REFER200</strong> to claim up to <strong>£200 free cash</strong> when you sign up.</p>
    </div>
  ),

  "sole-trader-vs-limited-company-uk": (
    <div className="tide-prose">
      <p>One of the most consequential decisions any UK business owner faces is whether to operate as a sole trader or incorporate as a limited company. Both structures have distinct advantages and disadvantages, and the right choice depends on your income level, risk tolerance, growth ambitions, and personal circumstances.</p>

      <h2>What is a Sole Trader?</h2>
      <p>A sole trader is the simplest business structure in the UK. You operate as an individual, and there is no legal separation between you and your business. You register with HMRC for Self Assessment, pay Income Tax and National Insurance on your profits, and file an annual tax return.</p>
      <p>Sole trader status is quick to set up (you can register online with HMRC in minutes), has minimal ongoing administrative requirements, and is ideal for those just starting out or running a small, low-risk operation.</p>

      <h2>What is a Limited Company?</h2>
      <p>A limited company is a separate legal entity from its owners (shareholders) and directors. The company has its own legal identity, can own assets, enter contracts, and is liable for its own debts. Shareholders' personal liability is limited to the value of their shares — hence "limited" company.</p>
      <p>Limited companies pay Corporation Tax on profits (currently 19–25% depending on profit level), and directors typically pay themselves a combination of salary and dividends to minimise their personal tax liability.</p>

      <h2>Tax Comparison: Sole Trader vs Limited Company</h2>
      <p>Tax efficiency is often the primary driver for incorporating. Here's a simplified comparison for a business generating £60,000 profit:</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left font-semibold text-slate-700">Tax Item</th>
              <th className="p-3 text-center font-semibold text-slate-700">Sole Trader</th>
              <th className="p-3 text-center font-semibold text-slate-700">Limited Company</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Income Tax", "~£11,432", "~£2,286 (on salary only)"],
              ["National Insurance", "~£3,553", "~£1,048 (employer + employee)"],
              ["Corporation Tax", "N/A", "~£8,550"],
              ["Dividend Tax", "N/A", "~£2,137"],
              ["Total Tax", "~£14,985", "~£14,021"],
              ["Take-home Pay", "~£45,015", "~£45,979"],
            ].map(([item, sole, ltd], i) => (
              <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="p-3 text-slate-600">{item}</td>
                <td className="p-3 text-center text-slate-600">{sole}</td>
                <td className={`p-3 text-center font-semibold ${item === "Total Tax" ? "text-emerald-600" : "text-slate-600"}`}>{ltd}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-400 mb-6">Figures are illustrative estimates for 2025/26 tax year. Always consult an accountant for personalised advice.</p>

      <h2>Key Advantages of a Limited Company</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Limited liability</strong> — Your personal assets are protected if the business fails</li>
        <li><strong>Tax efficiency</strong> — Corporation Tax rates are generally lower than Income Tax rates at higher income levels</li>
        <li><strong>Professional credibility</strong> — Many larger clients and contracts require suppliers to be incorporated</li>
        <li><strong>Easier to raise investment</strong> — Investors can take equity stakes in a limited company</li>
        <li><strong>Pension contributions</strong> — Employer pension contributions are a tax-deductible business expense</li>
      </ul>

      <h2>Key Advantages of Sole Trader Status</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Simplicity</strong> — Less paperwork, no Companies House filings, simpler accounting</li>
        <li><strong>Lower admin costs</strong> — No need for a separate business bank account (though recommended), simpler tax returns</li>
        <li><strong>Privacy</strong> — Your accounts are not publicly available (unlike limited companies)</li>
        <li><strong>Losses</strong> — Business losses can be offset against other income more easily</li>
      </ul>

      <h2>When Should You Incorporate?</h2>
      <p>Most accountants suggest considering incorporation when your business profits exceed approximately <strong>£30,000–£40,000 per year</strong>. Below this level, the tax savings from incorporation are often offset by the additional accounting costs.</p>
      <p>You should also consider incorporating if you're taking on significant contracts, employing staff, or operating in a sector where limited liability protection is important.</p>

      <h2>Registering a Limited Company with Tide</h2>
      <p>If you decide to incorporate, Tide offers one of the most convenient and cost-effective routes. You can register a UK limited company through Tide for just <strong>£24.99</strong> — saving £75 compared to using Companies House directly — and open your business bank account at the same time. Use referral code <strong>REFER200</strong> to claim up to £200 free cash.</p>
    </div>
  ),

  "best-business-bank-account-uk-2026": (
    <div className="tide-prose">
      <p>Choosing the right business bank account is one of the most important decisions you'll make as a UK business owner. The right account can save you hundreds of pounds per year in fees, hours of admin time through integrated tools, and give you the financial visibility to make better business decisions. In this comprehensive review, we've assessed every major UK business bank account to find the best options in 2026.</p>

      <h2>What to Look for in a Business Bank Account</h2>
      <p>Before diving into specific providers, it's worth understanding what separates a great business bank account from a mediocre one. The key factors to consider are:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Monthly fees</strong> — Does the account charge a monthly fee? What do you get for it?</li>
        <li><strong>Transaction costs</strong> — How much does each bank transfer, ATM withdrawal, or card payment cost?</li>
        <li><strong>Business tools</strong> — Does the account include invoicing, expense tracking, or accounting integrations?</li>
        <li><strong>Savings</strong> — Can you earn interest on your business reserves?</li>
        <li><strong>Customer support</strong> — How easy is it to get help when you need it?</li>
        <li><strong>FSCS protection</strong> — Are your deposits protected?</li>
      </ul>

      <h2>Our Top Pick: Tide Business</h2>
      <p>After reviewing all the major providers, <strong>Tide comes out as our top pick for UK small businesses in 2026</strong>. Here's why:</p>
      <p>Tide offers the most comprehensive set of business tools of any digital bank account. While competitors like Starling and Monzo offer solid basic banking, Tide goes further with built-in invoicing, MTD-ready VAT filing, a card reader for in-person payments, and the ability to register a limited company as part of the same onboarding journey.</p>
      <p>The Tide Instant Saver account, earning up to 4% AER on balances up to £75,000, is the best savings rate available from any of the major digital business banks. And with FSCS protection up to £120,000 via ClearBank, your deposits are well protected.</p>
      <p>New customers can also claim up to <strong>£200 free cash</strong> using referral code <strong>REFER200</strong> — the most generous welcome offer currently available from any UK business bank.</p>

      <h2>Best for Unlimited Transfers: Starling Business</h2>
      <p>If your business makes a high volume of bank transfers each month, Starling's free plan with unlimited transfers is hard to beat. Starling is a fully licensed bank (not an e-money institution), which some businesses prefer, and its accounting integrations are solid.</p>
      <p>The main drawback is the lack of built-in business tools — no invoicing, no VAT filing, no card reader. For businesses that need these features, the cost of separate software often exceeds what you'd pay for a Tide paid plan.</p>

      <h2>Best App Experience: Monzo Business</h2>
      <p>Monzo's mobile app is widely regarded as the best-designed in the industry, and the business account benefits from this heritage. Unlimited free transfers on the free plan is a genuine advantage, and the Monzo brand is trusted by millions of UK consumers.</p>
      <p>However, Monzo Business is limited in its business tools. There's no invoicing, no VAT filing, no savings account, and no card reader. For sole traders with very simple needs, Monzo is a reasonable choice — but for any business with more complex requirements, Tide is the better option.</p>

      <h2>Best for International Business: Revolut Business</h2>
      <p>If your business regularly deals with overseas suppliers or customers, Revolut's multi-currency accounts and competitive FX rates are genuinely valuable. Revolut supports 30+ currencies and offers some of the best exchange rates available.</p>
      <p>For UK-focused businesses, however, Revolut's free plan is restrictive (only 5 free transfers per month), and the pricing structure across multiple tiers can be confusing. Tide is a better all-round choice for most UK SMEs.</p>

      <h2>Our Verdict</h2>
      <p>For the majority of UK small businesses — sole traders, freelancers, startups, and SMEs — <strong>Tide is the best business bank account in 2026</strong>. The combination of a free basic account, comprehensive business tools, a competitive savings rate, and the generous REFER200 welcome offer makes it the clear leader.</p>
      <p>Open your Tide account today using referral code <strong>REFER200</strong> and claim up to £200 free cash.</p>
    </div>
  ),

  "how-to-register-limited-company-uk": (
    <div className="tide-prose">
      <p>Registering a limited company in the UK is a straightforward process that can be completed online in a matter of hours. This step-by-step guide walks you through everything you need to know — from choosing a company name to receiving your Certificate of Incorporation — including how to do it through Tide for just £24.99.</p>

      <h2>Before You Start: Key Decisions to Make</h2>
      <p>Before beginning the registration process, you'll need to make several important decisions:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Company name</strong> — Must be unique and not too similar to existing companies. Check availability on the Companies House register.</li>
        <li><strong>Registered address</strong> — The official address for your company, which will be publicly listed. This can be your home address, a business address, or a registered address service.</li>
        <li><strong>Directors</strong> — You need at least one director (who must be a real person aged 16+). Directors are responsible for running the company.</li>
        <li><strong>Shareholders</strong> — You need at least one shareholder. In a small company, the director and shareholder are often the same person.</li>
        <li><strong>Share structure</strong> — How many shares will the company have, and what is their nominal value? A common starting point is 100 shares at £1 each.</li>
        <li><strong>SIC code</strong> — The Standard Industrial Classification code that describes your business activity.</li>
      </ul>

      <h2>Option 1: Register Through Tide (Recommended)</h2>
      <p>Tide offers company registration for just <strong>£24.99</strong> — a saving of £75 compared to going directly through Companies House. The process is fully integrated with opening your Tide business bank account, meaning you can have both your company registration and your business account set up in a single session.</p>
      <ol className="list-decimal pl-6 space-y-3 text-slate-600 mb-6">
        <li>Download the Tide app or visit tide.co</li>
        <li>Select "Register a new company" during the account opening process</li>
        <li>Enter your chosen company name, director details, and share structure</li>
        <li>Choose your registered address (Tide offers a registered address service)</li>
        <li>Pay the £24.99 registration fee</li>
        <li>Tide submits your application to Companies House</li>
        <li>Receive your Certificate of Incorporation (typically within 24 hours)</li>
        <li>Your Tide business account is automatically set up in your company's name</li>
      </ol>
      <p>Use referral code <strong>REFER200</strong> when opening your Tide account to claim up to £200 free cash.</p>

      <h2>Option 2: Register Directly with Companies House</h2>
      <p>You can register directly with Companies House online for £50 (same-day service) or £12 for the standard service. The process involves:</p>
      <ol className="list-decimal pl-6 space-y-3 text-slate-600 mb-6">
        <li>Create a Companies House account at companieshouse.gov.uk</li>
        <li>Complete the IN01 application form online</li>
        <li>Provide details of directors, shareholders, registered address, and share structure</li>
        <li>Upload your Memorandum and Articles of Association (standard templates are available)</li>
        <li>Pay the registration fee (£50 for same-day, £12 for standard)</li>
        <li>Receive your Certificate of Incorporation by email</li>
      </ol>

      <h2>After Registration: What to Do Next</h2>
      <p>Once your company is registered, there are several important steps to complete:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Open a business bank account</strong> — You'll need a separate account in your company's name. Tide is the obvious choice, especially with the REFER200 offer.</li>
        <li><strong>Register for Corporation Tax</strong> — You must register with HMRC within 3 months of starting to trade.</li>
        <li><strong>Register for VAT</strong> — Required if your turnover exceeds £90,000. You can register voluntarily below this threshold.</li>
        <li><strong>Set up payroll</strong> — If you're paying yourself a salary, you'll need to register as an employer with HMRC.</li>
        <li><strong>Appoint an accountant</strong> — A good accountant will save you more than their fee in tax savings and ensure you meet all your filing obligations.</li>
      </ul>

      <h2>Annual Filing Requirements</h2>
      <p>As a limited company director, you have ongoing filing obligations:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Annual accounts</strong> — Filed with Companies House within 9 months of your financial year end</li>
        <li><strong>Confirmation statement</strong> — Annual confirmation that your company details are correct (£34 fee)</li>
        <li><strong>Corporation Tax return</strong> — Filed with HMRC within 12 months of your financial year end</li>
        <li><strong>VAT returns</strong> — Quarterly (or annual) if VAT-registered</li>
        <li><strong>Self Assessment</strong> — Directors must file a personal Self Assessment tax return annually</li>
      </ul>
      <p>Tide's built-in accounting tools and integrations with Xero, QuickBooks, and FreeAgent make managing these obligations significantly easier.</p>
    </div>
  ),
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const post = blogPosts.find((p) => p.slug === slug);
  const content = articleContent[slug];

  if (!post || !content) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Article Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline">← Back to Blog</Link>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div>
      {/* Hero */}
      <section className="py-12" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1 text-slate-300 hover:text-white text-sm mb-6 no-underline transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block ${post.categoryColor}`}>
            {post.category}
          </span>
          <h1 className="text-3xl lg:text-4xl font-black text-white mt-3 mb-4 leading-snug" style={{ fontFamily: 'Sora, sans-serif' }}>
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full max-w-3xl mx-auto -mt-0">
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
      </div>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Inline referral box */}
            <div className="rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-emerald-200" style={{ background: 'oklch(0.97 0.02 148)' }}>
              <div className="flex-1">
                <p className="text-emerald-800 font-bold text-sm mb-0.5">🎁 Exclusive Tide Referral Offer</p>
                <p className="text-emerald-700 text-xs">Use code <strong className="font-mono text-base">REFER200</strong> to get up to <strong>£200 free cash</strong> when you open a Tide business account.</p>
              </div>
              <a
                href={REFERRAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary px-5 py-2.5 rounded-xl font-bold no-underline text-sm whitespace-nowrap flex-shrink-0"
              >
                Claim £200 →
              </a>
            </div>

            {/* Article body */}
            {content}

            {/* Bottom referral */}
            <div className="mt-12">
              <ReferralBanner variant="full" />
            </div>

            {/* Prev / Next */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-slate-100">
              {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className="flex-1 rounded-xl border border-slate-100 p-4 hover:border-blue-200 hover:shadow-sm transition-all no-underline group">
                  <p className="text-slate-400 text-xs mb-1 flex items-center gap-1"><ChevronLeft className="w-3 h-3" />Previous</p>
                  <p className="text-slate-700 font-semibold text-sm group-hover:text-blue-600 transition-colors leading-snug">{prevPost.title}</p>
                </Link>
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="flex-1 rounded-xl border border-slate-100 p-4 hover:border-blue-200 hover:shadow-sm transition-all no-underline group text-right">
                  <p className="text-slate-400 text-xs mb-1 flex items-center gap-1 justify-end">Next <ChevronRight className="w-3 h-3" /></p>
                  <p className="text-slate-700 font-semibold text-sm group-hover:text-blue-600 transition-colors leading-snug">{nextPost.title}</p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
