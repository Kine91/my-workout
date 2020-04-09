export const START_WORKOUT = "START_WORKOUT";
export const STOP_WORKOUT = "STOP_WORKOUT";

export interface WorkoutState {
  inProgress: boolean;
}

export interface StartWorkoutAction {
	type: typeof START_WORKOUT;
}

export interface StopWorkoutAction {
	type: typeof STOP_WORKOUT;
}

export type WorkoutActionTypes = StartWorkoutAction | StopWorkoutAction;

export const startWorkout = (): WorkoutActionTypes => {
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
  inProgress: false
}

export const workoutReducer = (
  state = initialState,
  action: WorkoutActionTypes
): WorkoutState => {
  switch (action.type) {
    case START_WORKOUT:
      return {
        inProgress: true
      };
    case STOP_WORKOUT:
      return {
        inProgress: false
      };
    default:
      return state;
  }
};
