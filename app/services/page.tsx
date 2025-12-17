import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Gospel voice training services: individual vocal coaching, choir training, and music production. Find the right program for your Gospel music journey.",
};

const services = [
  {
    id: "individual",
    title: "Individual Vocal Coaching",
    description: "One-on-one training tailored to your voice, goals, and Gospel style.",
    features: [
      "Personalized curriculum based on your skill level",
      "Gospel-specific vocal techniques (runs, riffs, dynamics)",
      "Proper breathing and vocal health",
      "Style coaching for Traditional, Contemporary, or Urban Gospel",
      "Confidence building for worship leading or solo performance",
      "Recording and listening exercises",
    ],
    pricing: "Starting at $75/session",
    cta: "Book a Session",
  },
  {
    id: "choir",
    title: "Choir & Group Training",
    description: "Transform your worship team or choir into a unified, professional-sounding ministry.",
    features: [
      "Choir fundamentals and blend techniques",
      "Section training (soprano, alto, tenor, bass)",
      "Gospel harmonies and call-and-response dynamics",
      "Arrangement coaching and song preparation",
      "Director training and leadership development",
      "Team-building for worship ministry",
    ],
    pricing: "Custom pricing based on group size",
    cta: "Get a Quote",
  },
  {
    id: "production",
    title: "Music Production",
    description: "Learn to create professional Gospel tracks with authentic sound.",
    features: [
      "DAW basics and home studio setup",
      "Gospel-specific production techniques",
      "Creating backing tracks for your church",
      "Hammond organs, worship pads, and choir arrangements",
      "Mixing and mastering fundamentals",
      "Releasing your own Gospel music",
    ],
    pricing: "Starting at $100/session",
    cta: "Start Producing",
  },
];

const faqs = [
  {
    question: "Do I need any prior experience?",
    answer: "No! Whether you're a complete beginner or experienced singer looking to refine your Gospel technique, there's a program for you. We meet you where you are.",
  },
  {
    question: "How are sessions conducted?",
    answer: "Sessions can be conducted in-person or virtually via video call. Virtual sessions have proven just as effective and allow me to work with students worldwide.",
  },
  {
    question: "How long until I see results?",
    answer: "Most students notice improvement within the first few sessions. Significant transformation typically happens within 3-6 months of consistent practice and training.",
  },
  {
    question: "Can you work with my church's schedule?",
    answer: "Absolutely. For choir and group training, I'm flexible with scheduling and can work around your ministry calendar, including evening and weekend sessions.",
  },
  {
    question: "What styles of Gospel do you teach?",
    answer: "I teach all styles: Traditional Gospel, Contemporary Gospel, Praise & Worship, and Urban/Modern Gospel. Your training will be tailored to your preferred style.",
  },
  {
    question: "Do you offer group discounts for churches?",
    answer: "Yes! I offer special pricing packages for churches and ministries. Contact me to discuss your team's needs and get a custom quote.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Services
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Gospel Music Training Programs
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Choose the program that fits your goals—whether you&apos;re developing your own voice,
              leading a choir, or producing Gospel music.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
              >
                <h2 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {service.title}
                </h2>
                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-8 flex-1 space-y-4">
                  {service.features.map((feature, index) => (
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
                <div className="mt-8 border-t border-border pt-8">
                  <p className="text-lg font-semibold text-foreground">
                    {service.pricing}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Common questions about Gospel voice training
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <dl className="space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg bg-muted p-6">
                  <dt className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-muted-foreground">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Not Sure Which Program is Right for You?
            </h2>
            <p className="mt-4 text-secondary-foreground/80">
              Book a free consultation and let&apos;s discuss your goals together.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-secondary hover:bg-primary-foreground/90"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
