export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
  category?: string;
  readTime?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "energy-efficient-hvac",
    title: "5 Ways to Improve Energy Efficiency in Your HVAC System",
    excerpt: "Discover practical tips to reduce energy consumption and lower your cooling costs without compromising comfort.",
    date: "2026-01-15",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop",
    category: "Energy Efficiency",
    readTime: "5 min read",
    content: "Energy efficiency is crucial for commercial HVAC systems. Here are five proven strategies:\n\n1. **Regular Maintenance** – Schedule preventive maintenance to keep equipment running at peak performance.\n\n2. **Smart Thermostats** – Upgrade to programmable thermostats for better temperature control.\n\n3. **Duct Sealing** – Leaky ducts waste up to 30% of cooled air. Proper sealing saves energy.\n\n4. **Equipment Upgrades** – Modern inverter-based systems consume 40% less power than older models.\n\n5. **Zoning Systems** – Cool only occupied areas instead of the entire building.\n\nImplementing these strategies can reduce your HVAC energy costs by 20-40%.",
  },
  {
    id: "choosing-right-chiller",
    title: "How to Choose the Right Chiller for Your Business",
    excerpt: "A comprehensive guide to selecting between air-cooled and water-cooled chillers for your commercial facility.",
    date: "2026-01-02",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    category: "Buying Guide",
    readTime: "7 min read",
    content: "Choosing the right chiller depends on several factors including building size, climate, and budget.\n\n**Air-Cooled Chillers** are ideal for smaller installations where water availability is limited. They require less maintenance but are slightly less efficient.\n\n**Water-Cooled Chillers** offer higher efficiency for large installations but require cooling towers and water treatment.\n\nConsider factors like initial cost, operating cost, space availability, and noise levels when making your decision.",
  },
  {
    id: "hvac-maintenance-tips",
    title: "Essential HVAC Maintenance Tips for Commercial Buildings",
    excerpt: "Keep your cooling systems running smoothly with these essential maintenance practices for commercial properties.",
    date: "2025-12-20",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
    category: "Maintenance",
    readTime: "4 min read",
    content: "Regular HVAC maintenance is critical for commercial buildings. Key practices include:\n\n- **Filter Replacement** – Change filters every 1-3 months depending on usage.\n- **Coil Cleaning** – Clean condenser and evaporator coils seasonally.\n- **Refrigerant Checks** – Monitor refrigerant levels to prevent efficiency loss.\n- **Belt Inspection** – Check and replace worn belts in AHUs and blowers.\n- **Drain Cleaning** – Clear condensate drains to prevent water damage.\n\nA well-maintained system lasts 15-20 years and operates 20% more efficiently.",
  },
];
