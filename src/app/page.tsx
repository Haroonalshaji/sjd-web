import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section";
import { FaqList } from "@/components/shared/faq-list";
import { HomeConsultationForm } from "@/components/contact/home-consultation-form";
import {
  homeConsultationTopics,
  homeFaqs,
  homeIndustries,
  homeProblems,
  homeProcess,
  homeServices,
  homeTools,
  homeWhy,
} from "@/data/content";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Digital Marketing for Small Businesses | Sajad",
  description:
    "Grow your small business with SEO, content, Google Ads, Meta Ads and conversion-focused website services from Sajad Digital Marketer.",
  path: "/",
  keywords: [
    "digital marketing for small businesses",
    "SEO for small business",
    "Google Ads for small business",
  ],
});

const trustPoints = [
  "Direct communication",
  "Practical marketing strategies",
  "Transparent performance reporting",
];

export default function HomePage() {
  return (
    <>
      <section className="hero-grid relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container-site">
          <Reveal>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Digital Marketing for Small Businesses
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Build a Stronger Online Presence That Helps Your Business Grow
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              I help small businesses improve their search visibility, reach the
              right audience and turn more website visitors into enquiries
              through SEO, content marketing, paid advertising and
              conversion-focused website strategies.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="#consultation">Book a Free Strategy Call</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="#services">Explore My Services</Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Common Marketing Challenges"
              title="Is Your Business Online but Still Difficult to Find?"
              description="Having a website or social media presence does not always mean potential customers can discover your business. Weak search visibility, unclear messaging, ineffective advertising and poorly structured landing pages can prevent visitors from taking the next step."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
            {homeProblems.map((problem) => (
              <StaggerItem key={problem.title}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-xl font-semibold">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {problem.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <p className="mt-10 max-w-3xl text-base leading-relaxed text-muted">
              I help identify where your online presence is losing opportunities
              and create a focused strategy that connects your website, content,
              search visibility and advertising.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="My Digital Marketing Services"
                title="Practical Marketing Services Designed for Small Business Growth"
                description="Every business has different challenges. Some need stronger Google visibility, while others need better advertising, content or landing pages. I provide connected digital marketing services based on your current position and business goals."
              />
              <Button asChild variant="outline">
                <Link href="/services">All services</Link>
              </Button>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.map((service) => (
              <StaggerItem key={service.number}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-sm text-accent">
                    {service.number}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    {service.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card blue-glow px-8 py-14 md:px-14">
              <div className="relative max-w-2xl">
                <h2 className="font-heading text-3xl font-semibold md:text-4xl">
                  Not Sure Which Marketing Service Your Business Needs?
                </h2>
                <p className="mt-4 text-muted">
                  Let’s review your website, current marketing activities and
                  business goals to identify the areas that need the most
                  attention.
                </p>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link href="#consultation">Discuss My Business</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Why Work With Me"
              title="Direct Support, Clear Strategies and Marketing You Can Understand"
              description="Small businesses need practical marketing support without unnecessary complexity. I work directly with business owners to understand their challenges, explain the available options and build a strategy that matches their goals and resources."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {homeWhy.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="How I Work"
              title="A Clear Process From Initial Review to Continuous Improvement"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {homeProcess.map((step) => (
              <StaggerItem key={step.step}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-sm text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Industries I Support"
              title="Digital Marketing Support for Different Types of Small Businesses"
              description="I work with service-based, local and growing businesses that want to improve how they are found, understood and contacted online."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {homeIndustries.map((industry) => (
              <StaggerItem key={industry}>
                <div className="rounded-2xl border border-border bg-card px-5 py-4 font-heading font-medium">
                  {industry}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <SectionHeading
                  eyebrow="About Sajad"
                  title="A Digital Marketer Focused on Building a Stronger Business Presence Online"
                />
                <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted">
                  <p>
                    I am Sajad, a digital marketer helping small businesses
                    improve how they appear, communicate and attract customers
                    online. My work covers SEO, content marketing, Google Ads,
                    Meta Ads, website development and landing-page strategy.
                  </p>
                  <p>
                    Rather than treating every marketing channel separately, I
                    look at the complete customer journey. This includes how
                    people discover your business, what they see on your website
                    and what encourages them to contact you.
                  </p>
                  <p>
                    My approach is practical and business-focused. I aim to give
                    clients clear recommendations, direct communication and
                    marketing activities that support real goals instead of
                    concentrating only on clicks, impressions or rankings.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Specialisations
                </p>
                <ul className="mt-4 space-y-3 text-sm">
                  {[
                    "SEO Strategy",
                    "Paid Advertising",
                    "Content Marketing",
                    "Website Planning",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6" variant="secondary">
                  <Link href="/about">
                    Learn More About Sajad
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border py-14">
        <div className="container-site">
          <p className="mb-3 text-center text-xs uppercase tracking-[0.2em] text-muted">
            Tools and Platforms
          </p>
          <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-muted">
            Platforms used to plan, manage and measure your marketing. I use
            trusted marketing, analytics and website platforms to understand
            performance, manage campaigns and identify opportunities for
            improvement.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {homeTools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="section-pad scroll-mt-24">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <SectionHeading
                eyebrow="Free Initial Consultation"
                title="Let’s Identify What Is Holding Back Your Online Presence"
                description="Tell me about your business, current website and marketing challenges. I will review your requirements and help you understand which areas should be prioritised."
              />
              <p className="mt-6 text-sm font-medium text-foreground">
                During the initial discussion, we can cover:
              </p>
              <ul className="mt-4 space-y-3">
                {homeConsultationTopics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {topic}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08}>
              <HomeConsultationForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Common Questions About Working With Me"
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <FaqList items={[...homeFaqs]} />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card blue-glow px-8 py-14 md:px-14">
              <div className="relative max-w-2xl">
                <h2 className="font-heading text-3xl font-semibold md:text-4xl">
                  Ready to Build a Stronger Online Presence for Your Business?
                </h2>
                <p className="mt-4 text-muted">
                  Share your current challenges, website and growth goals. Let’s
                  create a practical digital marketing plan that helps more
                  potential customers discover and contact your business.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="#consultation">Book a Free Strategy Call</Link>
                  </Button>
                  <Button asChild variant="secondary" size="lg">
                    <Link href="/contact">Chat With Sajad</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
