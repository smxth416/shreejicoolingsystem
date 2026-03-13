import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Snowflake, Wrench, ClipboardList, Settings, Building2, Factory, Store, Landmark, ArrowRight, CheckCircle2, Award, Users, TrendingUp, MapPin, ChevronLeft, ChevronRight, X, Wind, AirVent, Fan, Refrigerator, ThermometerSnowflake } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Projects Completed", icon: CheckCircle2 },
  { value: "200+", label: "Happy Clients", icon: Users },
  { value: "50+", label: "Expert Engineers", icon: TrendingUp },
];

const serviceHighlights = [
  { icon: Snowflake, title: "Supply", desc: "Premium HVAC equipment from leading brands" },
  { icon: Wrench, title: "Installation", desc: "Professional installation by certified technicians" },
  { icon: ClipboardList, title: "Project Execution", desc: "End-to-end turnkey HVAC project delivery" },
  { icon: Settings, title: "Maintenance", desc: "Comprehensive AMC and breakdown support" },
];

const industries = [
  { icon: Landmark, label: "Malls & Retail" },
  { icon: Building2, label: "Corporate Offices" },
  { icon: Factory, label: "Factories & Plants" },
  { icon: Store, label: "Large Stores" },
];

// Video link - user can replace this placeholder
const HERO_VIDEO_URL = "/hero.mp4";

import { allProjects, ProjectData } from "@/data/projects";


