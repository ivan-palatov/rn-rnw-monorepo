import dayjs from 'dayjs';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { RootStoreContext } from '../stores/RootStore';
import WorkoutCard from '../ui/WorkoutCard';
import WorkoutTimer from '../ui/WorkoutTimer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollContainer: {
    padding: 10,
    marginBottom: 50,
  },
});

interface IProps
  extends RouteComponentProps<{
    year?: string;
    month?: string;
    day?: string;
  }> {}

const CurrentWorkout = observer<IProps>(({ history, match: { params: { day, month, year } } }) => {
  const { workoutStore, workoutTimerStore } = useContext(RootStoreContext);

  useEffect(() => {
    return () => {
      workoutTimerStore.endTimer();
    };
  }, []);

  const isCurrentWorkout = !year && !month && !day;
  const dateKey = `${year}-${month}-${day}`;

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={styles.scrollContainer}>
        {(isCurrentWorkout ? workoutStore.currentExercises : workoutStore.history[dateKey]).map(
          ex => (
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
          )
        )}
        <Button
          title="Save"
          onPress={() => {
            if (isCurrentWorkout) {
              workoutStore.history[dayjs().format('YYYY-MM-DD mm:ss')] =
                workoutStore.currentExercises;
              workoutStore.currentExercises = [];
            }
            history.push('/');
          }}
        />
      </ScrollView>
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
