import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import aboutImage from "@/assets/about-image.jpg";

const WhoWeAre = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <FadeIn>
            <h1 className="heading-display mb-12 text-center">Who We Are</h1>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="space-y-5">
                <p className="body-large text-muted-foreground">
                  Pacesetter Data Solutions is a UK-based consultancy specialising in academic
                  research, data analysis, and medical writing. We serve universities, NHS organisations,
                  research institutions, charities, and social enterprises.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our team consists of experienced professionals with postgraduate-level training in
                  biostatistics, epidemiology, systematic reviews, and clinical trial methodology.
                  We bring deep domain expertise and a commitment to scientific rigour to every project.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We understand the complexities of academic research and the importance of producing
                  work that meets the highest institutional standards. Our approach is collaborative,
                  transparent, and driven by a genuine desire to advance knowledge and improve outcomes.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Professional research environment with data analysis"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="container-narrow mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="heading-section mb-8 text-center">Our Expertise</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Biostatistics", desc: "Advanced statistical methods for health and medical research." },
              { title: "Epidemiology", desc: "Population-level analysis, disease modelling, and surveillance." },
              { title: "Systematic Reviews", desc: "Comprehensive evidence synthesis following Cochrane methodology." },
              { title: "Clinical Trials", desc: "Statistical design, analysis, and reporting for clinical research." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeAre;
