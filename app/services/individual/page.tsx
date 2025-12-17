import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Individual Vocal Coaching",
  description: "One-on-one Gospel voice training tailored to your voice, goals, and style. Learn proper Gospel techniques, build confidence, and discover your God-given potential.",
};

const benefits = [
  {
    title: "Personalized Curriculum",
    description: "Training designed specifically for your voice, skill level, and Gospel music goals. No cookie-cutter approach.",
  },
  {
    title: "Gospel-Specific Techniques",
    description: "Learn runs, riffs, dynamics, and vocal embellishments that define authentic Gospel singing.",
  },
  {
    title: "Vocal Health & Longevity",
    description: "Proper breathing techniques and vocal care to protect your voice for years of ministry.",
  },
  {
    title: "Style Coaching",
    description: "Whether Traditional, Contemporary, or Urban Gospel—develop your authentic voice within your preferred style.",
  },
  {
    title: "Confidence Building",
    description: "Overcome stage fright, develop presence, and learn to lead worship with confidence.",
  },
  {
    title: "Flexible Scheduling",
    description: "Virtual sessions available worldwide. Schedule around your life and ministry commitments.",
  },
];

const pricingTiers = [
  {
    name: "Single Session",
    price: "$75",
    description: "Try a session or address specific challenges",
    features: [
      "60-minute one-on-one session",
      "Voice assessment",
      "Personalized feedback",
      "Practice exercises to take home",
    ],
    cta: "Book a Session",
    featured: false,
  },
  {
    name: "Monthly Package",
    price: "$275",
    period: "/month",
    description: "Consistent progress with weekly sessions",
    features: [
      "4 sessions per month (weekly)",
      "Customized training plan",
      "Progress tracking",
      "Email support between sessions",
      "Recording exercises",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Intensive Program",
    price: "$600",
    period: "/3 months",
    description: "Accelerated transformation for serious students",
    features: [
      "12 sessions over 3 months",
      "Comprehensive voice assessment",
      "Custom curriculum",
      "Priority scheduling",
      "Unlimited email support",
      "Performance preparation",
    ],
    cta: "Apply Now",
    featured: false,
  },
];

export default function IndividualCoachingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Link href="/services" className="text-sm font-medium text-primary hover:text-primary/80">
              ← Back to Services
            </Link>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Individual Vocal Coaching
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              One-on-one training tailored to your voice, goals, and Gospel style.
              Discover your God-given potential with personalized guidance.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Book Your First Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              What You&apos;ll Learn
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive training covering every aspect of Gospel vocal technique
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
              >
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {benefit.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Investment in Your Gift
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the option that fits your goals and schedule
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-2xl p-8 shadow-sm ring-1 ${
                  tier.featured
                    ? "bg-primary/5 ring-primary"
                    : "bg-card ring-border"
                }`}
              >
                {tier.featured && (
                  <span className="mb-4 inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
                <p className="mt-6">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.period && (
                    <span className="text-sm text-muted-foreground">{tier.period}</span>
                  )}
                </p>
                <ul className="mt-8 flex-1 space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Not Sure If This Is Right for You?
            </h2>
            <p className="mt-4 text-secondary-foreground/80">
              Book a free 15-minute consultation to discuss your goals and see if we&apos;re a good fit.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-secondary hover:bg-primary-foreground/90"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
