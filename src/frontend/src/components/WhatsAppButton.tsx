import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/918217222175?text=Hello%20Sir%20I%20want%20details%20about%20tuition%20classes";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="hidden md:block"
          >
            <div className="bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
              Need quick info? Chat instantly!
              <div className="absolute bottom-[-5px] right-5 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-gray-900" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button with pulse ring */}
      <div className="relative flex items-center justify-center">
        {/* Animated pulse rings */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-wa-ping" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-wa-ping-delay" />

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="whatsapp.button"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bf5b] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] transition-shadow duration-300 px-4 py-3 md:px-5 md:py-3.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 flex-shrink-0 fill-white"
            aria-hidden="true"
          >
            <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.37.627 4.596 1.72 6.527L2.667 29.333l6.98-1.693A13.27 13.27 0 0 0 16.003 29.333c7.363 0 13.33-5.97 13.33-13.333S23.366 2.667 16.003 2.667zm0 24.267a11.05 11.05 0 0 1-5.633-1.547l-.403-.24-4.14 1.003 1.047-3.99-.263-.41A11.02 11.02 0 0 1 4.933 16c0-6.11 4.96-11.067 11.07-11.067S27.07 9.89 27.07 16s-4.957 11.067-11.067 11.067zm6.07-8.283c-.333-.167-1.967-.97-2.27-1.08-.303-.11-.524-.167-.743.167-.22.333-.853 1.08-1.047 1.3-.193.22-.387.25-.72.083-.333-.167-1.407-.517-2.68-1.65-.99-.887-1.66-1.98-1.853-2.313-.193-.333-.02-.513.147-.68.15-.15.333-.387.5-.58.167-.193.22-.333.333-.553.113-.22.057-.413-.027-.58-.083-.167-.743-1.793-1.017-2.453-.267-.64-.54-.553-.743-.563h-.633c-.22 0-.577.083-.88.413-.303.333-1.153 1.127-1.153 2.747s1.18 3.187 1.343 3.407c.167.22 2.32 3.54 5.62 4.967.787.34 1.4.543 1.877.693.787.25 1.504.215 2.07.13.63-.094 1.967-.804 2.243-1.58.277-.777.277-1.443.193-1.58-.083-.14-.3-.22-.633-.387z" />
          </svg>

          {/* Text — hidden on mobile */}
          <span className="hidden md:inline text-sm font-semibold tracking-wide">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>
    </div>
  );
}
