import { useState } from "react";
import Layout from "@/components/Layout";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
          {jobs.map((job) => (
            <div key={job.id} className="relative overflow-hidden bg-card border rounded-lg p-6 group hover:bg-[#7CB8EB] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              {/* Noise texture overlay on hover */}
              <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative z-10 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold group-hover:text-white transition-colors duration-300">{job.title}</h2>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="h-4 w-4" /> {job.type}</span>
                  </div>
                  <p className="text-muted-foreground mt-3 text-sm group-hover:text-white/90 transition-colors duration-300">{job.description}</p>
                </div>
                <Button onClick={() => setApplyingTo(job.id)} className="bg-primary text-primary-foreground shrink-0 group-hover:bg-white group-hover:text-[#7CB8EB] transition-colors duration-300 shadow-md">Apply Now</Button>
              </div>
            </div>
          ))}
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
