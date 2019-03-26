import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { RouterStoreContext } from '../stores/RouterStore';

interface IProps {}

const CurrentWorkout: React.FC<IProps> = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  const showWorkoutHistory = () => {
    routerStore.screen = 'WorkoutHistory';
  };

  return (
    <View>
      <Text>Current Workout page</Text>
      <Button title="Show Workout history" onPress={showWorkoutHistory} />
    </View>
  );
});

export default CurrentWorkout;
