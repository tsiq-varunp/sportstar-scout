import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Video, 
  Upload, 
  Brain, 
  CheckCircle, 
  AlertCircle,
  Play,
  Camera,
  Zap,
  BarChart3
} from "lucide-react";

const VideoAssessmentDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const steps = [
    { title: "Upload Video", icon: Upload, status: "completed" },
    { title: "AI Analysis", icon: Brain, status: currentStep >= 1 ? "completed" : "pending" },
    { title: "Performance Report", icon: BarChart3, status: currentStep >= 2 ? "completed" : "pending" }
  ];

  const assessmentResults = {
    overall: 87,
    technique: 92,
    strength: 78,
    endurance: 94,
    flexibility: 82
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, 2));
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            🎥 AI-Powered Assessment
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Video-Based Talent Discovery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our cutting-edge AI technology that analyzes athletic performance through simple video uploads, making talent discovery accessible from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Assessment Process */}
          <Card className="bg-gradient-card shadow-elevated border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Video className="h-5 w-5 text-secondary mr-2" />
                Assessment Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Progress Steps */}
              <div className="space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === currentStep;
                  const isCompleted = step.status === "completed";
                  
                  return (
                    <div key={index} className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ${
                      isActive ? 'bg-primary/10 border border-primary/20' : 
                      isCompleted ? 'bg-success/10 border border-success/20' : 
                      'bg-muted/50'
                    }`}>
                      <div className={`p-2 rounded-full ${
                        isCompleted ? 'bg-success text-success-foreground' :
                        isActive ? 'bg-primary text-primary-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {isCompleted ? <CheckCircle className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${isActive || isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {step.title}
                        </h4>
                        {isActive && isProcessing && (
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="animate-spin rounded-full h-3 w-3 border-2 border-primary border-t-transparent" />
                            <span className="text-xs text-primary">Processing...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Demo Upload Area */}
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
                <div className="flex items-center justify-center">
                  <div className="p-4 rounded-full bg-secondary/10 text-secondary">
                    <Camera className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-2">Upload Your Training Video</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Record yourself performing basic exercises or sport-specific movements
                  </p>
                  <Button 
                    variant="secondary" 
                    onClick={simulateProcessing}
                    disabled={isProcessing}
                    className="mb-2"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    {isProcessing ? 'Processing...' : 'Try Demo Upload'}
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Supports MP4, MOV, AVI • Max 100MB
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Panel */}
          <Card className="bg-gradient-card shadow-elevated border border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 text-success mr-2" />
                AI Analysis Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentStep >= 2 ? (
                <>
                  {/* Overall Score */}
                  <div className="text-center p-6 bg-gradient-performance rounded-lg text-white">
                    <div className="text-4xl font-bold mb-2">{assessmentResults.overall}</div>
                    <p className="text-sm opacity-90">Overall Performance Score</p>
                    <Badge className="mt-2 bg-white/20 text-white border-white/30">
                      Elite Level
                    </Badge>
                  </div>

                  {/* Detailed Metrics */}
                  <div className="space-y-4">
                    {Object.entries(assessmentResults).filter(([key]) => key !== 'overall').map(([metric, score]) => (
                      <div key={metric} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium capitalize text-foreground">{metric}</span>
                          <span className="text-sm font-bold text-foreground">{score}%</span>
                        </div>
                        <Progress value={score} className="h-2" />
                      </div>
                    ))}
                  </div>

                  {/* AI Insights */}
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-start space-x-3">
                      <Zap className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h4 className="font-medium text-foreground mb-2">AI Insights</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Excellent technique consistency</li>
                          <li>• Recommend focusing on strength training</li>
                          <li>• Outstanding endurance capacity detected</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <Button variant="performance" className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    View Detailed Report
                  </Button>
                </>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="p-4 rounded-full bg-muted text-muted-foreground mx-auto w-fit">
                    <BarChart3 className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground mb-2">
                      Waiting for Analysis
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Upload a video to see AI-powered performance insights
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features List */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card shadow-card border border-border/50 text-center p-6">
            <Brain className="h-8 w-8 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Cheat Detection</h4>
            <p className="text-sm text-muted-foreground">AI ensures fair and accurate assessments</p>
          </Card>
          <Card className="bg-gradient-card shadow-card border border-border/50 text-center p-6">
            <Zap className="h-8 w-8 text-success mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Instant Results</h4>
            <p className="text-sm text-muted-foreground">Get performance insights within minutes</p>
          </Card>
          <Card className="bg-gradient-card shadow-card border border-border/50 text-center p-6">
            <CheckCircle className="h-8 w-8 text-secondary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground mb-2">Standardized</h4>
            <p className="text-sm text-muted-foreground">Consistent assessment across all devices</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoAssessmentDemo;