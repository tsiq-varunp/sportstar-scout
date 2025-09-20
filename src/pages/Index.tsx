import HeroSection from "@/components/HeroSection";
import DashboardStats from "@/components/DashboardStats";
import FeatureSection from "@/components/FeatureSection";
import VideoAssessmentDemo from "@/components/VideoAssessmentDemo";
import CommunitySection from "@/components/CommunitySection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Shield, 
  Smartphone, 
  Brain,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Dashboard Stats Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-success/10 text-success border-success/20">
              📊 Real-time Analytics
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Track Performance, Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Monitor athlete progress with comprehensive dashboards designed for both athletes and coaches.
            </p>
          </div>
          <DashboardStats />
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Video Assessment Demo */}
      <VideoAssessmentDemo />

      {/* Community Section */}
      <CommunitySection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Sports Development?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of athletes and coaches already using our AI-powered platform to unlock potential and achieve excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-hero" size="lg">
              Start Free Trial
            </Button>
            <Button variant="hero" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SportsTech AI</h3>
              <p className="text-background/80 text-sm leading-relaxed">
                Democratizing sports development through AI-powered talent discovery and performance tracking.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>• AI Video Assessment</li>
                <li>• Performance Tracking</li>
                <li>• Community Challenges</li>
                <li>• Coach Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>• Help Center</li>
                <li>• Documentation</li>
                <li>• Training Videos</li>
                <li>• Contact Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Twitter className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                <Linkedin className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
                <Github className="h-5 w-5 hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
            <p>&copy; 2024 SportsTech AI. Empowering every athlete, everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
