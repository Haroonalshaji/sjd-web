"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  budget: z.string().min(1, "Select a budget"),
  details: z.string().min(20, "Tell me a bit more (20+ chars)"),
});

type FormValues = z.infer<typeof schema>;

const budgets = [
  "Under $1,000/mo",
  "$1,000 – $2,500/mo",
  "$2,500 – $5,000/mo",
  "$5,000 – $10,000/mo",
  "$10,000+/mo",
  "Project-based",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <h3 className="font-heading text-2xl font-semibold">Message sent</h3>
        <p className="mt-3 text-muted">
          Thanks for reaching out. I&apos;ll reply within one business day.
        </p>
        <Button className="mt-6" variant="secondary" onClick={() => setSubmitted(false)}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="glass space-y-5 rounded-2xl p-6 md:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" autoComplete="name" {...register("name")} />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Budget *</Label>
        <select
          id="budget"
          className="flex h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          defaultValue=""
          {...register("budget")}
        >
          <option value="" disabled>
            Select budget range
          </option>
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        {errors.budget && (
          <p className="text-xs text-red-400">{errors.budget.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Project details *</Label>
        <Textarea
          id="details"
          placeholder="Goals, timeline, current channels, challenges..."
          {...register("details")}
        />
        {errors.details && (
          <p className="text-xs text-red-400">{errors.details.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
