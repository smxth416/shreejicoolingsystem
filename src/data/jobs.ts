export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  description: string;
};

export const jobs: Job[] = [
  { id: "1", title: "HVAC Project Engineer", location: "Mumbai, India", type: "Full-time", description: "Lead HVAC project execution for commercial buildings. 3+ years experience required." },
  { id: "2", title: "Service Technician", location: "Pune, India", type: "Full-time", description: "Install and maintain AC and chiller systems. ITI/Diploma in refrigeration preferred." },
  { id: "3", title: "Sales Executive – HVAC", location: "Mumbai, India", type: "Full-time", description: "Drive B2B sales for HVAC solutions. Experience in the cooling industry is a plus." },
  { id: "4", title: "Design Engineer (MEP)", location: "Mumbai, India", type: "Full-time", description: "Create HVAC system designs using AutoCAD/Revit. Knowledge of load calculations required." },
];
