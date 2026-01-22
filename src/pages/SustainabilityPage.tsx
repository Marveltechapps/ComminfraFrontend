import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Leaf, Recycle, Building, Droplets, Zap, Sun, Brain, TrendingUp, Users, Shield, BarChart3, Lightbulb, Wind, TreePine, Upload, CheckCircle, Target, Award, Calculator, FileText, Calendar, MapPin, ArrowRight } from "lucide-react";

// Import images
import esgSustainableBuilding from "@/assets/esg-sustainable-commercial-building.jpg";
import energyEfficientFacade from "@/assets/energy-efficient-facade.jpg";
import rainwaterHarvestingSystem from "@/assets/rainwater-harvesting-system.jpg";
import smartBuildingDashboard from "@/assets/smart-building-dashboard.jpg";
import esgDashboard from "@/assets/esg-dashboard.jpg";
import rooftopSolarBuilding from "@/assets/rooftop-solar-building.jpg";
import solarSmartMeter from "@/assets/solar-smart-meter.jpg";
import sustainableGrowthBuilding from "@/assets/sustainable-growth-building.jpg";
import lowCarbonConstruction from "@/assets/low-carbon-construction.jpg";
import smartEnergySystems from "@/assets/smart-energy-systems.jpg";
const SustainabilityPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    esgInterest: "",
    consultationMode: "",
    message: ""
  });
  const greenFeatures = [{
    icon: Recycle,
    title: "Energy-Efficient Design",
    content: ["Our Energy-Efficient Design reduces operational costs while maximizing comfort and productivity.", "Smart orientation and passive solar strategies optimize daylight and thermal efficiency.", "High-performance insulation and glazing maintain interior climate year-round.", "LED and adaptive lighting systems reduce electricity consumption without compromising ambience.", "Energy modeling ensures optimal HVAC operation and low energy wastage.", "Integration of renewable energy sources, such as rooftop solar panels, lowers reliance on non-renewable power.", "Automated shading systems respond to sunlight for comfort and efficiency.", "Intelligent building management systems monitor and optimize energy usage.", "Energy-efficient design improves tenant satisfaction and boosts property valuation.", "Sustainable orientation and design choices reduce the building's carbon footprint.", "We combine aesthetics with function — buildings that perform beautifully and efficiently."],
    color: "from-green-500/20 to-emerald-500/20",
    image: energyEfficientFacade
  }, {
    icon: Building,
    title: "Low Carbon Footprint",
    content: ["Our Low Carbon Footprint strategies minimize environmental impact from construction to operation.", "Use of recycled and low-emission building materials reduces embodied carbon.", "Energy-efficient construction techniques cut emissions during build phase.", "Carbon tracking systems help monitor emissions in real time.", "Sustainable sourcing ensures compliance with global environmental standards.", "Green spaces, terraces, and vertical gardens improve air quality and reduce heat islands.", "Buildings designed with lifecycle sustainability in mind — from planning to operation.", "Reduced energy and material consumption lowers operational carbon emissions.", "Optimized transportation access reduces carbon associated with commuting.", "Smart logistics and waste reduction during construction further cut footprint.", "Every building embodies responsible, low-impact urban growth."],
    color: "from-blue-500/20 to-cyan-500/20",
    image: lowCarbonConstruction
  }, {
    icon: Droplets,
    title: "Water Management",
    content: ["Our Water Management systems ensure sustainable usage and reduce wastage.", "Rainwater harvesting captures and stores water for landscaping and operational use.", "Greywater recycling reduces dependence on municipal water supply.", "Smart irrigation systems monitor soil moisture and optimize water delivery.", "Low-flow fixtures and water-efficient appliances conserve resources.", "Integrated sensors detect leaks and prevent water loss.", "Water-saving design enhances long-term operational efficiency and reduces costs.", "Sustainable landscaping improves biodiversity and mitigates urban heat.", "Water management solutions are tailored to local climate and regulations.", "Every drop is accounted for, ensuring responsible water stewardship.", "Buildings perform efficiently while maintaining comfort and aesthetics."],
    color: "from-blue-400/20 to-teal-500/20",
    image: rainwaterHarvestingSystem
  }, {
    icon: Zap,
    title: "Smart Energy Systems",
    content: ["Our Smart Energy Systems integrate renewable energy, storage, and intelligent control.", "Solar panels generate clean, renewable electricity onsite.", "Energy storage solutions ensure reliable power and peak-shaving capabilities.", "Building management systems optimize energy use across lighting, HVAC, and appliances.", "IoT sensors provide real-time monitoring and predictive maintenance alerts.", "AI-driven analytics reduce operational costs and improve sustainability.", "Smart meters track energy consumption per zone for efficiency audits.", "Dynamic load balancing maximizes renewable energy use.", "Integration with grid systems allows energy trading or net-zero operation.", "Sustainable technology meets operational needs without sacrificing comfort.", "Future-ready systems ensure long-term ROI and environmental responsibility."],
    color: "from-purple-500/20 to-violet-500/20",
    image: smartEnergySystems
  }];
  const esgPillars = [{
    icon: Leaf,
    title: "Environmental",
    description: "Solar power, waste reduction, carbon neutrality",
    metrics: ["40% Energy Reduction", "100% Renewable Power", "Carbon Neutral"],
    color: "from-green-500/20 to-emerald-500/20"
  }, {
    icon: Users,
    title: "Social",
    description: "Inclusive design, wellness zones, community spaces",
    metrics: ["Accessible Design", "Wellness Certified", "Community Impact"],
    color: "from-blue-500/20 to-cyan-500/20"
  }, {
    icon: Shield,
    title: "Governance",
    description: "Compliance, transparency, REIT-grade reporting",
    metrics: ["100% Compliance", "ESG Certified", "Transparent Reporting"],
    color: "from-purple-500/20 to-violet-500/20"
  }];
  const solarMetrics = [{
    icon: Sun,
    title: "Solar Capacity",
    value: "2.5 MW",
    description: "Installed rooftop solar power"
  }, {
    icon: Zap,
    title: "Energy Generated",
    value: "3.2 GWh",
    description: "Annual clean energy production"
  }, {
    icon: TrendingUp,
    title: "Cost Savings",
    value: "₹45L",
    description: "Annual electricity savings"
  }, {
    icon: Leaf,
    title: "CO2 Avoided",
    value: "2,100 tons",
    description: "Annual carbon emissions reduced"
  }];
  const carbonCredits = [{
    icon: Target,
    title: "Emission Reduction",
    value: "65%",
    description: "Below industry baseline"
  }, {
    icon: Award,
    title: "Credits Generated",
    value: "1,850",
    description: "Verified carbon credits annually"
  }, {
    icon: Calculator,
    title: "Revenue Generated",
    value: "₹18.5L",
    description: "Annual carbon credit income"
  }];
  const advancedCapabilities = [{
    icon: Brain,
    title: "AI Energy Management",
    description: "Machine learning algorithms optimize energy consumption in real-time",
    features: ["Predictive analytics", "Automated controls", "Performance optimization"]
  }, {
    icon: BarChart3,
    title: "ESG Dashboards",
    description: "Real-time sustainability metrics for investors and stakeholders",
    features: ["Live ESG tracking", "Impact visualization", "Compliance monitoring"]
  }, {
    icon: FileText,
    title: "REIT Sustainability Reporting",
    description: "Investment-grade sustainability documentation and certification",
    features: ["REIT compliance", "ESG certification", "Investor reporting"]
  }];
  const faqs = [{
    question: "How are carbon credits calculated and monetized?",
    answer: "Carbon credits are calculated based on verified emission reductions compared to industry baselines. We work with certified agencies to measure, verify, and monetize carbon savings through accredited carbon markets, generating additional revenue streams for our properties."
  }, {
    question: "What ESG certifications do your properties achieve?",
    answer: "Our properties target LEED Gold/Platinum, BREEAM Excellent, and GRIHA 5-star certifications. We also pursue specialized certifications like WELL Building Standard for health and wellness, and are working towards net-zero carbon certifications."
  }, {
    question: "How do tenants benefit from solar power installations?",
    answer: "Tenants enjoy reduced electricity costs through our solar power sharing model. Depending on the lease structure, tenants can save 15-30% on energy costs while contributing to their own sustainability goals and corporate ESG commitments."
  }, {
    question: "What is the ROI on sustainability investments?",
    answer: "Sustainability features typically show 12-18% IRR through energy savings, carbon credit revenue, premium rents, and higher asset valuations. Green buildings also enjoy lower vacancy rates and attract ESG-focused tenants willing to pay premium rents."
  }];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-green-500/5">
      {/* Hero Section */}
      <section className="sustainability_hero_banner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Green, Smart, and Profitable" className="w-full h-full object-cover" src="/lovable-uploads/0119f867-4cc3-4b3e-a2bb-e34445aee493.jpg" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            ESG & Sustainability Excellence
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            We Build for Tomorrow
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent font-serif">
              {" "}
              Green, Smart, and Profitable
            </span>
          </h1>

          
        </div>
      </section>

      {/* Green Building Features */}
      <section className="green_features_section py-20 bg-gradient-to-b from-background to-green-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparentv p-4">
              Sustainable Building Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge green technologies and sustainable design principles for modern commercial spaces
            </p>
          </div>

          <div className="space-y-24">
            {greenFeatures.map((feature, index) => <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center animate-fade-in`}>
                <div className="lg:w-1/2">
                  <Card className="overflow-hidden border-0 shadow-2xl group hover:shadow-3xl transition-all duration-500">
                    <div className="relative h-[400px] overflow-hidden">
                      <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className={`absolute top-6 right-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} backdrop-blur-md border border-white/20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent p-4">
                      {feature.title}
                    </h3>

                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      {feature.content.map((line, lineIndex) => <p key={lineIndex} className="text-base">
                          {line}
                        </p>)}
                    </div>

                    <div className="pt-4"></div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* ESG Integration Pillars */}
      <section className="esg_pillars_section py-20 bg-gradient-to-b from-green-500/5 to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent p-4">
              ESG Integration Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive environmental, social, and governance excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => <Card key={index} className="esg_pillar_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-muted/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${pillar.color} border border-primary/20 shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon className="w-12 h-12 text-primary drop-shadow-sm" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">{pillar.title}</CardTitle>
                  <CardDescription className="text-center">{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {pillar.metrics.map((metric, metricIndex) => <div key={metricIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="font-medium">{metric}</span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Solar Power Generation Metrics */}
      <section className="solar_metrics_section py-20 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${rooftopSolarBuilding})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-orange-500/20 backdrop-blur-sm" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Solar Power Generation</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Clean energy production with measurable impact and returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solarMetrics.map((metric, index) => <Card key={index} className="solar_metric_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background/95 via-background/90 to-yellow-500/10 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <metric.icon className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-600 group-hover:text-yellow-700 transition-colors">
                    {metric.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold">{metric.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Carbon Credit Monetization */}
      <section className="carbon_credits_section py-20 bg-gradient-to-b from-blue-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Carbon Credit Monetization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform sustainability efforts into measurable financial returns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {carbonCredits.map((credit, index) => <Card key={index} className="carbon_credit_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                <CardHeader className="text-center bg-secondary-foreground">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <credit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-600 group-hover:text-green-700 transition-colors">
                    {credit.value}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary-foreground">{credit.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center bg-secondary-foreground">
                  <p className="text-esg">{credit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="advanced_capabilities_section py-20 bg-gradient-to-b from-background to-purple-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent p-4">
              Advanced ESG Capabilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Next-generation sustainability technology and reporting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedCapabilities.map((capability, index) => <Card key={index} className="advanced_capability_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-purple-500/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-center group-hover:text-purple-600 transition-colors">
                    {capability.title}
                  </CardTitle>
                  <CardDescription className="text-center">{capability.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="sustainability_faq_section py-20 bg-gradient-to-b from-purple-500/5 to-background bg-esg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text p-4 text-secondary-foreground">
                Sustainability FAQs
              </h2>
              <p className="text-xl text-secondary-foreground">Everything you need to know about our ESG approach</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-gradient-to-r from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-green-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact & ESG Inquiry Portal */}
    </div>;
};
export default SustainabilityPage;