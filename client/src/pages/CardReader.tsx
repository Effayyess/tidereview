// Card Reader Page
// SEO: "Tide card reader review", "Tide card reader price"
import { CheckCircle, Star, Wifi, Battery, CreditCard, Smartphone } from "lucide-react";
import ReferralBanner from "@/components/ReferralBanner";

const REFERRAL_URL = "https://www.tide.co/partners/refer-save-refer200/bca/";
const CARD_READER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463037748/NdxoWU34dYunuZMFnFGgvt/tide-card-reader-jTQenuTUabqA32PEtMdt3i.webp";

export default function CardReader() {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Feature Review</span>
              <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                Tide Card Reader Review:<br />
                <span className="text-emerald-400">Take Payments Anywhere</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                The Tide Card Reader lets you accept card payments in person — at your shop, market stall, or client's premises. Here's our comprehensive review of both models.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-emerald-400 font-black text-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>£159</p>
                  <p className="text-slate-300 text-sm">Card Reader (standard)</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-emerald-400 font-black text-2xl" style={{ fontFamily: 'Sora, sans-serif' }}>£199</p>
                  <p className="text-slate-300 text-sm">Card Reader Plus</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src={CARD_READER_IMG}
                alt="Tide card reader being used for contactless payment in a cafe"
                className="rounded-3xl shadow-2xl w-full object-cover"
                style={{ maxHeight: '420px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Score Bar */}
      <section className="py-6 bg-white border-b border-slate-100">
        <div className="container flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <p className="text-4xl font-black" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>8.7</p>
              <p className="text-slate-400 text-xs">out of 10</p>
            </div>
            <div>
              <div className="flex mb-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                ))}
              </div>
              <p className="text-slate-600 font-semibold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>Card Reader Score</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Contactless", "Chip & PIN", "Apple Pay", "Google Pay", "Amex Accepted"].map(tag => (
              <span key={tag} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1 rounded-full border border-emerald-100">✓ {tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 tide-prose">
              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Overview: The Tide Card Reader
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For UK businesses that need to take in-person card payments, the Tide Card Reader is a compelling solution that integrates seamlessly with your Tide business account. Unlike third-party card readers that require separate settlement accounts and manual reconciliation, payments taken on the Tide Card Reader land directly in your Tide business account — typically within seconds.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tide offers two card reader models: the standard <strong>Tide Card Reader (£159)</strong> and the premium <strong>Tide Card Reader Plus (£199)</strong>. Both accept all major payment methods including Visa, Mastercard, American Express, Apple Pay, Google Pay, and Samsung Pay. The Plus model features a larger touchscreen display and a built-in receipt printer.
              </p>

              {/* Product Comparison */}
              <h2 className="text-2xl font-black mb-4 mt-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Card Reader vs Card Reader Plus: Which Should You Choose?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    name: "Tide Card Reader",
                    price: "£159",
                    highlight: false,
                    specs: [
                      "Compact, portable design",
                      "4-inch touchscreen display",
                      "All-day battery life",
                      "Bluetooth & WiFi connectivity",
                      "Accepts all major cards",
                      "Contactless, chip & PIN",
                      "Apple Pay & Google Pay",
                      "Digital receipts via SMS/email",
                    ],
                    bestFor: "Market traders, mobile businesses, pop-up shops",
                  },
                  {
                    name: "Card Reader Plus",
                    price: "£199",
                    highlight: true,
                    specs: [
                      "Everything in standard reader",
                      "Larger 5.5-inch display",
                      "Built-in receipt printer",
                      "Longer battery life",
                      "4G connectivity option",
                      "Customer-facing display",
                      "Advanced reporting",
                      "Ideal for counter use",
                    ],
                    bestFor: "Retail shops, restaurants, cafes, salons",
                  },
                ].map((product) => (
                  <div
                    key={product.name}
                    className={`rounded-2xl overflow-hidden border-2 ${product.highlight ? 'border-emerald-400 shadow-lg' : 'border-slate-100'}`}
                  >
                    {product.highlight && (
                      <div className="bg-emerald-500 text-white text-xs font-bold text-center py-2 uppercase tracking-wider">
                        Most Popular Choice
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-black text-xl mb-1" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>{product.name}</h3>
                      <p className="text-3xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: product.highlight ? 'oklch(0.45 0.20 148)' : 'oklch(0.22 0.08 262)' }}>{product.price}</p>
                      <p className="text-slate-500 text-xs mb-4">One-off purchase · No monthly rental</p>
                      {product.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-2 text-sm text-slate-700 mb-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          {spec}
                        </div>
                      ))}
                      <div className="mt-4 p-3 bg-slate-50 rounded-lg">
                        <p className="text-xs text-slate-500"><strong>Best for:</strong> {product.bestFor}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Transaction Fees: How Much Does Tide Charge?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tide offers two pricing structures for card reader transactions, depending on whether you have a Tide subscription plan:
              </p>
              <div className="rounded-xl overflow-hidden border border-slate-100 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'oklch(0.22 0.08 262)' }}>
                      <th className="text-left p-4 text-white font-semibold">Pricing Model</th>
                      <th className="text-left p-4 text-white font-semibold">Transaction Fee</th>
                      <th className="text-left p-4 text-white font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="p-4 font-medium text-slate-800">Pay-as-you-go (Free plan)</td>
                      <td className="p-4 text-slate-600">1.39% + 5p per transaction</td>
                      <td className="p-4 text-slate-600">Low-volume businesses</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="p-4 font-medium text-slate-800">Subscription (Smart/Pro/Max)</td>
                      <td className="p-4 text-slate-600">0.79% + 3p per transaction</td>
                      <td className="p-4 text-slate-600">Higher-volume businesses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                To illustrate the savings: if you process £5,000 per month in card payments, the subscription rate saves you approximately £30/month compared to pay-as-you-go — more than covering the cost of the Smart plan (£12.49/mo). For businesses processing £10,000+ per month, the Pro plan's lower transaction fees and cashback on spending make it even more compelling.
              </p>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Tap to Pay: No Hardware Required
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                For businesses that need to take occasional payments but don't want to invest in hardware, Tide also offers <strong>Tap to Pay</strong> — a feature that turns your iPhone into a card reader. Customers simply tap their card or phone against your iPhone screen to pay. No additional hardware is required, and payments land directly in your Tide account.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Tap to Pay is ideal for service businesses, tradespeople, and anyone who needs to take occasional payments on the go. The transaction fees are the same as the card reader, making it a cost-effective alternative for lower-volume businesses.
              </p>

              <h2 className="text-2xl font-black mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
                Our Card Reader Verdict
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Tide Card Reader is an excellent choice for UK small businesses that want a seamless in-person payment solution that integrates directly with their business banking. The one-off purchase price is competitive, and the transaction fees — particularly on subscription plans — are among the lowest available for UK small businesses.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The key advantage over competitors like SumUp or Square is the direct integration with your Tide business account — payments settle instantly, are automatically categorised, and appear in your accounting dashboard without any manual reconciliation. For Tide account holders, this makes the Tide Card Reader the obvious choice for in-person payments.
              </p>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ReferralBanner variant="compact" />
              <div className="rounded-2xl p-6" style={{ background: 'oklch(0.97 0.005 262)' }}>
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>Card Reader Score</h3>
                {[
                  { label: "Build Quality", score: 9 },
                  { label: "Ease of Setup", score: 10 },
                  { label: "Transaction Fees", score: 9 },
                  { label: "Payment Methods", score: 10 },
                  { label: "Account Integration", score: 10 },
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
                <h3 className="font-bold text-lg mb-4" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>Accepted Payments</h3>
                {[
                  { icon: <CreditCard className="w-4 h-4" />, label: "Visa & Mastercard" },
                  { icon: <CreditCard className="w-4 h-4" />, label: "American Express" },
                  { icon: <Smartphone className="w-4 h-4" />, label: "Apple Pay" },
                  { icon: <Smartphone className="w-4 h-4" />, label: "Google Pay" },
                  { icon: <Wifi className="w-4 h-4" />, label: "Contactless" },
                  { icon: <Battery className="w-4 h-4" />, label: "Chip & PIN" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 text-sm text-slate-700 mb-3">
                    <div className="text-emerald-500">{item.icon}</div>
                    {item.label}
                  </div>
                ))}
              </div>
              <img src={CARD_READER_IMG} alt="Tide card reader" className="rounded-2xl shadow-md w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
