import { Heart, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      className="border-t border-border"
      style={{ background: "oklch(0.18 0.04 155)" }}
    >
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/logo-transparent.dim_300x300.png"
                alt="Anveshana Learning Centre"
                className="h-10 w-10 object-contain"
              />
              <div>
                <p className="font-display text-lg font-bold text-white leading-none">
                  Anveshana
                </p>
                <p className="text-xs text-white/50 mt-0.5">Learning Centre</p>
              </div>
            </div>
            <p
              className="font-display text-sm italic"
              style={{ color: "oklch(0.85 0.16 78)" }}
            >
              "Explore. Understand. Excel."
            </p>
            <p className="text-white/55 text-sm leading-relaxed">
              Expert coaching in Science & Mathematics for Classes 7th–10th.
              CBSE & State Board.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white/50">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Why Anveshana", href: "#highlights" },
                { label: "Classes & Subjects", href: "#classes" },
                { label: "Enquire Now", href: "#enquiry" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-white/50">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:8217222175"
                className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors group"
              >
                <Phone className="h-4 w-4 shrink-0 group-hover:text-accent" />
                8217222175
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="leading-relaxed">
                  Sri-Saraswati Pre-Primary School,
                  <br />
                  Siddharameshwar Colony, 2nd Cross,
                  <br />
                  Near Rani Chennamma Nagar,
                  <br />
                  Beside Laxmeshwar Garden, Dharwad
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {year} Anveshana Learning Centre. All rights reserved.
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 hover:text-white/60 text-xs flex items-center gap-1 transition-colors"
          >
            Built with{" "}
            <Heart className="h-3 w-3 fill-current text-red-400/60 mx-0.5" />{" "}
            using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
