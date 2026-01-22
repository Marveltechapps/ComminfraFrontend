import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Link, useNavigate } from "react-router-dom";
import { Building2, TrendingUp, CheckCircle, Clock, DollarSign, FileText, Upload, MapPin, Calendar, Leaf, ShieldCheck, Timer, Store, ShoppingBag, Building, Trees, Blocks, Star, Award, Zap, ArrowRight, Moon, SunIcon } from "lucide-react";

// Image imports
import sellerHandshake from "@/assets/seller-handshake.jpg";
import projectTimeline from "@/assets/project-timeline.jpg";
import sellHeroCommercial from "@/assets/sell-hero-commercial.jpg";
import constructionFoundation from "@/assets/construction-foundation-work.jpg";
import semiCompletedScaffolding from "@/assets/semi-completed-scaffolding.jpg";
import interiorFitout from "@/assets/interior-fitout-progress.jpg";
import completedWithTenants from "@/assets/completed-with-tenants.jpg";
import retailFloorBranded from "@/assets/retail-floor-branded.jpg";
import shoppingArcadeTraffic from "@/assets/shopping-arcade-traffic.jpg";
import highStreetPremium from "@/assets/high-street-premium.jpg";
import lifestyleCenterGreen from "@/assets/lifestyle-center-green.jpg";
import esgDashboard from "@/assets/esg-dashboard.jpg";
import legalComplianceReview from "@/assets/legal-compliance-review.jpg";
import sellerFaqTablet from "@/assets/seller-faq-tablet.jpg";

