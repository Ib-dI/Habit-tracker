import { Pie } from "react-chartjs-2"
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"

Chart.register(ArcElement, Tooltip, Legend)

interface HabitsStatsProps {
  habits: { isCompleted: boolean}[]
}

export default function HabitStats( { habits }: HabitsStatsProps) {
  const completedHabits = habits.filter(habit => habit.isCompleted).length
  const totalHabits = habits.length


  const data = {
    labels: ["Complétées", "Restantes"],
    datasets: [
      {
        label: " # d'habitudes",
        data: [completedHabits, totalHabits - completedHabits],
        backgroundColor: ["#4CAF50", "#FF6384"],
        hoverBackgroundColor: ["#45a049", "#FF6384"]
      }
    ]
  }
  return (
    <div className="my-4 w-96 mx-auto">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Statistiques</h2>
      <Pie data={data}/>
    </div>
  )
}