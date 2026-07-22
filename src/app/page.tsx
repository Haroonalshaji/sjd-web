import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsBar } from "@/components/shared/stats-bar";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { SectionHeading, CtaBanner } from "@/components/shared/section";
import { ServiceCard } from "@/components/services/service-card";
import { CaseStudyCard } from "@/components/portfolio/case-study-card";
import { services } from "@/data/services";
import { caseStudies } from "@/data/case-studies";
import {
  testimonials,
  processSteps,
  whyChoose,
  insights,
  tools,
} from "@/data/content";
import { siteConfig } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${siteConfig.fullName} | Digital Marketing Consultant`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-grid relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container-site">
          <Reveal>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-accent">
              {siteConfig.fullName} · {siteConfig.title}
            </p>
            <h1 className="max-w-4xl font-heading text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Helping Businesses Grow Through{" "}
              <span className="gradient-text">Data-Driven</span> Digital
              Marketing.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              SEO, paid media, analytics, and CRO—executed with senior focus so
              every dollar compounds toward qualified leads and revenue.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/services">
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Book Free Consultation</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <StatsBar />
          </Reveal>
        </div>
      </section>

      {/* Trusted */}
      <section className="border-y border-border bg-background-secondary py-10">
        <div className="container-site">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.2em] text-muted">
            Trusted by ambitious teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {siteConfig.trustedCompanies.map((company) => (
              <span
                key={company}
                className="font-heading text-sm font-medium tracking-wide text-muted/80 md:text-base"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Services"
                title="Growth systems, not random tactics"
                description="Pick a channel—or combine them. Every engagement starts with measurement and ends with accountable results."
              />
              <Button asChild variant="outline">
                <Link href="/services">All services</Link>
              </Button>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Case Studies"
                title="Proof over promises"
                description="Selected engagements across SEO, paid media, analytics, and conversion."
              />
              <Button asChild variant="outline">
                <Link href="/portfolio">View portfolio</Link>
              </Button>
            </div>
          </Reveal>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <StaggerItem key={study.slug}>
                <CaseStudyCard study={study} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="What partners say"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <blockquote className="glass h-full rounded-2xl p-7">
                  <p className="text-base leading-relaxed text-foreground md:text-lg">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-border pt-4">
                    <cite className="not-italic">
                      <span className="font-medium text-foreground">
                        {t.author}
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {t.role}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="A clear path from audit to ROI"
              description="Same discipline whether we fix tracking or scale a seven-figure ad account."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-heading text-sm text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">
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

      {/* Why */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <SectionHeading
                eyebrow="Why work with me"
                title="Agency-caliber thinking. Founder-level care."
              />
              <Button asChild variant="outline">
                <Link href="/why-choose-me">See advantages</Link>
              </Button>
            </div>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex gap-3 rounded-2xl border border-border bg-card p-5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Tools */}
      <section className="border-y border-border py-14">
        <div className="container-site">
          <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-muted">
            Tools & technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool.name}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Insights"
              title="Latest thinking"
              description="Practical notes on SEO, paid media, and conversion—written for operators."
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {insights.map((post) => (
              <StaggerItem key={post.title}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40">
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="text-accent">{post.category}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {post.excerpt}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
