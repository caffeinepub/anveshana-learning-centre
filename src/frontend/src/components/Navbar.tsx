import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Menu, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface NavbarProps {
  showAdminButton: boolean;
  onAdminToggle: () => void;
  showAdmin: boolean;
}

const navLinks = [
  { label: "Home", href: "#home", ocid: "nav.home.link" },
  { label: "About", href: "#highlights", ocid: "nav.about.link" },
  { label: "Classes", href: "#classes", ocid: "nav.classes.link" },
  {
    label: "Testimonials",
    href: "#testimonials",
    ocid: "nav.testimonials.link",
  },
  { label: "Teacher", href: "#teacher", ocid: "nav.teacher.link" },
  { label: "Study Tips", href: "#study-tips", ocid: "nav.study-tips.link" },
  { label: "Resources", href: "#resources", ocid: "nav.resources.link" },
  { label: "Contact", href: "#contact", ocid: "nav.contact.link" },
];

export default function Navbar({
  showAdminButton,
  onAdminToggle,
  showAdmin,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { login, clear, loginStatus, identity } = useInternetIdentity();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isLoggedIn = !!identity;
  const isLoggingIn = loginStatus === "logging-in";

  return (
    <header className="bg-card/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Name */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              src="/assets/71f72604-2c93-4317-b941-7126d3547a6a.png"
              alt="Anveshana Learning Centre"
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold text-primary leading-none">
                Anveshana
              </span>
              <p className="text-xs text-muted-foreground font-body leading-none mt-0.5">
                Learning Centre
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.ocid}
                href={link.href}
                data-ocid={link.ocid}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {showAdminButton && (
              <Button
                variant={showAdmin ? "default" : "outline"}
                size="sm"
                onClick={onAdminToggle}
                className="hidden md:flex items-center gap-1.5"
              >
                <ShieldCheck className="h-4 w-4" />
                {showAdmin ? "View Site" : "Admin"}
              </Button>
            )}
            {isLoggedIn ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => clear()}
                className="hidden md:flex items-center gap-1.5 text-muted-foreground"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => login()}
                disabled={isLoggingIn}
                className="hidden md:flex items-center gap-1.5 text-muted-foreground"
              >
                <LogIn className="h-4 w-4" />
                {isLoggingIn ? "Logging in..." : "Login"}
              </Button>
            )}
            {/* Mobile menu toggle */}
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-foreground"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="container px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.ocid}
                  href={link.href}
                  data-ocid={link.ocid}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2 pt-2 border-t border-border">
                {showAdminButton && (
                  <Button
                    variant={showAdmin ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      onAdminToggle();
                      setMobileOpen(false);
                    }}
                    className="flex-1 flex items-center gap-1.5"
                  >
                    <ShieldCheck className="h-4 w-4" />
                    {showAdmin ? "View Site" : "Admin"}
                  </Button>
                )}
                {isLoggedIn ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => clear()}
                    className="flex-1 flex items-center gap-1.5"
                  >
                    <LogOut className="h-4 w-4" />
                    Logout
                  </Button>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => login()}
                    disabled={isLoggingIn}
                    className="flex-1 flex items-center gap-1.5"
                  >
                    <LogIn className="h-4 w-4" />
                    {isLoggingIn ? "Logging in..." : "Login"}
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
