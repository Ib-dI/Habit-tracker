import { useState, useEffect } from "react"
import { Habit } from "../types"
import HabitForm from "./HabitForm"
import HabitList from "./HabitList"
import HabitStats from "./HabitStats";

export default function HabitTracker() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const storedHabits = localStorage.getItem("habits");
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Demande de permission pour les notifications
  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission()
    }
  })

  // Envoi d'une notification à une heure fixe
  const sendNotification = (habitTitle: string) => {
    if (Notification.permission === "granted") {
      new Notification(`Rappel d'habitude`, {
        body: `Noubliez pas de compléter votre habitude : ${habitTitle}`
      })
    }
  }

  // Créer une notification tous les jours à 9h pour les habitudes quotidiennes
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      if (now.getHours() === 9 && now.getMinutes() === 0) {
        habits.forEach((habit) => {
          if (habit.frequency === 'daily' && !habit.isCompleted) {
            sendNotification(habit.title)
          }
        })
      }
    },60000)

    return () => clearInterval(interval)
  }, [habits])

  const addHabit = (newHabit: Habit) => {
    setHabits((prevHabits) => [...prevHabits, newHabit]);
  };

  const deleteHabit = (id: number) => {
    setHabits((prevHabits) => prevHabits.filter((habit) => habit.id !== id));
  };

  const completeHabit = (id: number) => {
    setHabits((prevHabits) =>
      prevHabits.map((habit) =>
        habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
      )
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Habit Tracker</h1>
      <HabitForm onAddHabit={addHabit} />
      <HabitList habits={habits} onCompleteHabit={completeHabit} onDeleteHabit={deleteHabit} />
      <HabitStats habits={habits} />
    </div>
  );
}