const ProjectModal = ({ project, onClose }: { project: ProjectData; onClose: () => void }) => {
  const [imgIdx, setImgIdx] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (project.images.length <= 1) return;
    const timer = setInterval(() => {
      setImgIdx((i) => (i === project.images.length - 1 ? 0 : i + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [project.images.length]);

  const prev = () => setImgIdx((i) => (i === 0 ? project.images.length - 1 : i - 1));
  const next = () => setImgIdx((i) => (i === project.images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal wrapper for positioning close button outside */}
      <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close button - outside the box */}
        <button
          onClick={onClose}
          className="absolute -top-5 -right-5 z-30 w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shadow-lg transition-transform hover:scale-110"
          style={{ backgroundColor: '#2171b5' }}
        >
          <div className="absolute inset-0 noise-texture opacity-60 pointer-events-none"></div>
          <X className="h-5 w-5 text-white relative z-10" />
        </button>

        <div
          className="relative bg-background rounded-2xl shadow-2xl w-full max-h-[90vh] overflow-y-auto border border-border animate-in fade-in zoom-in-95 duration-200"
        >

          <div className="relative h-72 md:h-96 overflow-hidden rounded-t-2xl">
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                style={{ opacity: imgIdx === i ? 1 : 0 }}
              />
            ))}

            {project.images.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors">
                  <ChevronRight className="h-6 w-6" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                  {project.images.map((_, i) => (
                    <button key={i} onClick={() => setImgIdx(i)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${imgIdx === i ? "bg-white scale-125" : "bg-white/50"}`} />
                  ))}
                </div>
              </>
            )}

            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full">
              {imgIdx + 1} / {project.images.length}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <span className="inline-block bg-[#2171b5] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">{project.category}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
            <div className="flex items-center gap-1.5 text-muted-foreground mb-5">
              <MapPin className="h-4 w-4 text-[#2171b5]" />
              <span>{project.location}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">{project.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: ProjectData }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const hasMultiple = project.images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i === 0 ? project.images.length - 1 : i - 1));
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((i) => (i === project.images.length - 1 ? 0 : i + 1));
  };

  return (
    <>
      <div className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50 hover:-translate-y-2">
        <div className="relative h-52 overflow-hidden">
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.title} ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              style={{ opacity: imgIdx === i ? 1 : 0 }}
            />
          ))}

          {hasMultiple && (
            <>
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {hasMultiple && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
              {project.images.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setImgIdx(i); }} className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIdx === i ? "bg-white scale-125" : "bg-white/50"}`} />
              ))}
            </div>
          )}

          <span className="absolute top-4 left-4 bg-[#2171b5] text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
            {project.category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 text-[#2171b5] shrink-0" />
            <span>{project.location}</span>
          </div>
          <Button variant="default" size="sm" className="rounded-full px-6" onClick={() => setShowModal(true)}>
            Visit Project
          </Button>
        </div>
      </div>

      {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
};


const Index = () => {

  return (
    <Layout>
      {/* Hero Section - Full width with #2171b5 background and noise texture */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20" style={{ backgroundColor: '#2171b5' }}>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-60"></div>

        <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4 md:mb-6 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-white">SCS – Shreeji Cooling System | Blue Star Authorised HVAC Dealers</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight tracking-tight text-white">
                Industrial & Commercial<br />
                Air Conditioning Systems
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mb-7 md:mb-10 leading-relaxed mx-auto lg:mx-0">
                Blue Star Authorised HVAC Dealers trained in providing the highest level of customer service with extensive knowledge of Air Conditioning units.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 relative z-10 items-center lg:items-start">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-[#2171b5] hover:bg-white/90 text-base font-semibold shadow-lg hover:shadow-xl transition-all group px-8 py-6 rounded-full">
                    OUR PROJECTS
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#2171b5] text-base transition-all px-8 py-6 rounded-full bg-transparent">
                    OUR SERVICES
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Video */}
            <div className="relative w-full max-h-[280px] sm:max-h-none lg:block">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-video bg-black">
                {/* Video element */}
                <video
                  src={HERO_VIDEO_URL}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2171b5]/20 via-transparent to-white/10 pointer-events-none"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-white/15 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>


      {/* Service Highlights - Modern card design with glassmorphism */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive HVAC services tailored to your needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {serviceHighlights.map((s, idx) => (
              <div
                key={s.title}
                className="group relative bg-card rounded-2xl p-5 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-accent/50 hover:-translate-y-2 overflow-hidden hover:bg-[#2171b5]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="h-10 w-10 sm:h-16 sm:w-16 text-[#2171b5] group-hover:text-white transition-colors duration-300" strokeWidth={1.2} />
                  </div>

                  <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-white transition-colors duration-300">
                    {s.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section with Products */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Product Grid (3x2) */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {[
                  {
                    icon: Wind,
                    title: "VRF SYSTEMS",
                    category: "HVAC Equipment"
                  },
                  {
                    icon: AirVent,
                    title: "DUCTED SYSTEMS",
                    category: "Ductable Systems"
                  },
                  {
                    icon: Snowflake,
                    title: "CHILLERS",
                    category: "Chillers"
                  },
                  {
                    icon: Fan,
                    title: "ROOM AIR CONDITIONERS",
                    category: "Air Conditioners"
                  },
                  {
                    icon: Refrigerator,
                    title: "COMMERCIAL REFRIGERATION",
                    category: "HVAC Equipment"
                  },
                  {
                    icon: ThermometerSnowflake,
                    title: "COLD STORAGE",
                    category: "Chillers"
                  }
                ].map((product) => (
                  <Link
                    key={product.title}
                    to={`/products?category=${encodeURIComponent(product.category)}`}
                    className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30 hover:-translate-y-1 cursor-pointer"
                  >
                    {/* Product Icon */}
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#2171b5]/10 to-[#2171b5]/5 flex items-center justify-center group-hover:from-[#2171b5] group-hover:to-[#5a9fd4] transition-all duration-300">
                      <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
                      <product.icon className="h-8 w-8 sm:h-12 sm:w-12 text-[#2171b5] group-hover:text-white transition-colors duration-300 relative z-10" strokeWidth={1.5} />
                    </div>

                    {/* Product Title */}
                    <div className="p-3 text-center bg-card">
                      <h3 className="font-bold text-xs text-foreground group-hover:text-primary transition-colors duration-300">
                        {product.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side - Company Information */}
            <div className="text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                India's Leading Trusted <span className="text-primary">HVAC Solutions Provider</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Since our inception, Shreeji Cooling System Pvt. Ltd. has been at the forefront of delivering cutting-edge climate control solutions. As authorised Blue Star dealers, we combine world-class technology with local expertise to create comfortable, energy-efficient environments for businesses across sectors.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Authorised Blue Star HVAC System Dealers",
                  "End-to-End Project Execution & Consulting",
                  "24/7 Dedicated Support & Maintenance Teams",
                  "Energy-Efficient & Sustainable Cooling Solutions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="default" size="lg" className="rounded-full px-8">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse into the world-class HVAC installations that we've delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {allProjects.slice(0, 3).map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>

          {/* View More Projects → navigates to /projects page */}
          <div className="text-center mt-10">
            <Link to="/projects">
              <Button variant="default" size="lg" className="rounded-full px-8">
                View More Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Streamlined Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From consultation to commissioning, we ensure a seamless experience.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 relative">
            {/* Connecting Line removed in favor of arrows */}

            {[
              { step: "01", title: "Consultation", desc: "We analyze your site and requirements to understand your cooling needs." },
              { step: "02", title: "Design", desc: "Our engineers create an optimal, energy-efficient HVAC system layout." },
              { step: "03", title: "Installation", desc: "Expert technicians install the system with precision and safety protocols." },
              { step: "04", title: "Support", desc: "We provide comprehensive testing, training, and ongoing maintenance." }
            ].map((process, idx) => (
              <div key={idx} className="relative group">
                {/* Arrow between cards (Desktop only) - Positioned outside the overflow-hidden card */}
                {idx < 3 && (
                  <div className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
                    <ArrowRight className="w-12 h-12 text-primary drop-shadow-md" strokeWidth={2.5} />
                  </div>
                )}

                <div className="relative overflow-hidden bg-background p-5 sm:p-8 rounded-2xl border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2171b5]">
                  {/* Noise texture overlay on hover */}
                  <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors duration-300">
                      <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">{process.step}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-white transition-colors duration-300">{process.title}</h3>
                    <p className="text-base text-muted-foreground group-hover:text-white/90 transition-colors duration-300">{process.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Enhanced with icons and better visual hierarchy */}
      <section className="py-12 md:py-20 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose Shreeji Cooling?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak for our excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className="group relative bg-card rounded-2xl p-4 sm:p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-[#2171b5]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-3 p-3 sm:p-4 bg-primary/5 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                    <stat.icon className="h-7 w-7 sm:h-10 sm:w-10 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-primary group-hover:text-white transition-colors duration-300">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium group-hover:text-white/80 transition-colors duration-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Improved card design */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Industries We Serve
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Delivering excellence across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {industries.map((i, idx) => (
              <div
                key={i.label}
                className="group relative flex flex-col items-center gap-2 sm:gap-4 p-5 sm:p-8 rounded-2xl border-2 border-border hover:border-accent bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden hover:bg-[#2171b5]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <i.icon className="h-8 w-8 sm:h-12 sm:w-12 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-foreground mt-2 sm:mt-4 group-hover:text-white transition-colors duration-300">
                    {i.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Auto-scrolling carousel */}
      <section className="py-12 md:py-20 bg-background overflow-hidden border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
                  name: "Mr. Arvind Vadoriya",
                  company: "Signet Mall",
                  role: "Kamrej",
                  rating: 5,
                  title: "Excellent work",
                  text: "We wanted to express our appreciation for the 300TR chiller work done by SCS – Shreeji Cooling System. All staff were knowledgeable and professionals, and the work done was of the highest caliber. Very neat and workmanlike. You have good technical staff.",
                  image: "🏬"
                },
                {
                  name: "Plantex Technologies",
                  company: "Plantex Technologies",
                  role: "Katargam",
                  rating: 5,
                  title: "Experts",
                  text: "Outstanding customer service and very professional. From the first contact calling in until the work was done, SCS – Shreeji Cooling System's customer service is the best we have ever experienced.",
                  image: "🏭"
                },
                {
                  name: "Mr. Dinesh Bhugadiya",
                  company: "Kiran Gems Pvt. Ltd.",
                  role: "Director",
                  rating: 5,
                  title: "True Professionals",
                  text: "We have been using Bluestar. Great service and quick response given by SCS for any problems related to our Central air conditioning work. SCS has worked on our system for several years and is very knowledgeable and conscientious. Technical person respond quickly whenever we call for help/service. I would highly recommend SCS to anyone need a great heat and air provider.",
                  image: "💎"
                },
                {
                  name: "KRIBHCO",
                  company: "Krishak Bharati Co-operative Ltd.",
                  role: "Management",
                  rating: 5,
                  title: "Very Knowledgeable",
                  text: "Excellent work done for by SCS. You set a high standard for your service and other central air conditioner related work. Thank you again, and expect many referrals from us in the future.",
                  image: "🌾"
                },
                {
                  name: "Mr. Manhar Shah",
                  company: "Dhartidhan Ceramics",
                  role: "Director",
                  rating: 5,
                  title: "Highly recommend",
                  text: "Thank you so much for your professional installation of our new split air conditioning system. I would be willing to highly recommend your work to anyone seeking to cool or heat their homes/offices. Your services are of superior quality.",
                  image: "🏗️"
                },
              ].concat([
                // Duplicate for infinite scroll effect
                {
                  name: "Mr. Arvind Vadoriya",
                  company: "Signet Mall",
                  role: "Kamrej",
                  rating: 5,
                  title: "Excellent work",
                  text: "We wanted to express our appreciation for the 300TR chiller work done by SCS – Shreeji Cooling System. All staff were knowledgeable and professionals, and the work done was of the highest caliber. Very neat and workmanlike. You have good technical staff.",
                  image: "🏬"
                },
                {
                  name: "Plantex Technologies",
                  company: "Plantex Technologies",
                  role: "Katargam",
                  rating: 5,
                  title: "Experts",
                  text: "Outstanding customer service and very professional. From the first contact calling in until the work was done, SCS – Shreeji Cooling System's customer service is the best we have ever experienced.",
                  image: "🏭"
                },
                {
                  name: "Mr. Dinesh Bhugadiya",
                  company: "Kiran Gems Pvt. Ltd.",
                  role: "Director",
                  rating: 5,
                  title: "True Professionals",
                  text: "We have been using Bluestar. Great service and quick response given by SCS for any problems related to our Central air conditioning work. SCS has worked on our system for several years and is very knowledgeable and conscientious. Technical person respond quickly whenever we call for help/service. I would highly recommend SCS to anyone need a great heat and air provider.",
                  image: "💎"
                },
                {
                  name: "KRIBHCO",
                  company: "Krishak Bharati Co-operative Ltd.",
                  role: "Management",
                  rating: 5,
                  title: "Very Knowledgeable",
                  text: "Excellent work done for by SCS. You set a high standard for your service and other central air conditioner related work. Thank you again, and expect many referrals from us in the future.",
                  image: "🌾"
                },
                {
                  name: "Mr. Manhar Shah",
                  company: "Dhartidhan Ceramics",
                  role: "Director",
                  rating: 5,
                  title: "Highly recommend",
                  text: "Thank you so much for your professional installation of our new split air conditioning system. I would be willing to highly recommend your work to anyone seeking to cool or heat their homes/offices. Your services are of superior quality.",
                  image: "🏗️"
                },
              ]).map((testimonial, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[85vw] sm:w-[380px] md:w-[400px] bg-card rounded-2xl p-5 sm:p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
                >
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-accent" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>

                  {/* Review title */}
                  {'title' in testimonial && testimonial.title && (
                    <h4 className="font-bold text-foreground mb-2">"{testimonial.title}"</h4>
                  )}

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
          <div className="mt-10 md:mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-4 sm:gap-8 px-5 sm:px-8 py-4 bg-card rounded-2xl sm:rounded-full border border-border/50 shadow-md">
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

      {/* CTA Section - Modern design with gradient */}
      <section className="py-12 md:py-20 relative overflow-hidden bg-background border-y border-border">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.03),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(37,99,235,0.02),transparent_60%)]"></div>

        <div className="container relative mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-5 text-foreground">
            Need a Cooling Solution?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to help.
          </p>

          <Link to="/contact" className="w-full sm:w-auto block sm:inline-block">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
