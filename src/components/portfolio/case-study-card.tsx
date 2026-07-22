import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import { ArrowUpRight } from "lucide-react";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="relative flex h-40 items-end bg-gradient-to-br from-primary/30 via-background-secondary to-card p-6">
        <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted backdrop-blur">
          {study.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-wider text-muted">
          {study.client} · {study.industry}
        </p>
        <h3 className="mt-2 font-heading text-xl font-semibold tracking-tight">
          <Link
            href={`/portfolio/${study.slug}`}
            className="transition hover:text-accent"
          >
            {study.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {study.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {study.metrics.slice(0, 3).map((m) => (
            <span
              key={m.label}
              className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs text-muted"
            >
              <span className="text-foreground">{m.value}</span> {m.label}
            </span>
          ))}
        </div>
        <Link
          href={`/portfolio/${study.slug}`}
          className="mt-6 inline-flex items-center gap-1 text-sm text-accent"
        >
          View case study
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
