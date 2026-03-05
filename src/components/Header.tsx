import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/logo-transparent.png";

const services = [
  { label: "Data Analysis", anchor: "data-analysis" },
  { label: "Evidence Synthesis", anchor: "evidence-synthesis" },
  { label: "Epidemiology", anchor: "epidemiology" },
  { label: "Clinical Trials", anchor: "clinical-trials" },
  { label: "Grant Writing", anchor: "grant-writing" },
  { label: "Medical Writing", anchor: "medical-writing" },
  { label: "Proofreading & Editing", anchor: "proofreading-editing" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/who-we-are" },
  { label: "What We Do", to: "/what-we-do", hasDropdown: true },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-[0_1px_3px_0_hsl(var(--primary)/0.08)] border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
        <Link to="/" className="flex items-center shrink-0" aria-label="Pacesetter Data Solutions Home">
          <img src={logoImg} alt="Pacesetter Data Solutions logo" className="h-12 md:h-14 w-auto mix-blend-multiply" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <div key={link.to} className="relative">
              {link.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={link.to}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center gap-1 ${
                      location.pathname === link.to
                        ? "text-primary bg-primary/8"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 pt-1 w-60">
                      <div className="bg-card/95 backdrop-blur-xl rounded-2xl border border-border/60 shadow-xl py-2 animate-fade-in">
                        {services.map((s) => (
                          <Link
                            key={s.anchor}
                            to={`/what-we-do#${s.anchor}`}
                            className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-150"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={link.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/8"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-xl animate-fade-in">
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/5"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {services.map((s) => (
                      <Link
                        key={s.anchor}
                        to={`/what-we-do#${s.anchor}`}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
