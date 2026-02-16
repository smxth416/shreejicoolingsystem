import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const FloatingInquiry = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Inquiry Sent!", description: "We'll get back to you shortly." });
    setOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-accent text-accent-foreground px-3 py-4 rounded-l-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center gap-1 text-xs font-semibold"
        style={{ writingMode: "vertical-lr" }}
      >
        <MessageSquare className="h-5 w-5 rotate-90 mb-1" />
        Free Inquiry
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4">
          <div className="bg-card rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-card flex items-center justify-between p-4 border-b z-10">
              <h3 className="font-bold text-lg">Free Inquiry</h3>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
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
                <Textarea placeholder="Tell us about your requirements, site details, or any specific questions..." rows={3} required />
              </div>

              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingInquiry;
