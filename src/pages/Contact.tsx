import React from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for your inquiry. We'll contact you soon." });
  };

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
        <div className="absolute inset-0 noise-texture opacity-90" />
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
                value: "F156–F157, Laxmi Narayan Industrial Estate, Udhana, Surat 394210",
              },
              {
                icon: <Phone className="h-5 w-5" />,
                label: "Phone",
                value: (
                  <span className="flex flex-col gap-0.5">
                    <a href="tel:+912612547254" className="hover:text-accent transition-colors">0261 2547 254</a>
                    <a href="tel:+919727451000" className="hover:text-accent transition-colors">+91 97274 51000</a>
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
                    <input type="radio" name="category" value="residential" className="w-4 h-4 text-primary" required />
                    <span className="text-sm">Residential</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="category" value="commercial" className="w-4 h-4 text-primary" required />
                    <span className="text-sm">Commercial</span>
                  </label>
                </div>
              </div>

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

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">City</label>
                  <Input placeholder="Your city" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Company</label>
                  <Input placeholder="Company (optional)" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Project Type</label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New Installation</SelectItem>
                    <SelectItem value="replacement">Replacement/Upgrade</SelectItem>
                    <SelectItem value="repair">Repair/Service</SelectItem>
                    <SelectItem value="consultation">Consultation Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Timeline</label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="When needed?" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent (Within 1 week)</SelectItem>
                      <SelectItem value="month">Within 1 month</SelectItem>
                      <SelectItem value="quarter">1-3 months</SelectItem>
                      <SelectItem value="planning">Just planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Budget Range</label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Approx. budget" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                      <SelectItem value="1-5l">₹1-5 Lakhs</SelectItem>
                      <SelectItem value="5-10l">₹5-10 Lakhs</SelectItem>
                      <SelectItem value="10-25l">₹10-25 Lakhs</SelectItem>
                      <SelectItem value="25l-plus">₹25 Lakhs+</SelectItem>
                      <SelectItem value="not-sure">Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Preferred Contact Method</label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="phone" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Phone Call</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="email" className="w-4 h-4 text-primary" />
                    <span className="text-sm">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="contact-method" value="whatsapp" className="w-4 h-4 text-primary" />
                    <span className="text-sm">WhatsApp</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Remark *</label>
                <Textarea placeholder="Tell us about your requirements, site details, or any specific questions..." rows={4} required />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Map — full right column */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-accent font-semibold mb-2">Location</p>
              <h2 className="text-2xl font-bold mb-1">Find Us</h2>
              <p className="text-sm text-muted-foreground">Laxmi Narayan Industrial Estate, F156–F157, Udhana, Surat, Gujarat 394210</p>
            </div>
            <div className="rounded-xl overflow-hidden flex-1 min-h-[420px] border border-border/50 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4!2d72.8!3d21.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
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
