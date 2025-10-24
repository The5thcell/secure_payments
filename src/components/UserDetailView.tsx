import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { X, MapPin, Monitor, Calendar, CreditCard, Shield, Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface UserDetailViewProps {
  userId: string;
  onClose: () => void;
}

const UserDetailView = ({ userId, onClose }: UserDetailViewProps) => {
  // Mock detailed user data
  const userActivityTimeline = [
    { time: "00:00", activity: 2 },
    { time: "04:00", activity: 0 },
    { time: "08:00", activity: 5 },
    { time: "12:00", activity: 8 },
    { time: "16:00", activity: 6 },
    { time: "20:00", activity: 3 },
  ];

  const recentSessions = [
    { timestamp: "2024-10-24 14:23:15", ip: "192.168.1.45", location: "New York, US", device: "Chrome 119 on MacOS", action: "Login Success" },
    { timestamp: "2024-10-24 09:15:42", ip: "192.168.1.45", location: "New York, US", device: "Chrome 119 on MacOS", action: "Payment Processed" },
    { timestamp: "2024-10-23 18:45:23", ip: "192.168.1.45", location: "New York, US", device: "Safari 17 on iOS", action: "Login Success" },
    { timestamp: "2024-10-23 12:30:11", ip: "192.168.1.45", location: "New York, US", device: "Chrome 119 on MacOS", action: "Profile Updated" },
    { timestamp: "2024-10-22 16:20:55", ip: "192.168.1.45", location: "New York, US", device: "Chrome 119 on MacOS", action: "Payment Processed" },
  ];

  const transactions = [
    { id: "TRX-2024-1234", date: "2024-10-24", amount: "$299.00", status: "completed" },
    { id: "TRX-2024-1189", date: "2024-10-22", amount: "$149.00", status: "completed" },
    { id: "TRX-2024-1145", date: "2024-10-18", amount: "$599.00", status: "completed" },
    { id: "TRX-2024-1098", date: "2024-10-15", amount: "$199.00", status: "completed" },
  ];

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 animate-fade-in">
      <div className="container mx-auto p-8 h-full overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold">User Activity Details</h2>
              <p className="text-muted-foreground">Comprehensive view of user behavior and transactions</p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="hover:bg-destructive/10 hover:text-destructive"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="grid gap-6">
            {/* User Overview Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>User Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                      <p className="text-muted-foreground">sarah.johnson@techcorp.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">Active User</Badge>
                      <Badge variant="secondary">Premium</Badge>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Primary Location:</span>
                        <span className="font-medium">New York, United States</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Monitor className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Last Device:</span>
                        <span className="font-medium">Chrome on MacOS</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Member Since:</span>
                        <span className="font-medium">January 2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <Activity className="h-8 w-8 text-primary mb-2" />
                        <div className="text-3xl font-bold">145</div>
                        <div className="text-sm text-muted-foreground">Total Logins</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-secondary/5 border-secondary/20">
                      <CardContent className="pt-6">
                        <CreditCard className="h-8 w-8 text-secondary mb-2" />
                        <div className="text-3xl font-bold">23</div>
                        <div className="text-sm text-muted-foreground">Transactions</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="pt-6">
                        <Shield className="h-8 w-8 text-primary mb-2" />
                        <div className="text-3xl font-bold">98.5%</div>
                        <div className="text-sm text-muted-foreground">Trust Score</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-secondary/5 border-secondary/20">
                      <CardContent className="pt-6">
                        <Calendar className="h-8 w-8 text-secondary mb-2" />
                        <div className="text-3xl font-bold">287</div>
                        <div className="text-sm text-muted-foreground">Active Days</div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Timeline Chart */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>24-Hour Activity Pattern</CardTitle>
                <CardDescription>Login and transaction activity over the last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={userActivityTimeline}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: "hsl(var(--card))", 
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "var(--radius)"
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="activity" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={3}
                      dot={{ fill: "hsl(var(--primary))", r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Sessions */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Recent Sessions</CardTitle>
                <CardDescription>Detailed login history with timestamps and locations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSessions.map((session, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-mono text-sm font-medium">{session.timestamp}</span>
                          <Badge variant="outline">{session.action}</Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {session.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Monitor className="h-3 w-3" />
                            {session.device}
                          </span>
                          <span className="font-mono">{session.ip}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transaction History */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>Recent payment activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {transactions.map((transaction, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30"
                    >
                      <div>
                        <div className="font-mono font-medium">{transaction.id}</div>
                        <div className="text-sm text-muted-foreground">{transaction.date}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-secondary">{transaction.amount}</span>
                        <Badge variant="default">Completed</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailView;
