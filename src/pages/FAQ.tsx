import Layout from "@/components/Layout";
import FadeIn from "@/components/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the process work?",
    answer:
      "We begin with an initial consultation to understand your research needs, objectives, and timelines. Following this, we provide a tailored proposal outlining our approach, deliverables, and costs. Once agreed, we work collaboratively with you throughout the project, providing regular updates and opportunities for feedback.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Our pricing depends on the scope and complexity of each project. We provide transparent, competitive quotes after an initial consultation. We are happy to work within institutional budgets and can tailor our services accordingly. Please contact us for a no-obligation discussion.",
  },
  {
    question: "How is data transferred securely?",
    answer:
      "We take data security very seriously. All data transfers are conducted via encrypted channels, and we adhere to UK GDPR regulations. We can work with your institution's preferred secure data-sharing platforms and are experienced in handling sensitive research and patient data.",
  },
  {
    question: "Do you support student dissertations?",
    answer:
      "We provide guidance and support for postgraduate students working on dissertations and theses. Our role is to advise on methodology, assist with data analysis, and support academic writing — not to complete work on behalf of students. All support is delivered in accordance with institutional academic integrity policies.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-3xl">
          <FadeIn>
            <h1 className="heading-display mb-6 text-center">Frequently Asked Questions</h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="body-large text-muted-foreground text-center mb-12">
              Find answers to common questions about working with Pacesetter Data Solutions.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left font-serif text-base font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
