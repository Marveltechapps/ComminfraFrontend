import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Building2, Utensils, Gem, Briefcase, ShoppingBag, Home, Calendar, RotateCcw, FileText, Settings, Wrench, Puzzle, Brain, Car, Sun, Recycle, Monitor, Upload, CheckCircle, MapPin, Clock, Star, Shield, ArrowRight } from "lucide-react";

// Import images
import leasedRetailInterior from "@/assets/leased-retail-interior.jpg";
import retailFloorInterior from "@/assets/retail-floor-interior.jpg";
import restaurantCommercialInterior from "@/assets/restaurant-commercial-interior.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import solarSmartMeter from "@/assets/solar-smart-meter.jpg";
import leasingProposalForm from "@/assets/leasing-proposal-form.jpg";
import restaurantReadySpace from "@/assets/restaurant-ready-space.jpg";
import elegantJewelryBoutique from "@/assets/elegant-jewelry-boutique.jpg";
import corporateOfficeModern from "@/assets/corporate-office-modern.jpg";
import retailBrandStore from "@/assets/retail-brand-store.jpg";
import lifestyleCenterWellness from "@/assets/lifestyle-center-wellness.jpg";
import longTermLeaseSigning from "@/assets/long-term-lease-signing.jpg";
import popupRetailFlexible from "@/assets/popup-shop-interior.jpg";
import leaseToOwnHandover from "@/assets/lease-to-own-handover.jpg";
import customSpacePlanning from "@/assets/custom-space-planning.jpg";
const RentLeaseAssetPage = () => {
  const [formData, setFormData] = useState({
    tenantType: "",
    location: "",
    leaseDuration: "",
    facilityNeeds: "",
    message: ""
  });
  const tenantTypes = [{
    icon: Utensils,
    title: "Restaurants & Cafés",
    description: "Spaces designed to delight the senses and elevate dining experiences. Warm, inviting interiors for casual dining and fine cuisine. Ambient lighting enhances mood and creates memorable experiences. AI-optimized layouts for foot traffic, operational flow, and customer comfort. Flexible seating arrangements to adapt to group sizes and seasonal events. Large windows and outdoor access maximize natural light and street visibility. Greenery and biophilic elements create calm and a welcoming atmosphere. Kitchen zones integrated for efficiency and smooth service. Perfect for modern cafés, bakeries, bistros, and restaurants. Designed to increase dwell time and customer satisfaction. Spaces can be customized for brand-specific themes and décor. Attention to acoustics, sightlines, and circulation ensures a premium experience. Flexible for pop-up events or seasonal changes. Optimized for visibility, accessibility, and operational ease.",
    color: "from-orange-500/20 to-red-500/20",
    image: restaurantCommercialInterior
  }, {
    icon: Gem,
    title: "Jewellery Stores",
    description: "Elegant spaces crafted for high-value products and premium clientele. Lighting designed to showcase sparkle and brilliance. Display cases arranged for optimum visibility and security. Smooth customer circulation and viewing experience. Minimalist décor enhances focus on jewellery pieces. Flexible shelving and displays for seasonal or promotional items. Strategic window placement boosts street visibility. AI insights for customer flow optimization. Security systems integrated without compromising aesthetics. Ideal for high-end jewellery brands seeking luxury and functionality. Interior materials are durable yet sophisticated — marble, glass, and steel accents. Lighting, layout, and finishes work in harmony to create a lasting impression. Every detail curated to maximize engagement and sales potential.",
    color: "from-yellow-500/20 to-amber-500/20",
    image: elegantJewelryBoutique
  }, {
    icon: Briefcase,
    title: "Corporate Offices",
    description: "Smart workspaces built to boost productivity and employee well-being. Open layouts for collaboration, private zones for focus. Meeting rooms and tech hubs integrated seamlessly. Lighting, ventilation, and acoustics optimized for comfort. Natural materials and greenery create balanced work environments. AI-optimized furniture and room placement for workflow efficiency. Spaces designed to scale with growing teams and corporate needs. Integrated smart office systems enhance operational ease. Premium materials ensure durability and aesthetic appeal. Professional environment that impresses clients and inspires employees. Flexible floor plans accommodate various office types and sizes. Sustainable and efficient designs for modern corporate culture. Optimized for both employee satisfaction and business performance.",
    color: "from-blue-500/20 to-indigo-500/20",
    image: corporateOfficeModern
  }, {
    icon: ShoppingBag,
    title: "Retail Brands",
    description: "Retail spaces designed to maximize brand visibility and customer engagement. Wide aisles allow easy browsing and enhance shopping experience. Lighting showcases products naturally and dramatically. Flexible layouts adapt for seasonal displays and new collections. Strategic storefront placement ensures high footfall. High-quality materials balance luxury and durability. Smart digital signage and tech integrations enrich customer experience. AI-based insights guide product placement and store optimization. Ideal for fashion, lifestyle, electronics, or specialty brands. Spaces are flexible to accommodate brand-specific designs and pop-ups. Enhances brand recall and increases conversion potential. Optimized circulation and sightlines for shopper comfort. Interior finishes convey modern sophistication and prestige.",
    color: "from-purple-500/20 to-pink-500/20",
    image: retailBrandStore
  }, {
    icon: Home,
    title: "Lifestyle Tenants",
    description: "Spaces crafted for experience-driven tenants. Wellness centers, boutique studios, and creative spaces thrive here. Open layouts, natural light, and flexible floorplans enhance utility and comfort. Smart HVAC and lighting create optimal conditions for activities. Designed to foster community interaction and repeat visitation. AI-optimized space planning maximizes usage efficiency. Indoor-outdoor integration creates vibrant energy flow. Materials and finishes ensure durability and aesthetic appeal. Perfect for lifestyle brands, wellness hubs, creative studios, or boutique ventures. Every space is designed for engagement, brand presence, and operational ease. Promotes creativity, health, and vibrant commercial ecosystems. Future-ready, adaptable, and attractive to premium tenants.",
    color: "from-green-500/20 to-emerald-500/20",
    image: lifestyleCenterWellness
  }];
  const leaseModels = [{
    icon: Calendar,
    title: "Long-Term Leasing",
    description: "5–15 years",
    features: ["Stable rates", "Priority maintenance", "Customization rights"],
    image: longTermLeaseSigning
  }, {
    icon: RotateCcw,
    title: "Short-Term / Pop-Up",
    description: "3 months - 2 years",
    features: ["Flexible terms", "Quick setup", "Minimal deposits"],
    image: popupRetailFlexible
  }, {
    icon: FileText,
    title: "Lease-to-Own Options",
    description: "Buy after lease period",
    features: ["Equity building", "Purchase options", "Tax benefits"],
    image: leaseToOwnHandover
  }, {
    icon: Settings,
    title: "Custom Structuring",
    description: "For anchor tenants",
    features: ["Bespoke terms", "Revenue sharing", "Co-development"],
    image: customSpacePlanning
  }];
  const facilities = [{
    icon: Wrench,
    title: "Standard Facilities",
    description: "HVAC, fire safety, power backup, water",
    color: "from-blue-500/10 to-cyan-500/10"
  }, {
    icon: Puzzle,
    title: "Flexible Facilities",
    description: "Fit-out customization, branding zones, tech upgrades",
    color: "from-purple-500/10 to-violet-500/10"
  }, {
    icon: Brain,
    title: "AI-Adaptive Interiors",
    description: "Smart lighting, occupancy sensors",
    color: "from-emerald-500/10 to-teal-500/10"
  }, {
    icon: Car,
    title: "Car Parking",
    description: "Dedicated and shared zones",
    color: "from-orange-500/10 to-red-500/10"
  }];
  const esgFeatures = [{
    icon: Sun,
    title: "Solar-powered Infrastructure",
    description: "Renewable energy integration"
  }, {
    icon: Recycle,
    title: "ESG-compliant Interiors",
    description: "Carbon credit eligibility"
  }, {
    icon: Monitor,
    title: "Smart Building Management",
    description: "IoT-enabled optimization"
  }, {
    icon: FileText,
    title: "REIT-grade Documentation",
    description: "Investor-ready dashboards"
  }];
  const featuredListings = [{
    title: "Premium Retail Space - CBD",
    location: "Downtown Business District",
    size: "2,500 sq ft",
    lease: "₹45,000/month",
    features: ["Street facing", "24/7 security", "Parking included"],
    badge: "Featured"
  }, {
    title: "Restaurant Space - Mall Adjacent",
    location: "High Street Commercial",
    size: "3,200 sq ft",
    lease: "₹65,000/month",
    features: ["Kitchen ready", "Outdoor seating", "High footfall"],
    badge: "New"
  }, {
    title: "Office Floor - Tech Hub",
    location: "IT Corridor",
    size: "5,000 sq ft",
    lease: "₹85,000/month",
    features: ["Furnished", "Metro connectivity", "Cafeteria access"],
    badge: "Premium"
  }];
  const faqs = [{
    question: "What's included in standard lease packages?",
    answer: "Standard lease packages include HVAC systems, fire safety equipment, power backup, water supply, basic security systems, and common area maintenance. Parking allocation and waste management services are also included."
  }, {
    question: "Can I customize interiors?",
    answer: "Yes, we offer flexible interior customization options. Tenants can modify layouts, install branding elements, upgrade lighting systems, and add specialized equipment based on their business needs, subject to building regulations."
  }, {
    question: "What's the process for site visits and approvals?",
    answer: "Schedule a site visit through our portal, complete the tenant application form, provide business documentation, undergo credit verification, and receive lease approval within 5-7 business days."
  }];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="rent_lease_hero_banner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={leasedRetailInterior} alt="Rent or Lease Commercial Properties" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in p-4">
            Flexible Leasing Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in text-slate-50">
            Rent or Lease High-Value Commercial Properties
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent">
              {" "}
              Tailored to Your Business
            </span>
          </h1>

          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group" asChild>
            <Link to="/projects">
              Explore Available Spaces
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Find Your Perfect Space - Tenant Type Segmentation */}
      <section className="tenant_type_segmentation_section py-24 bg-gradient-to-b from-white via-secondary/5 to-white">
        <div className="container px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-solar/20 text-primary border-none font-semibold px-6 py-2">
              Premium Commercial Spaces
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-commercial to-solar bg-clip-text text-transparent">
              Commercial Spaces Tailored for Your Business Type
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover commercial spaces designed for your specific business needs
            </p>
          </div>

          <div className="space-y-16">
            {tenantTypes.map((type, index) => <Card key={index} className="group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 bg-white border-none rounded-3xl overflow-hidden animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative h-96 md:h-auto overflow-hidden ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                    <img src={type.image} alt={type.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent"></div>
                    <div className="absolute top-8 left-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors duration-500">
                        <type.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex flex-col justify-center p-10 md:p-14 ${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                    <Badge className="w-fit mb-4 bg-gradient-to-r from-primary/10 to-solar/10 text-primary border-none font-semibold px-4 py-1.5">
                      Category {index + 1}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary group-hover:text-commercial transition-colors duration-500">
                      {type.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                      {type.description}
                    </p>
                    <Button size="lg" className="w-fit bg-gradient-to-r from-primary to-commercial hover:from-commercial hover:to-primary text-white px-8 py-6 rounded-full group-hover:shadow-lg transition-all duration-500" asChild>
                      <Link to="/projects">
                        View Space
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Lease Models & Duration */}
      <section className="lease_models_duration_section py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text p-4 text-primary">
              Choose Your Ideal Lease Duration & Structure
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the lease structure that fits your business strategy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaseModels.map((model, index) => <Card key={index} className="lease_model_card h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-secondary/5 backdrop-blur-sm overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img src={model.image} alt={model.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm">
                    <model.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-center text-lg">{model.title}</CardTitle>
                  <CardDescription className="text-center text-primary font-semibold">
                    {model.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Tenant Requirements & Facility Options */}
      <section className="facility_options_section py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-primary">
              Premium Amenities & Facilities Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              State-of-the-art amenities designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => <Card key={index} className="facility_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <facility.icon className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{facility.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* ESG Features */}
      <section className="esg_features_section py-20 bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-primary">
              ESG-Compliant & Smart Building Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ESG-compliant spaces with cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {esgFeatures.map((feature, index) => <Card key={index} className="esg_feature_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      

      {/* FAQs */}
      <section className="tenant_faq_section py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text p-4 text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">Everything you need to know about leasing with us</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-gradient-to-r from-background via-background/90 to-primary/5 backdrop-blur-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact & Leasing Portal */}
      <section className="contact_leasing_portal_section py-20 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${leasingProposalForm})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 backdrop-blur-sm" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Submit Your Leasing Inquiry Today</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get personalized recommendations and connect with our leasing experts
              </p>
            </div>

            <div className="text-center">
              <Link to="/contact#contact-form">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default RentLeaseAssetPage;