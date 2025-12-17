import Link from "next/link";
import { getFeaturedTestimonials } from "@/lib/sanity";
import type { Testimonial } from "@/types/sanity";

// Static fallback testimonials when Sanity has no featured testimonials
const fallbackTestimonials: Testimonial[] = [
  {
    _id: "fallback-1",
    _type: "testimonial",
    quote: "I went from hiding in the back row of the choir to singing my first solo in 6 months. Imani didn't just teach me technique—she helped me find my voice and my confidence.",
    name: "Michelle T.",
    role: "Church Choir Member, Atlanta",
    type: "individual",
    featured: true,
  },
  {
    _id: "fallback-2",
    _type: "testimonial",
    quote: "Our worship team went from inconsistent to excellent in 3 months. Imani understands that Gospel isn't just music—it's ministry.",
    name: "Pastor David R.",
    role: "Senior Pastor, Houston",
    type: "church",
    featured: true,
  },
  {
    _id: "fallback-3",
    _type: "testimonial",
    quote: "After years of straining my voice during worship, Imani taught me proper technique. I can now lead multiple services without losing my voice.",
    name: "Jasmine K.",
    role: "Worship Leader, Chicago",
    type: "individual",
    featured: true,
  },
];

export default async function Home() {
  // Fetch featured testimonials from Sanity, fall back to static data
  let testimonials: Testimonial[] = await getFeaturedTestimonials(3);
  if (!testimonials || testimonials.length === 0) {
    testimonials = fallbackTestimonials;
  }
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-background py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Gospel Voice Training
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              For Singers Who Want to Honor God with Excellence
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Comprehensive voice training and music production designed specifically for Gospel musicians.
              Whether you&apos;re finding your voice for the first time or leading worship,
              discover your God-given potential.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
              <Link
                href="/contact"
                className="w-full rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary"
              >
                View Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Video Section */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Meet Imani
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Learn about my journey, my heart for Gospel music, and how I can help you discover your voice.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-card shadow-lg ring-1 ring-border">
              {/* Video Placeholder - Replace with actual YouTube/Vimeo embed */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/10">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
                  <svg
                    className="ml-1 h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Introduction Video Coming Soon
                </p>
              </div>
              {/* Uncomment and replace VIDEO_ID when video is ready:
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Meet Imani - Gospel Voice Training Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Special */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              What Makes This Different
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Not just another music course—training built from the ground up for Gospel
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "100% Gospel-Focused",
                description:
                  "Not a general music site with a Gospel section. Every technique, every lesson is designed specifically for Gospel musicians and the unique demands of Gospel music.",
              },
              {
                title: "Complete Offering",
                description:
                  "The only platform combining individual vocal coaching, choir training, AND music production—everything you need under one roof.",
              },
              {
                title: "Authentic Leadership",
                description:
                  "15+ years of real ministry and industry experience. Imani understands the heart of Gospel music, not just the technique.",
              },
              {
                title: "Spiritual Understanding",
                description:
                  "Gospel isn't just about hitting notes—it's about ministry. Training that honors both the art and the heart behind the music.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
              >
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {feature.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              How I Can Help
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you&apos;re an individual singer, choir director, or aspiring producer
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                title: "Individual Vocal Coaching",
                description:
                  "One-on-one training covering Gospel-specific techniques: runs, riffs, dynamics, breathing, and vocal health. From beginner to advanced.",
                href: "/services#individual",
              },
              {
                title: "Choir & Group Training",
                description:
                  "Elevate your worship team or choir with training in harmonies, blend, Gospel arrangements, and section leadership.",
                href: "/services#choir",
              },
              {
                title: "Music Production",
                description:
                  "Create professional Gospel tracks. Learn beat-making, mixing, mastering, and how to capture that authentic Gospel sound.",
                href: "/services#production",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border transition-all hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
                >
                  Learn more <span aria-hidden="true" className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-primary bg-transparent px-8 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Transformation Stories
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/80">
              Real results from Gospel musicians who invested in their gifts
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial._id}
                className="flex flex-col rounded-2xl bg-card p-8 shadow-sm"
              >
                <blockquote className="flex-1">
                  <p className="text-lg leading-relaxed text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </footer>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/testimonials"
              className="inline-flex items-center text-sm font-medium text-secondary-foreground hover:text-secondary-foreground/80"
            >
              Read all testimonials <span aria-hidden="true" className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Is This For You?
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Church singers wanting to build confidence",
              "Worship leaders seeking vocal excellence",
              "Choir directors looking to elevate their teams",
              "Aspiring Gospel music producers",
              "Pastors investing in music ministry",
              "Singers who love Gospel but never had training",
              "Anyone called to Gospel music ministry",
              "Musicians wanting Gospel-specific techniques",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-lg bg-card p-4"
              >
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
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a free consultation to discuss your goals and discover how Gospel voice training can transform your ministry.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
