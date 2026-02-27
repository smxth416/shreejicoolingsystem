import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    useEffect(() => {
        const onScroll = () => {
            // Show button only after user scrolls past the hero section (~80% of viewport height)
            setVisible(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-24 right-4 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 overflow-hidden
        ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
      `}
            style={{ backgroundColor: "#2171b5" }}
        >
            {/* Noise texture */}
            <div className="absolute inset-0 noise-texture opacity-60 pointer-events-none" />
            <ArrowUp className="h-5 w-5 text-white relative z-10" strokeWidth={2.5} />
        </button>
    );
};

export default ScrollToTop;
