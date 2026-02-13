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
    location: "Mumbai, India",
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
    location: "Mumbai, India",
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
    location: "Mumbai, India",
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
    location: "Mumbai, India",
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
    title: "Data Entry Operator",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Accurate and efficient data entry specialist.",
    details: [
      "Enter customer and project data into the system.",
      "Verify data accuracy and correct errors.",
      "Generate reports from the database.",
      "Manage digital filing systems.",
      "Proficiency in MS Office (Excel, Word) is essential."
    ]
  },
  {
    id: "6",
    title: "Sr. Technician for VRF, Packaged & Ducted AC ( Central AC )",
    location: "Mumbai, India",
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
    title: "Ductline Manufacturing Machine Operator",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Operator for duct manufacturing machinery.",
    details: [
      "Operate duct fabrication machines safely.",
      "Monitor machine performance and quality output.",
      "Perform basic machine maintenance.",
      "Follow production schedules.",
      "Ensure material efficiency and minimal waste."
    ]
  },
  {
    id: "8",
    title: "Software Operator",
    location: "Mumbai, India",
    type: "Full-time",
    description: "Operator for specialized industry software.",
    details: [
      "Operate and monitor specific software applications.",
      "Input parameters and generate outputs.",
      "Troubleshoot software glitches or report them.",
      "Maintain logs of software operations.",
      "Basic computer literacy types and software understanding."
    ]
  },
];
