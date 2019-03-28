import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RouteComponentProps } from 'react-router';
import { RootStoreContext } from '../stores/RootStore';
import HistoryCard from '../ui/HistoryCard';

interface IProps extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

const WorkoutHistory = observer<IProps>(({ history }) => {
  const { workoutStore } = useContext(RootStoreContext);

  const rows: JSX.Element[][] = [];
  Object.entries(workoutStore.history).forEach(([dt, v], i) => {
    const hc = <HistoryCard key={dt} header={dt} curEx={v} />;
    if (i % 2 === 0) {
      rows.push([hc]);
    } else {
      rows[rows.length - 1].push(hc);
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
      <Text>Workout history page</Text>
      {rows.map((r, i) => (
        <View style={styles.row} key={i}>
          {r}
        </View>
      ))}
      <Button title="Create Workout" onPress={createWorkout} />
    </View>
  );
});

export default WorkoutHistory;
