import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";
import { MapPin, ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const allProjects = [
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
    },
    {
        title: "Tata Starbucks",
        location: "Piplod, Surat",
        category: "Hospitality",
        desc: "Provided a tailored HVAC installation for the Tata Starbucks outlet, ensuring a cozy and comfortable café experience for customers. The system delivers quiet, energy-efficient cooling that complements the premium ambiance of the store while meeting Starbucks' global climate standards.",
        images: Array.from({ length: 5 }, (_, i) => `/projects/tata-starbucks/${i + 1}.avif`)
    },
    {
        title: "GG Export",
        location: "Surat",
        category: "Industrial",
        desc: "Supplied and installed industrial-grade air conditioning for GG Export's manufacturing and packaging facility. The system ensures temperature-controlled conditions across production zones, protecting goods from heat and humidity while maintaining worker comfort.",
        images: Array.from({ length: 2 }, (_, i) => `/projects/gg-export/${i + 1}.avif`)
    },
    {
        title: "Camera Control Room – SP Office",
        location: "Amreli",
        category: "Government",
        desc: "Installed a precision cooling system for the Camera Control Room at the SP Office, Amreli. The HVAC setup ensures 24/7 stable temperature for sensitive surveillance equipment, servers, and monitoring stations — critical for uninterrupted law enforcement operations.",
        images: Array.from({ length: 6 }, (_, i) => `/projects/sp-office-amreli/${i + 1}.avif`)
    },
    {
        title: "Krishak Bharati Cooperative Ltd (KRIBHCO)",
        location: "Hazira",
        category: "Industrial",
        desc: "Delivered an industrial HVAC solution for KRIBHCO's Hazira complex, one of India's largest fertilizer production facilities. The project covered climate control for control rooms, administrative blocks, and critical process areas requiring strict temperature regulation.",
        images: Array.from({ length: 3 }, (_, i) => `/projects/kribhco/${i + 1}.avif`)
    },
    {
        title: "BK Sarees",
        location: "Sachin GIDC",
        category: "Commercial",
        desc: "Executed a full HVAC installation for BK Sarees' manufacturing and warehousing facility in Sachin GIDC. The air conditioning system protects delicate textile inventory from humidity damage while providing a comfortable working environment for the workforce across production and storage areas.",
        images: Array.from({ length: 9 }, (_, i) => `/projects/bk-sarees/${i + 1}.avif`)
    },
    {
        title: "Orbit Ltd.",
        location: "Kosamba",
        category: "Industrial",
        desc: "Provided end-to-end HVAC solutions for Orbit Ltd.'s industrial facility in Kosamba. The installation covers production halls, quality control labs, and office spaces with a robust system built for round-the-clock operation in demanding industrial conditions.",
        images: Array.from({ length: 4 }, (_, i) => `/projects/orbit-ltd/${i + 1}.avif`)
    },
    {
        title: "OM Industries",
        location: "Kadodara",
        category: "Industrial",
        desc: "Supplied and commissioned a high-capacity cooling system for OM Industries' manufacturing plant in Kadodara. The project addressed the unique thermal challenges of the production environment, ensuring equipment longevity and consistent output quality through controlled climate conditions.",
        images: Array.from({ length: 6 }, (_, i) => `/projects/om-industries/${i + 1}.avif`)
    },
    {
        title: "Dharma Creation",
        location: "Katargam, Surat",
        category: "Commercial",
        desc: "Installed a modern air conditioning system for Dharma Creation's commercial workspace in Katargam. The solution provides efficient cooling for the office, design studio, and client meeting areas, creating an ideal environment for creative work and business operations.",
        images: Array.from({ length: 3 }, (_, i) => `/projects/dharma-creation/${i + 1}.avif`)
    },
    {
        title: "PlanetX Technologies",
        location: "Katargam, Surat",
        category: "IT & Tech",
        desc: "Delivered a precision HVAC solution for PlanetX Technologies' IT office and server infrastructure. The system maintains optimal temperature for workstations and networking equipment while ensuring a productive, comfortable environment for the tech team.",
        images: Array.from({ length: 2 }, (_, i) => `/projects/planetx-technologies/${i + 1}.avif`)
    },
    {
        title: "SMC Singanpore Sewage Plant",
        location: "Surat",
        category: "Government",
        desc: "Provided HVAC installations for the Surat Municipal Corporation's Singanpore Sewage Treatment Plant. The project covers control rooms, administrative offices, and monitoring stations with cooling systems designed for reliability in a demanding operational environment.",
        images: Array.from({ length: 5 }, (_, i) => `/projects/smc-sewage-plant/${i + 1}.avif`)
    },
    {
        title: "Bhukhanval Industries Pvt. Ltd.",
        location: "Navsari",
        category: "Industrial",
        desc: "Installed industrial air conditioning for Bhukhanval Industries' facility in Navsari. The system provides targeted cooling across the production floor and office areas, built to withstand harsh industrial conditions while maintaining energy efficiency.",
        images: Array.from({ length: 2 }, (_, i) => `/projects/bhukhanval-industries/${i + 1}.avif`)
    }
];

type ProjectData = {
    title: string;
    location: string;
    category: string;
    desc: string;
    images: string[];
};

// Project detail modal
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
            {/* Backdrop */}
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

                    {/* Image Slider */}
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
                                <button
                                    onClick={prev}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                                >
                                    <ChevronLeft className="h-6 w-6" />
                                </button>
                                <button
                                    onClick={next}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                                >
                                    <ChevronRight className="h-6 w-6" />
                                </button>

                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                                    {project.images.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setImgIdx(i)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${imgIdx === i ? "bg-white scale-125" : "bg-white/50"}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        {/* Image counter */}
                        <div className="absolute top-4 left-4 z-10 bg-black/50 text-white text-xs font-medium px-3 py-1 rounded-full">
                            {imgIdx + 1} / {project.images.length}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8">
                        <span className="inline-block bg-[#7CB8EB] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                            {project.category}
                        </span>
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

// Project card with slider and visit button
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
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {hasMultiple && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                            {project.images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${imgIdx === i ? "bg-white scale-125" : "bg-white/50"}`}
                                />
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
                    <Button
                        variant="default"
                        size="sm"
                        className="rounded-full px-6"
                        onClick={() => setShowModal(true)}
                    >
                        Visit Project
                    </Button>
                </div>
            </div>

            {showModal && <ProjectModal project={project} onClose={() => setShowModal(false)} />}
        </>
    );
};

const Projects = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
                <div className="absolute inset-0 noise-texture opacity-90"></div>
                <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Projects</h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        World-class HVAC installations delivered across commercial, industrial, and hospitality sectors.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="w-full px-6 md:px-12 lg:px-24">
                    <div className="mb-10">
                        <Button
                            variant="outline"
                            onClick={() => navigate(-1)}
                            className="flex items-center gap-2 border-[#7CB8EB] text-[#7CB8EB] hover:bg-[#7CB8EB] hover:text-white rounded-full px-6 transition-all"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {allProjects.map((project, idx) => (
                            <ProjectCard key={idx} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Projects;
