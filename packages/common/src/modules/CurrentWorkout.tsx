import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStoreContext } from '../stores/RootStore';
import WorkoutCard from '../ui/WorkoutCard';
import WorkoutTimer from '../ui/WorkoutTimer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 10,
  },
});

interface IProps {}

const CurrentWorkout = observer<IProps>(() => {
  const { workoutStore, workoutTimerStore } = useContext(RootStoreContext);

  useEffect(() => {
    return () => {
      workoutTimerStore.endTimer();
    };
  }, []);

  return (
    <View style={styles.container}>
      {workoutStore.currentExercises.map(ex => (
        <WorkoutCard
          onSetPress={setIndex => {
            workoutTimerStore.startTimer();

            const v = ex.sets[setIndex];
            let newValue: string;

            if (v === '') {
              newValue = ex.reps.toString();
            } else if (v === '0') {
              workoutTimerStore.endTimer();
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
      {workoutTimerStore.isRunning ? (
        <WorkoutTimer
          percent={workoutTimerStore.percent}
          currentTime={workoutTimerStore.display}
          onXPress={() => workoutTimerStore.endTimer()}
        />
      ) : null}
    </View>
  );
});

export default CurrentWorkout;
