import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  TrendingUp, 
  Award, 
  Target, 
  Activity, 
  Globe,
  Zap,
  Trophy
} from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Active Athletes",
      value: "2,847",
      change: "+23%",
      trend: "up",
      icon: Users,
      color: "primary"
    },
    {
      title: "Performance Growth",
      value: "89.2%",
      change: "+5.2%", 
      trend: "up",
      icon: TrendingUp,
      color: "success"
    },
    {
      title: "AI Assessments",
      value: "15.6K",
      change: "+487",
      trend: "up",
      icon: Zap,
      color: "secondary"
    },
    {
      title: "Achievements",
      value: "1,234",
      change: "+89",
      trend: "up",
      icon: Trophy,
      color: "accent"
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-full border ${getColorClasses(stat.color)}`}>
                <Icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <Badge 
                    variant="secondary" 
                    className="mt-1 bg-success/10 text-success border-success/20"
                  >
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {stat.change}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardStats;