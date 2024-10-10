import { useState } from "react";
import { Habit } from "../types";

interface HabitFormProps {
  onAddHabit: (habit: Habit) => void;
}

export default function HabitForm({ onAddHabit }: HabitFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [frequency, setFrequency] = useState("daily");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      const newHabit = {
        id: Date.now(),
        title,
        description,
        frequency,
        isCompleted: false,
      }
      onAddHabit(newHabit)
      setTitle('')
      setDescription('')
      setFrequency('daily')
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-gradient-to-br from-gray-100 to-blue-100 p-6 rounded-[30px] shadow-md w-full max-w-md mx-auto transition-all duration-300 ease-in-out transform hover:scale-105"
    >
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">Ajouter une Habitude</h2>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Nom de l'habitude"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-gray-600">Fréquence</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option value="daily">Quotidienne</option>
          <option value="weekly">Hebdomadaire</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-all transform hover:scale-105"
      >
        Ajouter l'Habitude
      </button>
    </form>
  );
}
