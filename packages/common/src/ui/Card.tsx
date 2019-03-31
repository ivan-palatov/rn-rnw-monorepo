import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface IProps {
  onPress?: () => void;
}

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
});

const Card: React.FC<IProps> = ({ children, onPress }) => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.card}>
        {children}
      </TouchableOpacity>
    );
  }
  return <View style={styles.card}>{children}</View>;
};

export default Card;
