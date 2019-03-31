import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { RootStoreContext } from '../stores/RootStore';
import { ICurrentExcercise } from '../stores/WorkoutStore';
import Fab from '../ui/Fab';
import HistoryCard from '../ui/HistoryCard';

interface IProps extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  cardContainer: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
  },
});

const WorkoutHistory = observer<IProps>(({ history }) => {
  const { workoutStore } = useContext(RootStoreContext);

  const rows: Array<
    Array<{
      date: string;
      excercises: ICurrentExcercise[];
    }>
  > = [];
  Object.entries(workoutStore.history).forEach(([date, excercises], i) => {
    if (i % 3 === 0) {
      rows.push([{ date, excercises }]);
    } else {
      rows[rows.length - 1].push({ date, excercises });
    }
  });

  const createWorkout = () => {
    if (workoutStore.hasCurrentWorkout) {
      return history.push('/current-workout');
    }

    const {
      currentBarbelRow,
      currentBenchPress,
      currentDeadlift,
      currentOverheadPress,
      currentSquat,
    } = workoutStore;
    const emptySets = ['', '', '', '', ''];

    if (workoutStore.lastWorkoutType === 'b') {
      workoutStore.currentExercises.push(
        {
          excercise: 'Squat',
          numSets: 5,
          reps: 5,
          sets: [...emptySets],
          weight: currentSquat,
        },
        {
          excercise: 'Bench Press',
          numSets: 5,
          reps: 5,
          sets: [...emptySets],
          weight: currentBenchPress,
        },
        {
          excercise: 'Deadlift',
          numSets: 1,
          reps: 5,
          sets: ['', 'x', 'x', 'x', 'x'],
          weight: currentDeadlift,
        }
      );

      workoutStore.currentSquat += 5;
      workoutStore.currentBenchPress += 5;
      workoutStore.currentDeadlift += 5;
    } else {
      workoutStore.currentExercises.push(
        {
          excercise: 'Barbel Row',
          numSets: 5,
          reps: 5,
          sets: [...emptySets],
          weight: currentBarbelRow,
        },
        {
          excercise: 'Overhead Press',
          numSets: 5,
          reps: 5,
          sets: [...emptySets],
          weight: currentOverheadPress,
        },
        {
          excercise: 'Squat',
          numSets: 1,
          reps: 5,
          sets: [...emptySets],
          weight: currentSquat,
        }
      );

      workoutStore.currentSquat += 5;
      workoutStore.currentOverheadPress += 5;
      workoutStore.currentBarbelRow += 5;
    }

    workoutStore.lastWorkoutType = workoutStore.lastWorkoutType === 'a' ? 'b' : 'a';

    history.push('/current-workout');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={rows}
        keyExtractor={item => item.reduce((pv, cv) => pv + ' ' + cv.date, '')}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {item.map(({ date, excercises }) => (
              <View key={date} style={styles.cardContainer}>
                <HistoryCard
                  onPress={() => {
                    const parts = date.split('-');
                    history.push(`/workout/${parts[0]}/${parts[1]}/${parts[2]}`);
                  }}
                  header={date}
                  curEx={excercises}
                />
              </View>
            ))}
            {item.length < 3 ? (
              item.length < 2 ? (
                <>
                  <View style={styles.cardContainer} />
                  <View style={styles.cardContainer} />
                </>
              ) : (
                <View style={styles.cardContainer} />
              )
            ) : null}
          </View>
        )}
      />
      <Fab onPress={createWorkout} />
    </View>
  );
});

export default WorkoutHistory;
