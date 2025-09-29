// Food data extracted from uploaded files
export interface FoodItem {
  id: number;
  name: string;
  category: string;
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  ayurvedic: {
    rasa: string[];
    virya: string;
    vipaka: string;
    qualities: string[];
  };
  dosha: {
    vata: string;
    pitta: string;
    kapha: string;
  };
}

export const sampleFoods: FoodItem[] = [
  {
    id: 1,
    name: "Basmati Rice",
    category: "Grains",
    nutrients: {
      calories: 130,
      protein: 3,
      carbs: 28,
      fat: 0.3,
      fiber: 0.4
    },
    ayurvedic: {
      rasa: ["Sweet"],
      virya: "Cold",
      vipaka: "Sweet",
      qualities: ["Heavy", "Moist"]
    },
    dosha: {
      vata: "Decrease",
      pitta: "Decrease",
      kapha: "Increase"
    }
  },
  {
    id: 2,
    name: "Turmeric",
    category: "Spices",
    nutrients: {
      calories: 29,
      protein: 1,
      carbs: 6,
      fat: 0.3,
      fiber: 2
    },
    ayurvedic: {
      rasa: ["Bitter", "Pungent"],
      virya: "Hot",
      vipaka: "Pungent",
      qualities: ["Light", "Dry"]
    },
    dosha: {
      vata: "Increase",
      pitta: "Increase",
      kapha: "Decrease"
    }
  },
  {
    id: 3,
    name: "Ghee",
    category: "Fats",
    nutrients: {
      calories: 112,
      protein: 0,
      carbs: 0,
      fat: 12.8,
      fiber: 0
    },
    ayurvedic: {
      rasa: ["Sweet"],
      virya: "Cold",
      vipaka: "Sweet",
      qualities: ["Heavy", "Moist", "Stable"]
    },
    dosha: {
      vata: "Decrease",
      pitta: "Decrease",
      kapha: "Increase"
    }
  },
  {
    id: 4,
    name: "Ginger",
    category: "Spices",
    nutrients: {
      calories: 4,
      protein: 0.1,
      carbs: 0.9,
      fat: 0,
      fiber: 0.1
    },
    ayurvedic: {
      rasa: ["Pungent"],
      virya: "Hot",
      vipaka: "Pungent",
      qualities: ["Light", "Dry", "Sharp"]
    },
    dosha: {
      vata: "Decrease",
      pitta: "Increase",
      kapha: "Decrease"
    }
  },
  {
    id: 5,
    name: "Mung Dal",
    category: "Legumes",
    nutrients: {
      calories: 105,
      protein: 7,
      carbs: 19,
      fat: 0.4,
      fiber: 7.6
    },
    ayurvedic: {
      rasa: ["Sweet", "Astringent"],
      virya: "Cold",
      vipaka: "Sweet",
      qualities: ["Light", "Dry"]
    },
    dosha: {
      vata: "Neutral",
      pitta: "Decrease",
      kapha: "Decrease"
    }
  }
];

export interface YogaRoutine {
  name: string;
  duration: number;
  poses: string[];
  description: string;
}

export const yogaRoutines: Record<string, YogaRoutine> = {
  vata: {
    name: "Grounding Morning Flow",
    duration: 30,
    poses: ["Child's Pose", "Cat-Cow", "Standing Forward Fold", "Tree Pose", "Seated Meditation"],
    description: "Slow, grounding movements to calm Vata's mobile nature"
  },
  pitta: {
    name: "Cooling Evening Practice", 
    duration: 25,
    poses: ["Moon Salutation", "Seated Twist", "Fish Pose", "Legs Up Wall", "Savasana"],
    description: "Cooling, moderate-paced practice to balance Pitta's heat"
  },
  kapha: {
    name: "Energizing Dynamic Flow",
    duration: 35,
    poses: ["Sun Salutation", "Warrior Poses", "Backbends", "Twists", "Pranayama"],
    description: "Dynamic, energizing practice to stimulate Kapha's stable nature"
  }
};

export interface Patient {
  id: number;
  name: string;
  age: number;
  weight: number;
  height: number;
  dosha: { vata: number; pitta: number; kapha: number };
  healthGoals: string[];
  lastVisit: string;
}

export const samplePatients: Patient[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    age: 35,
    weight: 70,
    height: 175,
    dosha: { vata: 60, pitta: 25, kapha: 15 },
    healthGoals: ["Increase Energy", "Improve Digestion"],
    lastVisit: "2024-09-15"
  },
  {
    id: 2,
    name: "Priya Sharma",
    age: 28,
    weight: 58,
    height: 165,
    dosha: { vata: 20, pitta: 65, kapha: 15 },
    healthGoals: ["Stress Management", "Better Sleep"],
    lastVisit: "2024-09-20"
  },
  {
    id: 3,
    name: "Amit Patel",
    age: 42,
    weight: 78,
    height: 170,
    dosha: { vata: 15, pitta: 30, kapha: 55 },
    healthGoals: ["Weight Loss", "Increase Energy"],
    lastVisit: "2024-09-22"
  }
];