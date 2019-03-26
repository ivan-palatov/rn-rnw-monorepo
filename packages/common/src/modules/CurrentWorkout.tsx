import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import WorkoutCard from '../ui/WorkoutCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 10,
  },
});

interface IProps {}

const CurrentWorkout = observer<IProps>(() => {
  const { routerStore, workoutStore } = useContext(RootStoreContext);

  const showWorkoutHistory = () => {
    routerStore.screen = 'WorkoutHistory';
  };

  return (
    <View style={styles.container}>
      {workoutStore.currentExercises.map(ex => (
        <WorkoutCard
          onSetPress={setIndex => {
            const v = ex.sets[setIndex];

            let newValue: string;

            if (v === '') {
              newValue = ex.reps.toString();
            } else if (v === '0') {
              newValue = '';
            } else {
              newValue = `${parseInt(v, 10) - 1}`;
            }

            ex.sets[setIndex] = newValue;
          }}
          key={ex.excercise}
          sets={ex.sets}
          excercise={ex.excercise}
          repsAndWeight={`${ex.numSets}x${ex.reps} ${ex.weight}`}
        />
      ))}

      <Button title="Show Workout history" onPress={showWorkoutHistory} />
    </View>
  );
});

export default CurrentWorkout;
