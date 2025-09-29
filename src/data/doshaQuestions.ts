// Dosha assessment questions from uploaded files
export interface DoshaOption {
  text: string;
  vata: number;
  pitta: number;
  kapha: number;
}

export interface DoshaQuestion {
  id: number;
  question: string;
  options: DoshaOption[];
}

export const doshaQuestions: DoshaQuestion[] = [
  {
    id: 1,
    question: "What is your natural body frame?",
    options: [
      { text: "Thin, light, small-boned", vata: 3, pitta: 0, kapha: 0 },
      { text: "Medium, moderate build", vata: 0, pitta: 3, kapha: 0 },
      { text: "Large, heavy, well-built", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 2,
    question: "How is your appetite generally?",
    options: [
      { text: "Variable, sometimes strong, sometimes weak", vata: 3, pitta: 0, kapha: 0 },
      { text: "Strong, rarely miss meals", vata: 0, pitta: 3, kapha: 0 },
      { text: "Low but steady, can skip meals easily", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 3,
    question: "How do you typically sleep?",
    options: [
      { text: "Light sleeper, often restless", vata: 3, pitta: 0, kapha: 0 },
      { text: "Moderate, need regular sleep schedule", vata: 0, pitta: 3, kapha: 0 },
      { text: "Deep sleeper, love long sleep", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 4,
    question: "What is your natural skin type?",
    options: [
      { text: "Dry, rough, cool to touch", vata: 3, pitta: 0, kapha: 0 },
      { text: "Warm, oily, prone to irritation", vata: 0, pitta: 3, kapha: 0 },
      { text: "Moist, cool, smooth, thick", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 5,
    question: "How do you handle stress?",
    options: [
      { text: "Get anxious, worried, overthink", vata: 3, pitta: 0, kapha: 0 },
      { text: "Get irritated, angry, impatient", vata: 0, pitta: 3, kapha: 0 },
      { text: "Remain calm, may become withdrawn", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 6,
    question: "How do you learn new things?",
    options: [
      { text: "Quickly grasp concepts but may forget details", vata: 3, pitta: 0, kapha: 0 },
      { text: "Learn systematically with good comprehension", vata: 0, pitta: 3, kapha: 0 },
      { text: "Learn slowly but retain information well", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 7,
    question: "What is your natural energy pattern?",
    options: [
      { text: "Bursts of energy followed by fatigue", vata: 3, pitta: 0, kapha: 0 },
      { text: "Steady, moderate energy throughout day", vata: 0, pitta: 3, kapha: 0 },
      { text: "Slow to start but good endurance", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 8,
    question: "How do you prefer your environment?",
    options: [
      { text: "Warm, humid, sheltered", vata: 3, pitta: 0, kapha: 0 },
      { text: "Cool, well-ventilated, moderate", vata: 0, pitta: 3, kapha: 0 },
      { text: "Warm, dry, stimulating", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 9,
    question: "What is your typical walking pace?",
    options: [
      { text: "Fast, irregular, often hurried", vata: 3, pitta: 0, kapha: 0 },
      { text: "Moderate, purposeful, steady", vata: 0, pitta: 3, kapha: 0 },
      { text: "Slow, relaxed, unhurried", vata: 0, pitta: 0, kapha: 3 }
    ]
  },
  {
    id: 10,
    question: "How do you typically make decisions?",
    options: [
      { text: "Quickly but may change mind often", vata: 3, pitta: 0, kapha: 0 },
      { text: "After careful analysis, stick to decisions", vata: 0, pitta: 3, kapha: 0 },
      { text: "Slowly, after much deliberation", vata: 0, pitta: 0, kapha: 3 }
    ]
  }
];