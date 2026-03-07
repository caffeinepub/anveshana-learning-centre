import { Button } from "@/components/ui/button";
import {
  Download,
  FileText,
  HelpCircle,
  NotebookText,
  PenLine,
} from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";

const resources = [
  {
    icon: FileText,
    title: "Formula Sheets",
    description:
      "Key formulas for Science & Maths, Classes 8–10. Handy reference for quick revision.",
    color: "oklch(0.35 0.12 158)",
    bg: "oklch(0.35 0.12 158 / 0.08)",
    tag: "Classes 8–10",
  },
  {
    icon: HelpCircle,
    title: "Sample Question Papers",
    description:
      "Previous year and model question papers for CBSE & State Board examinations.",
    color: "oklch(0.62 0.16 65)",
    bg: "oklch(0.62 0.16 65 / 0.08)",
    tag: "CBSE & State Board",
  },
  {
    icon: PenLine,
    title: "Practice Worksheets",
    description:
      "Topic-wise practice sheets to strengthen your understanding with solved examples.",
    color: "oklch(0.5 0.15 200)",
    bg: "oklch(0.5 0.15 200 / 0.08)",
    tag: "All Classes",
  },
  {
    icon: NotebookText,
    title: "Important Notes – Class 8, 9 & 10",
    description: "Concise chapter-wise notes for quick revision before exams.",
    color: "oklch(0.48 0.14 310)",
    bg: "oklch(0.48 0.14 310 / 0.08)",
    tag: "Chapter-wise",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ResourcesSection() {
  const handleDownload = () => {
    toast.info(
      "Coming Soon! Study materials will be available for download shortly.",
      {
        duration: 4000,
      },
    );
  };

  return (
    <section
      id="resources"
      data-ocid="resources.section"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "oklch(0.965 0.012 155)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, oklch(0.35 0.12 158 / 0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15"
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
            Free Resources
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Free Study Materials
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Download free resources to support your learning journey — formula
            sheets, practice papers, worksheets, and more.
          </p>
        </motion.div>

        {/* Resource Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={resource.title}
                data-ocid={`resources.item.${idx + 1}`}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl p-7 bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-5"
              >
                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: resource.bg }}
                  >
                    <Icon
                      className="h-6 w-6"
                      style={{ color: resource.color }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap mt-1"
                    style={{
                      background: resource.bg,
                      color: resource.color,
                    }}
                  >
                    {resource.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body">
                    {resource.description}
                  </p>
                </div>

                {/* Download button */}
                <Button
                  size="sm"
                  data-ocid={`resources.download_button.${idx + 1}`}
                  onClick={handleDownload}
                  className="w-full flex items-center gap-2 justify-center font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] text-white border-0"
                  style={{ background: resource.color }}
                >
                  <Download className="h-4 w-4" />
                  Download Free
                </Button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8 font-body"
        >
          📌 More materials being added regularly. Check back soon or contact us
          for specific resources.
        </motion.p>
      </div>
    </section>
  );
}
