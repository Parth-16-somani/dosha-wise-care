import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoshaWheelProps {
  doshaScores: {
    vata: number;
    pitta: number;
    kapha: number;
  };
}

const DoshaWheel = ({ doshaScores }: DoshaWheelProps) => {
  const data = {
    labels: ["Vata (Air)", "Pitta (Fire)", "Kapha (Earth)"],
    datasets: [
      {
        data: [doshaScores.vata, doshaScores.pitta, doshaScores.kapha],
        backgroundColor: [
          "hsl(var(--wellness-vata))",
          "hsl(var(--wellness-pitta))",
          "hsl(var(--wellness-kapha))",
        ],
        borderColor: [
          "hsl(var(--wellness-vata))",
          "hsl(var(--wellness-pitta))",
          "hsl(var(--wellness-kapha))",
        ],
        borderWidth: 2,
        hoverBackgroundColor: [
          "hsl(var(--wellness-vata) / 0.8)",
          "hsl(var(--wellness-pitta) / 0.8)",
          "hsl(var(--wellness-kapha) / 0.8)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          padding: 20,
          usePointStyle: true,
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || "";
            const value = context.parsed;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
    cutout: "40%",
  };

  const dominantDosha = Object.entries(doshaScores).reduce(
    (max, [key, value]) => (value > max.value ? { key, value } : max),
    { key: "", value: 0 }
  );

  const getDoshaDescription = (dosha: string) => {
    const descriptions = {
      vata: "Creative, energetic, and quick-thinking. May benefit from warm, grounding foods.",
      pitta: "Focused, determined, and strong-willed. May benefit from cooling, calming foods.",
      kapha: "Calm, stable, and compassionate. May benefit from light, stimulating foods.",
    };
    return descriptions[dosha as keyof typeof descriptions] || "";
  };

  return (
    <div className="bg-card p-6 rounded-lg border shadow-wellness">
      <h3 className="text-xl font-semibold mb-4 text-center">Your Dosha Profile</h3>
      <div className="h-64 mb-6">
        <Doughnut data={data} options={options} />
      </div>
      <div className="text-center">
        <p className="text-lg font-medium mb-2">
          Dominant Dosha: <span className="text-primary capitalize">{dominantDosha.key}</span>
        </p>
        <p className="text-muted-foreground text-sm">
          {getDoshaDescription(dominantDosha.key)}
        </p>
      </div>
    </div>
  );
};

export default DoshaWheel;