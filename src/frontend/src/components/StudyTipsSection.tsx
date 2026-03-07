import { Button } from "@/components/ui/button";
import { AlertCircle, BookOpen, Clock, FlaskConical } from "lucide-react";
import { motion } from "motion/react";

const articles = [
  {
    icon: BookOpen,
    title: "How to Prepare for Board Exams Effectively",
    summary:
      "A step-by-step guide to planning your revision, managing time, and tackling exam pressure with confidence.",
    color: "oklch(0.35 0.12 158)",
    bg: "oklch(0.35 0.12 158 / 0.08)",
  },
  {
    icon: AlertCircle,
    title: "5 Mistakes Students Make While Studying Maths",
    summary:
      "Identify and fix the most common errors that hold students back from scoring full marks in Mathematics.",
    color: "oklch(0.62 0.16 65)",
    bg: "oklch(0.62 0.16 65 / 0.08)",
  },
  {
    icon: FlaskConical,
    title: "Smart Revision Techniques for Science",
    summary:
      "Use diagrams, flashcards, and concept maps to retain Science topics faster and perform better in tests.",
    color: "oklch(0.5 0.15 200)",
    bg: "oklch(0.5 0.15 200 / 0.08)",
  },
  {
    icon: Clock,
    title: "Time Management Tips for Students",
    summary:
      "Learn how to balance study sessions, breaks, and revision to make the most of your preparation time.",
    color: "oklch(0.48 0.14 310)",
    bg: "oklch(0.48 0.14 310 / 0.08)",
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

export default function StudyTipsSection() {
  return (
    <section
      id="study-tips"
      data-ocid="study-tips.section"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: "oklch(0.975 0.008 85)",
      }}
    >
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
              background: "oklch(0.62 0.16 65 / 0.12)",
              color: "oklch(0.48 0.14 65)",
            }}
          >
            Learning Resources
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Study Tips & Learning Resources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Expert guidance and strategies to help you study smarter and achieve
            better results.
          </p>
        </motion.div>

        {/* Article Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {articles.map((article, idx) => {
            const Icon = article.icon;
            return (
              <motion.article
                key={article.title}
                data-ocid={`study-tips.item.${idx + 1}`}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl p-7 bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-5"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: article.bg }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: article.color }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-body flex-1">
                    {article.summary}
                  </p>
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  data-ocid={`study-tips.read_button.${idx + 1}`}
                  className="w-fit px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    color: article.color,
                    background: article.bg,
                  }}
                >
                  Read More →
                </Button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
