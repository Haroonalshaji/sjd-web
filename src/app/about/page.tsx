import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buildMetadata, JsonLd, breadcrumbSchema } from "@/lib/seo";
import { Breadcrumbs, SectionHeading } from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "About Sajad | Digital Marketing Consultant",
  description:
    "Meet Sajad, a digital marketing consultant specialising in SEO, paid advertising, content and website performance to help businesses improve online visibility and generate meaningful growth.",
  path: "/about",
});

const skills = [
  "Technical SEO",
  "On-page SEO",
  "Off-page SEO",
  "Keyword research",
  "Content strategy",
  "Internal linking",
  "Website optimisation",
  "XML and HTML sitemaps",
  "Indexing and crawling issues",
  "Canonicalisation and duplicate-content considerations",
  "Google Search Console",
  "Google Analytics",
  "WordPress",
  "Digital advertising",
  "Content creation and optimisation",
];

const specialisations = [
  {
    title: "SEO",
    description:
      "I help businesses improve their organic search visibility through technical, on-page, content and off-page SEO. The work can range from identifying indexing and technical issues to improving page structure, targeting relevant search intent and strengthening a website's overall organic search foundation.",
    href: "/services/seo",
    link: "Explore SEO Services",
  },
  {
    title: "Google Ads",
    description:
      "Paid search can help businesses reach people who are already looking for relevant products or services. I approach Google Ads with attention to targeting, messaging, landing pages and the overall journey from search to enquiry.",
    href: "/services/google-ads",
    link: "Explore Google Ads Management",
  },
  {
    title: "Meta Ads",
    description:
      "Meta advertising can help businesses reach potential customers based on audience characteristics, interests and behaviour. My focus is on connecting campaign objectives with appropriate audiences, creative and landing-page experiences.",
    href: "/services/meta-ads",
    link: "Explore Meta Ads Management",
  },
  {
    title: "Websites",
    description:
      "A website should do more than simply exist online. It should communicate what a business offers, make information easy to understand and provide a clear path toward the next action. I work on business websites with both marketing and user experience in mind.",
    href: "/services/website-development",
    link: "Explore Website Development",
  },
  {
    title: "Landing Pages",
    description:
      "Landing pages have a different purpose from standard website pages. They are built around a specific campaign, audience and conversion objective. I develop landing pages designed to support Google Ads, Meta Ads, lead-generation campaigns and other targeted marketing activities.",
    href: "/services/landing-page-development",
    link: "Explore Landing Page Development",
  },
  {
    title: "Content Marketing",
    description:
      "Content should have a purpose beyond filling a blog. I focus on content that aligns with the audience, search intent and broader marketing objectives, helping businesses build useful information assets that support visibility and customer journeys.",
    href: "/services/content-marketing",
    link: "Explore Content Marketing",
  },
];

const approach = [
  {
    step: "01",
    title: "Understand",
    description:
      "First, understand the business, audience, website and current marketing situation.",
  },
  {
    step: "02",
    title: "Identify",
    description:
      "Find the actual problems and opportunities rather than immediately jumping into tactics.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Create or improve the right combination of campaigns, content, websites and optimisation work.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Use performance data, observations and ongoing analysis to identify what can be improved next.",
  },
];

const reasons = [
  {
    title: "Problem-Solving Mindset",
    description:
      "I focus on identifying the underlying digital marketing problem instead of simply completing a predefined checklist of tasks.",
  },
  {
    title: "Marketing + Website Perspective",
    description:
      "SEO, advertising, content and websites influence each other. I consider the broader customer journey rather than looking at each activity completely separately.",
  },
  {
    title: "Practical Execution",
    description:
      "My experience includes hands-on work across technical SEO, content, websites, search visibility and digital marketing activities, not just strategy.",
  },
  {
    title: "Clear & Purposeful Work",
    description:
      "The objective is to connect digital marketing activity with a meaningful business purpose, whether that's visibility, enquiries, leads or a stronger online presence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About Sajad", path: "/about" }])} />
      <section className="hero-grid border-b border-border pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "About Sajad" }]} />
          <Reveal>
            <h1 className="max-w-4xl font-heading text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              Digital Marketing Focused on Visibility, Performance & Growth
            </h1>
            <div className="mt-5 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I’m Sajad, a digital marketing consultant helping businesses
                build stronger online visibility and turn their digital presence
                into a more effective business asset.
              </p>
              <p>
                I work across SEO, Google Ads, Meta Ads, content marketing,
                websites and landing pages, combining marketing strategy with
                practical execution to solve the problems that prevent
                businesses from performing online.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Let’s Discuss Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">View My Services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                title="More Than Just Getting Traffic"
                description="Digital marketing is often treated as a collection of individual activities — ranking keywords, running ads, publishing content or building websites."
              />
              <div className="mt-6 space-y-4 text-muted">
                <p>I look at it differently.</p>
                <p>A website needs to be discoverable. The right audience needs to find it. The messaging needs to make sense. And the journey from first visit to enquiry or conversion needs to work.</p>
                <p>
                  That is why my approach brings together different parts of
                  digital marketing rather than looking at each activity in
                  isolation.
                </p>
                <p>
                  Whether the challenge is poor organic visibility, an
                  underperforming website, inefficient paid campaigns, weak
                  landing pages or content that isn&apos;t reaching the right
                  audience, I focus on understanding the underlying problem
                  first and then choosing the appropriate digital marketing
                  solution.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <SectionHeading
                title="From Marketing Fundamentals to Hands-On Digital Marketing"
                description="My academic background is in Business Administration with a specialisation in Marketing, which gave me a foundation in understanding customers, markets and business objectives."
              />
              <p className="mt-4 text-muted">
                I then developed my skills through professional digital marketing
                training and hands-on experience across SEO and broader digital
                marketing activities.
              </p>
              <p className="mt-4 text-muted">
                Rather than treating SEO as simply adding keywords to pages, my
                focus is on understanding how technical structure, content,
                search intent, internal linking and website performance work
                together.
              </p>
            </Reveal>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading title="What I Specialise In" />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialisations.map((item) => (
              <StaggerItem key={item.title}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <h3 className="font-heading text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
                  >
                    {item.link}
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
            <SectionHeading
              title="Understand the Problem Before Choosing the Channel"
              description="I don't believe every business needs to do everything. A company may need better SEO rather than more advertising. Another may need a stronger landing page before increasing its ad budget. A business with good traffic may have a website or conversion problem rather than a visibility problem."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step) => (
              <StaggerItem key={step.step}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-sm text-accent">{step.step}</span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading title="Why Work With Me" />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {reasons.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
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
              title="Build Digital Presence That Actually Supports the Business"
              description="I believe digital marketing works best when different elements support one another."
            />
            <div className="mt-6 max-w-3xl space-y-3 text-muted">
              <p>SEO can bring long-term organic visibility.</p>
              <p>Paid advertising can create targeted opportunities.</p>
              <p>Content can answer questions and build relevance.</p>
              <p>A website can communicate value and guide visitors.</p>
              <p>A landing page can turn campaign traffic into a focused conversion journey.</p>
              <p>
                My role is to help businesses connect these pieces in a way that
                makes sense for their objectives.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card blue-glow px-8 py-14 md:px-14">
              <h2 className="max-w-2xl font-heading text-3xl font-semibold md:text-4xl">
                Have a Website, Marketing Challenge or Growth Objective?
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                Whether you need to improve organic visibility, launch a paid
                campaign, build a website, create a landing page or develop a
                broader digital marketing strategy, let&apos;s start by
                understanding what you&apos;re trying to achieve.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
