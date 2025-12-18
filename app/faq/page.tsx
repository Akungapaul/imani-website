import type { Metadata } from "next";
import Link from "next/link";
import { getFAQs } from "@/lib/sanity";
import type { FAQ } from "@/types/sanity";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Gospel voice training, choir coaching, and music production with Imani Achokah.",
};

// Fallback FAQ type (simpler than Sanity type)
interface FallbackFAQ {
  _id: string;
  question: string;
  answerText: string;
  category: string;
}

// Static fallback FAQs
const fallbackFAQs: FallbackFAQ[] = [
  {
    _id: "faq-1",
    question: "Do I need any prior experience?",
    answerText: "No! Whether you're a complete beginner or experienced singer looking to refine your Gospel technique, there's a program for you. We meet you where you are.",
    category: "getting-started",
  },
  {
    _id: "faq-2",
    question: "How are sessions conducted?",
    answerText: "Sessions can be conducted in-person or virtually via video call. Virtual sessions have proven just as effective and allow me to work with students worldwide.",
    category: "sessions",
  },
  {
    _id: "faq-3",
    question: "How long until I see results?",
    answerText: "Most students notice improvement within the first few sessions. Significant transformation typically happens within 3-6 months of consistent practice and training.",
    category: "general",
  },
  {
    _id: "faq-4",
    question: "Can you work with my church's schedule?",
    answerText: "Absolutely. For choir and group training, I'm flexible with scheduling and can work around your ministry calendar, including evening and weekend sessions.",
    category: "sessions",
  },
  {
    _id: "faq-5",
    question: "What styles of Gospel do you teach?",
    answerText: "I teach all styles: Traditional Gospel, Contemporary Gospel, Praise & Worship, and Urban/Modern Gospel. Your training will be tailored to your preferred style.",
    category: "general",
  },
  {
    _id: "faq-6",
    question: "Do you offer group discounts for churches?",
    answerText: "Yes! I offer special pricing packages for churches and ministries. Contact me to discuss your team's needs and get a custom quote.",
    category: "pricing",
  },
  {
    _id: "faq-7",
    question: "What equipment do I need for virtual sessions?",
    answerText: "All you need is a stable internet connection, a device with a camera and microphone (laptop, tablet, or phone), and a quiet space. I'll guide you through optimal setup.",
    category: "sessions",
  },
  {
    _id: "faq-8",
    question: "Can I cancel or reschedule sessions?",
    answerText: "Yes, with 24-hour notice. I understand ministry schedules can change unexpectedly, so I try to be flexible while respecting everyone's time.",
    category: "sessions",
  },
  {
    _id: "faq-9",
    question: "Do you offer a free trial or consultation?",
    answerText: "Yes! I offer a free 15-minute consultation to discuss your goals and see if we're a good fit. No commitment required.",
    category: "getting-started",
  },
  {
    _id: "faq-10",
    question: "What's included in music production training?",
    answerText: "Production training covers DAW basics, Gospel-specific sound design, creating backing tracks, mixing, mastering, and guidance on releasing your music.",
    category: "general",
  },
];

// Helper to render answer from either Sanity or fallback format
function renderAnswer(faq: FAQ | FallbackFAQ): string {
  if ("answerText" in faq) {
    return faq.answerText;
  }
  // Extract text from PortableTextBlock array
  return faq.answer
    .map((block) => {
      if (block._type === "block" && block.children) {
        return block.children.map((child) => ("text" in child ? child.text : "")).join("");
      }
      return "";
    })
    .join("\n");
}

const categories = [
  { id: "all", label: "All Questions" },
  { id: "getting-started", label: "Getting Started" },
  { id: "sessions", label: "Sessions" },
  { id: "pricing", label: "Pricing" },
  { id: "general", label: "General" },
];

export default async function FAQPage() {
  // Fetch FAQs from Sanity, fall back to static data
  const sanityFaqs = await getFAQs();
  const faqs: (FAQ | FallbackFAQ)[] = sanityFaqs.length > 0 ? sanityFaqs : fallbackFAQs;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              FAQ
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Find answers to common questions about Gospel voice training, sessions, and getting started.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="bg-muted py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <span
                key={category.id}
                className="rounded-full bg-card px-4 py-2 text-sm font-medium text-muted-foreground ring-1 ring-border"
              >
                {category.label}
              </span>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="mx-auto max-w-3xl">
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq._id}
                  className="group rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <dt className="text-lg font-semibold text-foreground" style={{ fontFamily: 'var(--font-cormorant-garamond)' }}>
                      {faq.question}
                    </dt>
                    <span className="shrink-0 text-primary">
                      <svg
                        className="h-6 w-6 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <dd className="mt-4 text-muted-foreground">
                    {renderAnswer(faq)}
                  </dd>
                </details>
              ))}
            </dl>
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
              Can&apos;t find what you&apos;re looking for? I&apos;m here to help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
              >
                Contact Me
              </Link>
              <Link
                href="/start-here"
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary"
              >
                Find Your Path <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
