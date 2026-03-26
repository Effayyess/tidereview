// Blog Index Page
// SEO: "Tide bank blog", "UK business banking tips", "small business finance UK"
import { Link } from "wouter";
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const blogPosts = [
  {
    slug: "tide-referral-code-refer200",
    title: "How to Claim Your £200 Free Cash with Tide Referral Code REFER200",
    excerpt: "A step-by-step guide to claiming up to £200 in free cash when you open a Tide business account using referral code REFER200. Everything you need to know.",
    date: "20 March 2026",
    readTime: "5 min read",
    category: "Offers & Promotions",
    categoryColor: "bg-emerald-100 text-emerald-700",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    slug: "making-tax-digital-guide-small-business",
    title: "Making Tax Digital (MTD) 2026: The Complete Guide for UK Small Businesses",
    excerpt: "HMRC's Making Tax Digital initiative is expanding. Here's everything UK sole traders and limited companies need to know — and how Tide makes compliance effortless.",
    date: "15 March 2026",
    readTime: "8 min read",
    category: "Tax & Accounting",
    categoryColor: "bg-violet-100 text-violet-700",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    slug: "sole-trader-vs-limited-company-uk",
    title: "Sole Trader vs Limited Company: Which is Right for Your Business in 2026?",
    excerpt: "One of the most important decisions for any UK business owner. We break down the tax implications, liability, admin burden, and when to make the switch.",
    date: "10 March 2026",
    readTime: "10 min read",
    category: "Business Guides",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
  },
  {
    slug: "best-business-bank-account-uk-2026",
    title: "The Best Business Bank Accounts in the UK for 2026",
    excerpt: "We've reviewed every major UK business bank account to find the best options for sole traders, freelancers, startups, and growing SMEs. Spoiler: Tide comes out on top.",
    date: "5 March 2026",
    readTime: "12 min read",
    category: "Reviews",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    slug: "how-to-register-limited-company-uk",
    title: "How to Register a Limited Company in the UK: Step-by-Step Guide 2026",
    excerpt: "A complete walkthrough of registering a UK limited company — from choosing a name to receiving your Certificate of Incorporation. Including how to do it through Tide for just £24.99.",
    date: "1 March 2026",
    readTime: "9 min read",
    category: "Business Guides",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
  },
  {
    slug: "tide-vs-starling-bank-comparison",
    title: "Tide vs Starling Bank 2026: Which is Better for Your Business?",
    excerpt: "A detailed head-to-head comparison of Tide and Starling Bank — two of the UK's most popular digital business accounts. We compare fees, features, savings rates, and more.",
    date: "25 February 2026",
    readTime: "11 min read",
    category: "Comparisons",
    categoryColor: "bg-rose-100 text-rose-700",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
  },
  {
    slug: "tide-card-reader-review",
    title: "Tide Card Reader Review 2026: Is It Worth It for Your Business?",
    excerpt: "An in-depth review of the Tide Card Reader and Card Reader Pro. We cover setup, transaction fees, battery life, and how it compares to Square and SumUp.",
    date: "20 February 2026",
    readTime: "7 min read",
    category: "Reviews",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    slug: "business-bank-account-for-contractors",
    title: "The Best Business Bank Account for UK Contractors and Freelancers in 2026",
    excerpt: "Contractors and freelancers have specific banking needs. We explain why Tide is the ideal choice — from instant invoicing to MTD compliance and the REFER200 welcome offer.",
    date: "15 February 2026",
    readTime: "8 min read",
    category: "Business Guides",
    categoryColor: "bg-blue-100 text-blue-700",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
  },
  {
    slug: "how-to-file-vat-return-tide",
    title: "How to File a VAT Return with Tide: Step-by-Step MTD Guide",
    excerpt: "A complete walkthrough of filing your VAT return using Tide's built-in MTD tools. Includes how to connect to HMRC, categorise transactions, and submit your return.",
    date: "10 February 2026",
    readTime: "6 min read",
    category: "Tax & Accounting",
    categoryColor: "bg-violet-100 text-violet-700",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&q=80",
  },
  {
    slug: "tide-savings-account-review",
    title: "Tide Instant Saver Review: Earn Up to 4% AER on Your Business Cash",
    excerpt: "Tide's Instant Saver account pays up to 4% AER with instant access. We review the rates, limits, and how it compares to other business savings options in 2026.",
    date: "5 February 2026",
    readTime: "5 min read",
    category: "Reviews",
    categoryColor: "bg-amber-100 text-amber-700",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
  },
];

export default function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <div>
      <Breadcrumb items={[{label: "Blog"}]} />
      {/* Hero */}
      <section className="py-14" style={{ background: 'linear-gradient(135deg, oklch(0.22 0.08 262), oklch(0.30 0.12 262))' }}>
        <div className="container">
          <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Business Banking Insights</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-2 mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
            The TideReview Blog
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Expert guides, tips, and insights for UK small business owners — covering business banking, tax, accounting, and company formation.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container">
          <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wider mb-4">Featured Article</p>
          <Link href={`/blog/${featured.slug}`} className="no-underline group">
            <div className="grid lg:grid-cols-2 gap-8 rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-64 lg:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4 ${featured.categoryColor}`}>
                  {featured.category}
                </span>
                <h2 className="text-2xl font-black text-slate-800 mb-3 group-hover:text-blue-700 transition-colors leading-snug" style={{ fontFamily: 'Sora, sans-serif' }}>
                  {featured.title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-5">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                </div>
                <span className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                  Read article <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12" style={{ background: 'oklch(0.97 0.005 262)' }}>
        <div className="container">
          <h2 className="text-2xl font-black mb-8" style={{ fontFamily: 'Sora, sans-serif', color: 'oklch(0.22 0.08 262)' }}>
            All Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline group">
                <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all h-full flex flex-col">
                  <img src={post.image} alt={post.title} className="w-full h-44 object-cover" />
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3 ${post.categoryColor}`}>
                      {post.category}
                    </span>
                    <h3 className="font-black text-slate-800 mb-2 group-hover:text-blue-700 transition-colors leading-snug text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-slate-400 text-xs">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
