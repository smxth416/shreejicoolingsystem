import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const FloatingInquiry = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("residential");
  const { toast } = useToast();

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("openFreeInquiry", handleOpen);
    return () => window.removeEventListener("openFreeInquiry", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({ title: "Inquiry Sent!", description: "We'll get back to you shortly." });
    setOpen(false);
  };

  return (
    <>
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

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-1.5 block">Remark *</label>
                <Textarea placeholder="Tell us about your requirements, site details, or any specific questions..." rows={3} required />
              </div>

              <div className="pt-2">
                <Button type="submit" className="w-48 bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-2xl text-base font-medium">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingInquiry;
