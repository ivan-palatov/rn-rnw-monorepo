import { observer } from 'mobx-react-lite';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
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
    borderRadius: 25,
    backgroundColor: '#8fb299',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText: {
    color: '#fff',
    fontSize: 16,
  },
  fadedBackground: {
    backgroundColor: '#b2a1a1',
  },
  greyText: {
    color: '#655252',
  },
});

interface IProps {
  excercise: string;
  repsAndWeight: string;
  sets: string[];
  onSetPress: (index: number) => void;
}

const WorkoutCard = observer<IProps>(({ excercise, repsAndWeight, sets, onSetPress }) => {
  return (
    <View style={styles.cardContainer}>
      <Card>
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
              return (
                <TouchableOpacity
                  onPress={() => onSetPress(i)}
                  style={[styles.circle, styles.fadedBackground]}
                  key={set + i}
                />
              );
            }

            return (
              <TouchableOpacity onPress={() => onSetPress(i)} style={styles.circle} key={set + i}>
                <Text style={styles.circleText}>{set}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Card>
    </View>
  );
});

export default WorkoutCard;
