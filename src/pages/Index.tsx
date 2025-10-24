import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Activity, BarChart3, Lock, Zap, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Multi-layer security with real-time threat detection and prevention"
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Live activity tracking with instant alerts for suspicious behavior"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with payment and access pattern insights"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for all transactions and user data"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimized infrastructure for sub-second response times"
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl" />
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Enterprise-Grade Security</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Secure Access & Payment Analytics
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Monitor, analyze, and secure your platform with real-time insights into user authentication, payment processing, and system activity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                onClick={() => navigate("/dashboard")}
              >
                View Dashboard
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                onClick={() => navigate("/auth")}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground text-lg">Everything you need for secure access and payment monitoring</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-24">
        <Card className="p-12 gradient-card border-border/50 shadow-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">&lt;50ms</div>
              <div className="text-muted-foreground">Average Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">256-bit</div>
              <div className="text-muted-foreground">Encryption Standard</div>
            </div>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to secure your platform?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join thousands of businesses protecting their users with our advanced analytics platform
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            onClick={() => navigate("/auth")}
          >
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
