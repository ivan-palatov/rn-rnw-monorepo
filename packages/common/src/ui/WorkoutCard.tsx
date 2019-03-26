import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  card: {
    borderRadius: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    flexDirection: 'column',
    padding: 10,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topRowText: {
    fontSize: 16,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 14,
  },
  circle: {
    borderRadius: 15,
    backgroundColor: '#8fb299',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontSize: 15,
  },
  fadedBackground: {
    backgroundColor: '#b2a1a1',
  },
  greyText: {
    color: '#ccc',
  },
});

interface IProps {
  excercise: string;
  repsAndWeight: string;
  sets: string[];
}

const WorkoutCard: React.FC<IProps> = ({ excercise, repsAndWeight, sets }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.topRowText}>{excercise}</Text>
        <Text style={styles.topRowText}>{repsAndWeight}</Text>
      </View>
      <View style={styles.bottomRow}>
        {sets.map((set, i) => {
          if (set === 'x') {
            return (
              <View style={[styles.circle, styles.fadedBackground]} key={set + i}>
                <Text style={[styles.circleText, styles.greyText]}>X</Text>
              </View>
            );
          }

          if (set === '') {
            return <View style={[styles.circle, styles.fadedBackground]} key={set + i} />;
          }

          return (
            <View style={styles.circle} key={set + i}>
              <Text style={styles.circleText}>{set}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default WorkoutCard;
