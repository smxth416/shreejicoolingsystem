import Layout from "@/components/Layout";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";

const values = [
  { icon: Shield, title: "Quality", desc: "We use only top-grade equipment and follow industry best practices." },
  { icon: Users, title: "Customer Focus", desc: "Every project is tailored to meet unique client requirements." },
  { icon: Award, title: "Excellence", desc: "We strive for perfection in every installation and service." },
  { icon: Heart, title: "Integrity", desc: "Transparent pricing, honest communication, and reliable delivery." },
];

const milestones = [
  { year: "2010", event: "Company founded in Mumbai" },
  { year: "2013", event: "Completed 100th commercial project" },
  { year: "2016", event: "Expanded to Pune and Ahmedabad" },
  { year: "2019", event: "Launched industrial chiller division" },
  { year: "2022", event: "500+ projects milestone reached" },
  { year: "2025", event: "ISO 9001 certified, 50+ engineers strong" },
];

const About = () => (
  <Layout>
    <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture opacity-90"></div>
      <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">About Shreeji Cooling</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">Delivering reliable, energy-efficient HVAC solutions for commercial and industrial spaces since 2010.</p>
      </div>
    </section>

    {/* Story */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Shreeji Cooling System Pvt. Ltd. was founded with a simple mission: to provide world-class cooling solutions to businesses across India. As an authorized channel partner of <span className="font-semibold text-foreground">Blue Star Limited</span>, we've built our reputation on delivering comprehensive HVAC facilities management services for commercial and industrial sectors.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Our expertise spans the complete spectrum of cooling solutions—from VRF systems and chillers to commercial refrigeration and cold storage. We provide end-to-end services including installation, maintenance, and 24/7 support, backed by a team of highly qualified engineers and skilled technicians.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Today, with <span className="font-semibold text-foreground">750+ successful projects</span> and <span className="font-semibold text-foreground">1000+ installations</span> across diverse industries, we continue to innovate and deliver excellence. Our commitment to quality, reliability, and customer satisfaction has made us a trusted HVAC partner for businesses nationwide.
        </p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Mission & Vision</h2>
          <p className="text-muted-foreground text-lg">Guiding principles that drive our commitment to excellence</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-[#7CB8EB] to-[#5a9fd4] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Noise texture overlay */}
            <div className="absolute inset-0 noise-texture opacity-60"></div>

            <div className="relative z-10 text-center">
              <div className="mb-6 inline-block p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-white/95 leading-relaxed text-base">
                To deliver reliable, energy-efficient, and cost-effective HVAC solutions that exceed client expectations while maintaining the highest standards of safety and quality. We are committed to providing comprehensive facilities management services that ensure optimal performance and long-term value.
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-[#7CB8EB] to-[#5a9fd4] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            {/* Noise texture overlay */}
            <div className="absolute inset-0 noise-texture opacity-60"></div>

            <div className="relative z-10 text-center">
              <div className="mb-6 inline-block p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-white/95 leading-relaxed text-base">
                To be India's most trusted HVAC solutions provider, known for innovation, sustainability, and customer-first service in every project we undertake. We envision a future where our cutting-edge cooling technologies contribute to a greener, more energy-efficient India.
              </p>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values Section */}
    <section className="py-20 bg-muted/30">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide every project we undertake.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Excellence", desc: "We strive for perfection in every installation and service call." },
            { title: "Integrity", desc: "Honest communication and transparent pricing are our hallmarks." },
            { title: "Innovation", desc: "Adopting the latest cooling technologies for better efficiency." }
          ].map((value, i) => (
            <div key={i} className="relative overflow-hidden bg-background p-8 rounded-2xl border hover:shadow-lg transition-all duration-300 text-center group hover:-translate-y-1 hover:bg-[#7CB8EB]">
              {/* Noise texture overlay on hover */}
              <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">{i + 1}</span>
                </div>
                <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-colors duration-300">{value.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors duration-300">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Our Clients Section (New) */}
    <section className="py-20 bg-background overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-24 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Valued Clients</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Trusted by industry leaders across sectors.</p>
      </div>

      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-8">
          {[
            "Reliance Industries",
            "Tata Motors",
            "L&T Construction",
            "Adani Group",
            "Godrej Properties",
            "Marriott Hotels",
            "DLF Cyber City",
            "Apollo Hospitals",
            "HDFC Bank",
            "Infosys",
            "Reliance Industries",
            "Tata Motors",
            "L&T Construction",
            "Adani Group",
            "Godrej Properties",
            "Marriott Hotels",
            "DLF Cyber City",
            "Apollo Hospitals",
            "HDFC Bank",
            "Infosys"
          ].map((client, i) => (
            <div
              key={i}
              className="group relative flex h-40 w-56 cursor-pointer items-center justify-center rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-accent/5 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors text-center">
                {client}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership Team Section (New) */}
    <section className="py-20 bg-background">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The experts driving our vision of sustainable cooling.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Rajesh Patel", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" },
            { name: "Anita Desai", role: "Head of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" },
            { name: "Vikram Singh", role: "Technical Director", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" }
          ].map((leader, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg max-w-xs mx-auto">
              <img src={leader.img} alt={leader.name} className="w-full aspect-[4/4] object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-xl font-bold">{leader.name}</h3>
                  <p className="text-white/80">{leader.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Awards & Recognition Section (New) */}
    <section className="py-20 bg-[#7CB8EB]/10 border-y border-[#7CB8EB]/20">
      <div className="w-full px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Awards & Certifications</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for awards logos */}
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="h-24 w-40 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-muted-foreground/30">
              <span className="text-sm text-muted-foreground font-medium">Award Logo {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">Key Milestones</h2>
        <div className="space-y-6">
          {milestones.map((m) => (
            <div key={m.year} className="flex gap-4 items-start">
              <div className="bg-accent text-accent-foreground font-bold px-3 py-1 rounded text-sm shrink-0">{m.year}</div>
              <p className="text-muted-foreground">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Client Testimonials - Auto-scrolling carousel */}
    <section className="py-20 bg-background overflow-hidden border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading businesses across India for exceptional HVAC solutions
          </p>
        </div>

        {/* Auto-scrolling testimonials */}
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex gap-6 animate-scroll">
            {/* First set of testimonials */}
            {[
              {
                name: "Rajesh Mehta",
                company: "TechCorp Industries",
                role: "Facilities Manager",
                rating: 5,
                text: "Shreeji Cooling transformed our 80,000 sq ft manufacturing facility with a state-of-the-art HVAC system. The installation was seamless, and our energy costs have dropped by 30%. Highly professional team!",
                image: "👨‍💼"
              },
              {
                name: "Priya Sharma",
                company: "Sunrise Mall",
                role: "Operations Director",
                rating: 5,
                text: "We needed a reliable cooling solution for our 5-story shopping complex. Shreeji delivered beyond expectations with their chiller system. The after-sales support is exceptional!",
                image: "👩‍💼"
              },
              {
                name: "Amit Patel",
                company: "Gujarat Textiles Ltd.",
                role: "Plant Head",
                rating: 5,
                text: "Working with Shreeji Cooling for 5+ years now. Their AMC service is top-notch, and they respond to any issues within hours. The best HVAC partner we've had!",
                image: "👨‍🔧"
              },
              {
                name: "Sneha Desai",
                company: "Horizon IT Park",
                role: "Project Manager",
                rating: 5,
                text: "Shreeji installed ducted AC systems across our 12-floor IT park. The precision, quality of work, and adherence to timelines was impressive. Our tenants are extremely satisfied!",
                image: "👩‍💻"
              },
              {
                name: "Vikram Singh",
                company: "Royal Hotels Group",
                role: "General Manager",
                rating: 5,
                text: "We have 3 properties serviced by Shreeji Cooling. Their VRV systems are energy-efficient and whisper-quiet - perfect for our luxury hotels. Excellent service quality!",
                image: "🏨"
              },
              {
                name: "Kavita Joshi",
                company: "MedCare Hospital",
                role: "Admin Head",
                rating: 5,
                text: "Healthcare facilities need precision cooling. Shreeji understood our critical requirements and delivered a flawless HVAC solution with backup systems. Truly reliable partners!",
                image: "⚕️"
              },
              {
                name: "Arjun Reddy",
                company: "Metro Pharma",
                role: "Operations Manager",
                rating: 5,
                text: "Our pharmaceutical warehouse requires strict temperature control. Shreeji's industrial chiller system maintains perfect conditions 24/7. Worth every rupee invested!",
                image: "💊"
              },
              {
                name: "Neha Kapoor",
                company: "Elite Fitness Chain",
                role: "CEO",
                rating: 5,
                text: "We have 8 gym locations, all equipped with Shreeji's HVAC systems. The air quality and temperature control keep our members comfortable during intense workouts. Great job!",
                image: "💪"
              }
            ].concat([
              // Duplicate for infinite scroll effect
              {
                name: "Rajesh Mehta",
                company: "TechCorp Industries",
                role: "Facilities Manager",
                rating: 5,
                text: "Shreeji Cooling transformed our 80,000 sq ft manufacturing facility with a state-of-the-art HVAC system. The installation was seamless, and our energy costs have dropped by 30%. Highly professional team!",
                image: "👨‍💼"
              },
              {
                name: "Priya Sharma",
                company: "Sunrise Mall",
                role: "Operations Director",
                rating: 5,
                text: "We needed a reliable cooling solution for our 5-story shopping complex. Shreeji delivered beyond expectations with their chiller system. The after-sales support is exceptional!",
                image: "👩‍💼"
              },
              {
                name: "Amit Patel",
                company: "Gujarat Textiles Ltd.",
                role: "Plant Head",
                rating: 5,
                text: "Working with Shreeji Cooling for 5+ years now. Their AMC service is top-notch, and they respond to any issues within hours. The best HVAC partner we've had!",
                image: "👨‍🔧"
              },
              {
                name: "Sneha Desai",
                company: "Horizon IT Park",
                role: "Project Manager",
                rating: 5,
                text: "Shreeji installed ducted AC systems across our 12-floor IT park. The precision, quality of work, and adherence to timelines was impressive. Our tenants are extremely satisfied!",
                image: "👩‍💻"
              }
            ]).map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[400px] bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
              >
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card rounded-full border border-border/50 shadow-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
