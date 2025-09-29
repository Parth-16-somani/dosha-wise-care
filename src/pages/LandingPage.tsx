import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Users, Brain, Sparkles, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const features = [
  {
    icon: Brain,
    title: "Dosha Assessment",
    description: "Discover your unique Ayurvedic constitution with our comprehensive questionnaire and personalized insights."
  },
  {
    icon: Leaf,
    title: "Personalized Diet Plans",
    description: "AI-generated meal plans based on your dosha, health goals, and dietary preferences."
  },
  {
    icon: Users,
    title: "Expert Dietitians",
    description: "Connect with certified Ayurvedic dietitians for personalized consultations and guidance."
  },
  {
    icon: Sparkles,
    title: "Nutrient Analysis",
    description: "Advanced nutritional analysis with Ayurvedic food compatibility insights."
  },
  {
    icon: Shield,
    title: "Premium Features",
    description: "AR food scanner, IoT wearable integration, and advanced wellness tracking."
  },
  {
    icon: Zap,
    title: "Yoga & Lifestyle",
    description: "Customized yoga routines and lifestyle recommendations based on your constitution."
  }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AyurWellness
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gradient-primary hover:opacity-90">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Ayurvedic Wellness
                </span>
                <br />
                Made Personal
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover your unique dosha, get personalized diet plans, and connect with expert Ayurvedic dietitians. 
                Transform your health with ancient wisdom and modern technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-wellness">
                    Start Your Journey
                  </Button>
                </Link>
                <Link to="/assessment">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Take Dosha Test
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-wellness rounded-3xl opacity-20 blur-3xl"></div>
              <img
                src={heroImage}
                alt="Ayurvedic wellness herbs and spices"
                className="relative z-10 rounded-3xl shadow-wellness w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Ayurvedic Practice Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything you need for personalized Ayurvedic wellness - from dosha assessment 
              to diet planning, expert consultations, and advanced health tracking.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border/50 shadow-sm hover:shadow-wellness transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Health?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who have discovered the power of personalized Ayurvedic wellness. 
            Start your journey today with our comprehensive assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                Create Free Account
              </Button>
            </Link>
            <Link to="/assessment">
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10">
                Take Dosha Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">AyurWellness</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 AyurWellness. Transforming health through Ayurvedic wisdom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;