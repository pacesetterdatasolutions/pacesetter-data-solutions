import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="prose max-w-none space-y-6 text-muted-foreground">
              <p className="text-sm">Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}</p>

              <h2 className="text-xl font-semibold text-foreground">1. Data We Collect</h2>
              <p>
                When you submit an Expression of Interest form through our website, we collect the following personal information: your full name, email address, country location, contact number (if provided), and a description of the services you require.
              </p>

              <h2 className="text-xl font-semibold text-foreground">2. How We Use Your Data</h2>
              <p>
                We use the information you provide solely to respond to your enquiry, discuss your project requirements, and provide you with a proposal for our services. We do not use your data for marketing purposes without your explicit consent.
              </p>
              <p>
                Expression of Interest form submissions are processed using Netlify Forms infrastructure and delivered to our business email inbox.
              </p>

              <h2 className="text-xl font-semibold text-foreground">3. Data Sharing</h2>
              <p>
                We do not sell or share your personal information with third parties except where required by law or where necessary to deliver the services you have requested.
              </p>

              <h2 className="text-xl font-semibold text-foreground">4. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected. Enquiry data is typically retained for up to 12 months after our last correspondence, unless a working relationship is established.
              </p>

              <h2 className="text-xl font-semibold text-foreground">5. Your Rights</h2>
              <p>
                Under UK data protection law, you have the right to access, correct, or request deletion of your personal data. You may also object to or restrict our processing of your data.
              </p>

              <h2 className="text-xl font-semibold text-foreground">6. Contact</h2>
              <p>
                If you have any questions about this privacy policy or wish to exercise your data rights, please contact us at{" "}
                <a href="mailto:pacesetterdatasolutions@gmail.com" className="text-primary hover:underline">
                  pacesetterdatasolutions@gmail.com
                </a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
