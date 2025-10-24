import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Server, Database, Cpu, HardDrive, Wifi, Clock } from "lucide-react";

const SystemHealthMonitor = () => {
  const metrics = [
    { name: "API Response Time", value: 45, max: 100, unit: "ms", icon: Clock, status: "good" },
    { name: "CPU Usage", value: 32, max: 100, unit: "%", icon: Cpu, status: "good" },
    { name: "Memory Usage", value: 68, max: 100, unit: "%", icon: HardDrive, status: "warning" },
    { name: "Database Load", value: 24, max: 100, unit: "%", icon: Database, status: "good" },
    { name: "Network Latency", value: 12, max: 50, unit: "ms", icon: Wifi, status: "good" },
    { name: "Server Uptime", value: 99.98, max: 100, unit: "%", icon: Server, status: "good" },
  ];

  const getStatusColor = (status: string, value: number) => {
    if (status === "warning" || value > 70) return "bg-yellow-500";
    if (value > 90) return "bg-destructive";
    return "bg-secondary";
  };

  const getStatusBadge = (status: string, value: number) => {
    if (status === "warning" || value > 70) return "secondary";
    if (value > 90) return "destructive";
    return "default";
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              System Health
            </CardTitle>
            <CardDescription>Infrastructure monitoring and status</CardDescription>
          </div>
          <Badge variant="default" className="bg-secondary">
            All Systems Operational
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{metric.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">{metric.value}{metric.unit}</span>
                    <Badge 
                      variant={getStatusBadge(metric.status, metric.value) as any}
                      className="text-xs"
                    >
                      {metric.status === "warning" || metric.value > 70 ? "Warning" : "Normal"}
                    </Badge>
                  </div>
                </div>
                <div className="relative">
                  <Progress 
                    value={(metric.value / metric.max) * 100} 
                    className="h-2"
                  />
                  <div 
                    className={`absolute inset-0 h-2 rounded-full ${getStatusColor(metric.status, metric.value)} transition-all`}
                    style={{ width: `${(metric.value / metric.max) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-secondary">99.98%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">2.4M</div>
              <div className="text-xs text-muted-foreground">Requests/day</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">45ms</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemHealthMonitor;
