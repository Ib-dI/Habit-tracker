import { motion } from "framer-motion";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/24/solid";

interface HabitItemProps {
  name: string;
  description: string;
  frequency: "daily" | "weekly";
  isCompleted: boolean;
  createdAt: Date; // Ajout de la date ici
  onCompleteHabit: () => void;
  onDeleteHabit: () => void;
}

export default function HabitItem({
  name,
  description,
  frequency,
  isCompleted,
  createdAt, // Ajout de la date ici
  onCompleteHabit,
  onDeleteHabit,
}: HabitItemProps) {
  // Formatage de la date
  const formattedDate = new Date(createdAt).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  

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
          {/* Affichage de la date */}
          <p className="text-xs text-gray-400 mt-2">Créée le : {formattedDate}</p>
        </div>

        <motion.div className="flex flex-col space-y-3.5 md:flex-row md:space-y-0 md:space-x-4 items-center">
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CheckCircleIcon
              className={`h-6 w-6 cursor-pointer transition ${
                isCompleted ? "text-green-500" : "text-blue-500"
              }`}
              onClick={onCompleteHabit}
            />
            <span className={`absolute left-1/2 transform -translate-x-1/2 bottom-8 ${isCompleted ? "bg-green-500" : "bg-blue-500"} text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity`}>
              {isCompleted ? "Complétée" : "Compléter"}
            </span>
          </motion.div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <TrashIcon
              className="h-6 w-6 text-red-500 cursor-pointer"
              onClick={onDeleteHabit}
            />
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-8 bg-red-500 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Supprimer
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.li>
  );
}
