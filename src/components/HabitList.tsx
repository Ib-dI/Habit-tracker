import { motion } from "framer-motion";
import HabitItem from "./HabitItem";
import { Habit } from "../types";

interface HabitListProps {
  habits: Habit[];
  onCompleteHabit: (id: number) => void;
  onDeleteHabit: (id: number) => void;
}

export default function HabitList({ habits, onCompleteHabit, onDeleteHabit }: HabitListProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg mx-auto rounded-2xl max-w-2xl p-6"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Vos Habitudes</h2>
      <ul className="space-y-4">
        {habits.length > 0 ? (
          habits.map((habit) => (
            <HabitItem
              key={habit.id}
              name={habit.title}
              description={habit.description}
              frequency={habit.frequency as "daily" | "weekly"}
              isCompleted={habit.isCompleted}
              onCompleteHabit={() => onCompleteHabit(habit.id)}
              onDeleteHabit={() => onDeleteHabit(habit.id)}
            />
          ))
        ) : (
          <p className="text-gray-500">Aucune habitude définie. Ajoutez-en une !</p>
        )}
      </ul>
    </motion.div>
  );
}
