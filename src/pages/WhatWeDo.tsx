import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const services = [
  {
    title: "Data Analysis",
    description:
      "We provide expert quantitative and qualitative data analysis for academic research projects, clinical studies, and institutional evaluations.",
    offerings: [
      "Descriptive and inferential statistics",
      "Regression analysis and predictive modelling",
      "Survey data analysis",
      "Qualitative thematic analysis",
      "Software support: SPSS, Stata, R, NVivo",
    ],
  },
  {
    title: "Evidence Synthesis",
    description:
      "Our team conducts rigorous evidence syntheses to inform policy, practice, and further research across health and social sciences.",
    offerings: [
      "Systematic reviews (Cochrane and JBI methodology)",
      "Meta-analysis",
      "Scoping reviews",
      "Rapid evidence assessments",
      "Evidence mapping",
    ],
  },
  {
    title: "Epidemiology",
    description:
      "We support epidemiological research with robust analytical methods and deep understanding of population health data.",
    offerings: [
      "Cohort and case-control study analysis",
      "Disease surveillance and modelling",
      "Risk factor analysis",
      "Public health data interpretation",
      "Health inequalities research",
    ],
  },
  {
    title: "Clinical Trials",
    description:
      "We provide statistical expertise throughout the clinical trial lifecycle, from design through to regulatory submission.",
    offerings: [
      "Sample size calculations",
      "Randomisation strategy",
      "Interim and final analysis",
      "Statistical analysis plans (SAPs)",
      "Regulatory-compliant reporting",
    ],
  },
  {
    title: "Grant Writing",
    description:
      "We help researchers develop compelling, methodologically sound grant applications to secure funding from major bodies.",
    offerings: [
      "Full proposal development",
      "Methodology and analysis sections",
      "Budget justification support",
      "Review and feedback",
      "Resubmission support",
    ],
  },
  {
    title: "Medical Writing & Editing",
    description:
      "We produce and refine academic manuscripts, reports, and publications to meet the standards of peer-reviewed journals.",
    offerings: [
      "Manuscript preparation",
      "Journal selection and submission support",
      "Academic editing and proofreading",
      "Conference abstract writing",
      "Research report writing",
    ],
  },
];

const WhatWeDo = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <h1 className="heading-display mb-6 text-center">What We Do</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              We offer a comprehensive range of research and data services tailored to the needs of academics,
              institutions, and health organisations.
            </p>
          </FadeIn>

          <div className="space-y-0">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.05}>
                <div
                  className={`py-12 ${i !== services.length - 1 ? "border-b" : ""} ${
                    i % 2 === 1 ? "bg-section-alt -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8" : ""
                  }`}
                >
                  <div className="max-w-3xl mx-auto">
                    <h2 className="heading-section mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.offerings.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
