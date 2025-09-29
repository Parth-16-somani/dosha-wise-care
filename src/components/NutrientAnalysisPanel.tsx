import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { sampleFoods, type FoodItem } from "@/data/foodData";
import { Search, Plus, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";

interface NutrientAnalysisPanelProps {
  selectedFoods?: FoodItem[];
  onFoodAdd?: (food: FoodItem) => void;
}

export const NutrientAnalysisPanel = ({ selectedFoods = [], onFoodAdd }: NutrientAnalysisPanelProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredFoods = sampleFoods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    food.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalNutrients = selectedFoods.reduce(
    (acc, food) => ({
      calories: acc.calories + food.nutrients.calories,
      protein: acc.protein + food.nutrients.protein,
      carbs: acc.carbs + food.nutrients.carbs,
      fat: acc.fat + food.nutrients.fat,
      fiber: acc.fiber + food.nutrients.fiber,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 }
  );

  const getDoshaEffect = (effect: string) => {
    switch (effect) {
      case "Increase":
        return <Badge variant="destructive" className="text-xs">↑</Badge>;
      case "Decrease":
        return <Badge variant="default" className="text-xs bg-wellness-kapha text-primary-foreground">↓</Badge>;
      default:
        return <Badge variant="secondary" className="text-xs">→</Badge>;
    }
  };

  const checkIncompatibleCombinations = () => {
    const combinations = [];
    
    // Check for milk + citrus/sour fruits
    const hasMilk = selectedFoods.some(food => food.category === "Dairy");
    const hasCitrus = selectedFoods.some(food => 
      food.ayurvedic.rasa.includes("Sour") || food.name.toLowerCase().includes("lemon")
    );
    
    if (hasMilk && hasCitrus) {
      combinations.push("Milk with sour/citrus fruits");
    }

    // Check for honey + ghee in equal quantities (simplified)
    const hasHoney = selectedFoods.some(food => food.name.toLowerCase().includes("honey"));
    const hasGhee = selectedFoods.some(food => food.name.toLowerCase().includes("ghee"));
    
    if (hasHoney && hasGhee) {
      combinations.push("Honey with heated ghee");
    }

    return combinations;
  };

  const incompatibleCombinations = checkIncompatibleCombinations();

  return (
    <div className="space-y-6">
      {/* Food Search & Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="font-general">Food Database</CardTitle>
          <CardDescription className="font-general">
            Search and add foods to analyze their nutritional and Ayurvedic properties
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search foods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 font-general"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto">
            {filteredFoods.map((food) => (
              <div key={food.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium font-general">{food.name}</h4>
                  <p className="text-sm text-muted-foreground font-general">{food.category}</p>
                  <div className="flex gap-1 mt-1">
                    <span className="text-xs">V{getDoshaEffect(food.dosha.vata)}</span>
                    <span className="text-xs">P{getDoshaEffect(food.dosha.pitta)}</span>
                    <span className="text-xs">K{getDoshaEffect(food.dosha.kapha)}</span>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onFoodAdd?.(food)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selected Foods */}
      {selectedFoods.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-general">Selected Foods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {selectedFoods.map((food, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                  <span className="font-general">{food.name}</span>
                  <div className="flex gap-1">
                    <span className="text-xs">V{getDoshaEffect(food.dosha.vata)}</span>
                    <span className="text-xs">P{getDoshaEffect(food.dosha.pitta)}</span>
                    <span className="text-xs">K{getDoshaEffect(food.dosha.kapha)}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Nutritional Analysis */}
      {selectedFoods.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="font-general">Nutritional Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary font-general">{totalNutrients.calories}</p>
                <p className="text-sm text-muted-foreground font-general">Calories</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-wellness-pitta font-general">{totalNutrients.protein}g</p>
                <p className="text-sm text-muted-foreground font-general">Protein</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-wellness-vata font-general">{totalNutrients.carbs}g</p>
                <p className="text-sm text-muted-foreground font-general">Carbs</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-accent-foreground font-general">{totalNutrients.fat}g</p>
                <p className="text-sm text-muted-foreground font-general">Fat</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-wellness-kapha font-general">{totalNutrients.fiber}g</p>
                <p className="text-sm text-muted-foreground font-general">Fiber</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Ayurvedic Compatibility Check */}
      {incompatibleCombinations.length > 0 && (
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive font-general">
              <AlertTriangle className="h-5 w-5" />
              Ayurvedic Incompatibilities Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {incompatibleCombinations.map((combination, index) => (
                <div key={index} className="flex items-center gap-2 p-2 bg-destructive/10 rounded">
                  <AlertTriangle className="h-4 w-4 text-destructive" />
                  <span className="text-sm font-general">{combination}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-3 font-general">
              These food combinations may cause digestive issues according to Ayurvedic principles.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};