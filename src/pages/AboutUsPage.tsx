import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Target, Users, Handshake, MapPin, Wrench, ShoppingCart, Home, Truck, Sun, Leaf, Brain, BarChart3, ArrowRight, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import indiaCommercialEvening from "@/assets/india-commercial-evening-hd.jpg";
import visionaryInfrastructure from "@/assets/visionary-infrastructure.jpg";
import rooftopSolarBuilding from "@/assets/rooftop-solar-building.jpg";
import smartBuildingDashboard from "@/assets/smart-building-dashboard.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import leadershipTeamMeeting from "@/assets/leadership-team-meeting.jpg";
import strategicExcellence from "@/assets/strategic-excellence.jpg";
const AboutUsPage = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen gradient-mesh">
      {/* Hero Section */}
      <section className="AboutUs_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={indiaCommercialEvening} alt="Building India's Future" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            About CommInfra
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Building India's Future 
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent"> We're Proud To Be Part Of This Journey</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            At Comminfra, we understand your need for secure, long-term property investments. We have helped hundreds generate steady returns and build wealth with confidence.
          </p>
          
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="AboutUs_VisionMission py-20 bg-gradient-section-1 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="VisionCard glass-panel p-8 rounded-xl border border-border/50">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-slate-50">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-300">
                  To create scalable, sustainable commercial infrastructure across India that sets new standards for environmental responsibility and investor returns.
                </p>
              </div>
              
              <div className="MissionCard glass-panel p-8 rounded-xl border border-border/50">
                <div className="flex items-center mb-4">
                  <Building2 className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-slate-50">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-300">
                  Integrate smart design, solar power, and REIT-grade clarity into every asset we develop, ensuring maximum value for all stakeholders.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img alt="Visionary sustainable infrastructure" className="w-full rounded-xl shadow-strong hover-scale" src="/lovable-uploads/e96eac2b-6526-403b-a3d2-f529251289e1.jpg" />
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="bg-success/20 text-success px-3 py-1 rounded-full text-sm font-medium">
                  ESG Aligned
                </div>
                <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  REIT Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="AboutUs_WhatWeDo py-20 bg-gradient-section-2 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">
              What We Do
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Comprehensive commercial real estate solutions powered by innovation and sustainability
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Handshake className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fundraising & REIT Alignment</CardTitle>
                <CardDescription>
                  Institutional partnerships and investment models designed for maximum returns
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Prime Land Acquisition</CardTitle>
                <CardDescription>
                  Strategic acquisition in prime commercial zones with high growth potential
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>ESG-Compliant Development</CardTitle>
                <CardDescription>
                  Architecturally rich, structurally sound assets with sustainability at the core
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <ShoppingCart className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Asset Sales & Acquisition</CardTitle>
                <CardDescription>
                  Floor-wise or full asset sales with value-added acquisition strategies
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Flexible Leasing Models</CardTitle>
                <CardDescription>
                  Customized leasing for restaurants, retail, offices, and lifestyle tenants
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="WhatWeDoCard hover-scale glass-panel border-border/50">
              <CardHeader>
                <Sun className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Solar & Carbon Monetization</CardTitle>
                <CardDescription>
                  Revenue generation through solar power and carbon credit programs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

      {/* Development Philosophy Section */}
      <section className="AboutUs_Philosophy py-20 bg-gradient-section-3 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">
              Our Development Philosophy
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-400">
              Four core principles that drive every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-50">Modular Design Logic</h3>
              <p className="text-gray-400">
                Scalable, adaptable designs that grow with changing market needs
              </p>
            </div>
            
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-50">AI-Adaptive Infrastructure</h3>
              <p className="text-gray-400">
                Smart systems that optimize performance and reduce operational costs
              </p>
            </div>
            
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-50">ESG-First Approach</h3>
              <p className="text-gray-400">
                Environmental, social, and governance principles embedded in every decision
              </p>
            </div>
            
            <div className="PhilosophyCard text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-50">Investor-Grade Transparency</h3>
              <p className="text-gray-400">
                Real-time dashboards and comprehensive reporting for all stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Carousel */}
      <section className="AboutUs_CorePillars py-20 bg-gradient-section-4 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">
              Core Pillars of Our Platform
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-slate-300">
              Six strategic pillars that form the foundation of our comprehensive platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Handshake className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Fund Raising</CardTitle>
                <CardDescription>
                  REIT-aligned investment models and institutional partnerships
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Land Assets</CardTitle>
                <CardDescription>
                  Prime commercial plots in high-growth urban corridors
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Built Assets</CardTitle>
                <CardDescription>
                  Sustainable, architecturally rich commercial developments
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <ShoppingCart className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Selling Assets</CardTitle>
                <CardDescription>
                  Strategic asset sales and value-added acquisitions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Home className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Rental / Lease Assets</CardTitle>
                <CardDescription>
                  Flexible leasing solutions for diverse commercial needs
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="PillarCard hover-scale neumorphic-card">
              <CardHeader className="text-center">
                <Truck className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Infrastructure Assets</CardTitle>
                <CardDescription>
                  Smart utilities, solar systems, and connectivity solutions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            
          </div>
        </div>
      </section>

      {/* Leadership & Team Section */}
      <section className="AboutUs_Leadership py-20 bg-gradient-section-1 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50">
              Leadership & Team
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-slate-300">
              Strategic expertise in real estate, technology, ESG, and finance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg">CEO & Founder</CardTitle>
                <CardDescription>
                  Strategic vision and market leadership
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg">CTO</CardTitle>
                <CardDescription>
                  Technology innovation and platform development
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-success/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-10 w-10 text-success" />
                </div>
                <CardTitle className="text-lg">ESG Head</CardTitle>
                <CardDescription>
                  Sustainability strategy and compliance
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="TeamCard hover-scale glass-panel border-border/50">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg">Investment Lead</CardTitle>
                <CardDescription>
                  REIT structuring and investor relations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="relative rounded-xl overflow-hidden">
            <img src={strategicExcellence} alt="Leadership team meeting discussing strategy" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Strategic Excellence
                </h3>
                <p className="text-lg text-gray-700">
                  Our leadership team brings decades of combined experience in commercial real estate, sustainable development, and financial innovation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="investor" size="lg" onClick={() => navigate('/contact#contact-form')}>
              Connect With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact & Inquiry Section */}
      
    </div>;
};
export default AboutUsPage;