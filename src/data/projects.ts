export type ProjectData = {
    title: string;
    location: string;
    category: string;
    desc: string;
    images: string[];
};

export const allProjects: ProjectData[] = [
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
