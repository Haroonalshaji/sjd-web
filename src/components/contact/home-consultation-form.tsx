"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { homeServiceOptions } from "@/data/content";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  business: z.string().min(2, "Enter your business name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter your contact number"),
  service: z.string().min(1, "Select a service"),
  details: z.string().min(10, "Tell me a bit more about your requirement"),
});

type FormValues = z.infer<typeof schema>;

export function HomeConsultationForm() {
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
        <h3 className="font-heading text-2xl font-semibold">Request received</h3>
        <p className="mt-3 text-muted">
          Thanks for sharing your details. I will review your enquiry and reply.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setSubmitted(false)}
        >
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
      <div>
        <h3 className="font-heading text-xl font-semibold">
          Tell Me About Your Business
        </h3>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="consult-name">Full Name</Label>
          <Input
            id="consult-name"
            autoComplete="name"
            placeholder="Enter your name"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="consult-business">Business Name</Label>
          <Input
            id="consult-business"
            autoComplete="organization"
            placeholder="Enter your business name"
            {...register("business")}
          />
          {errors.business && (
            <p className="text-xs text-red-400">{errors.business.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="consult-email">Business Email</Label>
          <Input
            id="consult-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="consult-phone">Phone or WhatsApp Number</Label>
          <Input
            id="consult-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Enter your contact number"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-red-400">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="consult-service">Which service do you need?</Label>
        <select
          id="consult-service"
          className="flex h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {homeServiceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-xs text-red-400">{errors.service.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="consult-details">Briefly describe your requirement</Label>
        <Textarea
          id="consult-details"
          placeholder="Tell me about your business, current challenge and what you want to improve."
          {...register("details")}
        />
        {errors.details && (
          <p className="text-xs text-red-400">{errors.details.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Request My Free Consultation"}
      </Button>
      <p className="text-xs text-muted">
        Your information will only be used to respond to your enquiry.
      </p>
    </form>
  );
}
