import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Building2, MapPin, Zap, Droplets, Car, Sun, Leaf, TrendingUp, DollarSign, Users, Calendar, FileText, Filter, Award, Target, Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import projectsPortfolioMontageImage from "@/assets/projects-portfolio-montage.jpg";
import projectCardsEsgImage from "@/assets/project-cards-esg.jpg";
import projectCategoriesFilterImage from "@/assets/project-categories-filter.jpg";
import esgSustainableBuildingImage from "@/assets/esg-sustainable-commercial-building.jpg";
import projectTimelineImage from "@/assets/project-timeline.jpg";
import investorMeetingCalendarImage from "@/assets/investor-meeting-calendar.jpg";
import semiCompletedScaffoldingImage from "@/assets/semi-completed-scaffolding.jpg";
import interiorFitoutProgressImage from "@/assets/interior-fitout-progress.jpg";
import urbanCommonsPlazaImage from "@/assets/urban-commons-plaza.jpg";
import constructionFoundationWorkImage from "@/assets/construction-foundation-work.jpg";
import constructionToLifestyleCenterImage from "@/assets/construction-to-lifestyle-center.jpg";
import techValleyBusinessParkImage from "@/assets/tech-valley-business-park.jpg";
import smartInfrastructureBlueprintImage from "@/assets/smart-infrastructure-blueprint.jpg";
import infrastructureBlueprintImage from "@/assets/infrastructure-blueprint.jpg";
import visionaryInfrastructureImage from "@/assets/visionary-infrastructure.jpg";
import jointDevelopmentModernImage from "@/assets/joint-development-modern.jpg";
import completedWithTenantsImage from "@/assets/completed-with-tenants.jpg";
import propertyHandoverImage from "@/assets/property-handover.jpg";
import galleryModernBuildingImage from "@/assets/gallery-modern-building.jpg";
import galleryPremiumFacadeImage from "@/assets/gallery-premium-facade.png";
import constructionProgressBuildingImage from "@/assets/construction-progress-building.jpg";
import constructionSiteCraneImage from "@/assets/construction-site-crane.jpg";
import constructionSiteBlueFacadeImage from "@/assets/construction-site-blue-facade.jpg";
const ProjectsPage = () => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const featuredProjects = [{
    title: "Green Valley Business Park",
    location: "Chennai, Indira Nagar",
    type: "Business Park",
    esgHighlight: "100% Solar Powered",
    status: "Completed",
    description: "Modern business complex with integrated solar infrastructure"
  }, {
    title: "Metro Lifestyle Center",
    location: "Bangalore, Karnataka",
    type: "Mixed-Use Development",
    esgHighlight: "LEED Gold Certified",
    status: "Ongoing",
    description: "Retail and entertainment hub with sustainable design"
  }, {
    title: "Smart Commerce Plaza",
    location: "Pune, Maharashtra",
    type: "Retail Complex",
    esgHighlight: "Carbon Neutral",
    status: "Completed",
    description: "High-street retail with smart building technology"
  }, {
    title: "Eco Corporate Campus",
    location: "Chennai, Tamil Nadu",
    type: "Office Complex",
    esgHighlight: "Rainwater Harvesting",
    status: "Upcoming",
    description: "Corporate offices with environmental sustainability focus"
  }, {
    title: "Solar Agri Hub",
    location: "Ahmedabad, Gujarat",
    type: "Agrivoltaic Zone",
    esgHighlight: "Dual Land Use",
    status: "Ongoing",
    description: "Agricultural land with solar panel integration"
  }, {
    title: "Urban Retail District",
    location: "Hyderabad, Telangana",
    type: "Lifestyle Center",
    esgHighlight: "Zero Waste",
    status: "Completed",
    description: "Shopping and dining destination with waste management"
  }];
  const projectCategories = [{
    title: "Mixed-Use Developments",
    count: "12 Projects",
    icon: Building2
  }, {
    title: "Retail & Office Complexes",
    count: "18 Projects",
    icon: Building2
  }, {
    title: "Lifestyle Centers",
    count: "8 Projects",
    icon: Users
  }, {
    title: "Business Parks",
    count: "15 Projects",
    icon: Building2
  }, {
    title: "Agrivoltaic Zones",
    count: "6 Projects",
    icon: Sun
  }];
  const esgMetrics = [{
    title: "Solar Capacity Installed",
    value: "25 MW",
    icon: Sun
  }, {
    title: "Carbon Credits Generated",
    value: "50,000 Tons CO2e",
    icon: Leaf
  }, {
    title: "Water Conservation",
    value: "2M Liters/Year",
    icon: Droplets
  }, {
    title: "LEED Certified Projects",
    value: "85%",
    icon: Award
  }];
  const projectTimeline = [{
    year: "2024",
    status: "Upcoming",
    projects: ["Eco Corporate Campus", "Smart Tech Park", "Green Retail Hub"],
    count: 3
  }, {
    year: "2023",
    status: "Ongoing",
    projects: ["Metro Lifestyle Center", "Solar Agri Hub", "Urban Commons"],
    count: 5
  }, {
    year: "2022",
    status: "Completed",
    projects: ["Green Valley Business Park", "Smart Commerce Plaza", "Urban Retail District"],
    count: 8
  }, {
    year: "2021",
    status: "Completed",
    projects: ["Eco Office Tower", "Solar Shopping Mall", "Sustainable Plaza"],
    count: 6
  }];
  const ongoingProjects = [{
    name: "Commercial Office Building",
    location: "SRP Tools,OMR,Chennai",
    status: "Structural Work",
    description: "Modern high-rise commercial tower under construction with state-of-the-art facilities and sustainable design features.",
    image: constructionProgressBuildingImage
  }, {
    name: "Commercial Retail Building",
    location: "Indira Nagar, Chennai",
    status: "Interior Fitout",
    description: "Premium commercial complex with smart building systems and eco-friendly infrastructure. Targeting LEED Gold certification.",
    image: urbanCommonsPlazaImage
  }];
  const futureProjects = [{
    name: "Saidapet-Chennai",
    location: "Bangalore, Karnataka",
    image: infrastructureBlueprintImage
  }, {
    name: "Pallavaram-Chennai",
    location: "Mumbai, Maharashtra",
    image: visionaryInfrastructureImage
  }, {
    name: "LB Road-Chennai",
    location: "Delhi NCR",
    image: jointDevelopmentModernImage
  }];
  const galleryImages = [{
    src: constructionSiteBlueFacadeImage,
    alt: "Construction site with blue safety netting and facade work"
  }, {
    src: galleryModernBuildingImage,
    alt: "Modern commercial building with contemporary design"
  }, {
    src: galleryPremiumFacadeImage,
    alt: "Premium commercial facade with architectural excellence"
  }, {
    src: constructionSiteCraneImage,
    alt: "Construction site with tower crane and scaffolding"
  }, {
    src: semiCompletedScaffoldingImage,
    alt: "Semi-completed construction with scaffolding"
  }, {
    src: constructionFoundationWorkImage,
    alt: "Foundation work in progress"
  }, {
    src: techValleyBusinessParkImage,
    alt: "Tech Valley Business Park development"
  }];
  return <div className="min-h-screen gradient-mesh">
      {/* SEO Meta Tags */}
      <title>Projects - Commercial Development Portfolio | CommercialDev</title>

      {/* Hero Section */}
      <section id="hero_projects_section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={projectsPortfolioMontageImage} alt="Explore Our Commercial Real Estate Projects" className="w-full h-full object-cover" />
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 container text-center text-white px-4">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold animate-fade-in">
            Our Projects Portfolio
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            Explore Our Commercial Real Estate Projects
            <span className="text-gradient bg-gradient-to-r from-solar to-esg bg-clip-text text-transparent">
              {" "}
              Precision, Purpose, and Performance
            </span>
          </h1>

          <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-fade-in group" asChild>
            <a href="#ongoing_projects_section">
              View Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured_projects_grid" className="py-20 bg-gradient-section-1 text-white"></section>

      {/* Ongoing Projects Section */}
      <section id="ongoing_projects_section" className="py-20 bg-gradient-section-2">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-slate-50">
              Ongoing Projects
            </h2>
            <div className="w-20 h-1 bg-commercial mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ongoingProjects.map((project, index) => <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 border-commercial/20 shadow-lg group">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-commercial-navy mb-2">{project.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-commercial" />
                    {project.location}
                  </p>
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-800 mb-3">
                    {project.status}
                  </span>
                  
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section id="future_projects_section" className="py-20 bg-gradient-section-3 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-slate-50">
              UPCOMING PROJECTS
            </h2>
            <div className="w-20 h-1 bg-commercial mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {futureProjects.map((project, index) => <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 border-commercial/20 shadow-lg group">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-commercial-navy via-commercial-navy/50 to-transparent flex items-center justify-center">
                    <span className="text-white text-2xl font-bold uppercase tracking-wider">Coming Soon</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-commercial-navy mb-2">{project.name}</h3>
                  
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section id="project_gallery_section" className="py-20 bg-gradient-section-4 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase tracking-wide text-slate-50">
              Project Gallery
            </h2>
            <div className="w-20 h-1 bg-commercial mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer group" onClick={() => setSelectedGalleryImage(image.src)}>
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-commercial-navy/0 group-hover:bg-commercial-navy/20 transition-colors duration-300"></div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
        <DialogContent className="max-w-5xl p-0 border-0">
          {selectedGalleryImage && <img src={selectedGalleryImage} alt="Gallery image" className="w-full h-auto rounded-lg" />}
        </DialogContent>
      </Dialog>

      {/* ESG & Sustainability Impact Section */}
      <section id="project_esg_impact_section" className="py-20 bg-gradient-section-1 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">ESG & Sustainability Impact</h2>
              <p className="text-lg mb-8 text-zinc-300">
                Our commitment to environmental, social, and governance excellence drives measurable impact across all
                our commercial developments.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                {esgMetrics.map((metric, index) => <div key={index} className="text-center">
                    <div className="bg-commercial/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <metric.icon className="h-6 w-6 text-commercial" />
                    </div>
                    <div className="text-2xl font-bold text-commercial-navy mb-1 bg-lime-500">{metric.value}</div>
                    <div className="text-sm text-zinc-300">{metric.title}</div>
                  </div>)}
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-zinc-300">LEED and BREEAM certified developments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-zinc-300">Solar integration across all projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-commercial rounded-full"></div>
                  <span className="text-zinc-300">Water conservation and waste reduction</span>
                </div>
              </div>
            </div>
            <div>
              <img src={esgSustainableBuildingImage} alt="Sustainable commercial building with ESG features including solar panels, green walls, and electric vehicle charging" className="w-full rounded-lg shadow-medium" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="project_cta_section" className="py-20 bg-commercial text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Collaborate or Invest?</h2>
              <p className="text-xl text-white/90 mb-8">
                Join us in creating the next generation of sustainable commercial real estate that delivers both
                financial returns and positive environmental impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="investor" size="lg">
                  <Link to="/contact#contact-form">Schedule a Project Tour</Link>
                </Button>
              </div>
            </div>
            <div>
              <img src={investorMeetingCalendarImage} alt="Investor meeting and site visit calendar" className="w-full rounded-lg shadow-medium" />
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ProjectsPage;