import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingInquiry from "./FloatingInquiry";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col relative">
    {/* Header is now fixed to overlay content & stays on scroll */}
    <div className="fixed top-0 left-0 right-0 z-50 pt-4">
      <Header />
    </div>
    <main className="flex-1">
      {children}
    </main>
    <Footer />
    <FloatingInquiry />
  </div>
);

export default Layout;
