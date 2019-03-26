import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { RootStoreContext } from '../stores/RootStore';

interface IProps extends RouteComponentProps {}

const WorkoutHistory = observer<IProps>(({ history }) => {
  const { workoutStore } = useContext(RootStoreContext);

  const createWorkout = () => {
    workoutStore.currentExercises.push(
      {
        excercise: 'Squat',
        numSets: 5,
        reps: 5,
        sets: ['', '', '', '', ''],
        weight: 100,
      },
      {
        excercise: 'Bench Press',
        numSets: 5,
        reps: 5,
        sets: ['', '', '', '', ''],
        weight: 200,
      },
      {
        excercise: 'Deadlift',
        numSets: 1,
        reps: 5,
        sets: ['', 'x', 'x', 'x', 'x'],
        weight: 360,
      }
    );

    history.push('/current-workout');
  };

  return (
    <View>
      <Text>Workout history page</Text>
      <Button title="Create Workout" onPress={createWorkout} />
    </View>
  );
});

export default WorkoutHistory;
