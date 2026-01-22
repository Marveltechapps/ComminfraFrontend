import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Building2, FileText, Home, Sun, Recycle, Brain, HandshakeIcon, TrendingUp, PieChart, BarChart3, DollarSign, Target, Users, Upload, Calculator, Zap, Leaf, Shield, Globe, ArrowRight } from "lucide-react";

// Import images
import buildRevenueDashboard from "@/assets/build-revenue-dashboard.jpg";
import propertyHandover from "@/assets/property-handover.jpg";
import sustainableGrowthBuilding from "@/assets/sustainable-growth-building.jpg";
import sitePlanRevenue from "@/assets/site-plan-revenue.jpg";
import investorHandshake from "@/assets/investor-handshake.jpg";
import propertySalesAerial from "@/assets/property-sales-aerial.jpg";
import leaseCorporateTenants from "@/assets/lease-corporate-tenants.jpg";
import rentalIncomeHighrise from "@/assets/rental-income-highrise.jpg";
import smartInfrastructureBlueprint from "@/assets/smart-infrastructure-blueprint.jpg";
import modernCommercialBuilding from "@/assets/modern-commercial-building.jpg";
import reitYieldDashboard from "@/assets/reit-yield-dashboard.jpg";
import jointDevelopmentPartnership from "@/assets/joint-development-modern.jpg";
const BusinessRevenueModelPage = () => {
  const [formData, setFormData] = useState({
    investorType: "",
    assetClassInterest: "",
    esgPreferences: "",
    expectedROI: "",
    message: ""
  });
  const primaryRevenueStreams = [{
    icon: Building2,
    title: "Property Sales",
    description: "Our Property Sales are the cornerstone of our revenue strategy — delivering high-value, turnkey commercial spaces to investors and end-users. We acquire, develop, and market properties with premium specifications and superior location advantage. Every project undergoes meticulous planning, architectural excellence, and compliance verification. Sales strategies are designed to maximize ROI for both developers and investors. We segment properties by type — office towers, retail outlets, mixed-use developments — ensuring targeted marketing and optimal visibility. Data-driven market analysis ensures competitive pricing and investor confidence. High-quality marketing assets and 3D visualizations enhance buyer engagement. Investor support includes legal, financial, and post-sale guidance. Sales revenue is accelerated through strategic timing, premium positioning, and strong market demand. By selling property floor by floor or as complete blocks, we optimize financial returns. Every transaction is backed by transparency, trust, and high-end service standards.",
    image: propertySalesAerial
  }, {
    icon: FileText,
    title: "Lease Agreements",
    description: "Our Lease Agreements form a stable, recurring revenue source — allowing businesses to occupy premium spaces with flexible terms. Properties are strategically leased to retail, office, and lifestyle tenants for optimal income. Leasing solutions are customized to tenant size, duration, and operational needs. Legal and financial frameworks ensure smooth, long-term occupancy. Leases include high-quality infrastructure — parking, utilities, HVAC, security, and smart building systems. Tenant onboarding and support are fully managed for seamless integration. Lease revenue provides predictable cash flow while preserving asset value. Flexible options accommodate startups, corporates, and lifestyle brands alike. We monitor occupancy and renewals, maximizing long-term profitability. Sustainability and smart building features enhance tenant satisfaction and reduce operational costs. Revenue growth is amplified through strategic lease pricing, market analysis, and targeted marketing.",
    image: leaseCorporateTenants
  }, {
    icon: Home,
    title: "Rental Income",
    description: "Our Rental Income strategy ensures continuous cash flow from high-value commercial spaces. Properties are rented to office tenants, retail stores, and lifestyle businesses. We maintain and manage buildings to ensure operational excellence and tenant satisfaction. Smart rental systems track occupancy, payments, and lease terms efficiently. Dynamic pricing models optimize revenue based on location, demand, and market trends. Rented spaces retain premium asset value while providing recurring returns. AI-based insights assist in tenant selection, risk management, and lease optimization. Amenities such as parking, connectivity, and building services enhance tenant retention. Rental income complements property sales and lease agreements for a balanced revenue model. Investment in well-located, modern commercial properties maximizes rental yield potential. Our approach ensures a long-term, predictable, and scalable income stream.",
    image: rentalIncomeHighrise
  }];
  const sustainabilityStreams = [{
    icon: Sun,
    title: "Solar Power Generation",
    description: "On-site energy production",
    metrics: "₹2.5L/month avg",
    impact: "1,200 MW generated annually"
  }, {
    icon: Recycle,
    title: "Carbon Credit Monetization",
    description: "ESG-aligned income from green infrastructure",
    metrics: "₹8.5L/year",
    impact: "500 tons CO2 offset"
  }];
  const advancedRevenue = [{
    icon: Brain,
    title: "Smart Building Services",
    description: "AI, IoT, BMS optimization services",
    metrics: "₹15L setup + ₹3L/month",
    features: ["Energy optimization", "Predictive maintenance", "Tenant analytics"],
    image: modernCommercialBuilding
  }, {
    icon: PieChart,
    title: "REIT-Compatible Rental Yield",
    description: "Institutional-grade investment packaging",
    metrics: "8-12% annual yield",
    features: ["Professional management", "Quarterly distributions", "Tax efficiency"],
    image: reitYieldDashboard
  }, {
    icon: HandshakeIcon,
    title: "Joint Development Partnerships",
    description: "Asset enhancement collaborations",
    metrics: "20-30% profit sharing",
    features: ["Risk sharing", "Expertise leverage", "Market expansion"],
    image: jointDevelopmentPartnership
  }];
  const revenueMetrics = [{
    label: "Total Portfolio Value",
    value: "₹450 Cr",
    growth: "+18%"
  }, {
    label: "Annual Revenue",
    value: "₹85 Cr",
    growth: "+22%"
  }, {
    label: "Average ROI",
    value: "14.2%",
    growth: "+3.1%"
  }, {
    label: "ESG Revenue Share",
    value: "12%",
    growth: "+85%"
  }];
  const faqs = [{
    question: "How is solar revenue calculated?",
    answer: "Solar revenue is calculated based on energy generation capacity, grid feed-in tariffs, and power purchase agreements. Our installations typically generate 1,200 MW annually, with revenue ranging from ₹2-4 lakhs per month depending on capacity and local tariffs."
  }, {
    question: "What's the lease tenure range?",
    answer: "We offer flexible lease tenures ranging from 3 months for pop-up spaces to 15 years for anchor tenants. Most corporate leases are structured for 5-10 years with built-in escalation clauses and renewal options."
  }, {
    question: "Can I invest in rental-yielding assets?",
    answer: "Yes, we offer REIT-compatible investment opportunities with professional management, quarterly distributions, and annual yields of 8-12%. Minimum investment starts at ₹25 lakhs for institutional-grade assets."
  }];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="revenue_model_hero_banner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="How We Generate Revenue" className="w-full h-full object-cover" src="/lovable-uploads/339d45fd-d791-4e76-8636-7f2e068fb326.jpg" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Business Revenue Model
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            How We Generate
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent text-8xl font-serif">
              {" "}
              Revenue
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            Imagine owning a freehold property that appreciates over time, bringing you continuous rental income and growing your wealth effortlessly.
          </p>
          
        </div>
      </section>

      {/* Primary Revenue Streams */}
      <section className="primary_revenue_streams_section py-24 bg-gradient-section-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Primary Revenue Streams</h2>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-300">
              Core income generators driving sustainable business growth
            </p>
          </div>

          <div className="space-y-24">
            {primaryRevenueStreams.map((stream, index) => <div key={index} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center group animate-fade-in`} style={{
            animationDelay: `${index * 0.2}s`
          }}>
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl shadow-2xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={stream.image} alt={stream.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/90 to-secondary/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <stream.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6 text-sidebar-ring">
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {stream.title}
                    </h3>

                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full" />

                    <p className="text-lg md:text-xl leading-relaxed text-gray-300">{stream.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Investment Plan Section */}
      <section className="investment_plan_section py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-solar/10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-solar to-esg rounded-full blur-3xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-gradient-to-r from-primary to-secondary text-white border-0 font-semibold text-lg px-6 py-2">
              Your Path to Financial Peace
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-solar bg-clip-text text-primary">
              Our Investment Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these 3 simple steps to secure your financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-background hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-blue-500/20">01</div>
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                  Invest Securely
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Start your journey with us. Invest in premium commercial properties with complete transparency and security.
                </p>
                <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <span>Secure & Transparent</span>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-emerald-500/10 via-emerald-400/5 to-background hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in" style={{
            animationDelay: '0.2s'
          }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-emerald-500/20">02</div>
                </div>
                <CardTitle className="text-2xl group-hover:text-emerald-600 transition-colors">
                  Receive Returns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Get your invested amount plus attractive interest within 10 years. Guaranteed returns you can count on.
                </p>
                <div className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <span>Within 10 Years</span>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-background hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-fade-in" style={{
            animationDelay: '0.4s'
          }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-amber-500/20">03</div>
                </div>
                <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors">
                  Enjoy Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Own freehold property and enjoy steady rental income for up to 30 years. Long-term wealth creation.
                </p>
                <div className="mt-6 flex items-center gap-2 text-amber-600 font-semibold">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  <span>Up to 30 Years</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            
          </div>
        </div>
      </section>

      {/* Sustainability Revenue Streams */}
      <section className="sustainability_revenue_section py-20 bg-gradient-section-2">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent p-4">
              Sustainability Revenue Streams
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              ESG-aligned income from green infrastructure and sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sustainabilityStreams.map((stream, index) => <Card key={index} className="sustainability_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stream.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors mb-2">
                        {stream.title}
                      </CardTitle>
                      <CardDescription>{stream.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="text-sm font-medium">Revenue:</span>
                    <span className="text-lg font-bold text-green-600">{stream.metrics}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <span className="text-sm font-medium">ESG Impact:</span>
                    <span className="text-sm font-semibold text-blue-600">{stream.impact}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Advanced Add-On Revenue */}
      <section className="advanced_revenue_section py-20 gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent p-4">
              Advanced Revenue Opportunities
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300">
              Technology-driven and partnership-based income streams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advancedRevenue.map((revenue, index) => <Card key={index} className="advanced_revenue_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-secondary/5 backdrop-blur-sm overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img src={revenue.image} alt={revenue.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center backdrop-blur-sm">
                    <revenue.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                    {revenue.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{revenue.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="text-secondary border-secondary/50 font-semibold">
                      {revenue.metrics}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {revenue.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                        {feature}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Revenue Dashboard */}

      {/* FAQs */}

      {/* Contact & Investor Inquiry */}
    </div>;
};
export default BusinessRevenueModelPage;