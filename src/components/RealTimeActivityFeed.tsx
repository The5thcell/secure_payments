import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, LogIn, CreditCard, UserCheck, AlertCircle, ShieldCheck } from "lucide-react";

interface ActivityEvent {
  id: string;
  type: "login" | "payment" | "registration" | "security" | "verification";
  user: string;
  description: string;
  timestamp: string;
  status: "success" | "failed" | "warning";
}

const RealTimeActivityFeed = () => {
  const [activities, setActivities] = useState<ActivityEvent[]>([
    { id: "1", type: "login", user: "sarah.j@example.com", description: "Login successful from New York", timestamp: "Just now", status: "success" },
    { id: "2", type: "payment", user: "michael.c@example.com", description: "Payment processed - $299.00", timestamp: "1 min ago", status: "success" },
    { id: "3", type: "registration", user: "new.user@example.com", description: "New account created", timestamp: "2 min ago", status: "success" },
    { id: "4", type: "security", user: "admin@example.com", description: "Security scan completed", timestamp: "3 min ago", status: "success" },
    { id: "5", type: "login", user: "suspicious@test.com", description: "Failed login attempt", timestamp: "5 min ago", status: "failed" },
  ]);

  const generateMockActivity = (): ActivityEvent => {
    const types: Array<"login" | "payment" | "registration" | "security" | "verification"> = ["login", "payment", "registration", "security", "verification"];
    const users = ["user1@example.com", "user2@example.com", "admin@example.com", "client@business.com"];
    const type = types[Math.floor(Math.random() * types.length)];
    
    const descriptions: Record<string, string[]> = {
      login: ["Login successful from London", "Access granted from Tokyo", "Sign in from San Francisco"],
      payment: ["Payment processed - $149.00", "Transaction completed - $599.00", "Payment received - $299.00"],
      registration: ["New account created", "User registration completed", "Account verified"],
      security: ["2FA enabled", "Password changed", "Security check passed"],
      verification: ["Email verified", "Identity confirmed", "KYC completed"]
    };

    return {
      id: Date.now().toString(),
      type,
      user: users[Math.floor(Math.random() * users.length)],
      description: descriptions[type][Math.floor(Math.random() * descriptions[type].length)],
      timestamp: "Just now",
      status: Math.random() > 0.1 ? "success" : "failed"
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = generateMockActivity();
      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    }, 5000); // Add new activity every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: string) => {
    switch(type) {
      case "login": return LogIn;
      case "payment": return CreditCard;
      case "registration": return UserCheck;
      case "security": return AlertCircle;
      case "verification": return ShieldCheck;
      default: return Activity;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "success": return "text-secondary";
      case "failed": return "text-destructive";
      case "warning": return "text-yellow-500";
      default: return "text-muted-foreground";
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary animate-pulse" />
              Live Activity Feed
            </CardTitle>
            <CardDescription>Real-time system events</CardDescription>
          </div>
          <Badge variant="outline" className="border-primary/50 text-primary">
            <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2 max-h-[400px] overflow-y-auto">
          {activities.map((activity, index) => {
            const Icon = getIcon(activity.type);
            return (
              <div 
                key={activity.id}
                className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`p-2 rounded-lg bg-primary/10 ${getStatusColor(activity.status)}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium capitalize">{activity.type}</span>
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.user}</p>
                </div>
                <div className={`w-2 h-2 rounded-full ${activity.status === "success" ? "bg-secondary" : "bg-destructive"}`} />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeActivityFeed;
