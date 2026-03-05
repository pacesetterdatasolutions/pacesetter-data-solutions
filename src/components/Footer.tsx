import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import logoImg from "@/assets/logo-transparent.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(165deg, hsl(220 70% 14%) 0%, hsl(214 56% 28%) 60%, hsl(220 70% 14%) 100%)" }}>
      {/* Decorative accent line */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, hsl(214 56% 42%), hsl(195 100% 58%), hsl(214 56% 42%))" }} />
      
      {/* Subtle grid texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(hsl(0 0% 100%) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="section-container relative z-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="" className="w-10 h-10 brightness-0 invert opacity-90" aria-hidden="true" />
              <h3 className="text-xl font-heading font-bold" style={{ color: "hsl(0 0% 100%)" }}>
                Pacesetter Data Solutions
              </h3>
            </div>
            <p className="text-base font-body mb-6" style={{ color: "hsl(195 100% 75%)" }}>
              Changing Lives Through Data
            </p>
            <a
              href="mailto:pacesetterdatasolutions@gmail.com"
              className="inline-flex items-center gap-2.5 text-sm font-body font-medium rounded-full px-5 py-2.5 transition-all duration-300 hover:gap-3"
              style={{
                color: "hsl(0 0% 100%)",
                background: "hsl(0 0% 100% / 0.08)",
                border: "1px solid hsl(0 0% 100% / 0.12)",
              }}
            >
              <Mail className="w-4 h-4" style={{ color: "hsl(195 100% 75%)" }} />
              pacesetterdatasolutions@gmail.com
            </a>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: "hsl(195 100% 75%)" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "Who We Are", to: "/who-we-are" },
                { label: "What We Do", to: "/what-we-do" },
                { label: "FAQ", to: "/faq" },
                { label: "Contact Us", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm font-body transition-all duration-200 hover:translate-x-1 inline-block"
                    style={{ color: "hsl(0 0% 100% / 0.7)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(195 100% 75%)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.7)")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 md:col-start-11">
            <h4 className="text-xs font-heading font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: "hsl(195 100% 75%)" }}>
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-sm font-body transition-all duration-200 hover:translate-x-1 inline-block"
                  style={{ color: "hsl(0 0% 100% / 0.7)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(195 100% 75%)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 100% / 0.7)")}
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6" style={{ borderTop: "1px solid hsl(0 0% 100% / 0.08)" }}>
          <p className="text-xs font-body text-center" style={{ color: "hsl(0 0% 100% / 0.4)" }}>
            &copy; {new Date().getFullYear()} Pacesetter Data Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
