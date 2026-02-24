import { useState, useRef } from "react";
import Layout from "@/components/Layout";
import { jobs } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Briefcase, X, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Career = () => {
  const [applyingTo, setApplyingTo] = useState<string | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Application Submitted!", description: "Thank you for applying. We'll review and contact you." });
    setApplyingTo(null);
    setResumeFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setResumeFile(file);
  };

  const handleRemoveFile = () => {
    setResumeFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <Layout>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#2171b5] border-b border-white/10 py-20 pt-32">
        <div className="absolute inset-0 noise-texture opacity-60" />
        <div className="w-full px-6 md:px-12 lg:px-24 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Careers</h1>
          <p className="text-lg text-white/90">Join our team and build the future of cooling technology.</p>
        </div>
      </section>

      {/* ── Job Cards Grid ─────────────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="w-full px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <p className="text-[10px] uppercase tracking-widest text-[#2171b5] font-semibold mb-2">Open Positions</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">We're Hiring</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our current openings and take the next step in your career with Shreeji Cooling System.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group relative bg-card rounded-2xl border border-border/50 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col hover:bg-[#2171b5] hover:border-[#2171b5]"
              >
                {/* Noise texture overlay on hover */}
                <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 p-6 flex flex-col flex-1">
                  {/* Job number badge */}
                  <div className="w-10 h-10 rounded-full bg-[#2171b5]/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors duration-300">
                    <span className="text-base font-bold text-[#2171b5] group-hover:text-white transition-colors duration-300">
                      {job.id}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg text-foreground group-hover:text-white mb-3 leading-snug transition-colors duration-300">
                    {job.title}
                  </h3>

                  {/* Meta */}
                  <div className="flex flex-col gap-1.5 mb-4">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                      <MapPin className="h-4 w-4 text-[#2171b5] group-hover:text-white/80 transition-colors duration-300" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                      <Briefcase className="h-4 w-4 text-[#2171b5] group-hover:text-white/80 transition-colors duration-300" />
                      {job.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[15px] text-muted-foreground group-hover:text-white/90 transition-colors duration-300 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Details list */}
                  {job.details && (
                    <ul className="space-y-1.5 mb-5 flex-1">
                      {job.details.slice(0, 3).map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                          <CheckCircle2 className="h-4 w-4 text-[#2171b5] group-hover:text-white/70 shrink-0 mt-0.5 transition-colors duration-300" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Apply button */}
                  <Button
                    onClick={() => setApplyingTo(job.id)}
                    size="sm"
                    className="w-full mt-auto bg-[#2171b5] hover:bg-white text-white hover:text-[#2171b5] group-hover:bg-white group-hover:text-[#2171b5] rounded-full transition-all duration-300 font-semibold"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply modal */}
      {applyingTo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4">
          <div className="bg-card rounded-2xl shadow-2xl w-full max-w-md">
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="font-bold text-lg">Apply for {jobs.find((j) => j.id === applyingTo)?.title}</h3>
              <button
                onClick={() => setApplyingTo(null)}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <form onSubmit={handleApply} className="p-5 space-y-3">
              <Input placeholder="Full Name" required />
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" />
              {/* Resume Upload */}
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  id="resume-upload"
                  onChange={handleFileChange}
                  required
                />
                {!resumeFile ? (
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-border rounded-lg p-5 cursor-pointer hover:border-[#2171b5] hover:bg-[#2171b5]/5 transition-all duration-200 text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#2171b5]/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2171b5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0L8 8m4-4l4 4" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-foreground">Click to upload Resume</span>
                    <span className="text-xs text-muted-foreground">PDF, DOC or DOCX (max 5 MB)</span>
                  </label>
                ) : (
                  <div className="flex items-center justify-between gap-3 border border-[#2171b5]/40 bg-[#2171b5]/5 rounded-lg px-4 py-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#2171b5] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-sm font-medium text-foreground truncate">{resumeFile.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleRemoveFile}
                      className="shrink-0 w-6 h-6 rounded-full bg-muted hover:bg-red-100 hover:text-red-500 flex items-center justify-center transition-colors"
                      aria-label="Remove file"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
              <Textarea placeholder="Cover Letter (optional)" rows={3} />
              <Button type="submit" className="w-full bg-[#2171b5] hover:bg-[#2171b5]/90 text-white font-semibold">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Career;
