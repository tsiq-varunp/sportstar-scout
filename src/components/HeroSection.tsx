import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-sports-talent.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Diverse Indian athletes training with AI technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          <Badge className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
            🏆 Democratizing Sports: AI for Every Athlete, Everywhere
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            AI-Powered Sports
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
              Talent Ecosystem
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Discover, track, and develop sports talent across India with cutting-edge AI technology. 
            From remote villages to professional academies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start Your Journey
            </Button>
            <Button variant="outline-hero" size="lg">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-primary mr-2" />
                <span className="text-3xl font-bold text-white">50K+</span>
              </div>
              <p className="text-gray-300">Athletes Connected</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="h-8 w-8 text-success mr-2" />
                <span className="text-3xl font-bold text-white">1M+</span>
              </div>
              <p className="text-gray-300">Assessments Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-8 w-8 text-secondary mr-2" />
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <p className="text-gray-300">Coaches Empowered</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;