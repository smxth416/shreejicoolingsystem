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
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" />
              <Input placeholder="Company Name" />
              <Select>
                <SelectTrigger><SelectValue placeholder="Service Interest" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ac">AC Installation</SelectItem>
                  <SelectItem value="chiller">Chiller Systems</SelectItem>
                  <SelectItem value="ducting">Ducting & HVAC</SelectItem>
                  <SelectItem value="project">Project Execution</SelectItem>
                  <SelectItem value="amc">Maintenance (AMC)</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Tell us about your project..." rows={4} required />
              <Button type="submit" className="w-full bg-primary text-primary-foreground">Send Message</Button>
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
