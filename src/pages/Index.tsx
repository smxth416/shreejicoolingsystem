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

// Placeholder images for the slider - replace with actual HVAC images
const sliderImages = [
  "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
];

type ProjectData = {
  title: string;
  location: string;
  category: string;
  desc: string;
  images: string[];
};

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
          style={{ backgroundColor: '#7CB8EB' }}
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
            <span className="inline-block bg-[#7CB8EB] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">{project.category}</span>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
            <div className="flex items-center gap-1.5 text-muted-foreground mb-5">
              <MapPin className="h-4 w-4 text-[#7CB8EB]" />
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

          <span className="absolute top-4 left-4 bg-[#7CB8EB] text-white text-xs font-semibold px-3 py-1 rounded-full shadow z-10">
            {project.category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
            <MapPin className="h-4 w-4 text-[#7CB8EB] shrink-0" />
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 2500); // 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section - Full width with #7CB8EB background and noise texture */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20" style={{ backgroundColor: '#7CB8EB' }}>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture"></div>

        <div className="w-full px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-left">
              <div className="inline-block mb-6 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold tracking-wide text-white">Shreeji Cooling System Private Limited | Blue Star Authorised HVAC Dealers</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-white">
                Industrial & Commercial<br />
                Air Conditioning Systems
              </h1>

              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 leading-relaxed">
                Shreeji Cooling System Private Limited Blue Star Authorised HVAC Dealers trained in providing the highest level of customer service and with an extensive knowledge of our Air Conditioning units.
              </p>

              <div className="flex flex-wrap gap-4 relative z-10">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-[#7CB8EB] hover:bg-white/90 text-base font-semibold shadow-lg hover:shadow-xl transition-all group px-8 py-6 rounded-full">
                    OUR PROJECTS
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#7CB8EB] text-base transition-all px-8 py-6 rounded-full bg-transparent">
                    OUR SERVICES
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Auto-sliding Image Carousel */}
            <div className="relative">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/3]">
                {/* Image slider */}
                {sliderImages.map((image, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-1000"
                    style={{
                      opacity: currentImageIndex === index ? 1 : 0,
                      zIndex: currentImageIndex === index ? 1 : 0,
                    }}
                  >
                    <img
                      src={image}
                      alt={`HVAC Solution ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7CB8EB]/20 via-transparent to-white/10 pointer-events-none"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-white/15 rounded-full blur-3xl"></div>

              {/* Slider indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentImageIndex === index
                      ? "bg-white w-8"
                      : "bg-white/50 hover:bg-white/75"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Service Highlights - Modern card design with glassmorphism */}
      <section className="py-20 bg-background">
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
                className="group relative bg-card rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-border/50 hover:border-accent/50 hover:-translate-y-2 overflow-hidden hover:bg-[#7CB8EB]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <s.icon className="h-16 w-16 text-[#7CB8EB] group-hover:text-white transition-colors duration-300" strokeWidth={1.2} />
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
      <section className="py-20 bg-muted/30">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Product Grid (3x2) */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
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
                    <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#7CB8EB]/10 to-[#7CB8EB]/5 flex items-center justify-center group-hover:from-[#7CB8EB] group-hover:to-[#5a9fd4] transition-all duration-300">
                      <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
                      <product.icon className="h-16 w-16 text-[#7CB8EB] group-hover:text-white transition-colors duration-300 relative z-10" strokeWidth={1.5} />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                India's Leading Trusted <br /><span className="text-primary">HVAC Solutions Provider</span>
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
      <section className="py-20 bg-muted/30">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A glimpse into the world-class HVAC installations that we've delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Kiran Gems Pvt. Ltd.",
                location: "Tarabaug, Surat",
                category: "Commercial",
                desc: "Delivered a comprehensive HVAC solution for one of Surat's leading diamond manufacturing firms. The project involved installing high-capacity central air conditioning across the production floors, offices, and showroom areas to ensure a consistently cool and dust-free environment, critical for precision gem-cutting operations.",
                images: Array.from({ length: 9 }, (_, i) => `/projects/kiran-gems/${i + 1}.avif`)
              },
              {
                title: "Maitri Lab Grown Diamonds",
                location: "Gajera Circle, Surat",
                category: "Commercial",
                desc: "Installed a precision climate control system for Maitri's lab-grown diamond facility. The HVAC setup maintains strict temperature and humidity levels essential for the diamond growing process, along with comfortable working conditions across the office and visitor areas.",
                images: Array.from({ length: 2 }, (_, i) => `/projects/maitri-diamonds/${i + 1}.avif`)
              },
              {
                title: "Signet Mall",
                location: "Kamrej",
                category: "Mall & Retail",
                desc: "Executed a large-scale centralized air conditioning project for Signet Mall, covering retail outlets, food courts, common areas, and back-of-house zones. The system is designed for energy efficiency and optimal airflow distribution to handle high footfall during peak hours.",
                images: Array.from({ length: 8 }, (_, i) => `/projects/signet-mall/${i + 1}.avif`)
              }
            ].map((project, idx) => (
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
      <section className="py-20 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Streamlined Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From consultation to commissioning, we ensure a seamless experience.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
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

                <div className="relative overflow-hidden bg-background p-8 rounded-2xl border text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#7CB8EB]">
                  {/* Noise texture overlay on hover */}
                  <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

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
      <section className="py-20 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:bg-[#7CB8EB]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-primary/5 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                    <stat.icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-primary group-hover:text-white transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium group-hover:text-white/80 transition-colors duration-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section - Improved card design */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
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
                className="group relative flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-border hover:border-accent bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden hover:bg-[#7CB8EB]"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-4 bg-accent/10 rounded-xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <i.icon className="h-12 w-12 text-accent group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="font-semibold text-base text-foreground mt-4 group-hover:text-white transition-colors duration-300">
                    {i.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section - Auto-scrolling carousel */}
      <section className="py-20 bg-background overflow-hidden border-y border-border">
        <div className="container mx-auto px-6">
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

      {/* CTA Section - Modern design with gradient */}
      <section className="py-20 relative overflow-hidden bg-background border-y border-border">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.03),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(37,99,235,0.02),transparent_60%)]"></div>

        <div className="container relative mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-foreground">
            Need a Cooling Solution?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to help.
          </p>

          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
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
