import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden" style={{ backgroundColor: '#7CB8EB' }}>
    {/* Noise texture overlay */}
    <div className="absolute inset-0 noise-texture"></div>

    <div className="w-full px-6 md:px-12 lg:px-24 py-12 grid md:grid-cols-4 gap-8 relative z-10">
      <div>
        <h1 className="text-2xl text-white/100">
          Shreeji Cooling System Private Limited
        </h1>
        <p className="text-sm text-white/100"><br></br>
          Leading HVAC solutions provider for commercial and industrial projects across India.
        </p>

        <div className="mt-8">
          <h4 className="font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#E1306C] text-white transition-all duration-300 transform hover:scale-110">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#0077B5] text-white transition-all duration-300 transform hover:scale-110">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#25D366] text-white transition-all duration-300 transform hover:scale-110">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#1877F2] text-white transition-all duration-300 transform hover:scale-110">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-[#FF0000] text-white transition-all duration-300 transform hover:scale-110">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-white underline">Quick Links</h3>
        <ul className="space-y-2 text-sm text-white/100">
          {["/about", "/products", "/services", "/blog", "/contact", "/career", "/csr"].map((p) => (
            <li key={p}>
              <Link to={p} className="hover:bg-white/20 hover:scale-105 transition-all capitalize inline-block px-1 rounded">
                {p.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-white underline">Services</h3>
        <ul className="space-y-2 text-sm text-white/100">
          <li><span className="hover:bg-white/20 hover:scale-105 transition-all px-1 rounded cursor-pointer inline-block">AC Installation</span></li>
          <li><span className="hover:bg-white/20 hover:scale-105 transition-all px-1 rounded cursor-pointer inline-block">Chiller Systems</span></li>
          <li><span className="hover:bg-white/20 hover:scale-105 transition-all px-1 rounded cursor-pointer inline-block">Ducting & HVAC</span></li>
          <li><span className="hover:bg-white/20 hover:scale-105 transition-all px-1 rounded cursor-pointer inline-block">Project Execution</span></li>
          <li><span className="hover:bg-white/20 hover:scale-105 transition-all px-1 rounded cursor-pointer inline-block">Maintenance (AMC)</span></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-3 text-white underline">Contact</h3>
        <ul className="space-y-3 text-sm text-white/100">
          <li className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
            F156/F157/F157M, Laxmi Narayan Industrial Estate, Surat - Navsari Rd, Baroda Rayon Corporation Compound, Udhana, Surat, Gujarat 394210
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            <a href="tel:+919909707661" className="hover:bg-white/20 transition-all px-1 rounded">+91 9909707661</a>
          </li>
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 shrink-0" />
            <a href="tel:+919723372877" className="hover:bg-white/20 transition-all px-1 rounded">+91 9723372877</a>
          </li>
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" />
            <a href="mailto:info@shreejicooling.com" className="hover:bg-white/20 transition-all px-1 rounded">info@shreejicooling.com</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/100 text-center py-4 text-sm text-white/100 relative z-10">
      © {new Date().getFullYear()} Shreeji Cooling System Pvt. Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
