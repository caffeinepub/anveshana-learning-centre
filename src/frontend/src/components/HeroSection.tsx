import { Button } from "@/components/ui/button";
import { ArrowDown, Star } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  const handleEnquire = () => {
    const el = document.querySelector("#enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 20%, oklch(0.42 0.12 158 / 0.12) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 80%, oklch(0.75 0.18 78 / 0.1) 0%, transparent 60%),
          oklch(0.975 0.008 85)
        `,
      }}
    >
      {/* Decorative background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.35 0.12 158) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.18 65) 0%, transparent 70%)",
          }}
        />
        {/* Geometric dots grid */}
        <div className="absolute top-1/4 right-10 grid grid-cols-6 gap-3 opacity-20">
          {Array.from({ length: 24 }).map((_, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static decorative grid
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                <Star className="h-3.5 w-3.5 fill-current" />
                Classes 7th – 10th | CBSE & State Board
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight"
            >
              Anveshana{" "}
              <span
                className="relative inline-block"
                style={{ color: "oklch(0.35 0.12 158)" }}
              >
                Learning
                <span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.72 0.18 65), oklch(0.85 0.16 78))",
                  }}
                />
              </span>{" "}
              Centre
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-xl sm:text-2xl italic font-light"
              style={{ color: "oklch(0.72 0.18 65)" }}
            >
              "Explore. Understand. Excel."
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-md"
            >
              Expert coaching in Science & Mathematics for students of 7th to
              10th standard. We nurture curiosity, build strong foundations, and
              guide students to excel in both CBSE and State Board exams.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                onClick={handleEnquire}
                className="text-base px-8 py-6 rounded-xl font-semibold shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.38 0.13 158) 0%, oklch(0.32 0.11 160) 100%)",
                  color: "oklch(0.98 0.005 85)",
                }}
              >
                Enquire Now
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 rounded-xl border-border hover:bg-secondary transition-all duration-300"
                onClick={() => {
                  document
                    .querySelector("#highlights")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-6 pt-4 border-t border-border"
            >
              {[
                { value: "4", label: "Grade Levels" },
                { value: "2", label: "Boards Covered" },
                { value: "2", label: "Core Subjects" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Logo + Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="hidden lg:flex items-center justify-center relative"
          >
            {/* Outer glow ring */}
            <div
              className="absolute w-80 h-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.42 0.12 158 / 0.15) 0%, transparent 70%)",
              }}
            />
            {/* Inner card */}
            <div className="relative z-10 bg-card rounded-3xl p-10 shadow-card-hover border border-border/50 flex flex-col items-center gap-4 max-w-xs w-full">
              <img
                src="/assets/generated/logo-transparent.dim_300x300.png"
                alt="Anveshana Learning Centre"
                className="w-40 h-40 object-contain"
              />
              <div className="text-center space-y-1">
                <h2 className="font-display text-xl font-bold text-foreground">
                  Anveshana
                </h2>
                <p className="text-sm text-muted-foreground">
                  Learning Centre, Dharwad
                </p>
              </div>
              {/* Info pills */}
              <div className="flex flex-wrap justify-center gap-2">
                {["Science", "Mathematics", "CBSE", "State Board"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <div
                className="w-full rounded-xl px-4 py-3 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.85 0.16 78 / 0.25), oklch(0.92 0.08 78 / 0.2))",
                  border: "1px solid oklch(0.72 0.18 65 / 0.3)",
                }}
              >
                <p
                  className="font-display text-sm font-semibold italic"
                  style={{ color: "oklch(0.5 0.12 65)" }}
                >
                  Explore. Understand. Excel.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 72C1200 74.7 1320 69.3 1380 66.7L1440 64V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="oklch(0.35 0.12 158 / 0.08)"
          />
        </svg>
      </div>
    </section>
  );
}
