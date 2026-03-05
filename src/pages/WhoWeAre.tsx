import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, HeartPulse } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import HeroParticles from "@/components/HeroParticles";

const highlights = [
  {
    icon: Users,
    label: "Expert Team",
    text: "Biostatisticians, Epidemiologists, Medical Doctors, Trialists, Cochrane Editors & Medical Writers.",
  },
  {
    icon: GraduationCap,
    label: "World-Class Education",
    text: "Post-graduate degree holders from reputed UK universities, including Cambridge and Oxford.",
  },
  {
    icon: HeartPulse,
    label: "Mission-Driven",
    text: "We work with individuals, students, academics, institutions, charities & social enterprises.",
  },
];

const WhoWeAre = () => {
  return (
    <Layout>
      {/* Hero banner — full-bleed dark with particles */}
      <section className="relative overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20" style={{ background: "linear-gradient(160deg, hsl(220 70% 14%) 0%, hsl(214 56% 32%) 50%, hsl(220 70% 14%) 100%)" }}>
        <div className="absolute inset-0 opacity-30">
          <HeroParticles />
        </div>
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

        <div className="section-container relative z-10 py-20 md:py-32">
          <ScrollReveal>
            <p className="text-xs font-heading font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "hsl(195 100% 75%)" }}>
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5" style={{ color: "hsl(0 0% 100%)" }}>
              Who We Are
            </h1>
            <p className="text-lg sm:text-xl font-body max-w-xl leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
              A team of experts changing lives through data.
            </p>
          </ScrollReveal>
        </div>

        {/* Gradient fade into body */}
        <div className="h-16 md:h-24" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--background)))" }} />
      </section>

      {/* Main content */}
      <section className="section-padding !pt-0">
        <div className="section-container max-w-5xl">
          {/* Narrative text */}
          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto space-y-6 mb-16 md:mb-20">
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Pacesetter Data Solutions is a private company and comprises a team of skilled Biostatisticians, Epidemiologists, Medical Doctors with expertise in research methods, Quantitative Researchers, Trialists, Analysts, Systematic Reviewers, Cochrane Editors and Medical Writers.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                Members of the team are post-graduate degree holders and acquired their education from reputed universities of the UK, including Cambridge and Oxford Universities.
              </p>
              <p className="text-lg font-body text-muted-foreground leading-relaxed">
                We are very passionate about using data to change lives. Our work covers all medical disciplines and we work with individuals, students, academics, academic institutions, medical research organisations, charities &amp; social enterprises.
              </p>
            </div>
          </ScrollReveal>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 md:mb-20">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.label} delay={150 + i * 80}>
                <div
                  className="relative p-7 rounded-2xl border overflow-hidden group transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: "linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))",
                    borderColor: "hsl(var(--border))",
                  }}
                >
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full" style={{ background: "linear-gradient(225deg, hsl(195 100% 58%), transparent)" }} />
                  
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                    <h.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-heading font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(var(--primary))" }}>
                    {h.label}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {h.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA — matches the dark immersive style */}
          <ScrollReveal delay={300}>
            <div
              className="relative overflow-hidden rounded-3xl p-8 md:p-14 text-center"
              style={{ background: "linear-gradient(145deg, hsl(220 70% 14%), hsl(214 56% 32%))" }}
            >
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="absolute top-0 right-0 w-60 h-60 rounded-full opacity-15" style={{ background: "radial-gradient(circle, hsl(195 100% 58%), transparent 70%)" }} />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4" style={{ color: "hsl(0 0% 100%)" }}>
                  Get In Touch
                </h2>
                <p className="font-body mb-7 max-w-lg mx-auto" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
                  If you want to place an order or require further information about the services we offer, fill out the{" "}
                  <Link to="/contact" className="font-medium underline underline-offset-2" style={{ color: "hsl(195 100% 75%)" }}>
                    expression of interest form
                  </Link>{" "}
                  or contact us by email at{" "}
                   <a href="mailto:pacesetterdatasolutions@gmail.com" className="font-medium underline underline-offset-2" style={{ color: "hsl(195 100% 75%)" }}>
                    pacesetterdatasolutions@gmail.com
                  </a>
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium font-body transition-all duration-300 hover:shadow-lg hover:gap-3 group"
                  style={{ background: "hsl(195 100% 58%)", color: "hsl(220 70% 14%)" }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
