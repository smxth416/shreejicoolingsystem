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
      <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-90"></div>
        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Contact Us</h1>
          <p className="text-lg text-white/90">Have a project in mind? Get in touch with our team.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24 grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us an Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
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

              {/* Category Selection */}
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

              {/* Product/Service Interest */}
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

              {/* Contact Details */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Email *</label>
                <Input type="email" placeholder="your.email@example.com" required />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Phone *</label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
              </div>

              {/* Location & Company */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">City</label>
                  <Input placeholder="Your city" />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Company Name</label>
                  <Input placeholder="Company (optional)" />
                </div>
              </div>

              {/* Project Type */}
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

              {/* Timeline & Budget */}
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

              {/* Preferred Contact Method */}
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

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Remark *</label>
                <Textarea placeholder="Tell us about your requirements, site details, or any specific questions..." rows={4} required />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground text-sm">Laxmi Narayan Industrial Estate, F156, F157,<br />Surat - Navsari Rd, Baroda Rayon Corporation,<br />COMPOUND, Udhana, Surat, Gujarat 394210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground text-sm">
                    <a href="tel:+912612547254" className="hover:text-accent transition-colors">0261 2547 254</a><br />
                    <a href="tel:+919727451000" className="hover:text-accent transition-colors">+91 97274 51000</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground text-sm">info@shreejicooling.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon – Sat: 9:30 AM – 6:30 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-lg overflow-hidden h-64 border border-border shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.4!2d72.8!3d21.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shreeji Cooling System Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
