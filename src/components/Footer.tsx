import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="relative overflow-hidden text-white" style={{ backgroundColor: '#2171b5' }}>
    {/* Decorative background elements */}
    <div className="absolute inset-0 noise-texture opacity-60"></div>
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]"></div>

    <div className="w-full px-6 md:px-12 lg:px-24 py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
        {/* Company Info */}
        <div className="md:col-span-4 flex flex-col items-start">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Shreeji Cooling System Pvt. Ltd. <br />
          </h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-sm">
            Leading HVAC solutions provider for commercial and industrial projects across India. Authorized Blue Star dealers since 2010.
          </p>

          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/80">Connect With Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Instagram, color: "hover:bg-[#E1306C]", href: "#" },
                { icon: Linkedin, color: "hover:bg-[#0077B5]", href: "#" },
                { icon: Facebook, color: "hover:bg-[#1877F2]", href: "#" },
                { icon: Twitter, color: "hover:bg-black", href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 ${social.color} hover:border-transparent hover:-translate-y-1`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
              <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-300 hover:bg-[#25D366] hover:border-transparent hover:-translate-y-1">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-6">Explore</h3>
          <ul className="space-y-4">
            {["about", "products", "services", "blog", "contact", "career", "csr"].map((p) => (
              <li key={p}>
                <Link
                  to={`/${p}`}
                  className="text-white/60 hover:text-white transition-all duration-300 flex items-center group"
                >
                  <span className="w-0 group-hover:w-4 h-[1px] bg-white/50 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  <span className="capitalize">{p}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-6">Specialties</h3>
          <ul className="space-y-4">
            {[
              "AC Installation",
              "Chiller Systems",
              "Ducting & HVAC",
              "Project Execution",
              "Maintenance (AMC)"
            ].map((service) => (
              <li key={service}>
                <span className="text-white/60 hover:text-white transition-all duration-300 flex items-center group cursor-pointer">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-white/50 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-6">Contact Details</h3>
          <ul className="space-y-6 text-white/70">
            <li className="flex gap-4">
              <div className="mt-1 w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <MapPin className="h-4 w-4 text-white/80" />
              </div>
              <p className="text-sm leading-relaxed">
                F-156/157/157M, Laxmi Narayan Industrial Estate, <br />
                Surat - Navsari Rd, BRC Compound, <br />
                Udhana, Surat, Gujarat 394210
              </p>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Phone className="h-4 w-4 text-white/80" />
              </div>
              <div className="flex flex-col gap-1">
                <a href="tel:+919909707661" className="text-sm hover:text-white transition-colors">+91 99097 07661</a>
                <a href="tel:+919723372877" className="text-sm hover:text-white transition-colors">+91 97233 72877</a>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                <Mail className="h-4 w-4 text-white/80" />
              </div>
              <a href="mailto:info@shreejicooling.com" className="text-sm hover:text-white transition-colors">
                info@shreejicooling.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/5 relative z-10">
      <div className="w-full px-6 md:px-12 lg:px-24 py-8 flex justify-center items-center">
        <p className="text-xs text-white/40 font-medium tracking-wider text-center">
          © {new Date().getFullYear()} SHREEJI COOLING SYSTEM PVT. LTD. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
