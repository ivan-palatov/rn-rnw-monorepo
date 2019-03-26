import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface IProps {
  onXPress: () => void;
  currentTime: string;
  percent: string;
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 50,
    width: '100%',
    backgroundColor: '#486550',
  },
  row: {
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  x: {
    color: '#b2a1a1',
    fontSize: 20,
  },
  timeText: {
    color: '#fff',
    fontSize: 18,
  },
  line: {
    height: 3,
    backgroundColor: '#b2a1a1',
  },
});

const WorkoutTimer: React.FC<IProps> = ({ onXPress, currentTime, percent }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.line, { width: percent }]} />
      <View style={styles.row}>
        <Text style={styles.timeText}>{currentTime}</Text>
        <TouchableOpacity onPress={onXPress}>
          <Text style={styles.x}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WorkoutTimer;
