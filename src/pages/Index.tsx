import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import HeroParticles from "@/components/HeroParticles";
import ScrollReveal from "@/components/ScrollReveal";
import ServicesCarousel from "@/components/ServicesCarousel";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden -mt-16 md:-mt-20 pt-16 md:pt-20">
        <div className="absolute inset-0">
          <HeroParticles />
        </div>
        <div className="section-container relative z-10 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 animate-fade-in">
              Pacesetter Data Solutions
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-primary mb-1.5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Data Analysis, Research &amp; Writing Services
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-gradient mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Changing Lives Through Data
            </p>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/what-we-do"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:gap-3 hover:px-8 glow-shadow group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="pb-0" style={{ background: "linear-gradient(180deg, hsl(217 100% 98%) 0%, hsl(217 55% 95%) 100%)" }}>
        <div className="relative">
          <div className="relative z-10">
            <ServicesCarousel />
          </div>
          <div className="absolute top-0 left-0 z-20 section-container pt-6 sm:pt-8 pointer-events-none">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight drop-shadow-lg"
              style={{
                color: "hsl(0 0% 100%)",
                textShadow: "0 2px 12px hsl(220 70% 10% / 0.7), 0 0 40px hsl(220 70% 10% / 0.4)",
              }}
            >
              Our Services
            </h2>
          </div>
        </div>
        <div className="pb-16 sm:pb-24" style={{ background: "linear-gradient(180deg, hsl(217 55% 95%) 0%, hsl(217 100% 98%) 100%)" }} />
      </section>

      {/* Get In Touch — immersive CTA */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(160deg, hsl(220 70% 14%) 0%, hsl(214 56% 32%) 50%, hsl(220 70% 14%) 100%)" }}>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(195 100% 58%), transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(214 56% 42%), transparent 70%)" }} />

        <div className="section-container relative z-10 py-20 md:py-28">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight mb-5"
                style={{ color: "hsl(0 0% 100%)" }}
              >
                Get In Touch
              </h2>
              <p className="text-base sm:text-lg font-body leading-relaxed mb-8" style={{ color: "hsl(0 0% 100% / 0.7)" }}>
                If you want to place an order or require further information about the services we offer, fill out the{" "}
                <Link to="/contact" className="font-medium underline underline-offset-2 transition-colors" style={{ color: "hsl(195 100% 75%)" }}>
                  expression of interest form
                </Link>{" "}
                or contact us by email at{" "}
                <a href="mailto:pacesetterdatasolutions@gmail.com" className="font-medium underline underline-offset-2 transition-colors" style={{ color: "hsl(195 100% 75%)" }}>
                  pacesetterdatasolutions@gmail.com
                </a>
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium font-body transition-all duration-300 hover:shadow-lg hover:gap-3 group"
                  style={{
                    background: "hsl(195 100% 58%)",
                    color: "hsl(220 70% 14%)",
                  }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href="mailto:pacesetterdatasolutions@gmail.com"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-body font-medium transition-all duration-300"
                  style={{
                    color: "hsl(0 0% 100%)",
                    border: "1px solid hsl(0 0% 100% / 0.2)",
                    background: "hsl(0 0% 100% / 0.05)",
                  }}
                >
                  <Mail className="w-4 h-4" style={{ color: "hsl(195 100% 75%)" }} />
                  Email Us
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
