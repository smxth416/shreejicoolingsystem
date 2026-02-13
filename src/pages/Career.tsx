import { useState } from "react";
import Layout from "@/components/Layout";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Briefcase, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Career = () => {
  const [applyingTo, setApplyingTo] = useState<string | null>(null);
  const { toast } = useToast();

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "Thank you for applying. We'll review and contact you." });
    setApplyingTo(null);
  };

  return (
    <Layout>
      <section className="relative overflow-hidden bg-[#7CB8EB] border-b border-white/10 py-20 pt-32">
        {/* Noise texture overlay */}
        <div className="absolute inset-0 noise-texture opacity-90"></div>
        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Careers</h1>
          <p className="text-lg text-white/90">Join our team and build the future of cooling technology.</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24 max-w-4xl mx-auto space-y-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {jobs.map((job) => (
              <AccordionItem key={job.id} value={job.id} className="relative overflow-hidden border border-[#7CB8EB] rounded-lg bg-white px-6 data-[state=open]:shadow-md transition-all duration-300 data-[state=closed]:hover:bg-[#7CB8EB]/70 data-[state=closed]:hover:border-[#5a9bc9] group">
                {/* Noise texture overlay - visible on hover only when closed */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:group-data-[state=closed]:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
                <AccordionTrigger className="hover:no-underline py-4 text-left relative z-10">
                  <span className="text-lg font-semibold text-foreground">{job.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 relative z-10">
                  <div className="space-y-4 pt-2">
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4 text-[#7CB8EB]" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-4 w-4 text-[#7CB8EB]" /> {job.type}</span>
                    </div>

                    <p className="text-muted-foreground">{job.description}</p>

                    {job.details && (
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                        {job.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-2">
                      <Button
                        onClick={() => setApplyingTo(job.id)}
                        className="bg-[#7CB8EB] hover:bg-[#5a9bc9] text-white"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Apply modal */}
      {applyingTo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4">
          <div className="bg-card rounded-lg shadow-2xl w-full max-w-md animate-scale-in">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-lg">Apply for {jobs.find((j) => j.id === applyingTo)?.title}</h3>
              <button onClick={() => setApplyingTo(null)} aria-label="Close"><X className="h-5 w-5" /></button>
            </div>
            <form onSubmit={handleApply} className="p-4 space-y-3">
              <Input placeholder="Full Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" />
              <div className="text-sm text-muted-foreground border rounded-md p-3 text-center">Resume upload placeholder</div>
              <Textarea placeholder="Cover Letter (optional)" rows={3} />
              <Button type="submit" className="w-full bg-primary text-primary-foreground">Submit Application</Button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Career;
