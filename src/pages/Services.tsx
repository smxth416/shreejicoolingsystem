import Layout from "@/components/Layout";
import { services } from "@/data/services";
import { Snowflake, Wrench, Wind, ClipboardList, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

    {/* Comprehensive AMC Benefits (New) */}
    <section className="py-20 bg-muted/30">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our AMC?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Annual Maintenance Contracts designed to give you peace of mind.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-background border rounded-3xl p-10 shadow-sm flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 text-primary">Comprehensive Coverage</h3>
            <ul className="space-y-5">
              {[
                "Priority breakdown support within 4 hours",
                "4 free preventive maintenance services per year",
                "Unlimited breakdown calls included",
                "Genuine spare parts replacement warranty"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="mt-10 w-fit" size="lg">Request AMC Quote</Button>
            </Link>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492ccba0b?w=800&h=600&fit=crop"
              alt="Technician servicing AC"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
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
