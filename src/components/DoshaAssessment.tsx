import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import DoshaWheel from "./DoshaWheel";

const questions = [
  {
    id: 1,
    question: "How would you describe your body frame?",
    options: [
      { text: "Thin, light, small-boned", dosha: "vata", score: 3 },
      { text: "Medium, moderate build", dosha: "pitta", score: 3 },
      { text: "Large, heavy, big-boned", dosha: "kapha", score: 3 },
    ],
  },
  {
    id: 2,
    question: "How is your appetite generally?",
    options: [
      { text: "Irregular, sometimes hungry, sometimes not", dosha: "vata", score: 3 },
      { text: "Strong, sharp, I get irritable when hungry", dosha: "pitta", score: 3 },
      { text: "Steady, moderate, can skip meals easily", dosha: "kapha", score: 3 },
    ],
  },
  {
    id: 3,
    question: "How do you handle stress?",
    options: [
      { text: "I worry a lot and feel anxious", dosha: "vata", score: 3 },
      { text: "I get irritated and angry", dosha: "pitta", score: 3 },
      { text: "I remain calm and withdraw", dosha: "kapha", score: 3 },
    ],
  },
  {
    id: 4,
    question: "What's your sleep pattern like?",
    options: [
      { text: "Light sleeper, wake up easily", dosha: "vata", score: 3 },
      { text: "Moderate sleep, need 6-8 hours", dosha: "pitta", score: 3 },
      { text: "Deep sleep, love to sleep long", dosha: "kapha", score: 3 },
    ],
  },
  {
    id: 5,
    question: "How do you learn best?",
    options: [
      { text: "Quickly, but forget easily", dosha: "vata", score: 3 },
      { text: "Moderately fast, good retention", dosha: "pitta", score: 3 },
      { text: "Slowly, but remember for long", dosha: "kapha", score: 3 },
    ],
  },
];

const DoshaAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [doshaScores, setDoshaScores] = useState({ vata: 0, pitta: 0, kapha: 0 });

  const handleAnswer = (questionId: number, optionIndex: string) => {
    setAnswers({ ...answers, [questionId]: optionIndex });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const scores = { vata: 0, pitta: 0, kapha: 0 };
    
    Object.entries(answers).forEach(([questionId, optionIndex]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      if (question) {
        const option = question.options[parseInt(optionIndex)];
        scores[option.dosha as keyof typeof scores] += option.score;
      }
    });

    setDoshaScores(scores);
    setShowResults(true);
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setDoshaScores({ vata: 0, pitta: 0, kapha: 0 });
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-6">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Your Dosha Assessment Results
            </CardTitle>
            <CardDescription>
              Discover your unique Ayurvedic constitution
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <DoshaWheel doshaScores={doshaScores} />
          
          <Card>
            <CardHeader>
              <CardTitle>Personalized Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-subtle rounded-lg">
                <h4 className="font-semibold text-wellness-vata mb-2">Vata Balance Tips</h4>
                <p className="text-sm text-muted-foreground">
                  Favor warm, cooked foods. Establish regular routines. Practice grounding yoga.
                </p>
              </div>
              <div className="p-4 bg-gradient-subtle rounded-lg">
                <h4 className="font-semibold text-wellness-pitta mb-2">Pitta Balance Tips</h4>
                <p className="text-sm text-muted-foreground">
                  Choose cooling foods. Avoid excessive heat. Practice calming meditation.
                </p>
              </div>
              <div className="p-4 bg-gradient-subtle rounded-lg">
                <h4 className="font-semibold text-wellness-kapha mb-2">Kapha Balance Tips</h4>
                <p className="text-sm text-muted-foreground">
                  Eat light, spicy foods. Stay active. Wake up early and exercise regularly.
                </p>
              </div>
              <Button 
                onClick={resetAssessment} 
                variant="outline" 
                className="w-full"
              >
                Take Assessment Again
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-xl">Dosha Assessment</CardTitle>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <h3 className="text-lg font-medium">{currentQ.question}</h3>
            
            <RadioGroup
              value={answers[currentQ.id] || ""}
              onValueChange={(value) => handleAnswer(currentQ.id, value)}
            >
              {currentQ.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-4">
              <Button
                variant="outline"
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={nextQuestion}
                disabled={!answers[currentQ.id]}
                className="bg-gradient-primary hover:opacity-90"
              >
                {currentQuestion === questions.length - 1 ? "Get Results" : "Next"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoshaAssessment;