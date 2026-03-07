import { BookOpen, GraduationCap, School } from "lucide-react";
import { motion } from "motion/react";

const classCards = [
  {
    icon: GraduationCap,
    title: "Classes Offered",
    subtitle: "Standard",
    items: ["7th Standard", "8th Standard", "9th Standard", "10th Standard"],
    accent: "oklch(0.35 0.12 158)",
    bg: "oklch(0.35 0.12 158)",
    description:
      "Comprehensive coaching tailored to each grade's curriculum and difficulty level.",
  },
  {
    icon: BookOpen,
    title: "Subjects",
    subtitle: "Core Focus",
    items: ["Science", "Mathematics"],
    accent: "oklch(0.62 0.16 65)",
    bg: "oklch(0.62 0.16 65)",
    description:
      "In-depth mastery of Science and Mathematics — the two pillars of academic success.",
  },
  {
    icon: School,
    title: "Boards Covered",
    subtitle: "Curriculum",
    items: ["CBSE", "Karnataka State Board"],
    accent: "oklch(0.5 0.15 200)",
    bg: "oklch(0.5 0.15 200)",
    description:
      "Expert guidance aligned with both CBSE and Karnataka State Board syllabi.",
  },
];

export default function ClassesSection() {
  return (
    <section
      id="classes"
      className="py-20 lg:py-28 relative"
      style={{
        background: "oklch(0.35 0.12 158)",
      }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "50px" }}
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 0H1440V20C1380 30 1320 40 1200 45C1080 50 960 50 840 45C720 40 600 30 480 25C360 20 240 20 120 25C60 27.5 30 30 0 35V0Z"
            fill="oklch(0.965 0.012 155)"
          />
        </svg>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-white/60 font-body">
            Academic Programmes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
            What We Teach
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Structured programmes designed to build mastery, one concept at a
            time.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {classCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-7 border border-white/15 hover:bg-white/15 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-5">
                  <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <div className="mb-1">
                  <span className="text-xs font-semibold tracking-wider uppercase text-white/50">
                    {card.subtitle}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-sm font-semibold text-white"
                      style={{
                        background: "oklch(1 0 0 / 0.15)",
                        border: "1px solid oklch(1 0 0 / 0.25)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 rounded-2xl p-6 sm:p-8 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.72 0.18 65 / 0.25), oklch(0.85 0.14 78 / 0.2))",
            border: "1px solid oklch(0.72 0.18 65 / 0.4)",
          }}
        >
          <p className="text-white/90 text-lg font-medium font-body">
            🏫 Conveniently located at{" "}
            <span className="font-semibold text-white">
              Sri-Saraswati Pre-Primary School
            </span>
            , Siddharameshwar Colony, Dharwad
          </p>
          <p className="text-white/70 text-sm mt-2">
            Beside Laxmeshwar Garden, Near Rani Chennamma Nagar
          </p>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "50px" }}
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 60H1440V40C1380 30 1320 20 1200 15C1080 10 960 10 840 15C720 20 600 30 480 35C360 40 240 40 120 35C60 32.5 30 30 0 25V60Z"
            fill="oklch(0.975 0.008 85)"
          />
        </svg>
      </div>
    </section>
  );
}
