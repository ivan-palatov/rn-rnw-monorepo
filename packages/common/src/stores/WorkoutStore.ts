import { observable } from 'mobx';
import { createContext } from 'react';

type WorkoutDay = 'a' | 'b';

interface IHistory {
  [key: string]: Array<{
    excercise: string;
    value: number;
  }>;
}

class WorkoutStore {
  @observable currentSquat: number;
  @observable currentBenchPress: number;
  @observable currentOverheadPress: number;
  @observable currentDeadlift: number;
  @observable currentBarbelRow: number;

  lastWorkoutType: WorkoutDay;

  history: IHistory;
}

export const WorkoutStoreContext = createContext(WorkoutStore);
