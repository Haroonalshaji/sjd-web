import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="hero-grid flex min-h-[70vh] items-center pt-28">
      <div className="container-site text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          That URL doesn&apos;t exist. Head home or browse services.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/services">Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
