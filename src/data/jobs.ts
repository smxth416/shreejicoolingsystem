export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
  details: string[]; // Added details array for the expanded view
};

export const jobs: Job[] = [
  {
    id: "1",
    title: "AC Technician For Chiller",
    location: "Surat, Gujarat",
    type: "Full-time",
    description: "Experienced technician needed for chiller maintenance and repair.",
    details: [
      "Diagnose and repair chiller systems.",
      "Perform preventative maintenance.",
      "troubleshoot electrical and mechanical faults.",
      "Ensure safety protocols are followed.",
      "Complete service reports and documentation."
    ]
  },
  {
    id: "2",
    title: "AC Technician For Split AC",
    location: "Surat, Gujarat",
    type: "Full-time",
    description: " Skilled technician for split AC installation and servicing.",
    details: [
      "Install new split AC units.",
      "Service and clean existing units.",
      "Repair gas leaks and refill refrigerant.",
      "Replace faulty components (PCBs, compressors, etc.).",
      "Interact with customers professionally."
    ]
  },
  {
    id: "3",
    title: "Driver For LMV",
    location: "Surat, Gujarat",
    type: "Full-time",
    description: "Reliable driver for light motor vehicles.",
    details: [
      "Operate company vehicles safely.",
      "Transport materials and staff to sites.",
      "Maintain vehicle cleanliness and basic upkeep.",
      "Adhere to traffic laws and regulations.",
      "Valid LMV license required."
    ]
  },
  {
    id: "4",
    title: "Collection Boy",
    location: "Surat, Gujarat",
    type: "Full-time",
    description: "Field executive for payment collection and document handling.",
    details: [
      "Visit client locations for payment collection.",
      "Deliver invoices and documents.",
      "Maintain daily collection records.",
      "Deposit collected funds to the office/bank.",
      "Good communication and navigation skills required."
    ]
  },
  {
    id: "5",
    title: "AutoCAD Operator (Chiller & AC)",
    location: "Surat, India",
    type: "Full-time",
    description: "Drafting specialist for HVAC system layouts including chillers and air conditioning units.",
    details: [
      "Prepare detailed HVAC layout drawings using AutoCAD.",
      "Design chiller plant rooms and AC duct schematics.",
      "Coordinate with site engineers for as-built drawings.",
      "Knowledge of HVAC components and refrigeration cycles preferred.",
      "Minimum 1–2 years experience with AutoCAD/MEP drafting."
    ]
  },
  {
    id: "6",
    title: "Sr. Technician for VRF, Packaged & Ducted AC ( Central AC )",
    location: "Surat, Gujarat",
    type: "Full-time",
    description: "Senior technician for complex central air conditioning systems.",
    details: [
      "Lead installation and troubleshooting of VRF/VRV systems.",
      "Handle packaged and ducted AC units.",
      "Supervise junior technicians.",
      "Read and interpret technical drawings.",
      "Advanced knowledge of HVAC controls and automation."
    ]
  },
  {
    id: "7",
    title: "Store Management Executive",
    location: "Surat, India",
    type: "Full-time",
    description: "Responsible for managing inventory, materials, and store operations for HVAC projects.",
    details: [
      "Maintain stock records of HVAC materials and spare parts.",
      "Coordinate material inward/outward for project sites.",
      "Conduct regular stock audits and reconciliations.",
      "Liaise with procurement team for replenishment.",
      "Proficiency in inventory/store management software preferred."
    ]
  },
  {
    id: "8",
    title: "Site Helper",
    location: "Surat, India",
    type: "Full-time",
    description: "Support role for HVAC installation and maintenance teams at project sites.",
    details: [
      "Assist technicians during AC installation and servicing.",
      "Carry and arrange tools, equipment, and materials on site.",
      "Maintain cleanliness and safety at the work area.",
      "Follow instructions from senior technicians and supervisors.",
      "No prior experience required — on-the-job training provided."
    ]
  },
];
