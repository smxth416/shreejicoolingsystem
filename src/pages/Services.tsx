import Layout from "@/components/Layout";
import { services } from "@/data/services";
import { Snowflake, Wrench, Wind, ClipboardList, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const iconMap: Record<string, React.ElementType> = { Snowflake, Wrench, Wind, ClipboardList, Settings };

const Services = () => (
  <Layout>
    <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture opacity-90"></div>
      <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">Comprehensive HVAC services from installation to maintenance for commercial and industrial projects.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="w-full px-6 md:px-12 lg:px-24 space-y-16 max-w-7xl mx-auto">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon as string] || Snowflake;
          return (
            <div key={s.title} className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="bg-muted rounded-2xl p-8 flex items-center justify-center shrink-0 w-full md:w-auto h-40 md:h-auto aspect-square">
                <Icon className="h-16 w-16 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-6 text-lg">{s.description}</p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" /> <span className="text-base">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground font-semibold shadow-md">Get a Quote</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-20 bg-muted/30">
      <div className="w-full px-6 md:px-12 lg:px-24 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our HVAC services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            {
              q: "What types of HVAC systems do you supply and install?",
              a: "We supply and install a full range of HVAC systems including VRF/VRV systems, ducted split systems, chillers, room air conditioners, commercial refrigeration units, and cold storage solutions — all sourced from Blue Star, India's leading HVAC brand."
            },
            {
              q: "Do you offer Annual Maintenance Contracts (AMC)?",
              a: "Yes. Our AMC plans include scheduled preventive maintenance visits, priority breakdown support within 4 hours, unlimited service calls, and genuine spare parts warranty — keeping your systems running at peak efficiency year-round."
            },
            {
              q: "How long does a typical HVAC installation take?",
              a: "Installation timelines vary by project size. A standard split or ducted system installation takes 1–3 days. Large-scale VRF or chiller projects for commercial spaces may take 2–6 weeks depending on site complexity and equipment availability."
            },
            {
              q: "Are you authorised dealers for Blue Star products?",
              a: "Yes, Shreeji Cooling System Pvt. Ltd. is an authorised channel partner of Blue Star Limited. This means you receive genuine products, factory-backed warranties, and certified installation services."
            },
            {
              q: "What industries do you serve?",
              a: "We serve a wide range of sectors including corporate offices, shopping malls, retail stores, manufacturing plants, hospitals, hotels, IT parks, pharmaceutical warehouses, and cold chain logistics facilities."
            },
            {
              q: "Do you provide emergency breakdown support?",
              a: "Absolutely. Our AMC clients receive priority 4-hour response for breakdowns. Non-AMC clients can also reach our support team 24/7 for emergency service calls — we understand that HVAC downtime can be critical for your business."
            },
            {
              q: "Can you handle large-scale turnkey HVAC projects?",
              a: "Yes. We provide end-to-end turnkey project execution — from site survey, design, and engineering to procurement, installation, commissioning, and post-installation support. Our team has successfully delivered 750+ projects across India."
            },
            {
              q: "How do I get a quote for my project?",
              a: "Simply click the 'Get a Quote' button on any service, fill out our inquiry form, or call us directly. Our engineers will conduct a free site assessment and provide a detailed, transparent quotation tailored to your requirements."
            }
          ].map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="relative overflow-hidden border border-[#7CB8EB] rounded-xl bg-white px-6 data-[state=open]:shadow-md transition-all duration-300 data-[state=closed]:hover:bg-[#7CB8EB]/70 data-[state=closed]:hover:border-[#5a9bc9] group"
            >
              {/* Noise texture overlay */}
              <div className="absolute inset-0 noise-texture opacity-0 group-hover:group-data-[state=closed]:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
              <AccordionTrigger className="hover:no-underline py-5 text-left relative z-10">
                <span className="text-base font-semibold text-foreground pr-4">{faq.q}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 relative z-10">
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions? We're happy to help.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 rounded-full shadow-md hover:shadow-lg transition-all">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Service Workflow (New) */}
    <section className="py-20 bg-[#7CB8EB]/5">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Serve You</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Transparency and efficiency at every step.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { icon: ClipboardList, title: "1. Request", desc: "Log a service request via phone or our website." },
            { icon: Wrench, title: "2. Diagnosis", desc: "Expert technician visits and identifies the issue." },
            { icon: Settings, title: "3. Repair", desc: "Quick resolution using genuine parts and tools." },
            { icon: CheckCircle, title: "4. Feedback", desc: "We ensure your satisfaction before closing the ticket." }
          ].map((step, i) => (
            <div key={i} className="relative overflow-hidden bg-background p-8 rounded-2xl border text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:bg-[#7CB8EB]">
              {/* Noise texture overlay on hover */}
              <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                  <step.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-colors duration-300">{step.title}</h3>
                <p className="text-base text-muted-foreground group-hover:text-white/90 transition-colors duration-300">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
