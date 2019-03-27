import { observable } from 'mobx';
import { persist } from 'mobx-persist';
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

  @persist @observable currentSquat: number;
  @persist @observable currentBenchPress: number;
  @persist @observable currentOverheadPress: number;
  @persist @observable currentDeadlift: number;
  @persist @observable currentBarbelRow: number;

  @persist @observable lastWorkoutType: WorkoutDay;

  @persist('list') @observable currentExercises: ICurrentExcercise[] = [];

  @persist('object') @observable history: IHistory;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
