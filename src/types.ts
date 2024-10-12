export interface Habit {
  id: number;
  title: string;
  description: string;
  frequency: string;
  isCompleted: boolean;
  createdAt: Date;
}