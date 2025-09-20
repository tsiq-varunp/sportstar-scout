import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Award, Target, MapPin } from "lucide-react";

interface AthleteCardProps {
  name: string;
  location: string;
  sport: string;
  level: string;
  progress: number;
  achievements: number;
  avatar?: string;
  rank?: number;
}

const AthleteCard = ({ 
  name, 
  location, 
  sport, 
  level, 
  progress, 
  achievements, 
  avatar,
  rank 
}: AthleteCardProps) => {
  return (
    <Card className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 ring-2 ring-primary/20">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                {name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-foreground">{name}</h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-3 w-3 mr-1" />
                {location}
              </div>
            </div>
          </div>
          {rank && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              #{rank}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20">
            {sport}
          </Badge>
          <Badge variant="outline" className="border-success/20 text-success">
            {level}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Performance Progress</span>
            <span className="font-medium text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center text-success">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span className="font-medium">+12%</span>
            </div>
            <div className="flex items-center text-primary">
              <Award className="h-4 w-4 mr-1" />
              <span className="font-medium">{achievements}</span>
            </div>
          </div>
          <Button variant="performance" size="sm">
            <Target className="h-4 w-4 mr-1" />
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AthleteCard;