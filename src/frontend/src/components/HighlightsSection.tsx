import {
  ClipboardList,
  FlaskConical,
  Lightbulb,
  MessageCircleQuestion,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Concept-based Learning",
    description:
      "We focus on building deep conceptual understanding rather than rote memorization, ensuring students truly grasp each topic.",
    color: "oklch(0.72 0.18 65)",
    bg: "oklch(0.85 0.16 78 / 0.15)",
  },
  {
    icon: Users,
    title: "Small Batches",
    description:
      "Limited batch sizes ensure every student receives personalized attention and the teacher can address individual learning gaps.",
    color: "oklch(0.35 0.12 158)",
    bg: "oklch(0.42 0.12 158 / 0.1)",
  },
  {
    icon: ClipboardList,
    title: "Weekly Tests",
    description:
      "Regular assessments help track progress, reinforce learning, and prepare students for board examinations with confidence.",
    color: "oklch(0.5 0.15 210)",
    bg: "oklch(0.6 0.12 210 / 0.1)",
  },
  {
    icon: MessageCircleQuestion,
    title: "Doubt Sessions",
    description:
      "Dedicated doubt-clearing sessions ensure no student is left behind. We encourage questions and celebrate curiosity.",
    color: "oklch(0.55 0.18 30)",
    bg: "oklch(0.65 0.15 30 / 0.1)",
  },
  {
    icon: FlaskConical,
    title: "Experiential Teaching",
    description:
      "Science concepts come alive through experiments and real-world examples, making abstract ideas tangible and memorable.",
    color: "oklch(0.45 0.14 158)",
    bg: "oklch(0.5 0.12 158 / 0.1)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function HighlightsSection() {
  return (
    <section
      id="highlights"
      className="py-20 lg:py-28"
      style={{
        background: `
          linear-gradient(180deg, oklch(0.975 0.008 85) 0%, oklch(0.965 0.012 155) 100%)
        `,
      }}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary/70 font-body">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Teaching Philosophy
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            At Anveshana, we believe every student can excel when given the
            right guidance, environment, and tools.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group relative bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.bg }}
                >
                  <Icon
                    className="h-6 w-6"
                    style={{ color: item.color }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${item.color}, transparent)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
