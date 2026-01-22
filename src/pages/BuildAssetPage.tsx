import { Building, Shield, Leaf, Zap, Car, Settings, Eye, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import commercialFacadeImage from "@/assets/glass-tower-facade-modern.jpg";
import modernBusinessComplexImage from "@/assets/modern-business-complex.jpg";
import commercialInteriorImage from "@/assets/custom-space-planning.jpg";
import materialPaletteImage from "@/assets/architectural-wood-facade.jpg";
import smartInfrastructureImage from "@/assets/smart-infrastructure-blueprint.jpg";
import fireSafetyImage from "@/assets/fire-safety-system.jpg";
import rooftopSolarImage from "@/assets/rooftop-solar-building.jpg";
import rainwaterHarvestingImage from "@/assets/rainwater-harvesting-system.jpg";
import evChargingImage from "@/assets/ev-charging-parking.jpg";
import ecoBusinessParkImage from "@/assets/eco-business-park-parking.jpg";
import smartDashboardImage from "@/assets/smart-building-dashboard.jpg";
import smartEnergySystemsImage from "@/assets/smart-energy-systems.jpg";
import proposalFormImage from "@/assets/construction-proposal-form.jpg";
import accessControlImage from "@/assets/access-control-image.jpg";
import smartOfficeTowerImage from "@/assets/smart-office-tower.jpg";
const BuildAssetPage = () => {
  const architecturalFeatures = [{
    icon: Zap,
    title: "AI-Adaptive Design",
    content: `Our AI-Adaptive Design process blends technology with creativity to shape the future of architecture.
We use AI algorithms to optimize layouts, predict material behavior, and simulate design outcomes.
Machine learning tools evaluate daylight, airflow, and spatial efficiency before construction begins.
Design intelligence meets human intuition — resulting in smarter, faster, and more sustainable solutions.
Adaptive systems continuously refine design choices based on environmental and operational data.
We integrate IoT and BIM data for seamless collaboration and real-time design iteration.
AI-driven façade morphing enhances building performance while maintaining aesthetics.
Each project becomes a living model — learning, adjusting, and evolving over time.
This innovation-driven process reduces waste, increases ROI, and enhances occupant comfort.
AI doesn't replace creativity — it amplifies it, transforming architecture into intelligent art.`,
    image: smartInfrastructureImage
  }, {
    icon: Leaf,
    title: "Material Palette",
    content: `Our Material Palette defines the sensory soul of every building we create.
We curate materials that balance elegance, durability, and environmental responsibility.
From glass and steel to bamboo and reclaimed wood — every texture tells a story.
Each project's palette is chosen for its tactile feel, visual tone, and performance value.
We source materials locally and sustainably, supporting green certification goals.
Our design teams test each material for acoustic performance, thermal comfort, and longevity.
We embrace both classic and contemporary finishes — polished marble, textured concrete, metallic coatings.
Through AI-assisted selection tools, we simulate how light and time affect each surface.
Every palette reflects the brand identity of the project — refined, bold, or organic.
The result: buildings that don't just look beautiful, but feel timeless.`,
    image: materialPaletteImage
  }, {
    icon: Settings,
    title: "Interior Layouts",
    content: `Our Interior Layouts are designed with purpose — merging comfort, flexibility, and brand personality.
Spaces are planned for flow, human interaction, and operational efficiency.
We create layouts that adapt — from open office floors to boutique retail showrooms.
Natural light, spatial rhythm, and acoustics define our design principles.
Every inch of space is optimized for productivity, movement, and mood.
Our design team studies behavioral patterns, user journeys, and work dynamics.
Modular partitions, adaptable furniture, and ergonomic planning define the core layout.
We balance luxury with function — ensuring aesthetic harmony and operational ease.
Sustainability guides our design — from eco-materials to energy-efficient lighting.
Each space is curated to elevate user experience while maintaining timeless visual grace.`,
    image: commercialInteriorImage
  }, {
    icon: Building,
    title: "Façade Design",
    content: `Our Façade Designs are where art meets engineering — a blend of geometry, light, and material finesse.
Each structure we create is wrapped in a skin of sophistication — designed to stand out yet complement the skyline.
We merge aesthetics with performance, optimizing natural light, ventilation, and energy efficiency.
Curtain walls, aluminum panels, and glass fins are crafted with precision and durability.
Our façades adapt to local climate conditions, ensuring sustainability and reduced heat gain.
Every design is tested through simulation for solar impact, wind flow, and long-term performance.
We collaborate with leading façade consultants and global design experts to achieve timeless appeal.
From reflective glass towers to textured concrete exteriors, our approach celebrates innovation.
Lighting integration transforms each façade into an architectural statement by night.
In every project, the façade becomes a visual identity — iconic, efficient, and future-ready.`,
    image: commercialFacadeImage
  }];
  const safetyFeatures = ["Earthquake-Resistant Framework", "Fire Safety Systems: sprinklers, smoke detectors, evacuation protocols", "Load-Bearing & Wind Resistance Metrics", "Compliance: NBC, IS Codes, global safety standards"];
  const esgFeatures = [{
    icon: "🌞",
    title: "Solar Panel Integration",
    description: "Renewable energy generation with grid-tie capabilities",
    image: rooftopSolarImage
  }, {
    icon: "♻️",
    title: "Rainwater Harvesting",
    description: "Greywater recycling and water conservation systems",
    image: rainwaterHarvestingImage
  }, {
    icon: "🌿",
    title: "Biophilic Design",
    description: "Garden zones and nature-integrated spaces",
    image: commercialInteriorImage
  }, {
    icon: "📉",
    title: "Carbon Credit Eligibility",
    description: "ESG reporting and sustainability certifications",
    image: smartDashboardImage
  }];
  const infrastructureFeatures = [{
    icon: Car,
    title: "Multi-level Car Parking",
    description: "EV charging stations and smart parking solutions",
    image: evChargingImage
  }, {
    icon: Zap,
    title: "Redundant Connections",
    description: "Electric & water backup systems",
    image: smartEnergySystemsImage
  }, {
    icon: Shield,
    title: "Access Control",
    description: "Internal roads and security infrastructure",
    image: accessControlImage
  }, {
    icon: Settings,
    title: "Smart Office Tech",
    description: "IoT, AI, and cloud-integrated systems",
    image: smartDashboardImage
  }];
  const addOnCapabilities = ["Modular Expansion Zones", "Vertical Extension Ready (additional floors)", "AI-Driven Building Management Systems (BMS)", "REIT-Grade Documentation & Investor Dashboards"];
  const faqItems = [{
    question: "What safety certifications are included?",
    answer: "All buildings include NBC compliance, IS code certifications, fire safety approvals, and earthquake resistance validations as per Indian building standards."
  }, {
    question: "Can interiors be customized?",
    answer: "Yes, our modular design allows for flexible interior configurations to meet specific tenant requirements while maintaining structural integrity."
  }, {
    question: "Is solar generation metered separately?",
    answer: "Solar installations include separate metering for renewable energy generation, allowing for carbon credit tracking and potential revenue sharing."
  }];
  return <div className="min-h-screen gradient-mesh">
      {/* Hero Section */}
      <section className="build_asset_hero_banner relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img alt="Built for Business, Designed for Impact" className="w-full h-full object-cover" src="/lovable-uploads/0149a58c-f365-4c01-ab3c-f14b5e86c960.jpg" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Premium Built Assets
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Built for Business, 
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent"> Designed for Impact</span>
          </h1>
          
          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group" asChild>
            <Link to="/projects">
              View Build Specifications
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Architectural Design & Aesthetic Excellence */}
      <section className="architectural_design_section py-24 bg-gradient-section-1 text-white">
        <div className="container px-4">
          <div className="text-center mb-20">
            <div className="mb-6 inline-block bg-gradient-to-r from-primary/20 to-solar/20 text-primary border-none font-semibold px-6 py-2 rounded-full">
              Premium Design Standards
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-commercial to-solar bg-clip-text text-transparent">
              Architectural Excellence
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Modern design meets functional innovation
            </p>
          </div>
          
          <div className="space-y-16">
            {architecturalFeatures.map((feature, index) => <Card key={index} className="group hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-700 bg-white border-none rounded-3xl overflow-hidden animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-96 md:h-auto overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-transparent"></div>
                    <div className="absolute top-8 left-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/30 transition-colors duration-500">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`flex flex-col justify-center p-10 md:p-14 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="w-fit mb-4 bg-gradient-to-r from-primary/10 to-solar/10 text-primary border-none font-semibold px-4 py-1.5 rounded-full text-sm">
                      Category {index + 1}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-primary group-hover:text-commercial transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 whitespace-pre-line">
                      {feature.content}
                    </p>
                    <Button size="lg" className="w-fit bg-gradient-to-r from-primary to-commercial hover:from-commercial hover:to-primary text-white px-8 py-6 rounded-full group-hover:shadow-lg transition-all duration-500" asChild>
                      <Link to="/projects">
                        Explore Design Approach
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Structural Stability & Safety Engineering */}
      <section className="structural_safety_section py-20 px-4 bg-gradient-section-2 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Safety & Compliance</h2>
            <p className="text-xl text-muted-foreground">Built to the highest safety standards</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {safetyFeatures.map((feature, index) => <div key={index} className="safety_feature_item flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-lg">{feature}</p>
                </div>)}
            </div>
            <div className="relative">
              <img src={fireSafetyImage} alt="Fire Safety System" className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Green Building & Sustainability Features */}
      

      {/* Operational Infrastructure */}
      <section className="infrastructure_features_section py-20 px-4 bg-gradient-section-3 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Operational Infrastructure</h2>
            <p className="text-xl text-muted-foreground">Smart systems for modern business</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {infrastructureFeatures.map((feature, index) => <Card key={index} className="infrastructure_feature_card group hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Advanced Add-On Capabilities */}
      <section className="addon_capabilities_section py-20 px-4 bg-gradient-section-4 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Future-Ready Capabilities</h2>
            <p className="text-xl text-muted-foreground">Designed for growth and adaptation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOnCapabilities.map((capability, index) => <Card key={index} className="addon_capability_card p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <Settings className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="text-lg font-medium">{capability}</p>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      

      {/* FAQs */}
      <section className="buyer_tenant_faq_section py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-50">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our buildings</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg font-medium text-slate-50">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </section>

      {/* Contact & Inquiry Portal */}
      
    </div>;
};
export default BuildAssetPage;