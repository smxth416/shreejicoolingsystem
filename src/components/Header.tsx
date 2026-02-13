import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
  { to: "/career", label: "Career" },
  { to: "/csr", label: "CSR" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const isHomePage = location.pathname === "/"; // Logic removed to apply home styling to all pages

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="container mx-auto">
        <div
          className={`backdrop-blur-lg border rounded-full shadow-lg px-6 py-3 transition-all duration-300 relative overflow-hidden ${scrolled
            ? "bg-[#7CB8EB] border-[#7CB8EB]/50"
            : "bg-transparent border-white/20"
            }`}
        >
          {/* Noise texture overlay - only visible when scrolled */}
          {scrolled && <div className="absolute inset-0 noise-texture rounded-full"></div>}

          <div className="flex items-center justify-between relative z-10">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm">
                <img
                  src="/shreeji-logo.png"
                  alt="Shreeji Cooling System"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${location.pathname === l.to
                    ? scrolled
                      ? "text-white bg-primary shadow-md"
                      : "text-white bg-white/20 shadow-md"
                    : scrolled
                      ? "text-white/95 hover:bg-white/20 hover:text-white"
                      : "text-white hover:bg-white/10"
                    }`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link to="/contact">
                <Button
                  className="rounded-full px-6 shadow-md transition-all font-semibold bg-white text-[#7CB8EB] hover:bg-white/90"
                >
                  Get a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? "hover:bg-muted" : "hover:bg-white/10"
                }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? (
                <X className={`h-6 w-6 ${scrolled ? "" : "text-white"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${scrolled ? "" : "text-white"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 bg-card/95 backdrop-blur-lg border border-border/50 rounded-3xl shadow-lg px-6 py-4 animate-fade-in">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`block py-3 px-4 text-sm font-medium rounded-full transition-colors mb-1 ${location.pathname === l.to ? "text-primary-foreground bg-primary" : "text-muted-foreground hover:bg-muted"
                  }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}>
              <Button className="w-full mt-3 bg-primary text-primary-foreground rounded-full">Get a Quote</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
