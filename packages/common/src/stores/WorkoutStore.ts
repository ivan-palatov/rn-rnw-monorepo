import { computed, observable } from 'mobx';
import { persist } from 'mobx-persist';
import { RootStore } from './RootStore';

type WorkoutDay = 'a' | 'b';

export interface ICurrentExcercise {
  weight: number;
  reps: number;
  numSets: number;
  excercise: string;
  sets: string[];
}

interface IHistory {
  [key: string]: ICurrentExcercise[];
}

export class WorkoutStore {
  rootStore: RootStore;

  @persist @observable currentSquat: number = 45;
  @persist @observable currentBenchPress: number = 45;
  @persist @observable currentOverheadPress: number = 45;
  @persist @observable currentDeadlift: number = 65;
  @persist @observable currentBarbelRow: number = 65;

  @persist @observable lastWorkoutType: WorkoutDay = 'a';

  @persist('list') @observable currentExercises: ICurrentExcercise[] = [];

  @persist('object') @observable history: IHistory = {};

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @computed get hasCurrentWorkout() {
    return !!this.currentExercises.length;
  }
}
