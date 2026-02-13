import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { products, categories } from "@/data/products";
import { Link } from "react-router-dom";
import { Snowflake } from "lucide-react";

const Products = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-90"></div>
        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Products</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">Premium Blue Star HVAC equipment for every commercial and industrial need.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${active === c
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted hover:border-primary/50"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:border-primary/50"
              >
                {/* Icon header with curved top */}
                {/* Product Image - Fixed aspect ratio and cover fit */}
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2 py-1 rounded-md border border-white/10 uppercase tracking-wider">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">

                  <Link to={`/products/${p.id}`}>
                    <h3 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                      {p.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex gap-2">
                    <Link to={`/products/${p.id}`} className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full rounded-xl font-semibold border-primary/20 text-primary hover:bg-primary/5"
                      >
                        Details
                      </Button>
                    </Link>
                    <Link to="/contact" className="flex-1">
                      <Button
                        size="sm"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
                      >
                        Enquire
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Features Section (New) */}
      <section className="py-20 bg-muted/30">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Blue Star?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Engineered for performance, efficiency, and reliability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Energy Efficient", desc: "Up to 5-star rated systems that reduce electricity costs significantly." },
              { title: "Eco-Friendly", desc: "Uses green refrigerants like R32 and R410A to minimize environmental impact." },
              { title: "Smart Control", desc: "IoT-enabled units allowing remote monitoring and precision temperature control." },
              { title: "Durability", desc: "blue fin anti-corrosive coating ensures longevity even in harsh climates." }
            ].map((feature, i) => (
              <div key={i} className="bg-background p-6 rounded-xl border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary font-bold text-lg">0{i + 1}</div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs / Application Areas (New) */}
      <section className="py-20 bg-[#7CB8EB]/5">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1581093583449-ed2521344db5?w=800&h=600&fit=crop"
                alt="Industrial Installation"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Designed for Every Industry</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our cooling solutions are versatile enough to meet the rigorous demands of various sectors, ensuring optimal performance and compliance with industry standards.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Pharmaceuticals (Clean Rooms)",
                  "Data Centers (Precision Cooling)",
                  "Retail & Malls (Centralized AC)",
                  "Hospitals (Hygienic Air Control)",
                  "Hotels (Quiet VRF Systems)",
                  "Manufacturing Plants (Chillers)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 bg-background rounded-lg border">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
