import { createContext } from 'react';
import { WorkoutStore } from './WorkoutStore';
import { WorkoutTimerStore } from './WorkoutTImerStore';

export class RootStore {
  workoutStore = new WorkoutStore(this);
  workoutTimerStore = new WorkoutTimerStore();
}

export const RootStoreContext = createContext(new RootStore());
