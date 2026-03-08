import { Phone, X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleContactClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      data-ocid="announcement.banner"
      className="relative z-50 w-full"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.28 0.14 158) 0%, oklch(0.35 0.16 200) 40%, oklch(0.28 0.12 165) 100%)",
      }}
    >
      {/* Decorative shimmer strips */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-10 -left-10 w-60 h-60 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.92 0.18 78 / 0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.22 65 / 0.5) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative container max-w-6xl mx-auto px-4 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          {/* Badge */}
          <span
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase"
            style={{
              background: "oklch(0.72 0.22 65 / 0.3)",
              border: "1.5px solid oklch(0.85 0.18 78 / 0.6)",
              color: "oklch(0.95 0.10 78)",
            }}
          >
            🌟 Now Open
          </span>

          {/* Main text */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p
              className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight tracking-tight"
              style={{ color: "oklch(0.98 0.01 85)" }}
            >
              Admissions Open for{" "}
              <span
                style={{
                  color: "oklch(0.88 0.20 78)",
                  textShadow: "0 0 20px oklch(0.72 0.22 65 / 0.5)",
                }}
              >
                Vacation Classes!
              </span>
            </p>
            <span
              className="hidden sm:block w-px h-8 shrink-0"
              style={{ background: "oklch(0.98 0.01 85 / 0.25)" }}
              aria-hidden="true"
            />
            <p
              className="font-body text-sm sm:text-base font-medium"
              style={{ color: "oklch(0.90 0.05 158)" }}
            >
              Limited Seats &bull; Classes 7th–10th &bull; Science & Maths
            </p>
          </div>

          {/* CTA button */}
          <button
            type="button"
            data-ocid="announcement.contact_button"
            onClick={handleContactClick}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.72 0.22 65) 0%, oklch(0.62 0.20 60) 100%)",
              color: "oklch(0.12 0.02 65)",
              boxShadow: "0 4px 18px oklch(0.72 0.22 65 / 0.45)",
            }}
          >
            <Phone className="h-4 w-4" />
            Enquire Now
          </button>
        </div>
      </div>

      {/* Dismiss */}
      <button
        type="button"
        data-ocid="announcement.close_button"
        aria-label="Dismiss announcement"
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-3 p-1.5 rounded-full transition-all duration-200 hover:opacity-70"
        style={{ color: "oklch(0.90 0.05 158)" }}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
