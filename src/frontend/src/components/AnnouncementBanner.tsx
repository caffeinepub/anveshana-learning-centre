import { X } from "lucide-react";
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
      className="relative z-50 flex items-center justify-center gap-3 px-4 py-2.5 text-sm font-medium text-center"
      style={{
        background:
          "linear-gradient(90deg, oklch(0.62 0.18 65) 0%, oklch(0.72 0.18 78) 50%, oklch(0.65 0.19 60) 100%)",
        color: "oklch(0.12 0.02 65)",
      }}
    >
      <span className="font-body font-semibold">
        🎓 Admissions Open for 2026–27. Limited Seats Available.
      </span>
      <button
        type="button"
        data-ocid="announcement.contact_button"
        onClick={handleContactClick}
        className="shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 hover:scale-105 cursor-pointer"
        style={{
          background: "oklch(0.18 0.04 65)",
          color: "oklch(0.96 0.01 85)",
        }}
      >
        Contact Now
      </button>
      <button
        type="button"
        data-ocid="announcement.close_button"
        aria-label="Dismiss announcement"
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition-all duration-200 hover:opacity-70"
        style={{ color: "oklch(0.18 0.04 65)" }}
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
