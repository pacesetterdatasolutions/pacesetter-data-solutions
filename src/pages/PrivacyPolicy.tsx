import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="heading-display mb-8 text-center">Privacy Policy</h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-sm">Last updated: February 2026</p>

              <h2 className="heading-section !text-xl !mt-10">1. Introduction</h2>
              <p>
                Pacesetter Data Solutions ("we", "our", "us") is a UK-based data consultancy. We are
                committed to protecting your privacy and handling your personal data in accordance with
                the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>

              <h2 className="heading-section !text-xl !mt-10">2. Information We Collect</h2>
              <p>We may collect the following personal data when you contact us or use our services:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Name and contact details (email address, phone number)</li>
                <li>Country of residence</li>
                <li>Details of your enquiry or project requirements</li>
                <li>Basic analytics data (pages visited, time on site)</li>
              </ul>

              <h2 className="heading-section !text-xl !mt-10">3. How We Use Your Information</h2>
              <p>We use your personal data to:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Respond to your enquiries and provide our services</li>
                <li>Communicate with you about your project</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="heading-section !text-xl !mt-10">4. Legal Basis for Processing</h2>
              <p>
                We process your personal data on the basis of legitimate interest (responding to enquiries),
                contractual necessity (providing services), and consent (where you have opted in to communications).
              </p>

              <h2 className="heading-section !text-xl !mt-10">5. Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal data. We may share data with trusted service
                providers (e.g., hosting, email services) who assist in operating our business, subject to
                appropriate data processing agreements.
              </p>

              <h2 className="heading-section !text-xl !mt-10">6. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil the purposes for which it was
                collected, or as required by law. Enquiry data is typically retained for 24 months.
              </p>

              <h2 className="heading-section !text-xl !mt-10">7. Your Rights</h2>
              <p>Under the UK GDPR, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="heading-section !text-xl !mt-10">8. Contact</h2>
              <p>
                If you have questions about this privacy policy or wish to exercise your rights, please
                contact us at{" "}
                <a href="mailto:info@pacesetterdata.co.uk" className="text-primary hover:underline">
                  info@pacesetterdata.co.uk
                </a>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
