import React from 'react';
import { Text } from 'react-native';
import { ICurrentExcercise } from '../stores/WorkoutStore';
import Card from './Card';

interface IProps {
  header: string;
  curEx: ICurrentExcercise[];
}

const excerciseShortName = {
  Squat: 'SQ',
  Deadlift: 'DL',
  'Bench Press': 'BP',
  'Overhead Press': 'OHP',
  'Barbell Row': 'ROW',
};

const HistoryCard: React.FC<IProps> = ({ header, curEx }) => {
  return (
    <Card>
      <Text>{header}</Text>
      {curEx.map(ex => (
        <Text key={ex.excercise}>{`${
          excerciseShortName[ex.excercise as keyof typeof excerciseShortName]
        } ${ex.numSets}x${ex.reps} ${ex.weight}`}</Text>
      ))}
    </Card>
  );
};

export default HistoryCard;
