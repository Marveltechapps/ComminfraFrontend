import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Building2, Store, Trees, Factory, ShoppingBag, Sun, Recycle, Car, Zap, FileText, Building, Users, Briefcase, UserCheck, TrendingUp, Home, Shield, ArrowRight, CheckCircle, Calendar, MapPin, DollarSign, Upload, Search, Moon, SunIcon } from "lucide-react";

// Image imports
import buyHeroCommercial from "@/assets/buy-hero-commercial.jpg";
import commercialInterior from "@/assets/commercial-interior.jpg";
import commercialPlaza from "@/assets/commercial-plaza-bustling.jpg";
import businessPark from "@/assets/aerial-business-park.jpg";
import lifestyleCenter from "@/assets/lifestyle-center-green.jpg";
import projectTimeline from "@/assets/attractive-commercial-building.jpg";
import rooftopSolar from "@/assets/rooftop-solar-building.jpg";
import revenueDashboard from "@/assets/build-revenue-dashboard.jpg";
import proposalForm from "@/assets/construction-proposal-form.jpg";
import officeSpacesPremium from "@/assets/office-spaces-premium.jpg";
import commercialPlazaPremium from "@/assets/commercial-plaza-premium.jpg";
import lifestyleCenterPremium from "@/assets/lifestyle-center-premium.jpg";
import businessParkPremium from "@/assets/business-park-premium.jpg";
import highStreetPremium from "@/assets/high-street-premium.jpg";
import institutionalInvestors from "@/assets/institutional-investors.jpg";
import corporateOccupiers from "@/assets/corporate-occupiers.jpg";
import hniFamilyOffices from "@/assets/hni-family-offices.jpg";
import reitsFunds from "@/assets/reits-funds.jpg";
import completedWithTenants from "@/assets/completed-with-tenants.jpg";
import semiCompletedScaffolding from "@/assets/semi-completed-scaffolding.jpg";
import constructionFoundation from "@/assets/construction-foundation-work.jpg";
import constructionInvestorMeeting from "@/assets/construction-investor-meeting.jpg";
const BuyPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Scroll-aware header transparency
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Asset Categories Data
  const assetCategories = [{
    icon: Building2,
    title: "Office Spaces",
    description: "Premium corporate environments with smart infrastructure",
    image: commercialInterior,
    cta: "View Office Listings",
    link: "/projects?type=office"
  }, {
    icon: Store,
    title: "Commercial Plazas",
    description: "High-traffic retail destinations with diverse tenant mix",
    image: commercialPlaza,
    cta: "Explore Retail Units",
    link: "/projects?type=retail"
  }, {
    icon: Trees,
    title: "Lifestyle Centers",
    description: "Experiential retail and entertainment hubs",
    image: lifestyleCenter,
    cta: "Discover Lifestyle Assets",
    link: "/projects?type=lifestyle"
  }, {
    icon: Factory,
    title: "Business Parks",
    description: "Integrated corporate campuses with modern amenities",
    image: businessPark,
    cta: "Browse Park Inventory",
    link: "/projects?type=business-park"
  }, {
    icon: ShoppingBag,
    title: "High Street Commercial",
    description: "Prime frontage properties in commercial corridors",
    image: commercialInterior,
    cta: "Check Availability",
    link: "/projects?type=high-street"
  }];

  // Development Stage Data
  const developmentStages = [{
    title: "Ready to Occupy",
    description: "Completed properties with all amenities",
    progress: 100,
    color: "bg-green-500",
    cta: "Buy Now",
    badge: "🟢",
    image: completedWithTenants
  }, {
    title: "Nearing Completion",
    description: "85-95% complete with finishing work in progress",
    progress: 90,
    color: "bg-yellow-500",
    cta: "Schedule Site Visit",
    badge: "🟡",
    image: semiCompletedScaffolding
  }, {
    title: "Under Construction",
    description: "40-70% complete with structural work ongoing",
    progress: 60,
    color: "bg-orange-500",
    cta: "Request Project Brief",
    badge: "🟠",
    image: constructionFoundation
  }, {
    title: "Pre-Launch",
    description: "Planning stage with early bird pricing available",
    progress: 25,
    color: "bg-blue-500",
    cta: "Register Interest",
    badge: "🔵",
    image: constructionInvestorMeeting
  }];

  // ESG Features Data
  const esgFeatures = [{
    icon: Sun,
    title: "Solar-powered infrastructure",
    tooltip: "Rooftop solar with grid-tie capability"
  }, {
    icon: Recycle,
    title: "Carbon credit eligibility",
    tooltip: "LEED certified with carbon offset programs"
  }, {
    icon: Car,
    title: "EV-ready parking",
    tooltip: "Electric vehicle charging stations"
  }, {
    icon: Zap,
    title: "Redundant connections",
    tooltip: "Backup power and water systems"
  }, {
    icon: FileText,
    title: "REIT-grade documentation",
    tooltip: "Investment-ready legal structure"
  }, {
    icon: Building,
    title: "Floor-wise ownership",
    tooltip: "Flexible ownership options available"
  }];

  // Buyer Personas Data
  const buyerPersonas = [{
    icon: Building,
    title: "Institutional Investors",
    description: "Large-scale portfolio acquisitions with ESG focus",
    features: ["Bulk Purchase Options", "Portfolio Diversification", "ESG Compliance"],
    link: "/institutional-inquiry"
  }, {
    icon: Briefcase,
    title: "Corporate Occupiers",
    description: "Companies seeking owned operational spaces",
    features: ["Custom Fit-Outs", "Operational Control", "Tax Benefits"],
    link: "/corporate-inquiry"
  }, {
    icon: Users,
    title: "HNIs / Family Offices",
    description: "High-net-worth individuals and family investment vehicles",
    features: ["Premium Assets", "Wealth Preservation", "Legacy Building"],
    link: "/hni-inquiry"
  }, {
    icon: TrendingUp,
    title: "REITs & Funds",
    description: "Structured investment vehicles for rental yield",
    features: ["Yield Optimization", "Professional Management", "Liquidity Options"],
    link: "/reit-inquiry"
  }];

  // Investment Highlights Data
  const investmentHighlights = [{
    icon: TrendingUp,
    title: "Rental Yield Potential",
    value: "8-12%",
    description: "Annual rental returns"
  }, {
    icon: Home,
    title: "Lease-Ready Units",
    value: "85%",
    description: "Pre-leased occupancy"
  }, {
    icon: Sun,
    title: "ESG Impact",
    value: "30%",
    description: "Carbon footprint reduction"
  }, {
    icon: Shield,
    title: "Asset Appreciation",
    value: "15-25%",
    description: "Expected IRR over 5 years"
  }];

  // FAQ Data
  const faqs = [{
    question: "Can I buy individual floors or entire blocks?",
    answer: "Yes, we offer flexible ownership structures including floor-wise purchases, entire building acquisitions, and even partial stake investments through our REIT structure."
  }, {
    question: "What ESG certifications are available?",
    answer: "Our properties feature LEED certifications, carbon credit eligibility, solar power integration, and sustainable building materials. We provide detailed ESG impact reports for all investments."
  }, {
    question: "What's the process for site visits and due diligence?",
    answer: "We offer comprehensive site visits with technical experts, provide detailed due diligence reports, legal documentation review, and 30-day evaluation periods for institutional investors."
  }, {
    question: "What financing options are available?",
    answer: "We work with leading financial institutions to provide competitive financing options, including construction-to-permanent loans, commercial mortgages, and partnership structures."
  }];
  return <div className="min-h-screen gradient-mesh">
      {/* 1. Hero Section - Premium Ownership Banner */}
      <section className="BuyPage_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={buyHeroCommercial} alt="Modern commercial skyline with solar panels" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Premium Commercial Investments
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Buy High-Value Commercial Properties
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent">
              {" "}
              Directly from Us
            </span>
          </h1>

          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group" asChild>
            <Link to="/projects">
              Browse Available Properties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 2. Asset Categories - Premium Elegant Design */}
      <section className="AssetCard_Categories py-24 bg-gradient-section-1 text-white">
        <div className="container px-4 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text mb-6 tracking-tight p-4 text-emerald-50">
              Asset Categories
            </h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-zinc-300">
              Discover premium commercial properties across diverse categories.
            </p>
          </div>

          {/* Category Sections */}
          <div className="space-y-20">
            {/* 1. Office Spaces */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={officeSpacesPremium} alt="Premium Office Spaces - Modern glass office tower" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <Building2 className="h-12 w-12 text-white mb-2" />
                  </div>
                </div>

                <div className="space-y-6 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                    <Building2 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-900">Office Space</span>
                  </div>

                  <h3 className="text-4xl font-bold leading-tight text-slate-50">Step into the future of work</h3>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="text-zinc-300">
                      Our Office Spaces are crafted for performance, prestige, and presence. Each tower stands as a
                      symbol of productivity — designed with modern infrastructure, high-speed connectivity, green
                      energy systems, and customizable interiors.
                    </p>

                    <p className="text-zinc-300">
                      We offer spaces ranging from boutique executive offices to multi-floor corporate setups, built to
                      adapt to dynamic business needs.
                    </p>

                    <p className="text-zinc-300">
                      Enjoy premium facilities like central air systems, high-speed elevators, security surveillance,
                      conference zones, and energy-efficient lighting.
                    </p>

                    <p className="text-zinc-300">
                      Every workspace breathes elegance, natural light, and sustainability — perfect for companies that
                      dream big and move fast.
                    </p>

                    <p className="font-semibold text-slate-50">
                      Invest in office spaces that don't just house teams — they inspire innovation.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to="/projects?type=office">
                      Explore Properties
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* 2. Commercial Plazas */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                    <Store className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-900">Commercial Plazas</span>
                  </div>

                  <h3 className="text-4xl font-bold leading-tight text-slate-50">The heart of urban interaction</h3>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="text-zinc-300">Welcome to Commercial Plazas — the heart of urban interaction.</p>

                    <p className="text-zinc-300">
                      Each plaza is a curated ecosystem of retail, dining, and business synergy, positioned in
                      high-traffic zones for maximum visibility and returns.
                    </p>

                    <p className="text-zinc-300">
                      Designed for versatility — from jewelry showrooms and cafés to boutiques and tech stores — our
                      plazas cater to brands that want to shine in the cityscape.
                    </p>

                    <p className="text-zinc-300">These are more than buildings; they're communities of commerce, experience, and expression.</p>

                    <p className="font-semibold text-slate-50">
                      Architected with wide corridors, parking, safety systems, and elegant aesthetics, they invite
                      growth, connection, and constant movement.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to="/projects?type=retail">
                      Explore Properties
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={commercialPlazaPremium} alt="Commercial Plazas - Vibrant shopping plaza with modern stores" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 right-8">
                    <Store className="h-12 w-12 text-white mb-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Lifestyle Centers */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={lifestyleCenterPremium} alt="Lifestyle Centers - Upscale open-air shopping and dining center" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <Trees className="h-12 w-12 text-white mb-2" />
                  </div>
                </div>

                <div className="space-y-6 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                    <Trees className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-900">Lifestyle Centers</span>
                  </div>

                  <h3 className="text-4xl font-bold leading-tight text-slate-50">Where lifestyle meets luxury</h3>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="text-zinc-300">Our Lifestyle Centers redefine modern living with a blend of retail, leisure, and culture.</p>

                    <p className="text-zinc-300">Imagine an open-air promenade where dining meets design, and shopping blends with serenity.</p>

                    <p className="text-zinc-300">
                      Each center is designed for high-end brands, cafés, art studios, and wellness spaces —
                      destinations that shape urban lifestyle trends.
                    </p>

                    <p className="text-zinc-300">
                      These are not just commercial properties — they're lifestyle experiences engineered for emotional
                      engagement, footfall, and long-term revenue.
                    </p>

                    <p className="font-semibold text-slate-50">
                      Smart layouts, biophilic design, solar rooftops, and pedestrian-friendly walkways ensure
                      sustainability and luxury coexist.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to="/projects?type=lifestyle">
                      Explore Properties
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* 4. Business Parks */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
                    <Factory className="h-5 w-5 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-900">Business Parks</span>
                  </div>

                  <h3 className="text-4xl font-bold leading-tight text-slate-50">The evolution of enterprise</h3>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="text-zinc-300">
                      Our Business Parks represent the evolution of enterprise real estate — integrated work
                      environments built for growth and collaboration.
                    </p>

                    <p className="text-zinc-300">
                      Each park features multiple towers, shared amenities, landscaped open zones, cafeterias, EV
                      parking, and digital infrastructure.
                    </p>

                    <p className="text-zinc-300">
                      They're designed to support IT companies, logistics offices, R&D units, and start-up clusters with
                      scalable, plug-and-play setups.
                    </p>

                    <p className="text-zinc-300">
                      With renewable energy systems, smart surveillance, and sustainable construction, these parks offer
                      future-ready spaces for businesses that aim for global standards.
                    </p>

                    <p className="font-semibold text-slate-50">
                      A business park isn't just a workplace — it's a living ecosystem of ideas.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to="/projects?type=business-park">
                      Explore Properties
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={businessParkPremium} alt="Business Parks - Expansive business park campus with corporate towers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 right-8">
                    <Factory className="h-12 w-12 text-white mb-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* 5. High Street Commercial */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={highStreetPremium} alt="High Street Commercial - Urban high-street with modern storefronts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <ShoppingBag className="h-12 w-12 text-white mb-2" />
                  </div>
                </div>

                <div className="space-y-6 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 rounded-full">
                    <ShoppingBag className="h-5 w-5 text-rose-600" />
                    <span className="text-sm font-semibold text-rose-900">High Street Commercial</span>
                  </div>

                  <h3 className="text-4xl font-bold leading-tight text-slate-50">The pulse of city commerce</h3>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="text-zinc-300">
                      Welcome to the pulse of city commerce — our High Street Commercial Properties are designed for
                      brands that thrive on exposure and experience.
                    </p>

                    <p className="text-zinc-300">Located in high-footfall areas, these spaces offer unmatched visibility and accessibility.</p>

                    <p className="text-zinc-300">
                      Ideal for restaurants, flagship showrooms, fashion brands, and premium outlets — each property is
                      built with elegant facades, signage visibility, and smart retail planning.
                    </p>

                    <p className="text-zinc-300">
                      Infrastructure includes ample parking, power backup, and modern interiors — everything your brand
                      needs to make a statement.
                    </p>

                    <p className="font-semibold text-slate-50">
                      For investors, these are income-generating properties with exceptional resale and rental
                      potential.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                    <Link to="/projects?type=high-street">
                      Explore Properties
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Development Stage Filter - Progress Grid */}
      <section className="ProjectStage_Filter py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Development Stages</h2>
            <p className="text-xl max-w-3xl mx-auto text-zinc-300">
              Choose properties based on completion status and investment timeline
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {developmentStages.map((stage, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={stage.image} alt={stage.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="text-xs bg-white/90 backdrop-blur-sm">
                      {stage.progress}% Complete
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-3xl">{stage.badge}</span>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{stage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{stage.description}</p>
                  <Progress value={stage.progress} className="mb-4" />
                  <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-white transition-all">
                    <Link to="/contact#contact-form">{stage.cta}</Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img alt="Project development timeline stages" className="w-full h-64 object-cover" src="/lovable-uploads/c3d77459-166e-4928-b0a4-34889415e64d.jpg" />
          </div>
        </div>
      </section>

      {/* 4. ESG Features - Icon Strip with Tooltips */}
      <section className="ESG_Features py-20 bg-gradient-section-2 text-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">ESG Value Additions</h2>
            <p className="text-xl max-w-3xl mx-auto text-zinc-300">
              Sustainable features that enhance property value and generate additional revenue streams
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {esgFeatures.map((feature, index) => <Card key={index} title={feature.tooltip} className="group text-center p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm border border-white/20 rounded-xl hover:-translate-y-1 bg-primary-foreground">
                <feature.icon className="h-12 w-12 text-primary mx-auto mb-3 group-hover:text-solar transition-colors group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-center">{feature.title}</p>
              </Card>)}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img alt="Commercial building with rooftop solar installation" className="w-full h-64 object-cover" src="/lovable-uploads/c32e375e-ef65-42a9-898c-bf3e7fcdaa05.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <Sun className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold mb-1">Solar Infrastructure</h3>
                  <p className="text-white/90">Generate 30-40% energy savings</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={revenueDashboard} alt="ESG dashboard showing carbon credits and sustainability metrics" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <Recycle className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-bold mb-1">Carbon Monetization</h3>
                  <p className="text-white/90">Earn 5-8% additional returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tailored for Every Investor - Premium Corporate Section */}
      <section className="BuyerPersona_Cards py-24 bg-gradient-section-3 text-white">
        <div className="container px-4 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text mb-6 tracking-tight text-slate-50">
              Tailored for Every Investor
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed text-zinc-300">
              Customized investment opportunities designed to match diverse investor goals — from institutional
              stability to corporate expansion and family wealth creation.
            </p>
          </div>

          {/* Investor Type Cards */}
          <div className="space-y-24 mt-20">
            {/* 1. Institutional Investors */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={institutionalInvestors} alt="Institutional Investors - Aerial view of corporate towers and financial skyline" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold">Institutional Grade</h3>
                  </div>
                </div>

                <div className="space-y-6 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                    <Building className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-900">Institutional Investors</span>
                  </div>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="font-semibold text-xl text-slate-50">
                      For institutional investors seeking scale, stability, and long-term yield — our commercial assets
                      deliver consistent performance and portfolio diversification.
                    </p>

                    <p className="text-zinc-300">
                      We offer high-grade office towers, business parks, and retail plazas with predictable income
                      streams and low vacancy risks.
                    </p>

                    <p className="text-zinc-300">
                      Each project is backed by professional management, compliance transparency, and sustainable design
                      to attract top corporate tenants.
                    </p>

                    <p className="text-zinc-300">
                      Our developments align with ESG goals, offering carbon credit benefits through solar energy
                      integration.
                    </p>

                    <p className="font-semibold text-slate-50">
                      Partner with us to gain access to large-scale opportunities and REIT-ready investments that
                      redefine commercial real estate value.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild></Button>
                </div>
              </div>
            </div>

            {/* 2. Corporate Occupiers */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                    <Briefcase className="h-5 w-5 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-900">Corporate Occupiers</span>
                  </div>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="font-semibold text-xl text-slate-50">
                      Corporate occupiers deserve more than space — they deserve ecosystems.
                    </p>

                    <p className="text-zinc-300">
                      We design tailor-made work environments for established brands and emerging enterprises alike.
                    </p>

                    <p className="text-zinc-300">
                      Our commercial developments offer flexibility for expansion, smart energy systems, high-speed
                      connectivity, and world-class maintenance.
                    </p>

                    <p className="text-zinc-300">
                      From leasing individual floors to owning entire office blocks, we provide strategic solutions that
                      enhance productivity and brand image.
                    </p>

                    <p className="font-semibold text-slate-50">
                      Let your company operate from a landmark address built for growth, innovation, and sustainability.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild></Button>
                </div>

                <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={corporateOccupiers} alt="Corporate Occupiers - Modern corporate office interior with glass walls" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-8 right-8">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold">Corporate Excellence</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. HNIs / Family Offices */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={hniFamilyOffices} alt="HNIs and Family Offices - Luxury meeting lounge with sunset skyline view" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold">Private Wealth</h3>
                  </div>
                </div>

                <div className="space-y-6 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
                    <Users className="h-5 w-5 text-amber-600" />
                    <span className="text-sm font-semibold text-amber-900">HNIs / Family Offices</span>
                  </div>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="font-semibold text-xl text-zinc-50">
                      For high-net-worth individuals and family offices, our developments open doors to secure,
                      appreciating assets that balance prestige with profit.
                    </p>

                    <p className="text-zinc-300">
                      Invest in premium commercial floors, boutique retail units, or long-term leasing ventures that
                      generate stable rental yields.
                    </p>

                    <p className="text-zinc-300">
                      We curate customized investment plans — from single-unit ownership to multi-asset portfolios —
                      designed for legacy creation.
                    </p>

                    <p className="text-zinc-300">
                      Each project is built with transparency, sustainability, and timeless design — assets that
                      appreciate in both value and reputation.
                    </p>

                    <p className="font-semibold text-zinc-50">
                      Turn your investment into a legacy of growth, purpose, and prestige.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild></Button>
                </div>
              </div>
            </div>

            {/* 4. REITs & Funds */}
            <div className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 space-y-6 lg:pr-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-semibold text-green-900">REITs & Funds</span>
                  </div>

                  <div className="prose prose-lg text-gray-600 space-y-4 leading-relaxed">
                    <p className="font-semibold text-xl text-slate-50">
                      We collaborate with REITs, private equity firms, and institutional funds to create scalable,
                      income-generating commercial assets.
                    </p>

                    <p className="text-zinc-300">
                      Our developments meet investment-grade benchmarks — audited, compliant, and built for long-term
                      rental yields.
                    </p>

                    <p className="text-zinc-300">
                      With transparent financial structures, asset management systems, and energy-efficient operations,
                      our projects deliver sustainable returns and carbon credits.
                    </p>

                    <p className="text-zinc-300">
                      Partner with us to co-create commercial portfolios that merge physical growth with financial
                      performance.
                    </p>

                    <p className="font-semibold text-slate-50">
                      The future of commercial investing is collaborative, clean, and data-driven — we're already there.
                    </p>
                  </div>

                  <Button size="lg" className="group/btn bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" asChild></Button>
                </div>

                <div className="order-1 lg:order-2 relative overflow-hidden rounded-3xl shadow-2xl h-[500px]">
                  <img src={reitsFunds} alt="REITs and Funds - City skyline with real estate fund graphs overlay" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-8 right-8">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white text-2xl font-bold">Fund Performance</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Investment Highlights - Infographic Grid */}
      <section className="Investment_Highlights py-20 bg-gradient-section-4 text-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Investment Highlights</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-400">
              Key metrics that demonstrate the value proposition of our commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {investmentHighlights.map((highlight, index) => <Card key={index} className="text-center p-8 backdrop-blur-sm border border-white/20 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-primary-foreground">
                <highlight.icon className="h-16 w-16 text-primary mx-auto mb-4 group-hover:text-solar transition-colors" />
                <div className="text-4xl font-bold text-primary mb-2">{highlight.value}</div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* 7. FAQs - Accordion Component */}
      <section className="Seller_FAQ_Section py-20">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-400">
              Common questions from buyers about our commercial property investments
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. Contact & Inquiry Portal - Filterable Form */}

      {/* Fixed Footer - Glassmorphic */}
    </div>;
};
export default BuyPage;