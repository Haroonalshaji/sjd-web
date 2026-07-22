import { buildMetadata, JsonLd, breadcrumbSchema, faqSchema } from "@/lib/seo";
import {
  PageHero,
  CtaBanner,
  Breadcrumbs,
  SectionHeading,
} from "@/components/shared/section";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/reveal";
import { FaqList } from "@/components/shared/faq-list";
import {
  whyChoose,
  processSteps,
  tools,
  testimonials,
  whyPageFaqs,
} from "@/data/content";
import { CheckCircle2, MessageSquare, BarChart3, Shield } from "lucide-react";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Why Choose Sajad as Your Digital Marketing Consultant in India",
  description:
    "ROI-driven process, India market fit, transparent INR reporting, and full-stack marketing. See why startups and SMEs choose Sajad Digital.",
  path: "/why-choose-me",
  keywords: ["best digital marketing consultant India", "freelance marketer India"],
});

const extras = [
  {
    icon: BarChart3,
    title: "Reporting that informs decisions",
    description:
      "Looker Studio dashboards plus a monthly narrative—wins, losses, and next bets.",
  },
  {
    icon: MessageSquare,
    title: "Communication without chaos",
    description:
      "Slack/email cadence you set. Documented decisions. No surprise silence.",
  },
  {
    icon: Shield,
    title: "Transparency by default",
    description:
      "You own the accounts, data, and assets. I work inside your systems.",
  },
];

export default function WhyChooseMePage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Why Choose Me", path: "/why-choose-me" },
          ]),
          faqSchema([...whyPageFaqs]),
        ]}
      />
      <PageHero
        eyebrow="Why choose me"
        title="Senior execution without agency bloat"
        description="You get strategy, hands-on delivery, and honest reporting—from someone who has sat on both the agency and in-house side of the table."
      />

      <section className="section-pad">
        <div className="container-site">
          <Breadcrumbs items={[{ label: "Why Choose Me" }]} />
          <Reveal>
            <SectionHeading
              eyebrow="Advantages"
              title="Competitive edges that show up in results"
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full gap-3 rounded-2xl border border-border bg-card p-6">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Process" title="My process" />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="text-accent">{step.step}</span>
                  <h3 className="mt-3 font-heading text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted">{step.description}</p>
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
              eyebrow="How I work"
              title="Reporting, communication, transparency"
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {extras.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6">
                    <Icon className="h-6 w-6 text-accent" aria-hidden />
                    <h3 className="mt-4 font-heading text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Tools" title="Professional stack" />
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-3">
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

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Testimonials" title="Client feedback" />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <StaggerItem key={t.author}>
                <blockquote className="glass h-full rounded-2xl p-7">
                  <p className="leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-5 text-sm text-muted">
                    <span className="text-foreground">{t.author}</span> — {t.role}
                  </footer>
                </blockquote>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad bg-background-secondary">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Questions answered" align="center" />
          </Reveal>
          <div className="mt-10">
            <FaqList items={[...whyPageFaqs]} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
