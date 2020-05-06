import { v4 as uuidv4 } from 'uuid';

export const START_WORKOUT = "START_WORKOUT";
export const STOP_WORKOUT = "STOP_WORKOUT";

export interface WorkoutState {
  inProgress: boolean;
  counter: number;
}

export interface StartWorkoutAction {
  type: typeof START_WORKOUT;
  payload?: {
    counter: number;
  }
}

export interface StopWorkoutAction {
	type: typeof STOP_WORKOUT;
}

export type WorkoutActionTypes = StartWorkoutAction | StopWorkoutAction;

export const startWorkout = (): WorkoutActionTypes => {

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: "Tomanek ćwiczy",
      date: new Date()
    })
  };

  fetch('http://localhost:8080/api/workout', requestOptions);

  return {
    type: START_WORKOUT
  };
};

export const stopWorkout = (): WorkoutActionTypes => {
  return {
    type: STOP_WORKOUT
  };
};


const initialState: WorkoutState = {
  inProgress: false,
  counter: 0
}

export const workoutReducer = (
  state = initialState,
  action: WorkoutActionTypes
): WorkoutState => {
  switch (action.type) {
    case START_WORKOUT:
      return {
        ...state,
        inProgress: true
      };
    case STOP_WORKOUT:
      return {
        ...state,
        inProgress: false
      };
    default:
      return state;
  }
};
