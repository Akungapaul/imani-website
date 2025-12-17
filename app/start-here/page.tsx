import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here",
  description: "Not sure where to begin your Gospel music journey? Take our quick quiz to find the right path for you.",
};

const paths = [
  {
    id: "singer",
    title: "I Want to Develop My Voice",
    description: "You're a singer looking to improve your Gospel vocal technique, build confidence, or prepare for worship leading.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    href: "/services#individual",
    cta: "Explore Individual Coaching",
    features: [
      "One-on-one personalized training",
      "Gospel-specific vocal techniques",
      "Build confidence for worship leading",
      "Flexible scheduling",
    ],
  },
  {
    id: "director",
    title: "I Lead a Choir or Worship Team",
    description: "You're a choir director, worship leader, or ministry leader looking to elevate your team's sound and unity.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    href: "/services#choir",
    cta: "Explore Choir Training",
    features: [
      "Team training & workshops",
      "Section coaching (SATB)",
      "Gospel harmonies & arrangements",
      "Leadership development",
    ],
  },
  {
    id: "producer",
    title: "I Want to Produce Gospel Music",
    description: "You're interested in creating professional Gospel tracks, backing music for your church, or releasing your own music.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
    href: "/services#production",
    cta: "Explore Music Production",
    features: [
      "DAW & home studio setup",
      "Gospel production techniques",
      "Creating worship backing tracks",
      "Mixing & mastering basics",
    ],
  },
  {
    id: "unsure",
    title: "I'm Not Sure Yet",
    description: "You're curious about Gospel music training but not sure which path is right for you. Let's talk!",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    href: "/contact",
    cta: "Book a Free Consultation",
    features: [
      "15-minute discovery call",
      "Discuss your goals & challenges",
      "Get personalized recommendations",
      "No commitment required",
    ],
  },
];

export default function StartHerePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Start Here
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Find Your Path
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Not sure where to begin? Answer one question to discover the right Gospel music training for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Path Selection */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              What describes you best?
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {paths.map((path) => (
              <div
                key={path.id}
                className="group flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-all hover:shadow-md hover:ring-primary/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {path.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                    {path.title}
                  </h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {path.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {path.features.map((feature, index) => (
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
                  href={path.href}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {path.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Check out our FAQ or reach out directly. I&apos;m here to help you find the right path.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
              <Link
                href="/services#faq"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary"
              >
                View FAQ <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
