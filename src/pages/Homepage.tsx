import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Building2, MapPin, Hammer, DollarSign, Home, Car, Sun, Leaf, Brain, BarChart3, Shield, Zap, Users, Award, ArrowRight, TrendingUp, Globe, Clock, Key } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Import images
import heroImage from "@/assets/hero-commercial-complex.jpg";
import investorImage from "@/assets/investor-handshake.jpg";
import landImage from "@/assets/aerial-business-park.jpg";
import buildingImage from "@/assets/sustainable-growth-building.jpg";
import salesImage from "@/assets/commercial-for-sale.jpg";
import retailImage from "@/assets/commercial-office-interior.jpg";
import infrastructureImage from "@/assets/infrastructure-blueprint.jpg";
import solarImage from "@/assets/solar-power-building.jpg";
import carbonImage from "@/assets/carbon-credits-commercial-building.jpg";
import smartImage from "@/assets/smart-building-dashboard.jpg";
import reitImage from "@/assets/reit-yield-dashboard.jpg";
import modularImage from "@/assets/commercial-facade-modern.jpg";
import yieldImage from "@/assets/rental-yield-analytics.jpg";
import certificationImage from "@/assets/sustainable-growth-building.jpg";
import esgUIImage from "@/assets/esg-dashboard.jpg";
import contactImage from "@/assets/contact-hero-image.jpg";
const Homepage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    interestArea: "",
    location: "",
    message: ""
  });
  const corePillars = [{
    icon: DollarSign,
    title: "Fund Raising",
    description: "Empowering real estate ventures through strategic capital partnerships and investor relations. We align financial growth with sustainable development, ensuring long-term asset value and investor confidence.",
    image: investorImage,
    link: "/reit-invest",
    cta: "View Investment Models"
  }, {
    icon: MapPin,
    title: "Land Assets",
    description: "Curating prime land parcels with high appreciation potential. Our strategic acquisitions focus on location, connectivity, and zoning to maximize future commercial and industrial opportunities.",
    image: landImage,
    link: "/land-assets",
    cta: "Explore Land Opportunities"
  }, {
    icon: Building2,
    title: "Built Assets",
    description: "Developing high-quality, energy-efficient commercial buildings that combine design excellence with operational sustainability. Every project is engineered for durability and performance.",
    image: buildingImage,
    link: "/build-asset",
    cta: "View Build Specifications"
  }, {
    icon: Home,
    title: "Selling Assets",
    description: "Offering tailor-made sales solutions for investors and clients. We bridge opportunities through data-driven marketing, maximizing ROI, and seamless transaction experiences.",
    image: salesImage,
    link: "/sell",
    cta: "Sell or Buy Commercial Property"
  }, {
    icon: Hammer,
    title: "Rental / Lease Assets",
    description: "Delivering flexible rental and leasing models for long-term business occupancy. Our portfolio includes ready-to-move spaces designed for modern commercial needs.",
    image: retailImage,
    link: "/rent-lease-asset",
    cta: "Browse Lease Options"
  }, {
    icon: Car,
    title: "Commercial Infrastructure",
    description: "Building integrated commercial ecosystems that fuel business growth. From logistics parks to tech hubs, we create future-ready spaces that empower industries.",
    image: infrastructureImage,
    link: "/projects",
    cta: "Explore Infrastructure Features"
  }];
  const advancedCapabilities = [{
    icon: Sun,
    title: "Solar Power Generation",
    description: "On-site renewable energy with grid integration",
    image: solarImage
  }, {
    icon: Leaf,
    title: "Carbon Credit Monetization",
    description: "ESG compliance with revenue generation",
    image: carbonImage
  }, {
    icon: Brain,
    title: "AI-Powered Building Management",
    description: "Smart systems for energy optimization",
    image: smartImage
  }, {
    icon: BarChart3,
    title: "REIT-Grade Dashboards",
    description: "Investor reporting and ESG tracking",
    image: reitImage
  }];
  const valuePropositions = [{
    icon: Shield,
    title: "Modular Design Logic",
    description: "Scalable and flexible commercial spaces"
  }, {
    icon: Users,
    title: "Investor-Grade Clarity",
    description: "Transparent reporting and compliance"
  }, {
    icon: Leaf,
    title: "ESG & Sustainability Focus",
    description: "Environmental responsibility with profitability"
  }, {
    icon: Zap,
    title: "Seamless Integration",
    description: "Design, technology, and business logic unified"
  }];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };
  return <div className="Homepage_Container">
      {/* Hero Banner */}
      <section className="Homepage_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Commercial Infrastructure Asset" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Commercial Real Estate Excellence
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Commercial Infrastructure Asset
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent"> For Modern Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Find financial peace with Comminfra — secure asset appreciation and rental income that delivers strong returns within 10 years.
          </p>
          
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group" asChild>
            <Link to="/projects">
              Explore Our Platform
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="Homepage_CorePillars py-20 bg-gradient-section-1 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Strategic Pillars</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive commercial real estate solutions driving sustainable growth and investor success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => <Card key={index} className="PillarCard_Container group relative overflow-hidden backdrop-blur-sm bg-card/80 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="relative overflow-hidden">
                  <img src={pillar.image} alt={pillar.title} className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    <pillar.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                </div>
                <CardHeader className="space-y-3 pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground line-clamp-5">
                    {pillar.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={pillar.link}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-xl">
                      {pillar.cta}
                    </Button>
                  </Link>
                </CardContent>
                {/* Glassmorphism overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>)}
          </div>
        </div>
      </section>

      {/* Investment-Finance Peace-Solution Section */}
      <section className="Homepage_ProblemSolving py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-solar rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-solar to-esg bg-clip-text text-primary-foreground">Investment-Financial Peace-Solution</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300">
              Secure your financial future with our comprehensive investment solutions
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Location Advantage */}
            <Card className="group overflow-hidden border-2 border-primary/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-card/95 via-card/90 to-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 animate-fade-in">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold transition-colors text-secondary-foreground">
                    Location Advantage
                  </h3>
                  
                </div>
              </CardContent>
            </Card>

            {/* Long-Term Rentals */}
            <Card className="group overflow-hidden border-2 border-solar/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-card/95 via-card/90 to-solar/10 hover:shadow-2xl hover:shadow-solar/20 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
            animationDelay: '0.1s'
          }}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-solar/30 to-solar/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-solar/50">
                    <Clock className="h-10 w-10 text-solar" />
                  </div>
                  <h3 className="text-2xl font-bold transition-colors text-secondary-foreground">
                    Long-Term Rentals
                  </h3>
                  
                </div>
              </CardContent>
            </Card>

            {/* International Clients */}
            <Card className="group overflow-hidden border-2 border-esg/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-card/95 via-card/90 to-esg/10 hover:shadow-2xl hover:shadow-esg/20 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-esg/30 to-esg/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-esg/50">
                    <Globe className="h-10 w-10 text-esg" />
                  </div>
                  <h3 className="text-2xl font-bold transition-colors text-secondary-foreground">
                    International Clients
                  </h3>
                  
                </div>
              </CardContent>
            </Card>

            {/* Transparent Investments */}
            <Card className="group overflow-hidden border-2 border-primary/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-card/95 via-card/90 to-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
            animationDelay: '0.3s'
          }}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-primary/50">
                    <Shield className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold transition-colors text-secondary-foreground">
                    Transparent Investments
                  </h3>
                  
                </div>
              </CardContent>
            </Card>

            {/* Property Management */}
            <Card className="group overflow-hidden border-2 border-solar/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-card/95 via-card/90 to-solar/10 hover:shadow-2xl hover:shadow-solar/20 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-solar/30 to-solar/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-solar/50">
                    <Building2 className="h-10 w-10 text-solar" />
                  </div>
                  <h3 className="text-2xl font-bold transition-colors text-secondary-foreground">
                    Property Management
                  </h3>
                  
                </div>
              </CardContent>
            </Card>

            {/* Ownership of property */}
            <Card className="group overflow-hidden border-2 border-esg/30 shadow-xl backdrop-blur-sm bg-gradient-to-br from-card/95 via-card/90 to-esg/10 hover:shadow-2xl hover:shadow-esg/20 transition-all duration-500 hover:scale-105 animate-fade-in" style={{
            animationDelay: '0.5s'
          }}>
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-esg/30 to-esg/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-esg/50">
                    <Key className="h-10 w-10 text-esg" />
                  </div>
                  <h3 className="text-2xl font-bold transition-colors text-secondary-foreground">
                    Ownership of property
                  </h3>
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Add-On Capabilities */}
      <section className="Homepage_AdvancedCapabilities py-20 bg-gradient-section-2 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Advanced ESG Capabilities</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Next-generation features for sustainable and profitable commercial development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advancedCapabilities.map((capability, index) => <Card key={index} className="CapabilityCard_Container text-center group hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="relative mb-4">
                    <img src={capability.image} alt={capability.title} className="w-full h-32 object-cover rounded-lg mb-4" />
                    <capability.icon className="absolute top-2 right-2 h-6 w-6 text-white bg-primary/80 rounded p-1" />
                  </div>
                  <h3 className="font-semibold mb-2">{capability.title}</h3>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="Homepage_ValueProposition py-20 bg-gradient-section-3 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Leading commercial real estate development with proven expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valuePropositions.map((prop, index) => <Card key={index} className="ValuePropCard_Container p-6 backdrop-blur-sm bg-card/50 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <prop.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{prop.title}</h3>
                    <p className="text-gray-200">{prop.description}</p>
                  </div>
                </div>
              </Card>)}
          </div>
          <div className="mt-12 text-center">
            <img alt="Modular Architecture" className="w-full max-w-4xl mx-auto rounded-lg shadow-lg" src="/lovable-uploads/78e26bc0-4837-4837-ae92-bb9baf907199.jpg" />
          </div>
        </div>
      </section>

      {/* REIT & Rental Yield Investment Highlights */}
      <section className="Homepage_REITHighlights py-20 bg-gradient-section-4 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">REIT & Rental Yield Investment</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Snapshot of REIT-compatible assets and rental income streams
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <img alt="Rental Yield Analytics" className="w-full rounded-lg shadow-lg" src="/lovable-uploads/b6b8490c-fb08-4235-8552-f22f0d1deae4.jpg" />
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">12.5%</div>
                    <p className="text-sm text-muted-foreground">Average Rental Yield</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Occupancy Rate</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">7 Years</div>
                    <p className="text-sm text-muted-foreground">Avg Lease Tenure</p>
                  </CardContent>
                </Card>
                <Card className="text-center p-4">
                  <CardContent className="pt-4">
                    <div className="text-3xl font-bold text-primary mb-2">8.2%</div>
                    <p className="text-sm text-muted-foreground">Solar Yield</p>
                  </CardContent>
                </Card>
              </div>
              <Link to="/reit-invest">
                <Button className="w-full mt-6">View Investment Opportunities</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & ESG Commitment */}
      

      {/* Contact & Inquiry Portal */}
      <section className="Homepage_ContactPortal py-20 gradient-mesh text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to explore commercial real estate opportunities? Let's start the conversation.
            </p>
            <Button 
              onClick={() => navigate('/contact#contact-form')} 
              className="mt-8 bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
            >
              Contact Us
            </Button>
          </div>
          
        </div>
      </section>
    </div>;
};
export default Homepage;