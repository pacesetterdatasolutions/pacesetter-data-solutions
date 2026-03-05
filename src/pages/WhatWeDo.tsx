import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import HeroParticles from "@/components/HeroParticles";

interface ServiceSection {
  id: string;
  title: string;
  intro: string;
  bullets: string[];
}

const servicesData: ServiceSection[] = [
  {
    id: "data-analysis",
    title: "Data Analysis",
    intro: "We provide data analysis services for individuals, students, academics, academic & research institutions, charities and social enterprises.",
    bullets: [
      "Provide advice on how to collect quantitative data including questionnaire design",
      "Cleaning of data",
      "Appending and merging data",
      "Data analysis using cutting-edge statistical methods",
    ],
  },
  {
    id: "evidence-synthesis",
    title: "Evidence Synthesis",
    intro: "We conduct systematic reviews and meta-analyses, narrative reviews, scoping reviews and rapid reviews. We provide services to individuals, students, authors, academics, academic & research institutions, charities, social enterprises, the NHS and NICE.",
    bullets: [
      "Systematic review design",
      "Protocol writing & registration in PROSPERO",
      "Searching databases",
      "Screening",
      "Data extraction",
      "Pairwise and network meta-analysis",
      "Report and article writing",
    ],
  },
  {
    id: "epidemiology",
    title: "Epidemiology",
    intro: "Our expertise in epidemiology cuts across all specialities of epidemiology including chronic disease, cardiovascular, infectious disease, nutritional, genetic and so many more. Our experience covers all the major observational study designs – cohort, case-cohort, case-control and cross-sectional. We provide epidemiological expertise to individuals, students, authors, academics, academic & research institutions, charities, social enterprises, the NHS and NICE.",
    bullets: [
      "Study design",
      "Protocol development including sample size calculation",
      "Data collection",
      "Data analysis and interpretation",
      "Report and article writing",
    ],
  },
  {
    id: "clinical-trials",
    title: "Clinical Trials",
    intro: "We provide clinical trial services for individuals and organisations conducting trials of human participants. Our clients include academics and academic & research institutions.",
    bullets: [
      "Trial design consulting",
      "Protocol development",
      "Sample size calculation",
      "Preparation of statistical plans",
      "Interim analyses",
      "Study analyses",
      "Preparation of final reports and articles",
    ],
  },
  {
    id: "grant-writing",
    title: "Grant Writing",
    intro: "Our grant writing services are for individuals or organisations that need to submit grant applications to major charitable bodies for funding. We mainly provide these services to students, academics, and academic & research institutions.",
    bullets: [
      "Identifying potential funding streams",
      "Research design and sample size calculations",
      "Writing grant application",
    ],
  },
  {
    id: "medical-writing",
    title: "Medical Writing",
    intro: "At Pacesetter Data Solutions, we take our medical writing seriously and we always ensure our outputs are scientifically rigorous. We have a track record of publishing in high impact journals. We provide our medical writing services to academics, consortia, academic & research institutions, and charities.",
    bullets: [
      "Writing research articles, abstracts and reviews in medical journals",
      "Writing blogs",
      "Educational content for medical professionals and patients",
      "Writing for newspapers or magazines",
    ],
  },
  {
    id: "proofreading-editing",
    title: "Proofreading & Editing",
    intro: "We provide reliable proofreading and editing services to students, academic and organisations. We edit and proofread the following documents:",
    bullets: [
      "Research papers",
      "Dissertations/Theses",
      "Reports",
      "Book chapters",
    ],
  },
];

const WhatWeDo = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [location.hash]);

  return (
    <Layout>
      {/* Hero banner */}
      <section className="relative overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20" style={{ background: "linear-gradient(160deg, hsl(220 70% 14%) 0%, hsl(214 56% 32%) 50%, hsl(220 70% 14%) 100%)" }}>
        <div className="absolute inset-0 opacity-30">
          <HeroParticles />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="section-container relative z-10 py-20 md:py-32">
          <ScrollReveal>
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "hsl(195 100% 75%)" }}>
              Our Expertise
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5" style={{ color: "hsl(0 0% 100%)" }}>
              What We Do
            </h1>
            <p className="text-lg sm:text-xl font-body max-w-xl leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              We offer a comprehensive range of data analysis, research, and writing services designed to support individuals, academics, and organisations across the medical and health sciences.
            </p>
          </ScrollReveal>
        </div>

        <div className="h-16 md:h-24" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--background)))" }} />
      </section>

      {/* Service sections */}
      <section className="section-padding !pt-0">
        <div className="section-container max-w-4xl">
          <div className="space-y-6">
            {servicesData.map((service, i) => (
              <ScrollReveal key={service.id} delay={i * 50}>
                <div
                  id={service.id}
                  className="group relative overflow-hidden rounded-2xl border scroll-mt-24 transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))",
                    borderColor: "hsl(var(--border))",
                  }}
                >
                  {/* Accent left bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 group-hover:w-1.5" style={{ background: "linear-gradient(180deg, hsl(var(--primary)), hsl(195 100% 58%))" }} />

                  <div className="p-6 md:p-8 pl-7 md:pl-10">
                    {/* Number badge */}
                    <div className="flex items-start gap-4 mb-4">
                      <span
                        className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-heading font-bold"
                        style={{ background: "hsl(var(--primary) / 0.1)", color: "hsl(var(--primary))" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-heading font-bold tracking-tight pt-0.5">{service.title}</h2>
                    </div>

                    <p className="text-muted-foreground font-body leading-relaxed mb-5 ml-12">{service.intro}</p>

                    <div className="ml-12">
                      <h4
                        className="text-xs font-heading font-semibold uppercase tracking-[0.15em] mb-3"
                        style={{ color: "hsl(var(--primary))" }}
                      >
                        What we do:
                      </h4>
                      <ul className="space-y-2">
                        {service.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-3 text-foreground/80 font-body text-sm">
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ background: "hsl(195 100% 58%)" }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
