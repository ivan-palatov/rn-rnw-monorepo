import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';
import WorkoutCard from '../ui/WorkoutCard';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    margin: 10,
  },
});

interface IProps {}

const CurrentWorkout: React.FC<IProps> = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  const showWorkoutHistory = () => {
    routerStore.screen = 'WorkoutHistory';
  };

  return (
    <View style={styles.container}>
      <Text>Current Workout page</Text>
      <WorkoutCard sets={['5', '5', '5', 'x', '']} excercise="Squat" repsAndWeight="5x5 100" />
      <Button title="Show Workout history" onPress={showWorkoutHistory} />
    </View>
  );
});

export default CurrentWorkout;
