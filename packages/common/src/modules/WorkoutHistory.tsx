import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';

interface IProps {}

const WorkoutHistory: React.FC<IProps> = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  const createWorkout = () => {
    routerStore.screen = 'CurrentWorkout';
  };

  return (
    <View>
      <Text>Workout history page</Text>
      <Button title="Create Workout" onPress={createWorkout} />
    </View>
  );
});

export default WorkoutHistory;
