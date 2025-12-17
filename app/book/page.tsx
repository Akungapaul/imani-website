import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Schedule a free 15-minute consultation to discuss your Gospel music goals with Imani Achokah.",
};

export default function BookPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Book Now
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Schedule Your Free Consultation
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Let&apos;s talk about your Gospel music goals. Choose a time that works for you,
              and we&apos;ll have a 15-minute conversation about how I can help.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Calendly Placeholder */}
            <div className="min-h-[600px] rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  Calendly Booking
                </h2>
                <p className="mt-4 max-w-md text-muted-foreground">
                  The booking calendar will appear here once Calendly is configured.
                  For now, please contact me directly to schedule.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={calendlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Open Calendly
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    Send a Message
                  </Link>
                </div>
              </div>

              {/* Uncomment when Calendly URL is configured:
              <iframe
                src={`${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1`}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Schedule a consultation with Imani Achokah"
                className="min-h-[600px]"
              />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              What to Expect
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your free consultation is a casual conversation—no pressure, no sales pitch.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Share Your Goals",
                description: "Tell me about your Gospel music journey and what you hope to achieve. Whether it's building confidence, leading worship, or producing music.",
              },
              {
                step: "2",
                title: "Get Personalized Advice",
                description: "I'll share initial thoughts on how training could help and what approach might work best for your situation.",
              },
              {
                step: "3",
                title: "Decide Your Next Step",
                description: "If we're a good fit, we'll discuss options. If not, I'm happy to point you toward other resources. No pressure either way.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {item.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-secondary-foreground sm:text-3xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Prefer to Send a Message?
            </h2>
            <p className="mt-4 text-secondary-foreground/80">
              If scheduling doesn&apos;t work for you, feel free to reach out directly.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-secondary hover:bg-primary-foreground/90"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
