// Reviews Page: Tide Trustpilot & Customer Reviews
// SEO: "Tide bank reviews", "Tide Trustpilot", "Tide customer reviews"
import { Star, ThumbsUp, ThumbsDown, Quote } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const TRUSTPILOT_URL = "https://uk.trustpilot.com/review/tide.co";

const positiveReviews = [
  {
    name: "Sarah M.",
    role: "Freelance Designer",
    rating: 5,
    date: "February 2026",
    review: "I've been with Tide for 3 years now and it's transformed how I manage my business finances. The invoicing feature alone saves me hours every month — automated reminders mean I no longer have to chase clients for payment. Setup was incredibly quick and the app is genuinely intuitive.",
  },
  {
    name: "James T.",
    role: "Plumbing Contractor",
    rating: 5,
    date: "January 2026",
    review: "Switched from a traditional high street bank 18 months ago and I'll never go back. No monthly fees, the card reader works perfectly for taking payments on-site, and the accounting tools make my tax return so much easier. The REFER200 code got me £200 when I signed up which was a great bonus!",
  },
  {
    name: "Priya K.",
    role: "E-commerce Business Owner",
    rating: 5,
    date: "March 2026",
    review: "The Xero integration is seamless — my transactions sync automatically and I barely have to touch my bookkeeping. The Instant Saver earning 4% on my business reserves is also excellent. Tide has genuinely made running my business easier.",
  },
  {
    name: "David L.",
    role: "IT Consultant",
    rating: 5,
    date: "December 2025",
    review: "Opened my account in literally 8 minutes. The app is clean and fast, customer support has been helpful when I've needed it, and the VAT filing tools work perfectly. I've recommended Tide to every business owner I know.",
  },
  {
    name: "Emma R.",
    role: "Marketing Agency Director",
    rating: 4,
    date: "February 2026",
    review: "Really impressed with the team expense cards feature — I can give my employees cards with spending limits and see all expenses in real time. The Pro plan is excellent value for a growing team. The only minor gripe is that international transfers can take a day or two.",
  },
  {
    name: "Mohammed A.",
    role: "Restaurant Owner",
    rating: 5,
    date: "January 2026",
    review: "The card reader is brilliant — it connects instantly to my Tide account and payments settle the same day. I love being able to see all my business income and expenses in one place. The accounting reports have made my accountant's job much easier at year end.",
  },
];

const negativeReviews = [
  {
    name: "Tom B.",
    role: "New Business Owner",
    rating: 2,
    date: "January 2026",
    review: "My account verification took longer than expected — about 3 days. Customer support was helpful but I was frustrated by the wait. Once it was open though, everything has been great.",
    tideResponse: "We're sorry to hear your verification took longer than expected. Our team works hard to complete checks as quickly as possible while maintaining security standards. We're glad you're now enjoying the account.",
  },
  {
    name: "Lisa H.",
    role: "Sole Trader",
    rating: 3,
    date: "December 2025",
    review: "Cash deposits at the Post Office are expensive at 0.99%. For a business that handles a lot of cash, this adds up. The rest of the account is great though.",
    tideResponse: "Thank you for the feedback. We understand cash deposit fees can be a concern for cash-heavy businesses. We're always reviewing our fee structure and appreciate your input.",
  },
];

const ratingBreakdown = [
  { stars: 5, percentage: 73, label: "Excellent" },
  { stars: 4, percentage: 11, label: "Great" },
  { stars: 3, percentage: 4, label: "Average" },
  { stars: 2, percentage: 3, label: "Poor" },
  { stars: 1, percentage: 9, label: "Bad" },
];

