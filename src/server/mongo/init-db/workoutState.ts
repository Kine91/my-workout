import { v4 as uuidv4 } from 'uuid';

export const workoutState = [
  {
    id: uuidv4(),
    name: "Tomek",
    date: new Date()
  },
  {
    id: uuidv4(),
    name: "Cos tam",
    date: new Date("18-04-2020")
  }
]
