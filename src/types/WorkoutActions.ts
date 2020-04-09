export const START_WORKOUT = "START_WORKOUT";
export const STOP_WORKOUT = "STOP_WORKOUT";


export interface StartWorkoutAction {
	type: typeof START_WORKOUT;
}

export interface StopWorkoutAction {
	type: typeof STOP_WORKOUT;
}

export type WorkoutActionTypes = StartWorkoutAction | StartWorkoutAction;