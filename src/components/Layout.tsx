import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingInquiry from "./FloatingInquiry";
import ScrollToTop from "./ScrollToTop";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({ children, title, description, keywords }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard SEO Update
    const defaultTitle = "Shreeji Cooling System - Leading HVAC Solutions in Surat, India";
    const baseDescription = "Shreeji Cooling System Pvt. Ltd. provides expert HVAC installation, industrial chilling plants, and commercial cooling maintenance services in Surat, Gujarat.";

    document.title = title ? `${title} | Shreeji Cooling` : defaultTitle;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || baseDescription);

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords || "HVAC services, industrial cooling, Blue Star AC, Surat cooling solutions, chilling plant");

  }, [title, description, keywords]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Header is now fixed to overlay content & stays on scroll */}
      <div className="fixed top-0 left-0 right-0 z-50 pt-4">
        <Header />
      </div>
      <main key={pathname} className="flex-1">
        {children}
      </main>
      <Footer />
      <FloatingInquiry />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
