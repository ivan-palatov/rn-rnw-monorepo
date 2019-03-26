import { observable } from 'mobx';
import { RootStore } from './RootStore';

type WorkoutDay = 'a' | 'b';

interface IHistory {
  [key: string]: Array<{
    excercise: string;
    value: number;
  }>;
}

interface ICurrentExcercise {
  weight: number;
  reps: number;
  numSets: number;
  excercise: string;
  sets: string[];
}

export class WorkoutStore {
  rootStore: RootStore;

  @observable currentSquat: number;
  @observable currentBenchPress: number;
  @observable currentOverheadPress: number;
  @observable currentDeadlift: number;
  @observable currentBarbelRow: number;

  @observable lastWorkoutType: WorkoutDay;

  @observable currentExercises: ICurrentExcercise[] = [];

  @observable history: IHistory;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
