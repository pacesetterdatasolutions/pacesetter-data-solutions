import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the whole process work?",
    a: "Fill out an expression of interest form and we will get back to you by email or call to discuss. Alternatively, you can call us to discuss your proposed project. Following discussion, we will send you a proposal of the work to be done and estimated cost.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on the type of project. But don't worry, our prices are very competitive and we provide good value for your money.",
  },
  {
    q: "How will I transfer my data?",
    a: "We work with fully anonymised, non-identifiable data and we have several ways by which data can be transferred.",
  },
  {
    q: "I am a student and would like some help with my thesis/dissertation; can you help?",
    a: "We are aware dissertations can be difficult to write, but we don't write dissertations for students. However, we can provide advice on how to go about putting your thesis together. We can help with your data analyses and provide editing and proofreading services.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="section-container max-w-3xl">
          <ScrollReveal>
            <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="surface-card px-6 border rounded-xl"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                If you can't find an answer to your question, get in touch.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:gap-3 group"
              >
                Contact Us
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
