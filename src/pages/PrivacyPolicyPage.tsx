import { Mail, Phone, Shield, Lock, Database, Eye, Share2, Server, Cookie, Users, Bell, UserCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const PrivacyPolicyPage = () => {
  const sections = [{
    id: "introduction",
    number: "01",
    title: "Introduction",
    icon: Shield,
    content: ["Comminfra collects data for commercial real estate services: asset acquisition, land sales, leasing, and REIT partnerships.", "This policy is applicable to website visitors, investors, tenants, and partners across India.", "Data Principal: Individual users | Data Fiduciary: Comminfra (Chennai-based entity)"]
  }, {
    id: "information-collected",
    number: "02",
    title: "Information We Collect",
    icon: Database,
    content: ["Personal Data: Name, email, phone (+91 format), Google Meet ID, PAN/GST for KYC verification", "Usage Data: IP address, browser type, pages visited (Asset Categories, Land Categories, Projects)", "Transaction Data: Property inquiries (Retail Office Floors, Shopping Arcades, Mixed-Use Blocks), investment details", "Cookies: Session tracking, analytics (Google Analytics compliant with data protection standards)"]
  }, {
    id: "data-usage",
    number: "03",
    title: "How We Use Your Data",
    icon: Eye,
    content: ["Service Delivery: Land acquisition inquiries, asset sales leads, lease matching for Restaurants, Jewellery Stores, Corporate Offices", "Marketing: Email updates on Sustainability features, Revenue Model opportunities, Projects gallery", "Legal Compliance: RERA 2016 registration, PMLA 2002 KYC requirements, TDS reporting", "Analytics: Website performance monitoring across Projects page, RentLease sections"]
  }, {
    id: "data-sharing",
    number: "04",
    title: "Data Sharing & Disclosure",
    icon: Share2,
    content: ["Third Parties: REIT partners, legal advisors, payment gateways (Razorpay/UPI compliant)", "Legal Requirements: Government authorities (IT Dept, RERA, PMLA), court orders as required by law", "No Sale Policy: Personal data is never sold to third parties under any circumstances", "Data Location: All data stored in India (AWS Mumbai region) ensuring data sovereignty"]
  }, {
    id: "data-security",
    number: "05",
    title: "Data Security",
    icon: Lock,
    content: ["Encryption: HTTPS protocol, AES-256 encryption for contact forms and stored data", "Access Controls: Role-based access for Managing Director and authorized admin team only", "Breach Notification: Within 72 hours as per DPDP Act 2023 requirements", "Data Retention: Transaction data 7 years (IT Act), inquiry data 2 years"]
  }, {
    id: "your-rights",
    number: "06",
    title: "Your Rights (DPDP Act 2023)",
    icon: UserCheck,
    content: ["Access, Correction, Erasure, and Portability requests can be submitted via shekar@comminfra.in", "Grievance Officer: Shekar, Managing Director | Response within 30 days guaranteed", "Consent Withdrawal: Unsubscribe links available in all emails, account deletion on request"]
  }, {
    id: "cookies",
    number: "07",
    title: "Cookies & Tracking",
    icon: Cookie,
    content: ["Essential Cookies: Navigation functionality, contact form submissions", "Analytics Cookies: Google Analytics with anonymized IP addresses", "Cookie Preferences: Manage your preferences via the cookie consent banner on all pages"]
  }, {
    id: "childrens-privacy",
    number: "08",
    title: "Children's Privacy",
    icon: Users,
    content: ["No collection of data from users under 18 years of age", "Commercial real estate services are exclusively for verified adults and registered businesses", "Any inadvertently collected minor data will be deleted immediately upon discovery"]
  }, {
    id: "policy-changes",
    number: "09",
    title: "Changes to Policy",
    icon: Bell,
    content: ["Policy updates will be posted on website with 30 days advance notice", "Material changes will be communicated via email to all registered users", "Last Updated: December 09, 2025"]
  }, {
    id: "contact",
    number: "10",
    title: "Contact Information",
    icon: Mail,
    content: ["Data Protection Officer: Shekar, Managing Director", "Email: shekar@comminfra.in | Phone: +91-9444126240", "Address: Chennai, Tamil Nadu | DPDP Registration Pending", "Governing Law: Digital Personal Data Protection Act 2023, IT Act 2000"]
  }];
  const quickLinks = [{
    label: "Introduction",
    href: "#introduction"
  }, {
    label: "Data Collected",
    href: "#information-collected"
  }, {
    label: "Data Usage",
    href: "#data-usage"
  }, {
    label: "Data Sharing",
    href: "#data-sharing"
  }, {
    label: "Security",
    href: "#data-security"
  }, {
    label: "Your Rights",
    href: "#your-rights"
  }, {
    label: "Cookies",
    href: "#cookies"
  }, {
    label: "Children",
    href: "#childrens-privacy"
  }, {
    label: "Changes",
    href: "#policy-changes"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#1a237e] via-[#0d1442] to-black">
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-pulse" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
          animationDuration: `${2 + Math.random() * 3}s`
        }} />)}
        </div>

        {/* Secure Lock Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <Lock className="w-96 h-96 text-amber-400" />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a237e]/50 to-black/80" />

        <div className="container relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <Lock className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Data Protection</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
              Privacy Policy
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your data security is our commitment. Compliant with India's Digital Personal Data Protection Act 2023
            </p>

            <Link to="/contact#contact-form">
              <Button size="lg" className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#1a237e] transition-all duration-300 px-8 py-6 text-lg font-semibold">
                Contact Data Officer
              </Button>
            </Link>

            {/* Scroll Indicator */}
            <div className="mt-12 animate-bounce">
              <ChevronDown className="h-8 w-8 text-amber-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-amber-200/50 shadow-sm">
        <div className="container py-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {quickLinks.map(link => <a key={link.href} href={link.href} className="px-3 py-1.5 text-xs md:text-sm font-medium text-[#1a237e] hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all duration-300 border border-transparent hover:border-amber-200">
                {link.label}
              </a>)}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Desktop View - Glass Cards */}
            <div className="hidden md:block space-y-8">
              {sections.map(section => <div key={section.id} id={section.id} className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-[#1a237e]/10 hover:border-amber-400/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden scroll-mt-32">
                  {/* Gold accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1a237e] to-[#0d1442] flex items-center justify-center shadow-lg">
                          <span className="text-amber-400 font-bold text-xl">{section.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <section.icon className="h-6 w-6 text-amber-500" />
                          <h2 className="text-2xl font-bold text-[#1a237e]">{section.title}</h2>
                        </div>
                        <ul className="space-y-3">
                          {section.content.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>

            {/* Mobile View - Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="space-y-4">
                {sections.map(section => <AccordionItem key={section.id} value={section.id} id={section.id} className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#1a237e]/10 shadow-md overflow-hidden scroll-mt-32">
                    <AccordionTrigger className="px-4 py-4 hover:no-underline hover:bg-amber-50/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1a237e] to-[#0d1442] flex items-center justify-center">
                          <span className="text-amber-400 font-bold text-sm">{section.number}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <section.icon className="h-5 w-5 text-amber-500" />
                          <span className="font-semibold text-[#1a237e] text-left">{section.title}</span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4">
                      <ul className="space-y-3 pt-2">
                        {section.content.map((item, idx) => <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>)}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <section className="py-12 bg-gradient-to-r from-[#1a237e] to-[#0d1442]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-amber-400/30">
                <span className="text-amber-400 text-sm font-medium">DPDP Act 2023 Compliant</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-amber-400/30">
                <span className="text-amber-400 text-sm font-medium">IT Act 2000 Compliant</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-amber-400/30">
                <span className="text-amber-400 text-sm font-medium">Data Stored in India</span>
              </div>
            </div>
            <p className="text-white/60 text-sm">
              © 2025 shekar@comminfra.in Your privacy is protected under Indian data protection laws.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-4">
              Have Privacy Concerns?
            </h3>
            <p className="text-slate-600 mb-8">
              Our Data Protection Officer is available to address any privacy-related queries or requests.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Phone className="h-5 w-5 text-amber-500" />
                <span>+91 9444126240</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Mail className="h-5 w-5 text-amber-500" />
                <span>​shekar@comminfra.in</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default PrivacyPolicyPage;