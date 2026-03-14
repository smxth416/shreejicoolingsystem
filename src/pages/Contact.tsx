import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [category, setCategory] = useState("residential");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for your inquiry. We'll contact you soon." });
  };

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#2171b5] border-b border-white/10 py-20 pt-32">
        <div className="absolute inset-0 noise-texture opacity-60" />
        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-lg text-white/90">Have a project in mind? Get in touch with our team.</p>
        </div>
      </section>

      {/* ── Contact Info Strip (full-width 4-column) ───────── */}
      <section className="border-b border-border/50 bg-muted/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/40">
            {[
              {
                icon: <MapPin className="h-5 w-5" />,
                label: "Office",
                value: "F156–F157-F157M, Laxmi Narayan Industrial Estate, Udhana, Surat 394210",
              },
              {
                icon: <Phone className="h-5 w-5" />,
                label: "Phone",
                value: (
                  <span className="flex flex-col gap-0.5">
                    <a href="tel:+912612547254" className="hover:text-accent transition-colors">+91 9909707661</a>
                    <a href="tel:+919727451000" className="hover:text-accent transition-colors">+91 9723372877</a>
                  </span>
                ),
              },
              {
                icon: <Mail className="h-5 w-5" />,
                label: "Email",
                value: (
                  <a href="mailto:info@shreejicooling.com" className="hover:text-accent transition-colors break-all">
                    info@shreejicooling.com
                  </a>
                ),
              },
              {
                icon: <Clock className="h-5 w-5" />,
                label: "Hours",
                value: (
                  <span className="flex flex-col gap-0.5">
                    <span>Mon – Sat: 9:30 AM – 7:00 PM</span>
                    <span className="text-muted-foreground/60">Sunday: Closed</span>
                  </span>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-start gap-3 px-8 py-7 group">
                <div className="w-9 h-9 rounded-md border border-border/60 bg-background flex items-center justify-center text-accent shadow-sm group-hover:border-accent/40 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">{item.label}</p>
                  <div className="text-sm text-foreground leading-relaxed">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Map ─────────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">Inquiry</p>
            <h2 className="text-2xl font-bold mb-7">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">First Name *</label>
                  <Input placeholder="First name" required />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Last Name *</label>
                  <Input placeholder="Last name" required />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Category *</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="category" value="residential" checked={category === "residential"} onChange={(e) => setCategory(e.target.value)} className="w-4 h-4 text-primary" required />
                    <span className="text-sm">Residential</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="category" value="commercial" checked={category === "commercial"} onChange={(e) => setCategory(e.target.value)} className="w-4 h-4 text-primary" required />
                    <span className="text-sm">Commercial</span>
                  </label>
                </div>
              </div>

              {category === "commercial" && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Business / Organization</label>
                  <Input placeholder="Business / Organization" />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Interested In *</label>
                <Select required>
                  <SelectTrigger><SelectValue placeholder="Select product/service" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vrf">VRF Systems</SelectItem>
                    <SelectItem value="ducted">Ducted Systems</SelectItem>
                    <SelectItem value="chillers">Chillers</SelectItem>
                    <SelectItem value="room-ac">Room Air Conditioners</SelectItem>
                    <SelectItem value="commercial-ref">Commercial Refrigeration</SelectItem>
                    <SelectItem value="cold-storage">Cold Storage</SelectItem>
                    <SelectItem value="amc">Annual Maintenance (AMC)</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email *</label>
                <Input type="email" placeholder="your.email@example.com" required />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Phone *</label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Remark *</label>
                <Textarea placeholder="Tell us about your requirements, site details, or any specific questions..." rows={4} required />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-48 bg-[#007bc4] hover:bg-[#007bc4]/90 text-white py-6 rounded-2xl text-base font-medium">
                  Submit
                </Button>
              </div>
            </form>
          </div>

          {/* Map — full right column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">Location</p>
              <h2 className="text-2xl font-bold mb-1">Find Us</h2>
              <p className="text-sm text-muted-foreground">Laxmi Narayan Industrial Estate, F156–F157-F157M, Udhana, Surat, Gujarat 394210</p>
            </div>
            <div className="rounded-xl overflow-hidden border border-border/50 shadow-sm aspect-square w-full">
              <iframe
                src="https://maps.google.com/maps?q=Laxmi+Narayan+Industrial+Estate+Udhana+Surat+394210+Gujarat+India&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreeji Cooling System Location"
              />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default Contact;
