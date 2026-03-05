import { useState } from "react";
import { z } from "zod";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  country: z.string().trim().max(100).optional(),
  phone: z.string().trim().max(30).optional(),
  description: z.string().trim().min(1, "Please describe your enquiry").max(5000),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    description: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof ContactForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    // Netlify will handle the form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-narrow mx-auto max-w-xl text-center">
            <FadeIn>
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" strokeWidth={1.5} />
              <h1 className="heading-section mb-4">Thank You</h1>
              <p className="text-muted-foreground body-large">
                Your enquiry has been received. We will be in touch shortly.
              </p>
            </FadeIn>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-2xl">
          <FadeIn>
            <h1 className="heading-display mb-4 text-center">Contact Us</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-muted-foreground text-center mb-12">
              Ready to discuss your project? Submit an expression of interest and we'll be in touch.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
              noValidate
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                />
                {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Contact Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description of Your Enquiry *</Label>
                <Textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={form.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  aria-required="true"
                  aria-invalid={!!errors.description}
                />
                {errors.description && <p className="text-sm text-destructive">{errors.description}</p>}
              </div>

              <Button type="submit" size="lg" className="w-full font-sans">
                Submit Enquiry
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-12 pt-8 border-t text-center">
              <p className="text-sm text-muted-foreground">
                Alternatively, email us at{" "}
                <a href="mailto:info@pacesetterdata.co.uk" className="text-primary hover:underline">
                  info@pacesetterdata.co.uk
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
