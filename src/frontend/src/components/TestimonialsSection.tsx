import { motion } from "motion/react";

const testimonials = [
  {
    quote:
      "Our teacher explains Maths concepts very clearly. My marks improved from 62% to 90%.",
    author: "Class 10 Student",
    badge: "Mathematics",
    badgeColor: "oklch(0.35 0.12 158)",
  },
  {
    quote:
      "My daughter gained confidence in Science after joining this academy. Highly recommended!",
    author: "Parent",
    badge: "Science",
    badgeColor: "oklch(0.5 0.15 200)",
  },
  {
    quote:
      "Regular tests and clear explanations helped me perform better in exams.",
    author: "Class 9 Student",
    badge: "Both Subjects",
    badgeColor: "oklch(0.62 0.16 65)",
  },
  {
    quote:
      "Best place for understanding difficult concepts in simple ways. The teaching method is excellent.",
    author: "Class 8 Student",
    badge: "Mathematics",
    badgeColor: "oklch(0.35 0.12 158)",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: "easeOut" as const },
  },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 10% 50%, oklch(0.42 0.12 158 / 0.07) 0%, transparent 60%),
          radial-gradient(ellipse 50% 40% at 90% 60%, oklch(0.75 0.18 78 / 0.07) 0%, transparent 60%),
          oklch(0.975 0.008 85)
        `,
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-10 right-20 text-[200px] font-display font-bold leading-none select-none"
          style={{ color: "oklch(0.35 0.12 158 / 0.04)" }}
        >
          "
        </div>
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Students & Parents Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from the students and families who have experienced the
            Anveshana difference.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((item, idx) => (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: static list with stable order
              key={item.author + idx}
              data-ocid={`testimonials.item.${idx + 1}`}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-7 bg-card border border-border shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col gap-4"
            >
              {/* Large decorative quote */}
              <div
                className="absolute top-5 right-6 font-display font-bold leading-none select-none text-7xl"
                style={{ color: `${item.badgeColor.replace(")", " / 0.12)")}` }}
              >
                "
              </div>

              {/* Quote stars */}
              <div className="flex gap-1">
                {["★", "★", "★", "★", "★"].map((star, i) => (
                  <span
                    // biome-ignore lint/suspicious/noArrayIndexKey: static decorative stars
                    key={i}
                    style={{ color: "oklch(0.72 0.18 65)" }}
                    className="text-sm"
                  >
                    {star}
                  </span>
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-foreground/85 text-base leading-relaxed font-body italic relative z-10 flex-1">
                "{item.quote}"
              </blockquote>

              {/* Author row */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-display font-bold text-sm shrink-0"
                  style={{ background: item.badgeColor }}
                >
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground font-body">
                    — {item.author}
                  </p>
                  <span
                    className="inline-block mt-0.5 px-2 py-0.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: item.badgeColor }}
                  >
                    {item.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
