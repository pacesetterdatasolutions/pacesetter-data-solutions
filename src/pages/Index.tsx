import { Link } from "react-router-dom";
import { BarChart3, BookOpen, Activity, FlaskConical, FileText, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Advanced statistical analysis using industry-standard tools to support rigorous academic and clinical research.",
  },
  {
    icon: BookOpen,
    title: "Evidence Synthesis",
    description: "Systematic reviews, meta-analyses, and evidence mapping to inform policy and practice.",
  },
  {
    icon: Activity,
    title: "Epidemiology",
    description: "Population health studies, disease surveillance, and public health data analysis.",
  },
  {
    icon: FlaskConical,
    title: "Clinical Trials",
    description: "Statistical support for trial design, data management, and regulatory submissions.",
  },
  {
    icon: FileText,
    title: "Grant Writing",
    description: "Compelling research proposals with robust methodology sections to secure funding.",
  },
  {
    icon: PenTool,
    title: "Medical Writing & Editing",
    description: "Peer-reviewed manuscripts, reports, and academic publications to the highest standards.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-hero-overlay/80" />
        </div>

        <div className="relative z-10 container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <FadeIn>
            <h1 className="heading-display text-primary-foreground mb-6 max-w-3xl mx-auto">
              Changing Lives Through Data
            </h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="body-large text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
              Data Analysis, Research &amp; Medical Writing Services for Academics and Institutions
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="hero" className="font-sans font-medium">
                <Link to="/what-we-do">Explore Our Services</Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline" className="font-sans font-medium">
                <Link to="/contact">Submit an Enquiry</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto text-center max-w-3xl">
          <FadeIn>
            <h2 className="heading-section mb-6">Who We Are</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-muted-foreground mb-8">
              Pacesetter Data Solutions is a UK-based academic and medical data consultancy. We support universities,
              research institutions, NHS organisations, charities, and social enterprises with expert data analysis,
              evidence synthesis, and medical writing services.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button asChild variant="outline" className="font-sans">
              <Link to="/who-we-are">Learn More</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <h2 className="heading-section text-center mb-12">What We Do</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.08}>
                <Link
                  to="/what-we-do"
                  className="group block rounded-lg border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <service.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="section-padding bg-trust-bg">
        <div className="container-narrow mx-auto text-center max-w-3xl">
          <FadeIn>
            <h2 className="heading-section text-trust-fg mb-6">Trusted by Institutions</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-trust-fg/80">
              Our team comprises UK-trained experts with postgraduate qualifications in biostatistics,
              epidemiology, and health research. We are committed to delivering rigorous, impactful work
              that supports better outcomes for communities and organisations.
            </p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
