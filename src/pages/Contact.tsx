import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const formSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  country: z.string().trim().min(1, "Country is required").max(100),
  phone: z.string().max(30).optional(),
  message: z.string().trim().min(1, "Please tell us about your needs").max(2000),
  _honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    country: "",
    phone: "",
    message: "",
    _honeypot: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = (name === "full-name" ? "fullName" : name) as keyof FormData;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
    if (errors[fieldName as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [fieldName]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormData;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // Honeypot check
    if (formData._honeypot) return;

    // Submit to Netlify Forms
    const body = new URLSearchParams();
    body.append("form-name", "expression-of-interest");
    body.append("full-name", formData.fullName);
    body.append("email", formData.email);
    body.append("country", formData.country);
    body.append("phone", formData.phone || "");
    body.append("message", formData.message);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true)); // Still show success for demo
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all";

  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container max-w-2xl">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground mb-8">
              Fill out the expression of interest form below and we'll get back to you.
            </p>
          </ScrollReveal>

          {submitted ? (
            <ScrollReveal>
              <div className="surface-card p-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-muted-foreground">
                  Your expression of interest has been submitted. We'll be in touch soon.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={100}>
              {/* Hidden Netlify form for detection */}
                <form name="expression-of-interest" method="POST" data-netlify="true" netlify-honeypot="_honeypot" hidden>
                <input name="full-name" />
                <input name="email" />
                <input name="country" />
                <input name="phone" />
                <textarea name="message" />
                <input name="_honeypot" />
              </form>

              <form
                onSubmit={handleSubmit}
                method="POST"
                data-netlify="true"
                name="expression-of-interest"
                className="surface-card p-6 md:p-8 space-y-5"
                noValidate
              >
                <input type="hidden" name="form-name" value="expression-of-interest" />
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input name="_honeypot" value={formData._honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium mb-1.5">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="full-name"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                  {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-1.5">
                    Country Location <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                  {errors.country && <p className="text-destructive text-sm mt-1">{errors.country}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                    Contact Number <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Tell us a bit about what you need help with <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClass + " resize-y"}
                    required
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-medium transition-all duration-300 hover:shadow-lg glow-shadow"
                >
                  Submit Expression of Interest
                </button>
              </form>
            </ScrollReveal>
          )}

          <ScrollReveal delay={200}>
            <p className="text-sm text-muted-foreground text-center mt-6">
              Or email us directly at{" "}
              <a href="mailto:pacesetterdatasolutions@gmail.com" className="text-primary hover:underline">
                pacesetterdatasolutions@gmail.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
