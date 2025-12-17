import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Music Production",
  description: "Learn to create professional Gospel tracks with authentic sound. From home studio setup to mixing and mastering, develop your production skills.",
};

const benefits = [
  {
    title: "DAW Fundamentals",
    description: "Master your digital audio workstation (FL Studio, Logic, Ableton) from the ground up with hands-on training.",
  },
  {
    title: "Home Studio Setup",
    description: "Learn what equipment you actually need and how to get professional results on any budget.",
  },
  {
    title: "Gospel Production Techniques",
    description: "Create that authentic Gospel sound—from Hammond organs to worship pads to driving drums.",
  },
  {
    title: "Church Backing Tracks",
    description: "Produce professional backing tracks for your worship services when you don't have a full band.",
  },
  {
    title: "Mixing & Mastering",
    description: "Learn to polish your tracks with EQ, compression, and effects that make your music radio-ready.",
  },
  {
    title: "Releasing Your Music",
    description: "Understand distribution, copyright, and how to get your Gospel music on streaming platforms.",
  },
];

const pricingTiers = [
  {
    name: "Single Session",
    price: "$100",
    description: "Address specific production questions",
    features: [
      "90-minute one-on-one session",
      "Screen sharing & hands-on guidance",
      "Project file review",
      "Resources & tutorials",
    ],
    cta: "Book a Session",
  },
  {
    name: "Producer Bootcamp",
    price: "$400",
    period: "/month",
    description: "Comprehensive production training",
    features: [
      "4 sessions per month",
      "Custom curriculum",
      "Project-based learning",
      "Asset library access",
      "Email support",
    ],
    cta: "Enroll Now",
    featured: true,
  },
  {
    name: "Track Mentorship",
    price: "$750",
    description: "Complete a track from start to finish",
    features: [
      "6 sessions over 2 months",
      "Produce one full track together",
      "Mixing & mastering included",
      "Release strategy guidance",
      "Industry feedback",
    ],
    cta: "Apply Now",
  },
];

const tools = [
  "FL Studio",
  "Logic Pro",
  "Ableton Live",
  "Pro Tools",
  "Native Instruments",
  "Splice & Sample Libraries",
  "Waves Plugins",
  "Gospel Sound Design",
];

export default function MusicProductionPage() {
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
              Music Production
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Learn to create professional Gospel tracks with authentic sound.
              From beat-making to mixing, develop the skills to produce music that honors God.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Start Producing
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
              Everything you need to produce professional Gospel music
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

      {/* Tools We Cover */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Tools &amp; Software We Cover
            </h2>
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-4">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Production Training Options
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the path that matches your goals
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
                      : "bg-card text-foreground ring-1 ring-border hover:bg-muted"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Work */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              From Dream to Reality
            </h2>
            <blockquote className="mt-8">
              <p className="text-xl leading-relaxed text-secondary-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                &ldquo;I bought FL Studio dreaming of producing Gospel music but couldn&apos;t finish a track.
                Now I create professional backing tracks for my church and I&apos;m working on my first single.&rdquo;
              </p>
              <footer className="mt-6">
                <p className="font-semibold text-secondary-foreground">Marcus W.</p>
                <p className="text-sm text-secondary-foreground/80">Worship Leader &amp; Producer, Charlotte</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Ready to Start Producing?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Book a free consultation to discuss your production goals and create a learning plan.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
