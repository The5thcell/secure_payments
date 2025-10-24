import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, DollarSign, Users, Shield, TrendingUp, AlertCircle } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { UserActivityTable } from "@/components/UserActivityTable";
import UserDetailView from "@/components/UserDetailView";
import GeographicMap from "@/components/GeographicMap";
import ThreatDetection from "@/components/ThreatDetection";
import RealTimeActivityFeed from "@/components/RealTimeActivityFeed";
import SystemHealthMonitor from "@/components/SystemHealthMonitor";
import DashboardFilters from "@/components/DashboardFilters";

const Dashboard = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  // Sample data for charts
  const loginData = [
    { time: "00:00", logins: 45 },
    { time: "04:00", logins: 12 },
    { time: "08:00", logins: 89 },
    { time: "12:00", logins: 134 },
    { time: "16:00", logins: 98 },
    { time: "20:00", logins: 67 },
  ];

  const paymentData = [
    { month: "Jan", amount: 4500 },
    { month: "Feb", amount: 5200 },
    { month: "Mar", amount: 4800 },
    { month: "Apr", amount: 6100 },
    { month: "May", amount: 7300 },
    { month: "Jun", amount: 6800 },
  ];

  const activityData = [
    { name: "Login Success", value: 892 },
    { name: "Payment Processed", value: 456 },
    { name: "Failed Attempts", value: 23 },
    { name: "API Calls", value: 1243 },
  ];

  const authMethodsData = [
    { name: "Email/Password", value: 45, color: "hsl(var(--primary))" },
    { name: "Google OAuth", value: 30, color: "hsl(var(--secondary))" },
    { name: "2FA Enabled", value: 20, color: "hsl(217 91% 70%)" },
    { name: "Biometric", value: 5, color: "hsl(189 94% 55%)" },
  ];

  const deviceData = [
    { device: "Desktop", logins: 1234 },
    { device: "Mobile", logins: 892 },
    { device: "Tablet", logins: 456 },
  ];

  const recentActivity = [
    { type: "login", user: "john.doe@example.com", time: "2 minutes ago", status: "success" },
    { type: "payment", user: "jane.smith@example.com", time: "5 minutes ago", status: "success" },
    { type: "login", user: "admin@example.com", time: "12 minutes ago", status: "success" },
    { type: "payment", user: "user@example.com", time: "18 minutes ago", status: "failed" },
  ];

  return (
    <>
      {selectedUserId && (
        <UserDetailView 
          userId={selectedUserId} 
          onClose={() => setSelectedUserId(null)} 
        />
      )}
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">Real-time monitoring and insights</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm text-muted-foreground">Live Data</span>
            </div>
          </div>
        </div>

        {/* Filters */}
        <DashboardFilters />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,543</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3 text-secondary" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">$34,700</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <TrendingUp className="h-3 w-3 text-secondary" />
                +8.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">892</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <Activity className="h-3 w-3 text-primary" />
                Real-time monitoring
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card hover:shadow-glow transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Security Alerts</CardTitle>
              <Shield className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">23</div>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                <AlertCircle className="h-3 w-3 text-destructive" />
                Requires attention
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Threat Detection & Real-Time Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ThreatDetection />
          <RealTimeActivityFeed />
        </div>

        {/* Geographic Map */}
        <GeographicMap />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Login Activity</CardTitle>
              <CardDescription>User authentication over the last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={loginData}>
                  <defs>
                    <linearGradient id="colorLogins" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
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
                  <Area type="monotone" dataKey="logins" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorLogins)" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Payment Trends</CardTitle>
              <CardDescription>Monthly transaction volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={paymentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }}
                  />
                  <Bar dataKey="amount" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Authentication Methods</CardTitle>
              <CardDescription>Distribution of auth types</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={authMethodsData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {authMethodsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Device Distribution</CardTitle>
              <CardDescription>Logins by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deviceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="device" type="category" stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: "hsl(var(--card))", 
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)"
                    }}
                  />
                  <Bar dataKey="logins" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* System Health Monitor */}
        <SystemHealthMonitor />

        {/* User Activity Table */}
        <UserActivityTable onViewUser={(userId) => setSelectedUserId(userId)} />

        {/* Activity Feed and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system events and transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30">
                    <div className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${activity.status === 'success' ? 'bg-secondary' : 'bg-destructive'}`} />
                      <div>
                        <p className="font-medium capitalize">{activity.type}</p>
                        <p className="text-sm text-muted-foreground">{activity.user}</p>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
            <CardHeader>
              <CardTitle>System Overview</CardTitle>
              <CardDescription>Current system status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm font-bold">{item.value}</span>
                    </div>
                    <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-primary" 
                        style={{ width: `${(item.value / 1500) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
