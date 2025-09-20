import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Brain, 
  Users, 
  Shield, 
  BarChart3, 
  Trophy,
  Video,
  Target,
  ArrowRight
} from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Remote Talent Discovery",
      description: "Mobile-first platform enabling video-based fitness and skill assessments powered by AI, reaching athletes anywhere in India.",
      tags: ["Mobile-First", "Video Assessment", "AI-Powered"],
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Simple dashboards for athletes and coaches to view progress, set goals, and receive AI-driven feedback on training and injury risk.",
      tags: ["Real-time Analytics", "Progress Tracking", "AI Insights"],
      color: "success"
    },
    {
      icon: Users,
      title: "Dual Dashboards",
      description: "Athletes track their own growth, while coaches access advanced analytics and alerts for injury risk and performance milestones.",
      tags: ["Athlete Dashboard", "Coach Analytics", "Risk Assessment"],
      color: "secondary"
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Advanced machine learning for cheat detection, benchmarking, and personalized training recommendations.",
      tags: ["Machine Learning", "Cheat Detection", "Personalization"],
      color: "accent"
    },
    {
      icon: Trophy,
      title: "Gamified Community",
      description: "Challenges, leaderboards, and community features to motivate participation, especially for girls and tribal youth.",
      tags: ["Gamification", "Community", "Inclusive"],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Secure Data Management",
      description: "Role-based access and privacy-first data storage ensuring trust and compliance across all user interactions.",
      tags: ["Privacy-First", "Role-Based Access", "Compliance"],
      color: "success"
    }
  ];

  const getColorClasses = (color: string) => {
    switch(color) {
      case 'primary': return 'text-primary bg-primary/10 border-primary/20';
      case 'success': return 'text-success bg-success/10 border-success/20';
      case 'secondary': return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'accent': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-primary bg-primary/10 border-primary/20';
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            🚀 Key Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revolutionizing Sports Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform addresses every challenge in India's sports ecosystem with cutting-edge technology and inclusive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 group border border-border/50">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${getColorClasses(feature.color)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs border-border/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;