import { Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28"
      style={{
        background: `
          linear-gradient(180deg, oklch(0.975 0.008 85) 0%, oklch(0.96 0.015 155) 100%)
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
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Contact & Location
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We're conveniently located in Dharwad. Come visit us or reach out
            via phone.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="space-y-5">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-card flex items-start gap-5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.42 0.12 158 / 0.1)" }}
              >
                <Phone
                  className="h-6 w-6"
                  style={{ color: "oklch(0.35 0.12 158)" }}
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href="tel:8217222175"
                  className="font-display text-2xl font-bold text-foreground hover:text-primary transition-colors"
                >
                  8217222175
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Call or WhatsApp us for enquiries
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-card flex items-start gap-5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.62 0.16 65 / 0.15)" }}
              >
                <MapPin
                  className="h-6 w-6"
                  style={{ color: "oklch(0.52 0.16 65)" }}
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                  Address
                </p>
                <p className="font-semibold text-foreground leading-snug">
                  Sri-Saraswati Pre-Primary School
                </p>
                <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                  Siddharameshwar Colony, 2nd Cross,
                  <br />
                  Near Rani Chennamma Nagar,
                  <br />
                  Beside Laxmeshwar Garden,
                  <br />
                  <span className="font-medium text-foreground">Dharwad</span>
                </p>
              </div>
            </motion.div>

            {/* Timings */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-card flex items-start gap-5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "oklch(0.5 0.15 200 / 0.12)" }}
              >
                <Clock
                  className="h-6 w-6"
                  style={{ color: "oklch(0.45 0.15 200)" }}
                  strokeWidth={1.8}
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground mb-1">
                  Class Timings
                </p>
                <p className="font-semibold text-foreground">
                  Weekdays & Weekends
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Contact us for current batch timings and availability
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-border shadow-card min-h-64 flex flex-col"
          >
            {/* Embedded Google Map */}
            <iframe
              title="Anveshana Learning Centre Location"
              src="https://www.google.com/maps?q=15.4519722,74.9863056&hl=en&z=16&output=embed"
              className="flex-1 w-full border-0"
              style={{ minHeight: "280px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-ocid="contact.canvas_target"
            />

            {/* CTA in map footer */}
            <a
              href="https://maps.google.com/?q=15.4519722,74.9863056"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.map_marker"
              className="flex items-center justify-center gap-2 py-3 px-5 bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
