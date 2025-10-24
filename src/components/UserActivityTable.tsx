import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Shield, AlertTriangle } from "lucide-react";

interface UserActivity {
  id: string;
  name: string;
  email: string;
  lastLogin: string;
  loginCount: number;
  paymentCount: number;
  status: "active" | "warning" | "suspicious";
  location: string;
  device: string;
}

interface UserActivityTableProps {
  onViewUser: (userId: string) => void;
}

const mockUsers: UserActivity[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    email: "sarah.johnson@techcorp.com",
    lastLogin: "2 minutes ago",
    loginCount: 145,
    paymentCount: 23,
    status: "active",
    location: "New York, US",
    device: "Chrome on MacOS"
  },
  {
    id: "2",
    name: "Michael Chen",
    email: "m.chen@innovate.io",
    lastLogin: "15 minutes ago",
    loginCount: 89,
    paymentCount: 12,
    status: "active",
    location: "San Francisco, US",
    device: "Safari on iOS"
  },
  {
    id: "3",
    name: "Emma Williams",
    email: "emma.w@startup.dev",
    lastLogin: "1 hour ago",
    loginCount: 234,
    paymentCount: 45,
    status: "warning",
    location: "London, UK",
    device: "Firefox on Windows"
  },
  {
    id: "4",
    name: "James Rodriguez",
    email: "j.rodriguez@enterprise.com",
    lastLogin: "3 hours ago",
    loginCount: 56,
    paymentCount: 8,
    status: "active",
    location: "Toronto, CA",
    device: "Edge on Windows"
  },
  {
    id: "5",
    name: "Lisa Kumar",
    email: "lisa.k@solutions.net",
    lastLogin: "5 hours ago",
    loginCount: 178,
    paymentCount: 34,
    status: "suspicious",
    location: "Mumbai, IN",
    device: "Chrome on Android"
  },
  {
    id: "6",
    name: "David Park",
    email: "david.park@global.biz",
    lastLogin: "12 hours ago",
    loginCount: 412,
    paymentCount: 67,
    status: "active",
    location: "Seoul, KR",
    device: "Safari on MacOS"
  },
  {
    id: "7",
    name: "Sofia Martinez",
    email: "sofia.m@digital.co",
    lastLogin: "1 day ago",
    loginCount: 67,
    paymentCount: 15,
    status: "active",
    location: "Madrid, ES",
    device: "Chrome on Linux"
  },
  {
    id: "8",
    name: "Alex Thompson",
    email: "alex.t@techstart.io",
    lastLogin: "2 days ago",
    loginCount: 23,
    paymentCount: 3,
    status: "warning",
    location: "Sydney, AU",
    device: "Firefox on MacOS"
  }
];

const UserActivityTable = ({ onViewUser }: UserActivityTableProps) => {
  const getStatusBadge = (status: string) => {
    const variants = {
      active: "default",
      warning: "secondary",
      suspicious: "destructive"
    };
    return variants[status as keyof typeof variants] || "default";
  };

  const getStatusIcon = (status: string) => {
    if (status === "suspicious") return <AlertTriangle className="h-3 w-3" />;
    if (status === "warning") return <Shield className="h-3 w-3" />;
    return null;
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <CardTitle>User Activity Monitor</CardTitle>
        <CardDescription>Real-time user authentication and transaction activity</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>User</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead className="text-center">Total Logins</TableHead>
                <TableHead className="text-center">Payments</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockUsers.map((user) => (
                <TableRow 
                  key={user.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{user.lastLogin}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-mono font-medium">{user.loginCount}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="font-mono font-medium">{user.paymentCount}</span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{user.location}</div>
                      <div className="text-muted-foreground text-xs">{user.device}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={getStatusBadge(user.status) as any}
                      className="flex items-center gap-1 w-fit"
                    >
                      {getStatusIcon(user.status)}
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:bg-primary/10 hover:text-primary"
                      onClick={() => onViewUser(user.id)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export { UserActivityTable, mockUsers };
export type { UserActivity };
