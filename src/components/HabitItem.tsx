import { motion } from "framer-motion";

interface HabitItemProps {
  name: string;
  description: string;
  frequency: "daily" | "weekly";
  isCompleted: boolean;
  onCompleteHabit: () => void;
  onDeleteHabit: () => void;
}

export default function HabitItem({
  name,
  description,
  frequency,
  isCompleted,
  onCompleteHabit,
  onDeleteHabit,
}: HabitItemProps) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`p-4 border rounded-md transition-all ${
        isCompleted ? "bg-green-100 border-green-500" : "bg-gray-100 border-gray-300"
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          <span className="text-xs text-gray-500">
            Fréquence: {frequency === "daily" ? "Quotidienne" : "Hebdomadaire"}
          </span>
        </div>

        <motion.div className="flex space-x-4 items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0 }}
            className={`px-3 py-1 rounded-lg text-white transition ${
              isCompleted ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={onCompleteHabit}
          >
            {isCompleted ? "Complétée" : "Compléter"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0 }}
            className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
            onClick={onDeleteHabit}
          >
            Supprimer
          </motion.button>
        </motion.div>
      </div>
    </motion.li>
  );
}