// Data structures
const projectStages = [{
  id: "started",
  title: "Started Projects",
  description: "Land acquired, foundation work begun",
  status: "🟢",
  cta: "Submit Site Details",
  image: constructionFoundation,
  completion: 15,
  completionText: "0-20% Complete"
}, {
  id: "semi-completed",
  title: "Semi-Completed Projects",
  description: "Structural work, Construction in progress",
  status: "🟡",
  cta: "Upload Progress Report",
  image: semiCompletedScaffolding,
  completion: 40,
  completionText: "20-50% Complete"
}, {
  id: "halfway",
  title: "Halfway Through",
  description: "Interior work and finishing stages underway",
  status: "🟠",
  cta: "Schedule Site Visit",
  image: interiorFitout,
  completion: 65,
  completionText: "50-70% Complete"
}, {
  id: "completed",
  title: "Completed Projects",
  description: "Ready for occupancy with active tenants",
  status: "🔵",
  cta: "Share Asset Valuation",
  image: completedWithTenants,
  completion: 95,
  completionText: "90-100% Complete"
}];
const assetTypes = [{
  title: "Retail & Office Floors",
  icon: Store,
  image: retailFloorBranded,
  description: "Individual floors in commercial buildings with high rental potential"
}, {
  title: "Shopping Arcades / Plazas",
  icon: ShoppingBag,
  image: shoppingArcadeTraffic,
  description: "Retail complexes and shopping centers with foot traffic"
}, {
  title: "High Street Commercial Units",
  icon: Building2,
  image: highStreetPremium,
  description: "Prime street-facing commercial properties in busy areas"
}, {
  title: "Lifestyle Centers / Business Parks",
  icon: Trees,
  image: lifestyleCenterGreen,
  description: "Mixed-use developments with amenities and green spaces"
}, {
  title: "Mixed-Use Commercial Blocks",
  icon: Blocks,
  image: completedWithTenants,
  description: "Multi-purpose commercial developments with diverse income streams"
}];
const valuationSteps = [{
  title: "ESG Upgrade Potential",
  description: "We assess solar installation possibilities, carbon credit eligibility, and sustainability improvements that can increase property value by 15-25%.",
  icon: Leaf,
  image: esgDashboard,
  features: ["Solar rooftop analysis", "Carbon credit assessment", "Green certification potential", "Energy efficiency upgrades"]
}, {
  title: "Legal and Compliance Checks",
  description: "Comprehensive review of all documentation, regulatory compliance, and legal clearances to ensure smooth transaction processing.",
  icon: ShieldCheck,
  image: legalComplianceReview,
  features: ["Title verification", "Approval status check", "Compliance audit", "Documentation review"]
}, {
  title: "Timeline for Offer and Closure",
  description: "Fast-track evaluation process with transparent timelines and regular updates throughout the acquisition journey.",
  icon: Timer,
  image: projectTimeline,
  features: ["48-hour initial assessment", "7-day due diligence", "Transparent pricing", "Quick closure process"]
}];
const faqs = [{
  question: "What documents are needed for property evaluation?",
  answer: "We require property documents, approvals (CMDA/DTCP), completion certificates, legal clearances, and recent photographs. Our team will guide you through the complete documentation process and help gather any missing paperwork."
}, {
  question: "How long does the evaluation process take?",
  answer: "Initial assessment: 48-72 hours for basic evaluation. Complete due diligence: 7-14 working days including site visits. We provide regular updates and maintain transparent communication throughout the process."
}, {
  question: "What types of properties are preferred?",
  answer: "We focus on commercial properties with ESG upgrade potential, prime locations, clear titles, and strong rental yield prospects. Both completed and under-construction properties are considered, especially those with growth potential."
}, {
  question: "How do you determine the property valuation?",
  answer: "Our valuation considers location premiums, current market rates, ESG upgrade potential, legal status, rental yield prospects, and future development possibilities using advanced analytics and market intelligence."
}, {
  question: "What deal structures do you offer?",
  answer: "We offer flexible deal structures including outright purchase, joint development partnerships, revenue sharing models, and staged payments. The structure depends on the property type, completion status, and seller preferences."
}];
const SellPage = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll-aware header transparency
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen gradient-mesh">
      {/* 1. Hero Section - Sell Your Commercial Property */}
      <section className="SellPage_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={sellHeroCommercial} alt="Attractive modern commercial building for sale" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Premium Property Acquisition
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in text-slate-50">
            Unlock Value from Your Commercial Asset
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent"> Direct Acquisition</span>
          </h1>
          
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group" asChild>
            
          </Button>
        </div>
      </section>

      {/* 2. Project Stage Segmentation - Progress Grid */}
      <section className="ProjectStage_Filter py-20 bg-gradient-section-1 text-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Project Stage Segmentation</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We purchase properties at every stage of development with tailored evaluation process and competitive pricing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {projectStages.map((stage, index) => <Card key={stage.id} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden hover:-translate-y-1" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={stage.image} alt={stage.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                    <span className="text-sm font-semibold text-primary">{stage.completionText}</span>
                  </div>
                  <div className="absolute top-4 right-4 text-3xl filter drop-shadow-lg">
                    {stage.status}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{stage.status}</span>
                    <Badge variant="outline" className="text-xs">
                      {stage.completion}% Complete
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                  <Progress value={stage.completion} className="mb-4" />
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all" asChild>
                    <a href="#inquiry-form">{stage.cta}</a>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img alt="Development timeline showing various project stages" className="w-full h-64 object-cover" src="/lovable-uploads/250287b5-e217-46cf-bbec-81cd3084a539.jpg" />
            <div className="absolute inset-0 bg-[url('@/assets/sell-hero-commercial.jpg')] bg-cover bg-center">
              
            </div>
          </div>
        </div>
      </section>

      {/* 3. Asset Type Categories - Premium Acquisition Focus */}
      <section className="AssetCard_Categories py-24 bg-gradient-section-2 text-white">
        <div className="container px-4">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">Asset Type Categories</h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We acquire and enhance diverse commercial property types across markets — transforming existing assets into high-performance investment opportunities.
            </p>
          </div>
          
          <div className="space-y-16">
            {/* 1. Retail & Office Floors */}
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl overflow-hidden min-h-[600px]">
              <div className="grid md:grid-cols-2 gap-0 h-full">
                <div className="relative h-[600px] overflow-hidden">
                  <img src={retailFloorBranded} alt="Modern commercial tower with retail and office floors" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  <Store className="absolute top-6 left-6 h-12 w-12 text-white" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-primary mb-4">Retail & Office Floors</h3>
                  <div className="prose prose-lg text-muted-foreground space-y-3 leading-relaxed">
                    <p>We specialize in acquiring Retail & Office Floors from third-party owners and repositioning them into high-performing commercial assets.</p>
                    <p>Our expert team evaluates prime properties with strong infrastructure but underutilized potential.</p>
                    <p>We enhance these spaces through architectural upgrades, branding, and market repositioning.</p>
                    <p>Retail floors are redesigned for visibility and tenant appeal, while office floors are modernized for corporate leasing.</p>
                    <p>From fire safety compliance to smart office automation, we bring every acquired property up to current market standards.</p>
                    <p>Our network of investors, corporate tenants, and REIT partners ensures profitable exits and steady income streams.</p>
                    <p>Each acquisition undergoes a full due-diligence cycle — zoning, valuation, and legal verification — ensuring security and transparency.</p>
                    <p className="font-semibold text-primary">We don't just buy assets; we transform them into next-gen commercial experiences.</p>
                  </div>
                  
                </div>
              </div>
            </Card>

            {/* 2. Shopping Arcades / Plazas */}
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl overflow-hidden min-h-[600px]">
              <div className="grid md:grid-cols-2 gap-0 h-full">
                <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-primary mb-4">Shopping Arcades / Plazas</h3>
                  <div className="prose prose-lg text-muted-foreground space-y-3 leading-relaxed">
                    <p>Our team identifies Shopping Arcades and Plazas that have location advantage but need modern repositioning.</p>
                    <p>We acquire such properties, revitalize their façades, upgrade infrastructure, and curate an improved tenant mix.</p>
                    <p>By optimizing visibility, accessibility, and experience, we turn underperforming retail zones into thriving commercial hubs.</p>
                    <p>We collaborate with leasing consultants, retail strategists, and designers to rebrand and remarket the properties.</p>
                    <p>Every acquisition is backed by market intelligence and ROI projection, ensuring a profitable turnaround.</p>
                    <p>Our focus is on unlocking unrealized potential — making old plazas relevant again in a fast-evolving retail ecosystem.</p>
                    <p className="font-semibold text-primary">From new lighting systems to smart navigation, every improvement enhances both footfall and financial return.</p>
                  </div>
                  
                </div>
                <div className="order-1 md:order-2 relative h-[600px] overflow-hidden">
                  <img src={shoppingArcadeTraffic} alt="Vibrant retail plaza with glass-front stores" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
                  <ShoppingBag className="absolute top-6 right-6 h-12 w-12 text-white" />
                </div>
              </div>
            </Card>

            {/* 3. High Street Commercial Units */}
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl overflow-hidden min-h-[600px]">
              <div className="grid md:grid-cols-2 gap-0 h-full">
                <div className="relative h-[600px] overflow-hidden">
                  <img alt="Bustling urban high street with boutique stores" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/lovable-uploads/34e7e110-8df6-4128-83da-23c800189276.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  <Building2 className="absolute top-6 left-6 h-12 w-12 text-white" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-primary mb-4">High Street Commercial Units</h3>
                  <div className="prose prose-lg text-muted-foreground space-y-3 leading-relaxed">
                    <p>We acquire High Street Commercial Units in prime urban corridors and elevate them through design and functionality upgrades.</p>
                    <p>Many such spaces have unmatched visibility but lack modern appeal — that's where our expertise steps in.</p>
                    <p>We refurbish interiors, update façades, and integrate smart systems to attract high-value tenants and investors.</p>
                    <p>Our repositioned high street assets cater to fashion brands, jewelers, and upscale retailers seeking prestige and performance.</p>
                    <p>Through targeted marketing and digital presence, we amplify property value and ensure rapid re-leasing or resale.</p>
                    <p className="font-semibold text-primary">We bridge the gap between potential and perfection — redefining what high street commercial means in the modern market.</p>
                  </div>
                  
                </div>
              </div>
            </Card>

            {/* 4. Lifestyle Centers / Business Parks */}
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl overflow-hidden min-h-[600px]">
              <div className="grid md:grid-cols-2 gap-0 h-full">
                <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-primary mb-4">Lifestyle Centers / Business Parks</h3>
                  <div className="prose prose-lg text-muted-foreground space-y-3 leading-relaxed">
                    <p>We strategically acquire Lifestyle Centers and Business Parks that show structural integrity but need modernization and management refinement.</p>
                    <p>Our process includes sustainability retrofits, digital facility upgrades, and workspace redesigns.</p>
                    <p>By integrating EV infrastructure, renewable energy, and landscaped amenities, we transform properties into holistic ecosystems.</p>
                    <p>We attract long-term corporate tenants, wellness brands, and tech companies seeking eco-forward campuses.</p>
                    <p>Our acquisitions become models of regeneration — blending sustainability with revenue growth.</p>
                    <p>We collaborate with REITs, institutional buyers, and global investors to scale and reimagine these commercial communities.</p>
                    <p className="font-semibold text-primary">Every property becomes more than a workplace — it evolves into a sustainable lifestyle environment.</p>
                  </div>
                  
                </div>
                <div className="order-1 md:order-2 relative h-[600px] overflow-hidden">
                  <img src={lifestyleCenterGreen} alt="Contemporary business park with landscaped greenery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
                  <Trees className="absolute top-6 right-6 h-12 w-12 text-white" />
                </div>
              </div>
            </Card>

            {/* 5. Mixed-Use Commercial Blocks */}
            <Card className="group hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm border border-white/30 rounded-3xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto overflow-hidden">
                  <img alt="Futuristic mixed-use complex with offices and retail zones" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="/lovable-uploads/bf3edec3-be4c-46ff-a547-6778fe109131.jpg" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  <Blocks className="absolute top-6 left-6 h-12 w-12 text-white" />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-primary mb-4">Mixed-Use Commercial Blocks</h3>
                  <div className="prose prose-lg text-muted-foreground space-y-3 leading-relaxed">
                    <p>Our Mixed-Use Commercial Block acquisitions are designed for high-impact redevelopment and investment growth.</p>
                    <p>We identify properties with multi-segment potential — retail, office, leisure — and reposition them with modern architecture and technology.</p>
                    <p>Through façade redesigns, interior optimization, and sustainable upgrades, we create renewed commercial ecosystems.</p>
                    <p>Each project is backed by deep valuation metrics, ensuring that every acquired asset delivers scalable returns.</p>
                    <p>We work with fund managers, developers, and institutional partners to execute sales, leases, or REIT integrations.</p>
                    <p>Every rebranded property tells a story of transformation — turning aging structures into icons of modern urban life.</p>
                    <p className="font-semibold text-primary">With every block we touch, we amplify value, elevate aesthetics, and redefine what commercial success looks like.</p>
                  </div>
                  
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>


      {/* 4. FAQs for Sellers - Accordion Component */}
      <section className="FAQ_Section py-20 gradient-mesh">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about our property acquisition process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white/60 backdrop-blur-sm rounded-xl px-6 border border-white/20 shadow-lg">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-3xl mx-auto">
              <img src={sellerFaqTablet} alt="Professional reviewing seller information on tablet" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
                <div className="text-center text-white">
                  <FileText className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Seller Support Portal</h3>
                  <p className="text-white/90">Expert guidance throughout the selling process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact & Submission Portal - Filterable Form */}
      <section id="inquiry-form" className="Contact_InquiryForm py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">​Connect with us     </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
              Submit your property details for a comprehensive evaluation and competitive offer
            </p>
            <Button onClick={() => navigate('/contact#contact-form')} className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
              Contact Us
            </Button>
          </div>
          
          
        </div>
      </section>
    </div>;
};
export default SellPage;