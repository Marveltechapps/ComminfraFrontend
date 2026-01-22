import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logo from "@/assets/comminfra-logo.svg";
const Footer = () => {
  const footerLinks = [{
    label: "About Us",
    path: "/about"
  }, {
    label: "Sustainability",
    path: "/sustainability"
  }, {
    label: "Business Revenue Model",
    path: "/business-model"
  }, {
    label: "REIT & Invest in Rental Yield Assets",
    path: "/reit-invest"
  }, {
    label: "Terms & Conditions",
    path: "/terms-and-conditions"
  }, {
    label: "Privacy Policy",
    path: "/privacy-policy"
  }];
  return <footer className="bg-white border-t">
      <div className="container py-12 text-foreground">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="CommInfra Logo" className="h-16 w-auto" />
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary to-commercial bg-clip-text text-blue-700">
                COMMINFRA
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building the future of commercial real estate with ESG-aligned infrastructure and solar-powered sustainability.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 3).map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm transition-smooth text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
            <ul className="space-y-2">
              {footerLinks.slice(3).map(link => <li key={link.path}>
                  <Link to={link.path} className="text-sm transition-smooth text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-foreground">+91 9444126240</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-foreground">shekar@comminfra.in</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2025 CommInfra. All rights reserved. Building with purpose.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;