import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Imani Achokah's 15+ years of Gospel ministry experience and her passion for training the next generation of Gospel musicians.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              About Imani
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Gospel Voice Trainer &amp; Music Producer
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              15+ years of ministry experience dedicated to helping Gospel musicians
              discover their God-given potential.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                My Story
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                I grew up in the church, surrounded by the powerful sounds of Gospel music.
                From my earliest memories, I knew there was something special about how Gospel
                could move people—not just emotionally, but spiritually.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Over 15 years of ministry experience has taught me that Gospel music is more
                than technique—it&apos;s ministry. Every run, every riff, every note carries
                the potential to touch hearts and transform lives.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                I&apos;ve seen talented singers held back by lack of proper training. I&apos;ve
                watched choir directors struggle without the tools they need. And I&apos;ve felt
                the frustration of producers who can&apos;t capture that authentic Gospel sound.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                That&apos;s why I created this platform—to fill the gap in Gospel music education
                and help the next generation of Gospel musicians walk in excellence.
              </p>
            </div>
            <div className="aspect-square rounded-2xl bg-card ring-1 ring-border">
              {/* Placeholder for profile image */}
              <div className="flex h-full items-center justify-center">
                <span className="text-8xl font-bold text-primary/20" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  IA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              My Mission
            </h2>
            <p className="mt-6 text-xl leading-8 text-muted-foreground">
              To empower the next generation of Gospel artists, make professional training
              accessible to anyone with a calling, and create a lasting legacy that elevates
              Gospel music worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Experience &amp; Credentials
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: "15+ Years in Ministry",
                description:
                  "Serving in worship ministry, leading choirs, and mentoring singers across multiple churches and denominations.",
              },
              {
                title: "Professional Training",
                description:
                  "Formal vocal training combined with years of practical experience in Gospel-specific techniques and production.",
              },
              {
                title: "Choir Direction",
                description:
                  "Experience leading and training church choirs of all sizes, from small worship teams to large mass choirs.",
              },
              {
                title: "Music Production",
                description:
                  "Hands-on experience creating Gospel tracks, backing music, and full productions with authentic Gospel sound.",
              },
            ].map((credential) => (
              <div
                key={credential.title}
                className="rounded-2xl bg-card p-8 shadow-sm ring-1 ring-border"
              >
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {credential.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              My Teaching Philosophy
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything I teach
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                title: "Heart Before Technique",
                description:
                  "Gospel music comes from a place of faith and devotion. Technical excellence should serve the spiritual message, not overshadow it.",
              },
              {
                title: "Excellence Honors God",
                description:
                  "When we develop our gifts with excellence, we honor the One who gave them to us. Mediocrity has no place in ministry.",
              },
              {
                title: "Everyone Can Learn",
                description:
                  "With the right guidance, anyone called to Gospel music can develop their gift. It's not about natural talent—it's about dedication.",
              },
            ].map((philosophy) => (
              <div
                key={philosophy.title}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                  {philosophy.title}
                </h3>
                <p className="mt-4 text-muted-foreground">
                  {philosophy.description}
                </p>
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
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-secondary-foreground/80">
              Ready to start your Gospel music journey? I&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-secondary hover:bg-primary-foreground/90"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
