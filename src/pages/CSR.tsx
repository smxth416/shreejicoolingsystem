import Layout from "@/components/Layout";
import { Shield, Leaf, Thermometer, Recycle, HeartHandshake, Lightbulb } from "lucide-react";

const csrItems = [
  { icon: Shield, title: "Workplace Safety", desc: "Strict safety protocols for all installation and maintenance projects, ensuring zero-incident workplaces and regular safety training for our teams." },
  { icon: Leaf, title: "Sustainable Practices", desc: "We promote energy-efficient HVAC systems, use eco-friendly refrigerants, and minimize waste across all project stages." },
  { icon: Thermometer, title: "Responsible Cooling", desc: "Designing cooling systems that balance comfort with environmental impact — using smart controls to reduce unnecessary energy consumption." },
  { icon: Recycle, title: "Equipment Recycling", desc: "Proper disposal and recycling of old HVAC equipment, ensuring hazardous materials are handled safely and responsibly." },
  { icon: HeartHandshake, title: "Community Engagement", desc: "Supporting local communities through skill development programs and partnerships with technical institutes." },
  { icon: Lightbulb, title: "Innovation for Efficiency", desc: "Investing in R&D for greener cooling technologies and promoting adoption of energy-star rated equipment." },
];

const CSR = () => (
  <Layout>
    <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture opacity-90"></div>
      <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Corporate Social Responsibility</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">Committed to safety, sustainability, and responsible cooling practices.</p>
      </div>
    </section>

    <section className="py-16 bg-background">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {csrItems.map((item) => (
            <div key={item.title} className="relative overflow-hidden bg-card border rounded-lg p-6 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:bg-[#7CB8EB]">
              {/* Noise texture overlay on hover */}
              <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="h-10 w-10 text-accent mb-4 group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-full w-full" />
                </div>
                <h3 className="font-bold text-lg mb-2 group-hover:text-white transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CSR;
