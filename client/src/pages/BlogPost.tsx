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

  "tide-vs-starling-bank-comparison": (
    <div className="tide-prose">
      <p>Tide and Starling Bank are two of the most popular digital business accounts in the UK, and choosing between them is one of the most common questions we receive. Both offer free basic accounts, slick mobile apps, and strong reputations — but they have meaningfully different strengths. This detailed comparison will help you decide which is right for your business.</p>

      <h2>Overview: Tide vs Starling at a Glance</h2>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left font-semibold text-slate-700">Feature</th>
              <th className="p-3 text-center font-semibold text-slate-700">Tide</th>
              <th className="p-3 text-center font-semibold text-slate-700">Starling</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Monthly fee (basic)", "Free", "Free"],
              ["Bank transfers", "5 free/month, then £0.20", "Unlimited free"],
              ["Built-in invoicing", "✅ Yes", "❌ No"],
              ["MTD VAT filing", "✅ Yes", "❌ No"],
              ["Card reader", "✅ Yes (£159)", "❌ No"],
              ["Savings account", "✅ 4% AER", "✅ 3.25% AER"],
              ["Company registration", "✅ £24.99", "❌ No"],
              ["FSCS protection", "✅ £120,000", "✅ £85,000"],
              ["Trustpilot rating", "4.4/5 (32,000+ reviews)", "4.3/5 (40,000+ reviews)"],
              ["Welcome offer", "✅ Up to £200 (REFER200)", "❌ None"],
            ].map(([feature, tide, starling], i) => (
              <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className="p-3 text-slate-600 font-medium">{feature}</td>
                <td className="p-3 text-center text-slate-600">{tide}</td>
                <td className="p-3 text-center text-slate-600">{starling}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Where Tide Wins</h2>
      <p><strong>Business tools:</strong> Tide's built-in invoicing, expense tracking, and MTD VAT filing make it a far more complete business platform than Starling. For any business that needs to send invoices or file VAT returns, Tide eliminates the need for separate accounting software on basic tasks.</p>
      <p><strong>Savings rate:</strong> Tide's Instant Saver pays up to 4% AER — significantly higher than Starling's 3.25% AER. For a business holding £50,000 in reserves, that's an extra £375 per year.</p>
      <p><strong>Card reader:</strong> Tide offers a dedicated card reader for in-person payments. Starling has no equivalent product, meaning Starling customers must use a separate provider like Square or SumUp.</p>
      <p><strong>Company registration:</strong> Tide allows you to register a limited company for just £24.99 as part of the account opening process. Starling offers no such service.</p>
      <p><strong>Welcome offer:</strong> Tide's REFER200 offer gives new customers up to £200 free cash. Starling currently has no welcome offer for new business customers.</p>

      <h2>Where Starling Wins</h2>
      <p><strong>Free transfers:</strong> Starling offers unlimited free bank transfers on its free plan. Tide's free plan includes only 5 free transfers per month, with additional transfers costing £0.20 each. For businesses making more than 50 transfers per month who don't want to upgrade to a paid plan, Starling's free transfers are a genuine advantage.</p>
      <p><strong>Fully licensed bank:</strong> Starling is a fully authorised UK bank, while Tide operates as an authorised e-money institution (though deposits are still FSCS-protected via ClearBank). Some businesses prefer the psychological comfort of banking with a fully licensed bank.</p>
      <p><strong>Trustpilot review volume:</strong> Starling has over 40,000 Trustpilot reviews compared to Tide's 32,000+, suggesting a larger established customer base.</p>

      <h2>Our Verdict: Tide vs Starling</h2>
      <p>For the majority of UK small businesses — particularly those that need invoicing, VAT tools, or in-person payments — <strong>Tide is the better choice</strong>. The combination of built-in business tools, a higher savings rate, and the generous REFER200 welcome offer makes Tide the more complete package.</p>
      <p>Starling is the better choice only if you make a very high volume of bank transfers and don't want to pay a monthly fee — in which case Starling's unlimited free transfers are a genuine advantage over Tide's free plan.</p>
      <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 cta-primary px-5 py-2.5 rounded-xl font-bold no-underline text-sm">
        Open a Tide Account with REFER200 →
      </a>
    </div>
  ),

  "tide-card-reader-review": (
    <div className="tide-prose">
      <p>If your business takes in-person payments, having a reliable, cost-effective card reader is essential. Tide launched its own card reader to give business customers a fully integrated payment solution — and it's one of the most compelling options available for UK small businesses. This review covers everything you need to know.</p>

      <h2>The Two Tide Card Reader Models</h2>
      <p>Tide offers two card reader models to suit different business needs:</p>
      <ul className="list-disc pl-6 space-y-3 text-slate-600 mb-6">
        <li><strong>Tide Card Reader (£159)</strong> — The standard model. Accepts chip and PIN, contactless, Apple Pay, and Google Pay. Compact design with all-day battery life. Perfect for most small businesses.</li>
        <li><strong>Tide Card Reader Pro (£199)</strong> — Includes everything in the standard model plus a built-in receipt printer. Ideal for retail, hospitality, and any business where printed receipts are expected.</li>
      </ul>

      <h2>Transaction Fees</h2>
      <p>Both card readers charge a transaction fee of <strong>1.5% per transaction</strong> on the Free and Plus plans. Pro and Max plan customers benefit from a reduced rate of <strong>1.25% per transaction</strong>. There are no monthly rental fees — you own the device outright.</p>
      <p>For comparison: Square charges 1.75% per transaction, and SumUp charges 1.69%. Tide's rate of 1.5% (or 1.25% on paid plans) is competitive, particularly when combined with the seamless integration with your Tide business account.</p>

      <h2>Key Features</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li>Accepts Visa, Mastercard, American Express, Apple Pay, Google Pay, and Samsung Pay</li>
        <li>Payments appear in your Tide account in real time</li>
        <li>No separate merchant account needed — everything is managed through Tide</li>
        <li>Works over WiFi and 4G (SIM card included)</li>
        <li>All-day battery life (8+ hours of continuous use)</li>
        <li>Tamper-proof, PCI DSS compliant</li>
        <li>Manage all transactions in the Tide app alongside your bank account</li>
      </ul>

      <h2>How It Compares to Square and SumUp</h2>
      <p>The key advantage of the Tide Card Reader over Square and SumUp is <strong>integration</strong>. Because Tide's card reader is built into the same platform as your business bank account, all payments flow directly into your Tide account in real time, with automatic reconciliation. With Square or SumUp, you need to manage a separate merchant account and manually reconcile payments.</p>
      <p>For businesses that already use Tide as their primary business account, the card reader is the obvious choice. For businesses that don't yet have a Tide account, the card reader is an excellent reason to switch — especially with the REFER200 welcome offer providing up to £200 free cash.</p>

      <h2>Our Verdict</h2>
      <p>The Tide Card Reader is an excellent product for UK small businesses. Competitive transaction fees, seamless integration with your business account, and no monthly rental fees make it a compelling choice. The Pro model with built-in receipt printer is particularly good value for retail and hospitality businesses.</p>
      <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 cta-primary px-5 py-2.5 rounded-xl font-bold no-underline text-sm">
        Get a Tide Card Reader with REFER200 →
      </a>
    </div>
  ),

  "business-bank-account-for-contractors": (
    <div className="tide-prose">
      <p>Contractors and freelancers have specific business banking needs that differ from those of traditional businesses. You need an account that makes invoicing effortless, keeps your business and personal finances separate, handles irregular income, and minimises admin time — so you can focus on your work. In 2026, Tide is our top recommendation for UK contractors and freelancers.</p>

      <h2>Why Contractors Need a Separate Business Account</h2>
      <p>Many contractors and freelancers make the mistake of using their personal bank account for business transactions, at least when they're starting out. This creates several problems:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Tax complications:</strong> Mixing personal and business transactions makes it significantly harder to calculate your taxable income and allowable expenses</li>
        <li><strong>Professionalism:</strong> Clients paying into a personal account may question your credibility</li>
        <li><strong>Limited company requirement:</strong> If you operate through a limited company, you are legally required to have a separate business bank account</li>
        <li><strong>MTD compliance:</strong> Making Tax Digital requires digital records of business transactions — much easier with a dedicated business account</li>
      </ul>

      <h2>Why Tide is Perfect for Contractors</h2>
      <p><strong>Instant invoicing:</strong> Create and send professional invoices directly from the Tide app. Set up automatic payment reminders for overdue invoices. Track which invoices have been paid and which are outstanding — all in one place.</p>
      <p><strong>Expense tracking:</strong> Photograph receipts in the app and categorise expenses automatically. At tax time, your accountant will have everything they need without hours of manual data entry.</p>
      <p><strong>MTD compliance:</strong> Tide's HMRC-recognised accounting tools make it straightforward to maintain the digital records required by Making Tax Digital for Income Tax Self Assessment (MTD ITSA), which affects sole traders earning over £50,000 from April 2026.</p>
      <p><strong>Instant Saver:</strong> Contractors often receive large, irregular payments. Tide's Instant Saver account, earning up to 4% AER, is the ideal place to park money set aside for tax bills — earning interest while remaining instantly accessible.</p>
      <p><strong>Free basic account:</strong> Many contractors don't need unlimited bank transfers. Tide's free plan, with 5 free transfers per month, is sufficient for most freelancers — and there's no monthly fee.</p>

      <h2>Tide for Limited Company Contractors</h2>
      <p>If you operate through a personal service company (PSC) or limited company, Tide is particularly compelling. You can register your limited company through Tide for just £24.99, open your business account at the same time, and use Tide's accounting integrations with Xero or FreeAgent to manage your IR35 compliance and dividend payments.</p>

      <h2>The REFER200 Welcome Offer</h2>
      <p>New Tide customers can claim up to <strong>£200 free cash</strong> using referral code <strong>REFER200</strong>. Spend £100 in your first 30 days to receive £75, then spend a further £500 within 90 days to receive an additional £125. For most contractors, meeting these milestones is trivially easy.</p>
      <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 cta-primary px-5 py-2.5 rounded-xl font-bold no-underline text-sm">
        Open a Tide Account with REFER200 →
      </a>
    </div>
  ),

  "how-to-file-vat-return-tide": (
    <div className="tide-prose">
      <p>Filing your VAT return used to mean logging into the HMRC portal, manually entering figures, and hoping you hadn't made any mistakes. With Tide's built-in Making Tax Digital (MTD) tools, the process is dramatically simpler. This step-by-step guide walks you through filing your VAT return directly from your Tide account.</p>

      <h2>Before You Start: VAT Registration</h2>
      <p>To file VAT returns through Tide, you must first be VAT-registered with HMRC. VAT registration is mandatory if your taxable turnover exceeds <strong>£90,000</strong> in any 12-month period. You can also register voluntarily below this threshold, which can be beneficial if your customers are VAT-registered businesses (as they can reclaim the VAT you charge).</p>

      <h2>Step 1: Connect Tide to HMRC</h2>
      <p>To file VAT returns through Tide, you need to connect your Tide account to HMRC's Making Tax Digital service:</p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
        <li>Open the Tide app and navigate to <strong>Accounting &gt; VAT</strong></li>
        <li>Select <strong>Connect to HMRC</strong></li>
        <li>You'll be redirected to the HMRC Government Gateway login page</li>
        <li>Log in with your Government Gateway credentials</li>
        <li>Authorise Tide to access your VAT records</li>
        <li>You'll be redirected back to Tide — the connection is now active</li>
      </ol>
      <p>This connection only needs to be set up once. Tide will remember your HMRC authorisation for future returns.</p>

      <h2>Step 2: Categorise Your Transactions</h2>
      <p>Tide automatically categorises many transactions, but you should review and confirm the VAT treatment of each transaction before filing:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Standard rate (20%):</strong> Most goods and services</li>
        <li><strong>Reduced rate (5%):</strong> Energy bills, children's car seats, etc.</li>
        <li><strong>Zero rate (0%):</strong> Food, books, children's clothing, etc.</li>
        <li><strong>Exempt:</strong> Insurance, postage stamps, financial services</li>
        <li><strong>Outside the scope:</strong> Wages, PAYE, loan repayments</li>
      </ul>

      <h2>Step 3: Review Your VAT Return</h2>
      <p>Once your transactions are categorised, Tide automatically calculates your VAT return figures:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>Box 1:</strong> VAT due on sales and other outputs</li>
        <li><strong>Box 4:</strong> VAT reclaimed on purchases and other inputs</li>
        <li><strong>Box 5:</strong> Net VAT to pay or reclaim</li>
        <li><strong>Boxes 6-9:</strong> Total value of sales, purchases, and EC transactions</li>
      </ul>
      <p>Review each figure carefully before submitting. If anything looks incorrect, go back and check your transaction categorisations.</p>

      <h2>Step 4: Submit Your Return</h2>
      <p>Once you're satisfied that your return is correct:</p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
        <li>Tap <strong>Submit VAT Return</strong> in the Tide app</li>
        <li>Confirm the figures and tap <strong>Submit to HMRC</strong></li>
        <li>Tide submits the return directly to HMRC via the MTD API</li>
        <li>You'll receive a confirmation reference number from HMRC</li>
      </ol>
      <p>Your VAT return is now filed. If you owe VAT, you'll need to pay HMRC separately by the payment deadline (usually one calendar month and seven days after the end of your VAT period).</p>

      <h2>Tips for Smooth VAT Filing</h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li>Categorise transactions regularly throughout the quarter, not just at filing time</li>
        <li>Photograph and attach receipts for all business purchases in the Tide app</li>
        <li>Set a calendar reminder for your VAT filing deadline</li>
        <li>Consider connecting Tide to Xero or QuickBooks for more advanced VAT reporting</li>
      </ul>
    </div>
  ),

  "tide-savings-account-review": (
    <div className="tide-prose">
      <p>One of the most underrated features of Tide's business banking platform is its <strong>Instant Saver account</strong>, which currently pays up to <strong>4% AER (variable)</strong> on balances up to £75,000. For businesses that hold significant cash reserves, this can generate thousands of pounds in interest income each year — while keeping the money instantly accessible.</p>

      <h2>What is the Tide Instant Saver?</h2>
      <p>The Tide Instant Saver is a separate savings pot within your Tide business account. You can transfer money in and out instantly, with no notice period and no penalties for withdrawals. Interest is calculated daily and paid monthly directly into your Instant Saver balance.</p>

      <h2>Current Interest Rate</h2>
      <p>The Tide Instant Saver currently pays <strong>4% AER (variable)</strong> on balances up to <strong>£75,000</strong>. This is the most competitive rate currently offered by any of the major UK digital business banks:</p>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left font-semibold text-slate-700">Provider</th>
              <th className="p-3 text-center font-semibold text-slate-700">Rate (AER)</th>
              <th className="p-3 text-center font-semibold text-slate-700">Max Balance</th>
              <th className="p-3 text-center font-semibold text-slate-700">Notice Period</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Tide Instant Saver", "4.00%", "£75,000", "None"],
              ["Starling Business", "3.25%", "£1,000,000", "None"],
              ["Monzo Business", "1.60%", "£100,000", "None"],
              ["Revolut Business", "2.61%", "Varies", "None"],
            ].map(([provider, rate, max, notice], i) => (
              <tr key={provider} className={i === 0 ? 'bg-emerald-50' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                <td className={`p-3 font-medium ${i === 0 ? 'text-emerald-700' : 'text-slate-600'}`}>{provider}</td>
                <td className={`p-3 text-center font-bold ${i === 0 ? 'text-emerald-700' : 'text-slate-600'}`}>{rate}</td>
                <td className="p-3 text-center text-slate-600">{max}</td>
                <td className="p-3 text-center text-slate-600">{notice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-slate-400 mb-6">Rates correct as of March 2026. Variable rates are subject to change.</p>

      <h2>How Much Could You Earn?</h2>
      <p>At 4% AER, the interest on various balances over one year would be:</p>
      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
        <li><strong>£10,000 balance:</strong> ~£400 per year</li>
        <li><strong>£25,000 balance:</strong> ~£1,000 per year</li>
        <li><strong>£50,000 balance:</strong> ~£2,000 per year</li>
        <li><strong>£75,000 balance (maximum):</strong> ~£3,000 per year</li>
      </ul>
      <p>For businesses that routinely hold cash reserves for tax bills, VAT payments, or working capital, the Tide Instant Saver is an easy way to generate meaningful passive income.</p>

      <h2>How to Open a Tide Instant Saver</h2>
      <p>The Instant Saver is available to all Tide business account holders, including those on the free plan. To open one:</p>
      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-6">
        <li>Open the Tide app</li>
        <li>Navigate to <strong>Savings</strong> in the main menu</li>
        <li>Select <strong>Instant Saver</strong> and tap <strong>Open account</strong></li>
        <li>Transfer your desired amount from your main Tide account</li>
      </ol>
      <p>The process takes less than a minute. Your money starts earning interest immediately.</p>

      <h2>Is the Tide Instant Saver Safe?</h2>
      <p>Yes. Money held in the Tide Instant Saver is covered by the same FSCS protection as your main Tide account — up to <strong>£120,000</strong> via ClearBank. This is higher than the standard £85,000 FSCS limit, making it one of the most protected business savings options available.</p>
      <a href={REFERRAL_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 cta-primary px-5 py-2.5 rounded-xl font-bold no-underline text-sm">
        Open a Tide Account with REFER200 →
      </a>
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
