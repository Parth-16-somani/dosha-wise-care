import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Leaf, User, Settings, LogOut } from "lucide-react";

interface NavigationProps {
  userRole?: string;
  userName?: string;
}

const Navigation = ({ userRole = "guest", userName }: NavigationProps) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const getNavItems = () => {
    switch (userRole) {
      case "patient":
        return [
          { path: "/dashboard", label: "Dashboard", icon: User },
          { path: "/assessment", label: "Dosha Assessment", icon: Leaf },
          { path: "/diet-plan", label: "Diet Plan", icon: User },
          { path: "/yoga", label: "Yoga & Lifestyle", icon: User },
        ];
      case "dietitian":
        return [
          { path: "/dietitian-dashboard", label: "Dashboard", icon: User },
          { path: "/patients", label: "Patients", icon: User },
          { path: "/chat", label: "Messages", icon: User },
        ];
      case "admin":
        return [
          { path: "/admin-dashboard", label: "Dashboard", icon: User },
          { path: "/verify-dietitians", label: "Verify Dietitians", icon: User },
          { path: "/subscriptions", label: "Subscriptions", icon: User },
        ];
      default:
        return [
          { path: "/", label: "Home", icon: User },
          { path: "/login", label: "Login", icon: User },
        ];
    }
  };

  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AyurWellness
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            {getNavItems().map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive(item.path) ? "default" : "ghost"}
                    size="sm"
                    className={cn(
                      "transition-all duration-200",
                      isActive(item.path) && "bg-gradient-primary text-primary-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.label}
                  </Button>
                </Link>
              );
            })}

            {userRole !== "guest" && (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border">
                <span className="text-sm text-muted-foreground">
                  Welcome, {userName || "User"}
                </span>
                <Button variant="ghost" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;