export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  longDescription?: string;
  image: string;
  brand: string;
  features?: string[];
  specifications?: Record<string, string>;
  applications?: string[];
};

export const categories = [
  "All",
  "Air Conditioners",
  "Chillers",
  "Ductable Systems",
  "HVAC Equipment",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Blue Star Split AC 1.5 Ton",
    category: "Air Conditioners",
    description: "Energy-efficient split air conditioner ideal for offices and retail spaces.",
    longDescription: "The Blue Star Split AC 1.5 Ton is designed to deliver powerful cooling with high energy efficiency. Featuring a copper condenser and advanced filters, it ensures clean and cool air for your workspace.",
    image: "https://images.unsplash.com/photo-1527613462377-5264b38d3637?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["5-Star Energy Rating", "Anti-Corrosive Blue Fins", "Turbo Cooling", "Self-Clean Technology"],
    specifications: { "Capacity": "1.5 Ton", "Refrigerant": "R32", "Noise Level": "35 dB", "Warranty": "1 Year Product, 5 Years Compressor" },
    applications: ["Small Offices", "Cabins", "Retail Shops", "Server Rooms"]
  },
  {
    id: "2",
    name: "Blue Star Cassette AC 3 Ton",
    category: "Air Conditioners",
    description: "Ceiling-mounted cassette AC for uniform air distribution in large halls.",
    longDescription: "Perfect for modern interiors, the Blue Star Cassette AC offers 360-degree air flow, ensuring every corner of the room is cooled evenly. Its sleek design blends seamlessly with false ceilings.",
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["360° Air Flow", "Built-in Drain Pump", "Fresh Air Intake", "Quiet Operation"],
    specifications: { "Capacity": "3 Ton", "Refrigerant": "R410A", "Air Flow": "1200 CFM", "Warranty": "1 Year" },
    applications: ["Conference Rooms", "Restaurants", "Showrooms", "Banks"]
  },
  {
    id: "3",
    name: "Blue Star Tower AC 5 Ton",
    category: "Air Conditioners",
    description: "High-capacity tower AC for commercial lobbies and showrooms.",
    longDescription: "The Blue Star Tower AC is a floor-standing unit designed for large open spaces where wall or ceiling mounting is not feasible. It delivers a powerful air throw to cool vast areas quickly.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["Powerful Air Throw", "Auto Swing", "Digital Display", "Auto Restart"],
    specifications: { "Capacity": "5 Ton", "Refrigerant": "R410A", "Power Supply": "3-Phase", "Warranty": "1 Year" },
    applications: ["Lobbies", "Waiting Areas", "Event Halls", "Large Showrooms"]
  },
  {
    id: "4",
    name: "Blue Star Air-Cooled Chiller 20TR",
    category: "Chillers",
    description: "Compact air-cooled chiller for small to mid-size commercial buildings.",
    longDescription: "This air-cooled scroll chiller is engineered for reliability and efficiency. It eliminates the need for a cooling tower, making it an excellent choice for areas with water scarcity.",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["Quick Installation", "Compact Footprint", "BMS Compatibility", "High Ambient Operation"],
    specifications: { "Capacity": "20 TR", "Compressor Type": "Scroll", "Refrigerant": "R410A/R407C", "Condenser": "Copper Tube" },
    applications: ["Hospitals", "Hotels", "Industrial Processes", "Commercial Complexes"]
  },
  {
    id: "5",
    name: "Blue Star Water-Cooled Chiller 50TR",
    category: "Chillers",
    description: "High-efficiency water-cooled chiller for industrial applications.",
    longDescription: "Designed for heavy-duty cooling, the water-cooled chiller offers superior energy efficiency (EER). It is ideal for continuous operation in industrial environments.",
    image: "https://images.unsplash.com/photo-1504384308090-c54be3852f92?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["High EER", "Shell & Tube Condenser", "Microprocessor Control", "Robust Design"],
    specifications: { "Capacity": "50 TR", "Compressor Type": "Screw/Scroll", "Refrigerant": "R134a", "Efficiency": "0.65 kW/TR" },
    applications: ["Pharma Plants", "Manufacturing Units", "Shopping Malls", "Large Office Parks"]
  },
  {
    id: "6",
    name: "Blue Star Scroll Chiller 30TR",
    category: "Chillers",
    description: "Scroll compressor chiller with low noise and vibration.",
    longDescription: "Featuring multiple scroll compressors, this chiller provides excellent part-load efficiency and redundancy. Its quiet operation makes it suitable for noise-sensitive environments.",
    image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["Low Noise", "Multiple Circuits", "Electronic Expansion Valve", "Remote Monitoring"],
    specifications: { "Capacity": "30 TR", "Compressor Type": "Scroll", "Refrigerant": "R410A", "Sound Level": "<75 dBA" },
    applications: ["Multiplexes", "Educational Institutes", "Luxury Hotels", "Libraries"]
  },
  {
    id: "7",
    name: "Blue Star Ductable AC 5.5 Ton",
    category: "Ductable Systems",
    description: "Concealed ductable AC unit for centralized cooling in offices.",
    longDescription: "The ductable split AC system allows for aesthetic flexibility as the indoor unit is concealed above the false ceiling. It provides uniform cooling through a network of ducts.",
    image: "https://images.unsplash.com/photo-1505798577917-a651a5d40318?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["Aesthetic & Concealed", "Uniform Cooling", "Fresh Air Provision", "Corded Remote"],
    specifications: { "Capacity": "5.5 Ton", "Static Pressure": "Low/Medium", "Refrigerant": "R410A", "Power": "3-Phase" },
    applications: ["Open Plan Offices", "Banquet Halls", "Department Stores", "Gyms"]
  },
  {
    id: "8",
    name: "Blue Star Ductable AC 11 Ton",
    category: "Ductable Systems",
    description: "High-capacity ducted AC for malls and large retail spaces.",
    longDescription: "Built for larger spaces, this 11 Ton unit handles higher heat loads and air volumes effectively. It supports longer duct runs for extensive coverage.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["High Static Pressure", "Scroll Compressor", "Thermal Overload Protection", "Efficient Air Filters"],
    specifications: { "Capacity": "11 Ton", "Air Flow": "4000 CFM", "Refrigerant": "R410A", "Voltage": "415V" },
    applications: ["Large Showrooms", "Supermarkets", "Auditoriums", "Warehouses"]
  },
  {
    id: "9",
    name: "Blue Star AHU (Air Handling Unit)",
    category: "HVAC Equipment",
    description: "Custom air handling unit for ventilation and climate control.",
    longDescription: "Blue Star AHUs are double-skinned and modular, designed to maintain indoor air quality (IAQ) by controlling humidity, temperature, and air cleanliness.",
    image: "https://images.unsplash.com/photo-1581092942249-56ce8eb128b9?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["Double Skin Construction", "Thermal Break Profile", "High-Efficiency Filters", "VFD Compatible"],
    specifications: { "Air Flow Range": "1000 - 40000 CFM", "Panel Thickness": "25/50 mm", "Fan Type": "Centrifugal/Plug", "Filter Class": "F7/H13" },
    applications: ["Clean Rooms", "Pharma Industry", "Operation Theaters", "Food Processing"]
  },
  {
    id: "10",
    name: "Blue Star VRF/VRV System",
    category: "HVAC Equipment",
    description: "Variable refrigerant flow system for flexible zone control.",
    longDescription: "VRF systems offer the ultimate in energy efficiency and control. They allow different zones to be maintained at different temperatures simultaneously using a single outdoor unit.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["Individual Zone Control", "Inverter Technology", "Long Piping Length", "Building Integration"],
    specifications: { "Capacity Range": "6 HP - 96 HP", "Compressor": "Inverter Scroll", "Refrigerant": "R410A", "Efficiency": "Start-rated" },
    applications: ["High-rise Buildings", "Hotels", "Office Towers", "Luxury Villas"]
  },
  {
    id: "11",
    name: "Blue Star Cooling Tower",
    category: "HVAC Equipment",
    description: "Industrial cooling tower for heat rejection in chiller systems.",
    longDescription: "Our FRP cooling towers are designed for efficient heat rejection with minimal water loss. They are corrosion-resistant and durable for long-term outdoor installation.",
    image: "https://images.unsplash.com/photo-1565610211729-ae14d55d7b51?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["FRP Casing", "PVC Fills", "Direct Drive Fan", "Low Maintenance"],
    specifications: { "Flow Rate": "10 - 1000 CMH", "Material": "Fiberglass Reinforced Plastic", "Fan Type": "Axial", "Drift Loss": "<0.05%" },
    applications: ["Process Cooling", "HVAC Plants", "Power Plants", "Steel Mills"]
  },
  {
    id: "12",
    name: "Blue Star Fan Coil Unit",
    category: "HVAC Equipment",
    description: "Compact fan coil unit for individual room temperature control.",
    longDescription: "FCUs allow for decentralized control in hydronic systems. They are quiet, compact, and fit easily into false ceilings for discreet air conditioning.",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&h=600&fit=crop",
    brand: "Blue Star",
    features: ["Ultra-Quiet Motor", "3-Speed Control", "Low Height", "Easy Maintenance"],
    specifications: { "Air Flow": "400 - 1200 CFM", "Static Pressure": "15-50 Pa", "Coil": "Copper/Aluminium", "Controller": "Thermostat" },
    applications: ["Hotel Rooms", "Office Cabins", "Hospital Wards", "Residences"]
  },
];
