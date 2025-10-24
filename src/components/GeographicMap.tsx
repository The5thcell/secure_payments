import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

const GeographicMap = () => {
  const locations = [
    { city: "New York", country: "US", users: 342, lat: 40.7128, lng: -74.0060, threat: "low" },
    { city: "London", country: "UK", users: 189, lat: 51.5074, lng: -0.1278, threat: "low" },
    { city: "Tokyo", country: "JP", users: 234, lat: 35.6762, lng: 139.6503, threat: "low" },
    { city: "Sydney", country: "AU", users: 98, lat: -33.8688, lng: 151.2093, threat: "low" },
    { city: "Mumbai", country: "IN", users: 156, lat: 19.0760, lng: 72.8777, threat: "medium" },
    { city: "São Paulo", country: "BR", users: 127, lat: -23.5505, lng: -46.6333, threat: "low" },
    { city: "Toronto", country: "CA", users: 91, lat: 43.6532, lng: -79.3832, threat: "low" },
    { city: "Singapore", country: "SG", users: 203, lat: 1.3521, lng: 103.8198, threat: "high" },
  ];

  const getThreatColor = (threat: string) => {
    switch(threat) {
      case "high": return "bg-destructive";
      case "medium": return "bg-yellow-500";
      default: return "bg-secondary";
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card">
      <CardHeader>
        <CardTitle>Geographic Distribution</CardTitle>
        <CardDescription>Active users by location with threat levels</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Simplified world map representation */}
        <div className="relative h-[400px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border/50 overflow-hidden">
          {/* Grid overlay for map effect */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(var(--border) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
          
          {/* Location markers */}
          {locations.map((location, index) => (
            <div
              key={index}
              className="absolute group animate-fade-in"
              style={{
                left: `${((location.lng + 180) / 360) * 100}%`,
                top: `${((90 - location.lat) / 180) * 100}%`,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`w-3 h-3 rounded-full ${getThreatColor(location.threat)} animate-pulse cursor-pointer`} />
              <div className={`absolute w-6 h-6 rounded-full ${getThreatColor(location.threat)} opacity-30 -top-1.5 -left-1.5`} />
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                <div className="bg-card border border-border shadow-glow rounded-lg p-3 whitespace-nowrap">
                  <div className="font-semibold">{location.city}, {location.country}</div>
                  <div className="text-sm text-muted-foreground">{location.users} active users</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={location.threat === "high" ? "destructive" : "secondary"} className="text-xs">
                      {location.threat} threat
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location list */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          {locations.slice(0, 8).map((location, index) => (
            <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-background/50 border border-border/30">
              <MapPin className={`h-4 w-4 ${location.threat === "high" ? "text-destructive" : "text-primary"}`} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{location.city}</div>
                <div className="text-xs text-muted-foreground">{location.users} users</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GeographicMap;
