import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

interface Props {}
const App: React.FC<Props> = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>FUCK THIS!!</Text>
      <Text style={styles.instructions}>To get started, edit App.tsx</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Text style={styles.instructions}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
