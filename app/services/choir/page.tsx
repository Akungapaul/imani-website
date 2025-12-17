import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Choir & Group Training",
  description: "Transform your worship team or choir into a unified, professional-sounding ministry. Training in Gospel harmonies, blend, and spiritual leadership.",
};

const benefits = [
  {
    title: "Section Training",
    description: "Dedicated coaching for soprano, alto, tenor, and bass sections to ensure each part is confident and skilled.",
  },
  {
    title: "Blend & Balance",
    description: "Learn techniques for achieving that unified Gospel sound where voices complement rather than compete.",
  },
  {
    title: "Gospel Harmonies",
    description: "Master the rich harmonic traditions of Gospel music, from traditional hymn harmonies to contemporary arrangements.",
  },
  {
    title: "Call & Response",
    description: "Develop the dynamic interplay between lead and choir that makes Gospel music come alive.",
  },
  {
    title: "Director Training",
    description: "Equip your choir director with conducting techniques, rehearsal strategies, and leadership skills.",
  },
  {
    title: "Team Building",
    description: "Foster unity and spiritual growth within your worship ministry beyond just musical skills.",
  },
];

const packages = [
  {
    name: "Workshop (Single Day)",
    price: "Starting at $500",
    description: "Intensive one-day training session",
    features: [
      "4-6 hour workshop",
      "Section breakouts",
      "Full choir rehearsal",
      "Repertoire coaching",
      "Up to 30 participants",
    ],
    ideal: "Churches wanting a focused boost",
  },
  {
    name: "Monthly Program",
    price: "Starting at $800/month",
    description: "Ongoing development for consistent growth",
    features: [
      "4 sessions per month",
      "Section training",
      "Director coaching",
      "Progress assessments",
      "Email support",
    ],
    ideal: "Teams committed to excellence",
  },
  {
    name: "Custom Program",
    price: "Contact for Quote",
    description: "Tailored to your ministry's specific needs",
    features: [
      "Flexible scheduling",
      "Custom curriculum",
      "Retreat or conference format",
      "Multi-day intensives",
      "Any group size",
    ],
    ideal: "Large ministries or special events",
  },
];

const testimonials = [
  {
    quote: "Our worship team went from inconsistent to excellent in 3 months. Imani understands that Gospel isn't just music—it's ministry.",
    name: "Pastor David R.",
    role: "Senior Pastor, Houston",
  },
  {
    quote: "I stepped into the choir director role with no formal training. Imani gave me the tools to lead rehearsals with confidence.",
    name: "Angela F.",
    role: "Volunteer Choir Director, Dallas",
  },
];

export default function ChoirTrainingPage() {
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
              Choir &amp; Group Training
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Transform your worship team or choir into a unified, professional-sounding ministry.
              Training that honors both the art and the heart of Gospel music.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Get a Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              What We Cover
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive training for every aspect of choir and worship team development
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

      {/* Testimonials */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              What Church Leaders Say
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card p-8 shadow-sm"
              >
                <blockquote>
                  <p className="text-lg leading-relaxed text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Training Packages
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Flexible options to fit your ministry&apos;s needs and budget
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
              >
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {pkg.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pkg.description}
                </p>
                <p className="mt-6 text-2xl font-bold text-primary">
                  {pkg.price}
                </p>
                <ul className="mt-8 flex-1 space-y-4">
                  {pkg.features.map((feature, index) => (
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
                <p className="mt-6 text-xs text-muted-foreground">
                  <strong>Ideal for:</strong> {pkg.ideal}
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Ready to Elevate Your Ministry?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Let&apos;s discuss your team&apos;s goals and create a custom training plan.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
