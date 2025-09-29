import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NutrientAnalysisPanel } from "@/components/NutrientAnalysisPanel";
import { sampleFoods, yogaRoutines, type FoodItem } from "@/data/foodData";
import { Utensils, Clock, Target, Sparkles } from "lucide-react";

interface MealPlan {
  id: string;
  name: string;
  time: string;
  foods: FoodItem[];
  calories: number;
}

export default function DietPlanManager() {
  const [selectedDosha, setSelectedDosha] = useState<string>("vata");
  const [healthGoal, setHealthGoal] = useState<string>("weight-loss");
  const [selectedFoods, setSelectedFoods] = useState<FoodItem[]>([]);
  const [mealPlans, setMealPlans] = useState<MealPlan[]>([
    {
      id: "breakfast",
      name: "Breakfast",
      time: "8:00 AM",
      foods: [sampleFoods[0]], // Basmati Rice
      calories: 130
    }
  ]);

  const handleFoodAdd = (food: FoodItem) => {
    setSelectedFoods(prev => [...prev, food]);
  };

  const generateAutoPlan = () => {
    // Auto-generate based on dosha and health goal
    const vataPacifyingFoods = sampleFoods.filter(food => 
      food.dosha.vata === "Decrease" || food.dosha.vata === "Neutral"
    );
    const pittaPacifyingFoods = sampleFoods.filter(food => 
      food.dosha.pitta === "Decrease" || food.dosha.pitta === "Neutral"
    );
    const kaphaPacifyingFoods = sampleFoods.filter(food => 
      food.dosha.kapha === "Decrease" || food.dosha.kapha === "Neutral"
    );

    let recommendedFoods: FoodItem[] = [];
    
    switch (selectedDosha) {
      case "vata":
        recommendedFoods = vataPacifyingFoods.slice(0, 3);
        break;
      case "pitta":
        recommendedFoods = pittaPacifyingFoods.slice(0, 3);
        break;
      case "kapha":
        recommendedFoods = kaphaPacifyingFoods.slice(0, 3);
        break;
    }

    const newMealPlans: MealPlan[] = [
      {
        id: "breakfast",
        name: "Breakfast",
        time: "8:00 AM",
        foods: recommendedFoods.slice(0, 2),
        calories: recommendedFoods.slice(0, 2).reduce((acc, food) => acc + food.nutrients.calories, 0)
      },
      {
        id: "lunch", 
        name: "Lunch",
        time: "12:30 PM",
        foods: recommendedFoods.slice(1, 3),
        calories: recommendedFoods.slice(1, 3).reduce((acc, food) => acc + food.nutrients.calories, 0)
      },
      {
        id: "dinner",
        name: "Dinner", 
        time: "7:00 PM",
        foods: recommendedFoods.slice(0, 2),
        calories: recommendedFoods.slice(0, 2).reduce((acc, food) => acc + food.nutrients.calories, 0)
      }
    ];

    setMealPlans(newMealPlans);
  };

  const totalDailyCalories = mealPlans.reduce((acc, meal) => acc + meal.calories, 0);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-abril mb-4">Diet Plan Management</h1>
        <p className="text-muted-foreground font-general">
          Create personalized Ayurvedic diet plans based on dosha constitution and health goals
        </p>
      </div>

      <Tabs defaultValue="auto-generate" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="auto-generate" className="font-general">Auto Generate</TabsTrigger>
          <TabsTrigger value="manual-builder" className="font-general">Manual Builder</TabsTrigger>
          <TabsTrigger value="meal-plans" className="font-general">Current Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="auto-generate" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-general flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Auto Diet Plan Generator
                </CardTitle>
                <CardDescription className="font-general">
                  Generate a personalized diet plan based on your dosha and health goals
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="font-general">Dominant Dosha</Label>
                  <Select value={selectedDosha} onValueChange={setSelectedDosha}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vata">Vata (Air & Space)</SelectItem>
                      <SelectItem value="pitta">Pitta (Fire & Water)</SelectItem>
                      <SelectItem value="kapha">Kapha (Earth & Water)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="font-general">Health Goal</Label>
                  <Select value={healthGoal} onValueChange={setHealthGoal}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weight-loss">Weight Loss</SelectItem>
                      <SelectItem value="weight-gain">Weight Gain</SelectItem>
                      <SelectItem value="digestion">Improve Digestion</SelectItem>
                      <SelectItem value="energy">Increase Energy</SelectItem>
                      <SelectItem value="stress">Stress Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={generateAutoPlan} className="w-full font-general">
                  <Target className="h-4 w-4 mr-2" />
                  Generate Diet Plan
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-general">Recommended Yoga Routine</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedDosha && yogaRoutines[selectedDosha] && (
                  <div className="space-y-3">
                    <h4 className="font-semibold font-general">{yogaRoutines[selectedDosha].name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="font-general">{yogaRoutines[selectedDosha].duration} minutes</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-general">
                      {yogaRoutines[selectedDosha].description}
                    </p>
                    <div className="space-y-1">
                      {yogaRoutines[selectedDosha].poses.map((pose, index) => (
                        <Badge key={index} variant="secondary" className="mr-1 font-general">
                          {pose}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="manual-builder" className="space-y-6">
          <NutrientAnalysisPanel 
            selectedFoods={selectedFoods}
            onFoodAdd={handleFoodAdd}
          />
        </TabsContent>

        <TabsContent value="meal-plans" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mealPlans.map((meal) => (
              <Card key={meal.id}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-general">
                    <span className="flex items-center gap-2">
                      <Utensils className="h-4 w-4" />
                      {meal.name}
                    </span>
                    <span className="text-sm text-muted-foreground font-general">{meal.time}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    {meal.foods.map((food, index) => (
                      <div key={index} className="flex justify-between items-center p-2 bg-muted rounded">
                        <span className="text-sm font-general">{food.name}</span>
                        <span className="text-xs text-muted-foreground font-general">
                          {food.nutrients.calories} cal
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold font-general">Total:</span>
                      <span className="font-semibold text-primary font-general">{meal.calories} calories</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="font-general">Daily Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary font-general">{totalDailyCalories}</p>
                <p className="text-muted-foreground font-general">Total Daily Calories</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}