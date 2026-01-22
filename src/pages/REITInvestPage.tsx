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
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, ShoppingBag, Factory, TreePine, TrendingUp, FileText, Users, Building, PieChart, BarChart3, DollarSign, Target, Sun, Recycle, Leaf, Shield, Upload, CheckCircle, Calendar, MapPin, Star, Award, Calculator, Briefcase, Home, Globe, ArrowRight } from "lucide-react";

// Import images
import premiumCommercialInvestment from "@/assets/premium-commercial-investment.jpg";
import reitExplainerGraphic from "@/assets/reit-explainer-graphic.jpg";
import officeInvestmentAssets from "@/assets/office-investment-assets.jpg";
import retailInvestmentZones from "@/assets/retail-investment-zones.jpg";
import businessParkInvestments from "@/assets/business-park-investments.jpg";
import lifestyleCenterWellness from "@/assets/lifestyle-center-wellness.jpg";
import rentalYieldAnalytics from "@/assets/rental-yield-analytics.jpg";
import rooftopSolarBuilding from "@/assets/rooftop-solar-building.jpg";
import esgDashboard from "@/assets/esg-dashboard.jpg";
import investmentInquiryForm from "@/assets/investment-inquiry-form.jpg";
import attractiveCommercialBuilding from "@/assets/attractive-commercial-building.jpg";
import corporateOccupiers from "@/assets/corporate-occupiers.jpg";
import rentalIncomeHighrise from "@/assets/rental-income-highrise.jpg";
import investorHandshake from "@/assets/investor-handshake.jpg";
import propertyHandover from "@/assets/property-handover.jpg";
import futureVisionsBusiness from "@/assets/future-visions-business-technology.jpg";
import internationalTenantDemand from "@/assets/international-tenant-demand.jpg";
const REITInvestPage = () => {
  const [formData, setFormData] = useState({
    assetType: "",
    location: "",
    yieldPreference: "",
    esgInterest: "",
    message: ""
  });
  const reitBenefits = [{
    icon: DollarSign,
    title: "Passive Income",
    description: "Regular dividend distributions from rental income",
    highlight: "8-12% Annual Yield"
  }, {
    icon: TrendingUp,
    title: "Liquidity",
    description: "Easy entry and exit through listed REIT units",
    highlight: "Listed on NSE"
  }, {
    icon: PieChart,
    title: "Diversification",
    description: "Spread risk across multiple commercial properties",
    highlight: "Portfolio Approach"
  }];
  const assetPortfolio = [{
    icon: Building2,
    title: "Office Spaces",
    description: "Grade A office buildings with corporate tenants",
    yield: "10-12%",
    occupancy: "95%",
    color: "from-blue-500/20 to-indigo-500/20",
    image: officeInvestmentAssets
  }, {
    icon: ShoppingBag,
    title: "Retail Units",
    description: "High-street retail and mall spaces",
    yield: "8-10%",
    occupancy: "92%",
    color: "from-purple-500/20 to-pink-500/20",
    image: retailInvestmentZones
  }, {
    icon: Factory,
    title: "Business Parks",
    description: "IT parks and corporate campuses",
    yield: "11-13%",
    occupancy: "97%",
    color: "from-green-500/20 to-emerald-500/20",
    image: businessParkInvestments
  }, {
    icon: TreePine,
    title: "Lifestyle Centers",
    description: "Mixed-use developments with amenities",
    yield: "9-11%",
    occupancy: "90%",
    color: "from-orange-500/20 to-red-500/20",
    image: lifestyleCenterWellness
  }];
  const yieldMetrics = [{
    label: "Average Annual Yield",
    value: "10.2%",
    growth: "+1.8%",
    icon: Target
  }, {
    label: "Occupancy Rate",
    value: "94%",
    growth: "+2.1%",
    icon: Building
  }, {
    label: "Lease Tenure",
    value: "7.5 years",
    growth: "Stable",
    icon: Calendar
  }, {
    label: "Tenant Retention",
    value: "89%",
    growth: "+5.2%",
    icon: Users
  }];
  const esgHighlights = [{
    icon: Sun,
    title: "Solar Revenue",
    description: "Additional income from rooftop solar installations",
    value: "₹2.5L/month",
    impact: "1,200 MW annually"
  }, {
    icon: Recycle,
    title: "Carbon Credits",
    description: "ESG certification and carbon credit monetization",
    value: "₹8.5L/year",
    impact: "500 tons CO2 offset"
  }, {
    icon: BarChart3,
    title: "ESG Reporting",
    description: "Transparent sustainability metrics for investors",
    value: "A+ Rating",
    impact: "SEBI compliant"
  }];
  const investorPersonas = [{
    icon: Building,
    title: "Institutional Investors",
    description: "Large-scale REIT investments with professional management",
    minInvestment: "₹10 Cr+",
    benefits: ["Portfolio management", "Quarterly reporting", "Tax optimization"]
  }, {
    icon: Briefcase,
    title: "Corporate Buyers",
    description: "Direct asset ownership for operational use",
    minInvestment: "₹5 Cr+",
    benefits: ["Own-use properties", "Capital appreciation", "Tax benefits"]
  }, {
    icon: Home,
    title: "HNIs / Family Offices",
    description: "Diversified real estate portfolio for wealth preservation",
    minInvestment: "₹1 Cr+",
    benefits: ["Passive income", "Portfolio diversification", "Estate planning"]
  }, {
    icon: Globe,
    title: "REIT Funds",
    description: "Specialized fund management for retail investors",
    minInvestment: "₹25L+",
    benefits: ["Professional management", "Liquidity", "Regulatory compliance"]
  }];
  const faqs = [{
    question: "What's the minimum investment amount?",
    answer: "Minimum investment varies by asset type and investor category. For individual REIT units, it starts from ₹25 lakhs. For direct asset ownership, minimum investment is ₹1 crore. Institutional investors can participate from ₹10 crores with enhanced services."
  }, {
    question: "How is rental yield calculated and distributed?",
    answer: "Rental yield is calculated as annual rental income divided by property value. Our assets generate 8-13% yields depending on location and tenant profile. Distributions are made quarterly after deducting management fees and operational expenses."
  }, {
    question: "Are your assets REIT-compliant and SEBI-approved?",
    answer: "Yes, all our investment-grade assets comply with REIT regulations under SEBI guidelines. We maintain minimum occupancy of 80%, lease tenure requirements, and provide transparent financial reporting as mandated by SEBI for REIT structures."
  }, {
    question: "What are the tax implications of REIT investments?",
    answer: "REIT dividends are tax-efficient with 10% TDS for resident investors. Capital gains on REIT units held for more than 36 months qualify for long-term capital gains treatment at 20% with indexation benefits. Consult your tax advisor for personalized advice."
  }];
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-blue-500/5">
      {/* Hero Section */}
      <section className="REITPage_HeroBanner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={premiumCommercialInvestment} alt="Secure Long-Term Returns with REIT-Grade Properties" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            REIT & Investment Opportunities
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in text-slate-50">
            Secure Long-Term Returns
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent text-8xl font-serif">
              {" "}
              with REIT-Grade Properties
            </span>
          </h1>

          
        </div>
      </section>
      {/* Comminfra Investment Benefits Carousel */}
      <section className="investment_benefits_carousel py-20 bg-gradient-to-b from-background to-amber-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-secondary-foreground">
              Comminfra Investment Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure your financial future with strategic commercial real estate investments
            </p>
          </div>

          <Carousel className="max-w-7xl mx-auto" opts={{
          loop: true
        }}>
            <CarouselContent>
              {/* Slide 1: Assured Property Appreciation */}
              <CarouselItem>
                <Card className="border-0 overflow-hidden shadow-2xl bg-gradient-to-br from-background via-background/95 to-amber-500/5">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[400px] md:h-auto">
                      <img src={attractiveCommercialBuilding} alt="Assured Property Appreciation" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <TrendingUp className="w-6 h-6 text-amber-600" />
                        <Badge className="bg-amber-100 text-amber-700 border-amber-200">Benefit 1</Badge>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground"> Property Appreciation</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">Our projects are in prime city locations.Benefit from consistent appreciation of both land and building values, increasing your investment's worth steadily over time. Our expert market analysis ensures your property grows in value, securing your financial future with tangible asset growth.</p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 2: International Tenant Demand */}
              <CarouselItem>
                <Card className="border-0 overflow-hidden shadow-2xl bg-gradient-to-br from-background via-background/95 to-blue-500/5">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[400px] md:h-auto">
                      <img src={internationalTenantDemand} alt="International Tenant Demand" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <Globe className="w-6 h-6 text-blue-600" />
                        <Badge className="bg-blue-100 text-blue-700 border-blue-200">Benefit 2</Badge>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        International Tenant Demand
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Our properties are strategically located to attract reliable international tenants, ensuring higher and consistent rental payments. This global tenant appeal minimizes vacancy rates and maximizes your rental income potential over the long term.
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 3: Guaranteed Long-Term Rental Income */}
              <CarouselItem>
                <Card className="border-0 overflow-hidden shadow-2xl bg-gradient-to-br from-background via-background/95 to-green-500/5">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[400px] md:h-auto">
                      <img alt="Guaranteed Long-Term Rental Income" className="w-full h-full object-cover" src="/lovable-uploads/6963ee9a-8349-4a1a-973a-b86264ec3644.jpg" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <DollarSign className="w-6 h-6 text-green-600" />
                        <Badge className="bg-green-100 text-green-700 border-green-200">Benefit 3</Badge>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Long-Term Rental Income</h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Enjoy stable rental income guaranteed for more than 10 years, giving you a dependable cash flow and financial peace of mind. This long-term rental assurance supports ongoing wealth building and protects you from market fluctuations.
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 4: Transparent Investment Terms */}
              <CarouselItem>
                <Card className="border-0 overflow-hidden shadow-2xl bg-gradient-to-br from-background via-background/95 to-purple-500/5">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[400px] md:h-auto">
                      <img src={futureVisionsBusiness} alt="Transparent Investment Terms" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <Shield className="w-6 h-6 text-purple-600" />
                        <Badge className="bg-purple-100 text-purple-700 border-purple-200">Benefit 4</Badge>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Transparent Investment Terms
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Experience clear and trustworthy investment terms with timely payback of your principal plus interest within 10 years. We prioritize transparency and investor trust through straightforward agreements and consistent communication.
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>

              {/* Slide 5: Freehold Property Ownership */}
              <CarouselItem>
                <Card className="border-0 overflow-hidden shadow-2xl bg-gradient-to-br from-background via-background/95 to-orange-500/5">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-[400px] md:h-auto">
                      <img src={propertyHandover} alt="Freehold Property Ownership" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 mb-4">
                        <Award className="w-6 h-6 text-orange-600" />
                        <Badge className="bg-orange-100 text-orange-700 border-orange-200">Benefit 5</Badge>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                        Freehold Property Ownership
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Gain full control and security with ownership of freehold property, providing you with a valuable, tangible asset. This means you hold the deed outright, with no restrictions on future use or transfer, empowering your long-term investment strategy.
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 hover:bg-white shadow-lg border-2" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/90 hover:bg-white shadow-lg border-2" />
          </Carousel>

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>Swipe or use arrows to explore all benefits</p>
          </div>
        </div>
      </section>

      {/* REIT Explainer Panel */}
      <section className="reit_explainer_section py-20 bg-gradient-to-b from-background to-blue-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              What is a REIT?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real Estate Investment Trusts offer professional real estate investment with regulatory compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto bg-secondary">
            {reitBenefits.map((benefit, index) => <Card key={index} className="reit_benefit_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-blue-500/5 backdrop-blur-sm">
                <CardHeader className="text-center bg-secondary-foreground">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors bg-primary-foreground">{benefit.title}</CardTitle>
                  <CardDescription className="text-primary-foreground">{benefit.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center bg-secondary-foreground">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">{benefit.highlight}</Badge>
                </CardContent>
              </Card>)}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-0 bg-gradient-to-br from-background/95 via-background/90 to-blue-500/5 backdrop-blur-md shadow-xl overflow-hidden">
              <div className="relative h-64">
                <img alt="REIT Structure Explanation" className="w-full h-full object-cover" src="/lovable-uploads/fc6c65fc-7e50-42c1-83bc-f1af1708448f.jpg" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">SEBI-Regulated REIT Structure</h3>
                  <p className="text-white/90">
                    Professionally managed, transparent, and compliant with Indian regulations
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Asset Portfolio */}
      <section className="asset_portfolio_section py-20 bg-gradient-to-b from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent p-4">
              REIT-Ready Asset Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diversified commercial properties with stable tenants and strong yields
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assetPortfolio.map((asset, index) => <Card key={index} className="YieldCard_Office group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-background via-background/90 to-muted/20 backdrop-blur-sm overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img src={asset.image} alt={asset.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-3 right-3 w-12 h-12 rounded-xl bg-gradient-to-br ${asset.color} flex items-center justify-center backdrop-blur-sm`}>
                    <asset.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex justify-between items-center text-white text-sm">
                      <span>Yield: {asset.yield}</span>
                      <span>Occupancy: {asset.occupancy}</span>
                    </div>
                  </div>
                </div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                    {asset.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                    {asset.description}
                  </p>
                  <Button asChild className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                    <Link to="/projects">View Assets</Link>
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Rental Yield Dashboard */}
      <section className="yield_dashboard_section py-20 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${rentalYieldAnalytics})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 backdrop-blur-sm" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Rental Yield Performance</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Strong fundamentals with consistent income and stable tenant profiles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {yieldMetrics.map((metric, index) => <Card key={index} className="yield_metric_card border-0 bg-gradient-to-br from-background/95 via-background/90 to-blue-500/10 backdrop-blur-md shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <metric.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
                    <p className="text-3xl font-bold text-blue-600">{metric.value}</p>
                    <div className="flex items-center justify-center gap-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-green-500 font-semibold">{metric.growth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>
      {/* ESG & Solar Monetization */}
      <section className="esg_solar_section py-20 bg-gradient-to-b from-purple-500/5 to-green-500/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              ESG & Solar Monetization
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional revenue streams from sustainability initiatives and green technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {esgHighlights.map((highlight, index) => <Card key={index} className="esg_highlight_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background/90 to-green-500/5 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    {highlight.title}
                  </CardTitle>
                  <CardDescription>{highlight.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="text-sm font-medium">Revenue:</span>
                    <span className="text-lg font-bold text-green-600">{highlight.value}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <span className="text-sm font-medium">Impact:</span>
                    <span className="text-sm font-semibold text-blue-600">{highlight.impact}</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Investor Personas */}
      <section className="investor_personas_section py-20 bg-gradient-to-b from-green-500/5 to-background bg-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent p-4">
              Investor Categories
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-secondary">
              Tailored investment solutions for different investor profiles and requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investorPersonas.map((persona, index) => <Card key={index} className="investor_persona_card group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <persona.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                    {persona.title}
                  </CardTitle>
                  <CardDescription className="text-sm">{persona.description}</CardDescription>
                  <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200 mt-2">
                    Min: {persona.minInvestment}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {persona.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                        {benefit}
                      </li>)}
                  </ul>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="reit_faq_section py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Investment FAQs
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about REIT investments and rental-yielding assets
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-gradient-to-r from-background via-background/90 to-blue-500/5 backdrop-blur-sm">
                  <AccordionTrigger className="text-left font-semibold hover:text-blue-600 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2">{faq.answer}</AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Investment Inquiry Form */}
      <section className="Form_InvestorInquiry py-20 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${investmentInquiryForm})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 backdrop-blur-sm" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start Your Investment Journey</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Get personalized investment recommendations and connect with our REIT specialists
              </p>
              <Link to="/contact#contact-form">
                <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            
          </div>
        </div>
      </section>
    </div>;
};
export default REITInvestPage;