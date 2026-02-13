import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
          <div className="bg-card rounded-lg shadow-2xl w-full max-w-md animate-scale-in">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-lg">Free Inquiry</h3>
              <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <Input placeholder="Your Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" />
              <Input placeholder="Company Name" />
              <Textarea placeholder="Your Message" rows={3} required />
              <Button type="submit" className="w-full bg-primary text-primary-foreground">Send Inquiry</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingInquiry;