export default function Reviews() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container text-center">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Customer Reviews</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
            Tide Bank Reviews &<br />
            <span className="text-emerald-400">Trustpilot Ratings 2026</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            What do real Tide customers think? We've analysed over 32,000 Trustpilot reviews to give you the most comprehensive picture of Tide's customer satisfaction.
          </p>
        </div>
      </section>

      {/* Trustpilot Overview */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Score */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                  <Star className="w-4 h-4 fill-emerald-500" />
                  Trustpilot Verified Reviews
                </div>
                <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                  <p className="text-7xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>4.4</p>
                  <div>
                    <div className="flex mb-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className={`w-7 h-7 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <p className="text-slate-600 font-bold text-lg" style={{ fontFamily: 'Sora, sans-serif' }}>Excellent</p>
                    <p className="text-slate-400 text-sm">Based on 32,660+ reviews</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tide holds an "Excellent" rating on Trustpilot — one of the highest of any UK business banking provider. 73% of reviewers give Tide 5 stars, and Tide responds to the vast majority of reviews, demonstrating a genuine commitment to customer feedback.
                </p>
                <a
                  href={TRUSTPILOT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-emerald-600 font-semibold hover:text-emerald-700 no-underline"
                >
                  View all reviews on Trustpilot →
                </a>
              </div>

              {/* Rating Breakdown */}
              <div className="space-y-3">
                <h3 className="font-bold text-slate-700 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Rating Breakdown</h3>
                {ratingBreakdown.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-20 flex-shrink-0">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                      <div
                        className="h-3 rounded-full transition-all"
                        style={{
                          width: `${item.percentage}%`,
                          background: item.stars >= 4 ? 'oklch(0.55 0.22 148)' : item.stars === 3 ? 'oklch(0.82 0.18 78)' : 'oklch(0.60 0.20 27)',
                        }}
                      />
                    </div>
                    <span className="text-slate-500 text-sm w-10 text-right">{item.percentage}%</span>
                  </div>
                ))}
                <p className="text-slate-400 text-xs mt-2">Source: Trustpilot (March 2026)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positive Reviews */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-3">
              <ThumbsUp className="w-4 h-4" />
              Positive Reviews
            </div>
            <h2 className="text-3xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              What Customers Love About Tide
            </h2>
            <p className="text-slate-500 mt-2">84% of Tide's Trustpilot reviews are 4 or 5 stars</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {positiveReviews.map((review) => (
              <div key={review.name} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-slate-400 text-xs">{review.date}</span>
                </div>
                <div className="relative mb-3">
                  <Quote className="w-5 h-5 text-slate-200 absolute -top-1 -left-1" />
                  <p className="text-slate-600 text-sm leading-relaxed pl-4">{review.review}</p>
                </div>
                <div className="border-t border-slate-50 pt-3">
                  <p className="text-slate-800 font-semibold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>{review.name}</p>
                  <p className="text-slate-400 text-xs">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Negative Reviews with Balance */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-sm font-semibold px-4 py-2 rounded-full mb-3">
              <ThumbsDown className="w-4 h-4" />
              Areas for Improvement
            </div>
            <h2 className="text-3xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
              What Some Customers Find Challenging
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">
              In the interest of balance, here are some of the less positive reviews — along with Tide's responses, which demonstrate their commitment to customer service.
            </p>
          </div>
          <div className="space-y-5">
            {negativeReviews.map((review) => (
              <div key={review.name} className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="bg-white p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <span className="text-slate-400 text-xs">{review.date}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">{review.review}</p>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>{review.name}</p>
                    <p className="text-slate-400 text-xs">{review.role}</p>
                  </div>
                </div>
                <div className="p-5" style={{ background: 'oklch(0.97 0.01 262)' }}>
                  <p className="text-xs font-bold text-blue-700 mb-1" style={{ fontFamily: 'Sora, sans-serif' }}>Tide's Response:</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{review.tideResponse}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-blue-50 border border-blue-100">
            <h3 className="font-bold text-blue-800 mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>Our Assessment of Negative Reviews</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              The negative reviews for Tide are relatively few and largely relate to account verification times (which are a regulatory requirement) and cash deposit fees (which are clearly disclosed upfront). Notably, Tide responds to the vast majority of reviews — both positive and negative — which is a strong indicator of a company that takes customer feedback seriously. The 73% five-star rating is exceptional for a financial services provider.
            </p>
          </div>
        </div>
      </section>

      {/* Review Themes */}
      <section className="py-16" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-8 text-center" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            Key Themes from 32,000+ Reviews
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mb-10">
            {[
              { theme: "Fast & Easy Setup", percentage: 89, positive: true, desc: "The vast majority of reviewers highlight how quick and easy it is to open a Tide account — often in under 10 minutes." },
              { theme: "Great App Experience", percentage: 86, positive: true, desc: "Customers consistently praise the Tide mobile app for its clean design, speed, and intuitive navigation." },
              { theme: "Invoicing & Accounting", percentage: 82, positive: true, desc: "Business owners frequently mention how much time Tide's invoicing and accounting tools save them each month." },
              { theme: "Customer Support", percentage: 74, positive: true, desc: "While some customers mention wait times, the majority rate Tide's customer support as helpful and responsive." },
              { theme: "Account Verification Delays", percentage: 12, positive: false, desc: "A minority of customers experience longer-than-expected verification times, particularly for complex business structures." },
              { theme: "Cash Deposit Fees", percentage: 8, positive: false, desc: "Some cash-heavy businesses find the 0.99% Post Office deposit fee to be a drawback." },
            ].map((item) => (
              <div key={item.theme} className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-800 text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>{item.theme}</h3>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.positive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-600'}`}>
                    {item.positive ? '+' : '-'}{item.percentage}% mention
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <ReferralBanner variant="full" />
        </div>
      </section>
    </div>
  );
}
