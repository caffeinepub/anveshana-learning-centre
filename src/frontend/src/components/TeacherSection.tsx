import { Badge } from "@/components/ui/badge";
import { Award, BookOpenCheck, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: GraduationCap,
    label: "CBSE Expert",
    color: "oklch(0.35 0.12 158)",
  },
  {
    icon: BookOpenCheck,
    label: "Paper Valuation",
    color: "oklch(0.5 0.15 200)",
  },
  {
    icon: Award,
    label: "Curriculum Development",
    color: "oklch(0.62 0.16 65)",
  },
];

export default function TeacherSection() {
  return (
    <section
      id="teacher"
      data-ocid="teacher.section"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "oklch(0.965 0.012 155)",
      }}
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, oklch(0.35 0.12 158 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.18 65 / 0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase font-body mb-3 px-3 py-1 rounded-full"
            style={{
              background: "oklch(0.35 0.12 158 / 0.1)",
              color: "oklch(0.32 0.11 158)",
            }}
          >
            Faculty
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Meet Your Teacher
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Learn from an experienced educator dedicated to making Science and
            Maths approachable for every student.
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          data-ocid="teacher.card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="max-w-3xl mx-auto rounded-3xl overflow-hidden bg-card border border-border shadow-card-hover"
        >
          <div className="p-8 lg:p-12 flex flex-col gap-6">
            {/* Role & Experience */}
            <div className="flex items-start gap-5">
              {/* Icon avatar */}
              <div
                className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(160deg, oklch(0.38 0.13 158) 0%, oklch(0.28 0.10 165) 100%)",
                }}
              >
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                  Sir
                </h3>
                <p className="text-muted-foreground font-body text-base">
                  Science & Mathematics Educator
                </p>
                <p className="text-muted-foreground font-body text-sm mt-0.5">
                  8 years of experience teaching CBSE students
                </p>
              </div>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-2">
              {highlights.map((h) => {
                const Icon = h.icon;
                return (
                  <Badge
                    key={h.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold rounded-full text-white border-0"
                    style={{ background: h.color }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {h.label}
                  </Badge>
                );
              })}
            </div>

            {/* Award callout */}
            <div
              className="rounded-xl px-4 py-3 flex items-start gap-3"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.85 0.16 78 / 0.2), oklch(0.92 0.08 78 / 0.15))",
                border: "1px solid oklch(0.72 0.18 65 / 0.3)",
              }}
            >
              <Award
                className="h-5 w-5 mt-0.5 shrink-0"
                style={{ color: "oklch(0.56 0.16 65)" }}
              />
              <p
                className="text-sm font-semibold font-body"
                style={{ color: "oklch(0.38 0.10 65)" }}
              >
                Awarded the Jnanagaurava Award for outstanding contribution to
                education.
              </p>
            </div>

            {/* Bio paragraph */}
            <p className="text-muted-foreground text-sm leading-relaxed font-body">
              Dedicated to simplifying complex concepts and building strong
              academic foundations. Known for making Science and Maths
              accessible, engaging, and exam-ready for every student.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 pt-2 border-t border-border">
              {[
                { value: "8+", label: "Years Teaching" },
                { value: "CBSE", label: "Specialist" },
                { value: "7–10", label: "Grade Range" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
