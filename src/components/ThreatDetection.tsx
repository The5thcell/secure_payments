import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Lock, Eye } from "lucide-react";

const ThreatDetection = () => {
  const threats = [
    {
      id: 1,
      type: "Suspicious Login Pattern",
      severity: "high",
      description: "Multiple failed login attempts from Singapore IP",
      timestamp: "2 minutes ago",
      user: "unknown@suspicious.net",
      actions: ["Block IP", "Alert Admin"]
    },
    {
      id: 2,
      type: "Unusual Payment Activity",
      severity: "medium",
      description: "Large transaction from new device",
      timestamp: "15 minutes ago",
      user: "lisa.k@solutions.net",
      actions: ["Review", "Contact User"]
    },
    {
      id: 3,
      type: "Location Anomaly",
      severity: "medium",
      description: "Login from unusual geographic location",
      timestamp: "1 hour ago",
      user: "alex.t@techstart.io",
      actions: ["Verify", "Request MFA"]
    },
    {
      id: 4,
      type: "Brute Force Attempt",
      severity: "high",
      description: "50+ failed login attempts detected",
      timestamp: "3 hours ago",
      user: "multiple accounts",
      actions: ["Block IP", "Enable Rate Limit"]
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case "high": return "destructive";
      case "medium": return "secondary";
      default: return "default";
    }
  };

  const getSeverityIcon = (severity: string) => {
    return severity === "high" ? AlertTriangle : Shield;
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Threat Detection
            </CardTitle>
            <CardDescription>Real-time security alerts and anomalies</CardDescription>
          </div>
          <Badge variant="destructive" className="animate-pulse">
            {threats.filter(t => t.severity === "high").length} Critical
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {threats.map((threat) => {
            const Icon = getSeverityIcon(threat.severity);
            return (
              <div 
                key={threat.id}
                className="p-4 rounded-lg border border-border/50 bg-background/50 hover:border-primary/50 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${threat.severity === "high" ? "bg-destructive/10" : "bg-secondary/10"}`}>
                      <Icon className={`h-5 w-5 ${threat.severity === "high" ? "text-destructive" : "text-secondary"}`} />
                    </div>
                    <div>
                      <div className="font-semibold">{threat.type}</div>
                      <div className="text-sm text-muted-foreground">{threat.timestamp}</div>
                    </div>
                  </div>
                  <Badge variant={getSeverityColor(threat.severity) as any}>
                    {threat.severity}
                  </Badge>
                </div>
                <p className="text-sm mb-2">{threat.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Lock className="h-3 w-3" />
                  <span>User: {threat.user}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {threat.actions.map((action, idx) => (
                    <Button 
                      key={idx}
                      size="sm" 
                      variant="outline"
                      className="text-xs hover:bg-primary/10 hover:text-primary hover:border-primary/50"
                    >
                      {action}
                    </Button>
                  ))}
                  <Button 
                    size="sm" 
                    variant="ghost"
                    className="text-xs"
                  >
                    <Eye className="h-3 w-3 mr-1" />
                    Details
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreatDetection;
