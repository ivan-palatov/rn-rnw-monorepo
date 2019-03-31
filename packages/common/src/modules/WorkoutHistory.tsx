import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { RootStoreContext } from '../stores/RootStore';
import { ICurrentExcercise } from '../stores/WorkoutStore';
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
      <Button title="Create Workout" onPress={createWorkout} />
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
    </View>
  );
});

export default WorkoutHistory;
