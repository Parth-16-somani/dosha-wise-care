import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import DoshaWheel from "@/components/DoshaWheel";
import { 
  Activity, 
  Apple, 
  Calendar, 
  Crown, 
  Heart, 
  Leaf, 
  Target, 
  TrendingUp,
  Utensils,
  Zap
} from "lucide-react";

const PatientDashboard = () => {
  const [user] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : { name: "Patient", email: "patient@example.com", role: "patient" };
  });

  // Mock data
  const doshaScores = { vata: 30, pitta: 45, kapha: 25 };
  const weeklyProgress = 75;
  const dailyCalories = { consumed: 1650, target: 2000 };
  const waterIntake = { consumed: 6, target: 8 };

  const todaysMeals = [
    { name: "Morning Herbal Tea", time: "7:00 AM", calories: 5, dosha: "vata" },
    { name: "Quinoa Breakfast Bowl", time: "8:30 AM", calories: 320, dosha: "pitta" },
    { name: "Green Smoothie", time: "11:00 AM", calories: 180, dosha: "kapha" },
    { name: "Ayurvedic Lunch Thali", time: "1:00 PM", calories: 450, dosha: "balanced" },
  ];

  const recommendations = [
    "Include more warming spices like ginger and cinnamon",
    "Favor cooked foods over raw during this season",
    "Practice oil massage (abhyanga) for better circulation",
    "Maintain regular meal times to balance Vata",
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation userRole={user.role} userName={user.name} />
      
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-muted-foreground">
            Track your wellness journey and discover personalized insights
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weekly Progress</CardTitle>
              <TrendingUp className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{weeklyProgress}%</div>
              <Progress value={weeklyProgress} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                Great progress this week!
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Calories</CardTitle>
              <Utensils className="h-4 w-4 text-wellness-pitta" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dailyCalories.consumed}
                <span className="text-sm text-muted-foreground">/{dailyCalories.target}</span>
              </div>
              <Progress 
                value={(dailyCalories.consumed / dailyCalories.target) * 100} 
                className="mt-2" 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Water Intake</CardTitle>
              <Activity className="h-4 w-4 text-wellness-kapha" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {waterIntake.consumed}
                <span className="text-sm text-muted-foreground">/{waterIntake.target} glasses</span>
              </div>
              <Progress 
                value={(waterIntake.consumed / waterIntake.target) * 100} 
                className="mt-2" 
              />
            </CardContent>
          </Card>

          <Card className="border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Account Status</CardTitle>
              <Crown className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">Free</div>
              <Button size="sm" className="mt-2 bg-gradient-to-r from-accent to-secondary text-accent-foreground">
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Meals */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="h-5 w-5 text-primary" />
                  Today's Meals
                </CardTitle>
                <CardDescription>
                  Track your daily nutrition and dosha balance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {todaysMeals.map((meal, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-subtle">
                      <div>
                        <h4 className="font-medium">{meal.name}</h4>
                        <p className="text-sm text-muted-foreground">{meal.time}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="text-xs">
                          {meal.calories} cal
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            meal.dosha === 'vata' ? 'border-wellness-vata text-wellness-vata' :
                            meal.dosha === 'pitta' ? 'border-wellness-pitta text-wellness-pitta' :
                            meal.dosha === 'kapha' ? 'border-wellness-kapha text-wellness-kapha' :
                            'border-primary text-primary'
                          }`}
                        >
                          {meal.dosha}
                        </Badge>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    <Utensils className="h-4 w-4 mr-2" />
                    Add Meal
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Today's Recommendations
                </CardTitle>
                <CardDescription>
                  Personalized tips based on your dosha and current health goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gradient-subtle">
                      <Leaf className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Dosha Profile */}
            <DoshaWheel doshaScores={doshaScores} />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Yoga Session
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Track Symptoms
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="h-4 w-4 mr-2" />
                  AR Food Scanner
                  <Badge className="ml-auto bg-accent text-accent-foreground">Premium</Badge>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Activity className="h-4 w-4 mr-2" />
                  Connect Wearable
                  <Badge className="ml-auto bg-accent text-accent-foreground">Premium</Badge>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;