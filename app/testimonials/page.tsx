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
