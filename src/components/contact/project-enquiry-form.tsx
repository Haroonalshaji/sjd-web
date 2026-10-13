"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const services = [
  "SEO Services",
  "Google Ads Management",
  "Meta Ads Management",
  "Content Marketing",
  "Website Development",
  "Landing Page Development",
  "Multiple Services",
  "Not Sure Yet",
];

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  business: z.string().min(2, "Enter your business name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Enter your contact number"),
  website: z.string().optional(),
  service: z.string().min(1, "Select a service"),
  details: z.string().min(10, "Tell me a bit more about your requirement"),
});

type FormValues = z.infer<typeof schema>;

export function ProjectEnquiryForm() {
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
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <h3 className="font-heading text-2xl font-semibold">Enquiry received</h3>
        <p className="mt-3 text-muted">
          Thanks for sharing your project. I will review it and reply.
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
      <h3 className="font-heading text-xl font-semibold">Send Your Project Enquiry</h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="project-name">Full Name</Label>
          <Input id="project-name" autoComplete="name" placeholder="Enter your full name" {...register("name")} />
          {errors.name ? <p className="text-xs text-red-400">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="project-business">Business Name</Label>
          <Input
            id="project-business"
            autoComplete="organization"
            placeholder="Enter your business or brand name"
            {...register("business")}
          />
          {errors.business ? <p className="text-xs text-red-400">{errors.business.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="project-email">Email Address</Label>
          <Input
            id="project-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            {...register("email")}
          />
          {errors.email ? <p className="text-xs text-red-400">{errors.email.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="project-phone">Phone or WhatsApp Number</Label>
          <Input
            id="project-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Enter your contact number"
            {...register("phone")}
          />
          {errors.phone ? <p className="text-xs text-red-400">{errors.phone.message}</p> : null}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="project-website">Website URL</Label>
        <Input id="project-website" placeholder="Add your website link, if available" {...register("website")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="project-service">Service Required</Label>
        <select
          id="project-service"
          className="flex h-11 w-full rounded-xl border border-border bg-card px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          defaultValue=""
          {...register("service")}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service ? <p className="text-xs text-red-400">{errors.service.message}</p> : null}
      </div>
      <div className="space-y-2">
        <Label htmlFor="project-details">Project Requirement</Label>
        <Textarea
          id="project-details"
          placeholder="Briefly explain your business, current challenge and what you want to improve."
          {...register("details")}
        />
        {errors.details ? <p className="text-xs text-red-400">{errors.details.message}</p> : null}
      </div>
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send My Project Enquiry"}
      </Button>
      <p className="text-xs text-muted">
        Your information will only be used to review and respond to your enquiry.
      </p>
    </form>
  );
}
