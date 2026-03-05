import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground" role="contentinfo">
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-3 text-primary-foreground">
              Pacesetter Data Solutions
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Data Analysis, Research &amp; Medical Writing Services for Academics and Institutions.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "Who We Are", path: "/who-we-are" },
                { label: "What We Do", path: "/what-we-do" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">
              Contact
            </h4>
            <p className="text-sm opacity-70 mb-2">
              <a href="mailto:info@pacesetterdata.co.uk" className="hover:opacity-100 transition-opacity">
                info@pacesetterdata.co.uk
              </a>
            </p>
            <Link
              to="/privacy-policy"
              className="text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} Pacesetter Data Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
