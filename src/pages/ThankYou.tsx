import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const ThankYou = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container max-w-2xl text-center">
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-muted-foreground mb-8">
            Your expression of interest has been submitted successfully. We&rsquo;ll be in touch soon.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
          >
            Return to Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ThankYou;
