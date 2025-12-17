import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Read transformation stories from Gospel singers, choir directors, and music producers who have trained with Imani Achokah.",
};

const testimonials = [
  {
    quote: "I went from hiding in the back row of the choir to singing my first solo in 6 months. Imani didn't just teach me technique—she helped me find my voice and my confidence.",
    name: "Michelle T.",
    role: "Church Choir Member",
    location: "Atlanta, GA",
    type: "Individual Singer",
  },
  {
    quote: "Our worship team went from inconsistent to excellent in 3 months. Imani understands that Gospel isn't just music—it's ministry. She taught us how to lead with both skill and spirit.",
    name: "Pastor David R.",
    role: "Senior Pastor",
    location: "Houston, TX",
    type: "Church Leader",
  },
  {
    quote: "I stepped into the choir director role with no formal training. Imani gave me the tools to lead rehearsals with confidence and teach proper Gospel techniques. Our choir has never sounded better.",
    name: "Angela F.",
    role: "Volunteer Choir Director",
    location: "Dallas, TX",
    type: "Choir Director",
  },
  {
    quote: "I bought FL Studio dreaming of producing Gospel music but couldn't finish a track. Now I create professional backing tracks for my church and I'm working on my first single.",
    name: "Marcus W.",
    role: "Worship Leader & Producer",
    location: "Charlotte, NC",
    type: "Music Producer",
  },
  {
    quote: "After years of straining my voice during worship, Imani taught me proper technique. I can now lead multiple services without losing my voice, and my range has expanded significantly.",
    name: "Jasmine K.",
    role: "Worship Leader",
    location: "Chicago, IL",
    type: "Individual Singer",
  },
  {
    quote: "We invested in training for our entire music ministry—choir, worship team, and sound engineers. It transformed not just our sound, but our team culture. Best investment we've made.",
    name: "Bishop James L.",
    role: "Senior Pastor",
    location: "Detroit, MI",
    type: "Church Leader",
  },
];

const stats = [
  { value: "500+", label: "Students Trained" },
  { value: "50+", label: "Churches Served" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Gospel Focused" },
];

const caseStudies = [
  {
    title: "From Shy Choir Member to Worship Leader",
    client: "Michelle T., Atlanta",
    challenge: "Michelle had been in her church choir for 5 years but always stayed in the back row. She wanted to sing solos but lacked confidence and felt her voice wasn't 'good enough' for Gospel music.",
    solution: "Over 6 months of individual coaching, we focused on building her Gospel-specific vocal techniques (runs, riffs, dynamics) while simultaneously working on performance confidence and stage presence.",
    results: [
      "Sang her first solo within 6 months",
      "Now regularly leads worship at her church",
      "Vocal range expanded by nearly an octave",
      "Mentors other shy singers in her choir",
    ],
  },
  {
    title: "Worship Team Transformation",
    client: "Grace Community Church, Houston",
    challenge: "The church's worship team was talented individually but struggled to blend as a group. Sunday services were inconsistent, and the team lacked a unified Gospel sound.",
    solution: "A 3-month intensive program covering section training, Gospel harmonies, blend techniques, and spiritual preparation for worship leading. Weekly sessions plus a director training component.",
    results: [
      "Team achieved consistent, unified sound",
      "Congregation engagement increased noticeably",
      "Music director gained confidence to lead",
      "Team culture shifted to collaborative ministry",
    ],
  },
  {
    title: "Bedroom Producer to Released Artist",
    client: "Marcus W., Charlotte",
    challenge: "Marcus had purchased production software but couldn't finish a single track. He understood technology but couldn't capture the authentic Gospel sound he envisioned.",
    solution: "8 sessions covering Gospel-specific production techniques, sound selection, arrangement, and mixing. Project-based learning with the goal of completing one professional track.",
    results: [
      "Completed first professional Gospel track",
      "Creates weekly backing tracks for church",
      "Released debut single on streaming platforms",
      "Now teaches basic production to youth ministry",
    ],
  },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Testimonials
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Transformation Stories
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Real stories from Gospel musicians who have experienced growth and transformation
              through dedicated training.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-primary" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
              >
                <span className="inline-flex w-fit items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {testimonial.type}
                </span>
                <blockquote className="mt-6 flex-1">
                  <p className="text-lg leading-relaxed text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Transformation Case Studies
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Detailed stories showing the journey from challenge to transformation
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border lg:p-12"
              >
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                    {study.title}
                  </h3>
                  <span className="text-sm font-medium text-primary">
                    {study.client}
                  </span>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Challenge
                    </h4>
                    <p className="mt-3 text-foreground">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Solution
                    </h4>
                    <p className="mt-3 text-foreground">
                      {study.solution}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      The Results
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start gap-2 text-foreground">
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
                          <span className="text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Video Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              See Training in Action
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Watch sample lessons to experience my teaching style
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Video Placeholder 1 */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/50">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 font-semibold text-foreground">Gospel Vocal Techniques</p>
                <p className="text-sm text-muted-foreground">Sample lesson coming soon</p>
              </div>
            </div>
            {/* Video Placeholder 2 */}
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/50">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 font-semibold text-foreground">Choir Blend Techniques</p>
                <p className="text-sm text-muted-foreground">Sample lesson coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote>
              <p className="text-2xl font-medium leading-relaxed text-secondary-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                &ldquo;What sets Imani apart is that she understands the heart of Gospel music.
                She doesn&apos;t just teach you to sing—she helps you minister. That&apos;s the difference.&rdquo;
              </p>
              <footer className="mt-8">
                <p className="text-base font-semibold text-secondary-foreground">Pastor Angela F.</p>
                <p className="text-sm text-secondary-foreground/80">New Hope Community Church, Dallas</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Ready to Write Your Story?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join the community of Gospel musicians who have transformed their gifts through dedicated training.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Start Your Journey Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
