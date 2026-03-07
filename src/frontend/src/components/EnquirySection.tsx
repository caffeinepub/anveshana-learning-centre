import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { GradeLevel } from "../backend.d";
import { useSubmitEnquiry } from "../hooks/useQueries";

const gradeOptions: { value: GradeLevel; label: string }[] = [
  { value: GradeLevel.seventh, label: "7th Standard" },
  { value: GradeLevel.eighth, label: "8th Standard" },
  { value: GradeLevel.ninth, label: "9th Standard" },
  { value: GradeLevel.tenth, label: "10th Standard" },
];

export default function EnquirySection() {
  const [name, setName] = useState("");
  const [gradeLevel, setGradeLevel] = useState<GradeLevel | "">("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submitEnquiry = useSubmitEnquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !gradeLevel || !phone.trim()) return;

    try {
      await submitEnquiry.mutateAsync({
        name: name.trim(),
        gradeLevel: gradeLevel as GradeLevel,
        phone: phone.trim(),
        message: message.trim(),
      });
      setSubmitted(true);
      setName("");
      setGradeLevel("");
      setPhone("");
      setMessage("");
    } catch {
      // error shown via submitEnquiry.isError
    }
  };

  return (
    <section
      id="enquiry"
      className="py-20 lg:py-28"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 90% 50%, oklch(0.42 0.12 158 / 0.08) 0%, transparent 60%),
          oklch(0.975 0.008 85)
        `,
      }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24 space-y-6"
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-primary/70 font-body">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Start Your{" "}
              <span style={{ color: "oklch(0.35 0.12 158)" }}>
                Learning Journey
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Interested in joining Anveshana Learning Centre? Fill in the
              enquiry form and we'll get back to you with batch timings, fee
              details, and any other information you need.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "No registration fee to enquire",
                "Response within 24 hours",
                "Demo class available on request",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2
                    className="h-5 w-5 shrink-0"
                    style={{ color: "oklch(0.35 0.12 158)" }}
                  />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-card rounded-2xl p-7 sm:p-8 border border-border shadow-card">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    data-ocid="enquiry.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-10 text-center gap-4"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "oklch(0.42 0.12 158 / 0.12)" }}
                    >
                      <CheckCircle2
                        className="h-9 w-9"
                        style={{ color: "oklch(0.35 0.12 158)" }}
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        Enquiry Submitted!
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                        Thank you for your interest in Anveshana Learning
                        Centre. We'll contact you soon with all the details.
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                      className="mt-2"
                    >
                      Submit Another Enquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-1">
                        Enquiry Form
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Fill in your details below
                      </p>
                    </div>

                    {/* Name */}
                    <div className="space-y-1.5">
                      <Label htmlFor="enquiry-name" className="font-medium">
                        Student Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="enquiry-name"
                        data-ocid="enquiry.name.input"
                        placeholder="Enter student's full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>

                    {/* Class */}
                    <div className="space-y-1.5">
                      <Label htmlFor="enquiry-class" className="font-medium">
                        Class / Standard{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Select
                        value={gradeLevel}
                        onValueChange={(val) =>
                          setGradeLevel(val as GradeLevel)
                        }
                        required
                      >
                        <SelectTrigger
                          id="enquiry-class"
                          data-ocid="enquiry.class.select"
                          className="h-11"
                        >
                          <SelectValue placeholder="Select class" />
                        </SelectTrigger>
                        <SelectContent>
                          {gradeOptions.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <Label htmlFor="enquiry-phone" className="font-medium">
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="enquiry-phone"
                        data-ocid="enquiry.phone.input"
                        type="tel"
                        placeholder="Enter your mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <Label htmlFor="enquiry-message" className="font-medium">
                        Message{" "}
                        <span className="text-muted-foreground/60 font-normal text-xs">
                          (optional)
                        </span>
                      </Label>
                      <Textarea
                        id="enquiry-message"
                        data-ocid="enquiry.message.textarea"
                        placeholder="Any specific questions or requirements?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={3}
                        className="resize-none"
                      />
                    </div>

                    {/* Error */}
                    {submitEnquiry.isError && (
                      <div
                        data-ocid="enquiry.error_state"
                        className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20"
                      >
                        <AlertCircle className="h-4 w-4 text-destructive shrink-0" />
                        <p className="text-sm text-destructive">
                          Something went wrong. Please try again.
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <Button
                      type="submit"
                      data-ocid="enquiry.submit_button"
                      disabled={
                        submitEnquiry.isPending ||
                        !name.trim() ||
                        !gradeLevel ||
                        !phone.trim()
                      }
                      className="w-full h-12 text-base font-semibold rounded-xl transition-all duration-300"
                      style={{
                        background: submitEnquiry.isPending
                          ? undefined
                          : "linear-gradient(135deg, oklch(0.38 0.13 158) 0%, oklch(0.32 0.11 160) 100%)",
                        color: "oklch(0.98 0.005 85)",
                      }}
                    >
                      {submitEnquiry.isPending ? (
                        <>
                          <Loader2
                            data-ocid="enquiry.loading_state"
                            className="mr-2 h-4 w-4 animate-spin"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Enquiry
                        </>
                      )}
                    </Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
