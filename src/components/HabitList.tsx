import { Habit } from "../types";

interface HabitListProps {
  habits: Habit[];
  onCompleteHabit: (id: number) => void;
  onDeleteHabit: (id: number) => void;
}

export default function HabitList({ habits, onCompleteHabit, onDeleteHabit }: HabitListProps) {
  return (
    <div className="bg-white shadow-lg mx-auto rounded-2xl max-w-2xl p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Vos Habitudes</h2>
      <ul className="space-y-4">
        {habits.length > 0 ? (
          habits.map((habit) => (
            <li
              key={habit.id}
              className={`p-4 border rounded-md transition-all ${
                habit.isCompleted ? "bg-green-100 border-green-500" : "bg-gray-100 border-gray-300"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{habit.title}</h3>
                  <p className="text-sm text-gray-600">{habit.description}</p>
                  <span className="text-xs text-gray-500">
                    Fréquence: {habit.frequency === "daily" ? "Quotidienne" : "Hebdomadaire"}
                  </span>
                </div>
                
                <div className="flex space-x-4 items-center">
                  <button
                    className={`px-3 py-1 rounded-lg text-white transition ${
                      habit.isCompleted ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
                    }`}
                    onClick={() => onCompleteHabit(habit.id)}
                  >
                    {habit.isCompleted ? "Complétée" : "Compléter"}
                  </button>
                  <button
                    className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                    onClick={() => onDeleteHabit(habit.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">Aucune habitude définie. Ajoutez-en une !</p>
        )}
      </ul>
    </div>
  );
}
