import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Trophy, Users, Target, Flame, Star, Medal } from "lucide-react";
import AthleteCard from "./AthleteCard";

const CommunitySection = () => {
  const topAthletes = [
    {
      name: "Priya Sharma",
      location: "Rajasthan",
      sport: "Athletics",
      level: "Elite",
      progress: 94,
      achievements: 12,
      rank: 1
    },
    {
      name: "Arjun Patel",
      location: "Gujarat",
      sport: "Cricket",
      level: "Advanced",
      progress: 89,
      achievements: 8,
      rank: 2
    },
    {
      name: "Meera Das",
      location: "Odisha",
      sport: "Badminton",
      level: "Elite",
      progress: 87,
      achievements: 15,
      rank: 3
    }
  ];

  const challenges = [
    {
      title: "Sprint Challenge 2024",
      participants: 2847,
      timeLeft: "5 days",
      difficulty: "Intermediate",
      reward: "Golden Badge"
    },
    {
      title: "Endurance Test",
      participants: 1245,
      timeLeft: "12 days", 
      difficulty: "Advanced",
      reward: "Performance Medal"
    },
    {
      title: "Skill Showcase",
      participants: 892,
      timeLeft: "3 days",
      difficulty: "All Levels",
      reward: "Community Trophy"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            🏆 Community & Leaderboards
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Connect, Compete, Achieve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join a vibrant community of athletes, participate in challenges, and climb the leaderboards to showcase your talent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 text-primary mr-2" />
                  Top Performers This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {topAthletes.map((athlete, index) => (
                  <AthleteCard key={index} {...athlete} />
                ))}
                <div className="text-center pt-4">
                  <Button variant="community">
                    <Star className="h-4 w-4 mr-2" />
                    View Full Leaderboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Community Stats */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 text-secondary mr-2" />
                  Community Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground">50,000+</div>
                  <p className="text-sm text-muted-foreground">Athletes Connected</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-success">89%</div>
                  <p className="text-sm text-muted-foreground">Improvement Rate</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2,500</div>
                  <p className="text-sm text-muted-foreground">Rural Athletes</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border border-border/50">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Gender Representation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Female Athletes</span>
                    <span className="font-medium">47%</span>
                  </div>
                  <Progress value={47} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Rural Participation</span>
                    <span className="font-medium">38%</span>
                  </div>
                  <Progress value={38} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tribal Communities</span>
                    <span className="font-medium">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Active Challenges */}
        <Card className="bg-gradient-card shadow-card border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 text-accent mr-2" />
              Active Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="border border-border/30 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {challenge.difficulty}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Flame className="h-3 w-3 mr-1 text-primary" />
                        {challenge.timeLeft}
                      </div>
                    </div>
                    <h4 className="font-semibold text-foreground">{challenge.title}</h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-3 w-3 mr-1" />
                      {challenge.participants.toLocaleString()} participants
                    </div>
                    <div className="flex items-center text-sm text-primary">
                      <Medal className="h-3 w-3 mr-1" />
                      {challenge.reward}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Join Challenge
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CommunitySection;