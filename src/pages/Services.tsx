import Layout from "@/components/Layout";
import { services } from "@/data/services";
import { CheckCircle, ClipboardList, Wrench, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 

import * as Icons from "lucide-react";

const Services = () => (
  <Layout
    title="Premium HVAC Services & Maintenance | Shreeji Cooling"
    description="Explore our range of professional HVAC services including installation, AMC, preventive maintenance, and industrial breakdown support. Quality solutions from authorized Blue Star dealers."
    keywords="HVAC services, AC installation Surat, commercial AC maintenance, Blue Star AMC, breakdown repair"
  >
    <section className="relative overflow-hidden bg-[#2171b5] border-b border-white/10 py-24 pt-36">
      <div className="absolute inset-0 noise-texture opacity-60"></div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.03] select-none whitespace-nowrap z-0 pointer-events-none uppercase">
        Shreeji Excellence
      </div>

      <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight uppercase">
          Our Professional Services
        </h1>
        <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed font-medium">
          Delivering precision engineering and world-class maintenance for industrial, commercial, and residential HVAC systems.
        </p>
      </div>
    </section>

    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -ml-48 -mb-48 opacity-50"></div>

      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((s, i) => {
            // @ts-ignore
            const Icon = Icons[s.iconName] || Icons.RotateCcw;
            return (
              <div
                key={s.title}
                className="group relative flex flex-col bg-card border border-border/60 rounded-3xl p-8 pt-12 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border-t-4 border-t-primary/20 hover:border-t-primary"
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

                {/* Decorative Number Background */}
                <div className="absolute top-4 right-8 text-7xl font-black text-foreground/[0.04] group-hover:text-primary/10 transition-colors duration-500 pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="mb-8 relative shrink-0">
                  <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-6 shadow-sm">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <h2 className="text-2xl font-extrabold mb-4 leading-tight text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    {s.description}
                  </p>
                  
                  <div className="space-y-3 border-t border-border/50 pt-6 mt-auto">
                    {s.features.slice(0, 3).map((f) => (
                      <div key={f} className="flex items-center gap-3">
                        <Icons.CheckCircle2 className="h-4 w-4 text-primary/60 shrink-0" />
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{f}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="mt-8">
                    <Button variant="outline" className="w-full rounded-2xl font-bold border-2 hover:bg-primary hover:text-white transition-all group-hover:border-primary">
                      Inquire Now
                      <Icons.ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
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
              className="relative overflow-hidden border border-[#2171b5] rounded-xl bg-white px-6 data-[state=open]:shadow-md transition-all duration-300 data-[state=closed]:hover:bg-[#2171b5]/70 data-[state=closed]:hover:border-[#5a9bc9] group"
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
    <section className="py-20 bg-[#2171b5]/5">
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
            <div key={i} className="relative overflow-hidden bg-background p-8 rounded-2xl border text-center hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:bg-[#2171b5]">
              {/* Noise texture overlay on hover */}
              <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

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
