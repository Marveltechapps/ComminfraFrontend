import { Mail, Phone, MapPin, FileText, Shield, Scale, Building2, Users, Leaf, TrendingUp, AlertTriangle, Gavel, XCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const TermsAndConditionsPage = () => {
  const sections = [{
    id: "introduction",
    number: "01",
    title: "Introduction",
    icon: FileText,
    content: ["Comminfra operates as a commercial real estate developer specializing in third-party asset acquisition, value enhancement, and land development across India.", "Our services include property sales, leasing, REIT alignment, and ESG-compliant developments designed for sustainable growth.", "These Terms & Conditions are applicable to all website users, investors, tenants, and partners engaging with Comminfra's services and platforms."]
  }, {
    id: "acceptance",
    number: "02",
    title: "Acceptance of Terms",
    icon: Shield,
    content: ["By accessing and using this website, you constitute acceptance of these terms under the Indian Contract Act, 1872.", "Comminfra reserves the right to modify these terms with 30 days prior notice via website publication.", "Continued use of our services post-modification shall be deemed as acceptance of the revised terms and conditions."]
  }, {
    id: "services",
    number: "03",
    title: "Services Offered",
    icon: Building2,
    content: ["Asset Type Categories: Retail Office Floors, Shopping Arcades, High Street Units, Lifestyle Centers, Mixed-Use Blocks", "Land Categories: Downtown Core, Mall-Adjacent, Office Zones, Mixed-Use Potential, Peripheral Growth corridors", "Built Assets: Architectural Excellence spaces for Restaurants, Jewellery, Corporates, Retail, and Lifestyle brands", "Sustainability: Energy-efficient buildings, Low Carbon construction, Water Management, Smart Energy systems", "Revenue Model: Property Sales, Lease Agreements, Rental Income optimization, and REIT partnerships"]
  }, {
    id: "eligibility",
    number: "04",
    title: "User Eligibility",
    icon: Users,
    content: ["Users must be 18+ years of age, Indian resident or NRI with valid PAN card for all transactions.", "Commercial entities require GST registration and company incorporation documents for B2B engagements.", "KYC compliance under PMLA 2002 is mandatory for all transactions exceeding ₹10 lakhs."]
  }, {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property",
    icon: FileText,
    content: ["All content, images, designs, and proprietary materials on this website remain the exclusive property of Comminfra.", "AI-generated assets and content are for internal website use only and may not be reproduced externally.", "No reproduction, distribution, or commercial use is permitted without prior written consent from Comminfra."]
  }, {
    id: "disclaimer",
    number: "06",
    title: "Disclaimer of Warranties",
    icon: AlertTriangle,
    content: ["All property information is provided 'as-is' in compliance with RERA 2016 guidelines and regulations.", "Comminfra does not guarantee specific investment returns, rental yields, or capital appreciation.", "Market risks, regulatory changes, and economic fluctuations are borne entirely by the user/investor."]
  }, {
    id: "liability",
    number: "07",
    title: "Limitation of Liability",
    icon: Scale,
    content: ["Comminfra's liability is capped at the transaction value or ₹10 lakhs, whichever is lower.", "This limitation excludes indirect, consequential, incidental, or punitive damages of any nature.", "Force majeure events include natural disasters, regulatory changes, pandemics, and acts of government."]
  }, {
    id: "governing-law",
    number: "08",
    title: "Governing Law",
    icon: Gavel,
    content: ["These terms are governed by Indian laws with exclusive jurisdiction of Chennai courts.", "Dispute resolution shall be through arbitration under the Arbitration and Conciliation Act, 1996.", "Applicable taxes include GST 18% on services and TDS on rentals per the Income Tax Act, 1961."]
  }, {
    id: "termination",
    number: "09",
    title: "Termination",
    icon: XCircle,
    content: ["Comminfra reserves the right to suspend or terminate access for policy violations or fraudulent activities.", "Users may terminate their engagement by ceasing website use and providing written notice.", "Post-termination, users remain bound by confidentiality and intellectual property provisions."]
  }, {
    id: "contact",
    number: "10",
    title: "Contact Information",
    icon: Mail,
    content: ["Shekar, Managing Director | shekar@comminfra.in | +91-9444126240", "Registered Office: Chennai, Tamil Nadu (RERA compliant registration)", "Last Updated: December 2025"]
  }];
  const quickLinks = [{
    label: "Introduction",
    href: "#introduction"
  }, {
    label: "Acceptance",
    href: "#acceptance"
  }, {
    label: "Services",
    href: "#services"
  }, {
    label: "Eligibility",
    href: "#eligibility"
  }, {
    label: "IP Rights",
    href: "#intellectual-property"
  }, {
    label: "Disclaimer",
    href: "#disclaimer"
  }, {
    label: "Liability",
    href: "#liability"
  }, {
    label: "Governing Law",
    href: "#governing-law"
  }, {
    label: "Termination",
    href: "#termination"
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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a237e]/50 to-black/80" />

        <div className="container relative z-10 text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
              <Scale className="h-4 w-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium">Legal Framework</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
              Terms & Conditions
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Legal framework for commercial real estate transactions, investments, and partnerships in India
            </p>

            <Link to="/contact#contact-form">
              <Button size="lg" className="bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-[#1a237e] transition-all duration-300 px-8 py-6 text-lg font-semibold">
                Contact Legal Team
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
                <span className="text-amber-400 text-sm font-medium">RERA 2016 Compliant</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-amber-400/30">
                <span className="text-amber-400 text-sm font-medium">PMLA 2002 Compliant</span>
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-amber-400/30">
                <span className="text-amber-400 text-sm font-medium">IT Act 1961 Compliant</span>
              </div>
            </div>
            <p className="text-white/60 text-sm">© 2025 shekar@comminfra.in All rights reserved. Building with purpose and compliance.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1a237e] mb-4">
              Have Legal Questions?
            </h3>
            <p className="text-slate-600 mb-8">
              Our legal team is available to clarify any terms or assist with compliance requirements.
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
export default TermsAndConditionsPage;