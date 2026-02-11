import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  size: number;
  color: string;
};

export default function HeartShape({ size, color }: Props) {
  const coreSize = size;

  return (
    <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
      <View style={[styles.heartContainer, { width: coreSize, height: coreSize, transform: [{ rotate: '-45deg' }] }]}>
        
        <View style={[styles.mainSquare, { backgroundColor: color }]} />

        <View
          style={[
            styles.circle,
            {
              backgroundColor: color,
              top: -coreSize / 2,
              left: 0,
            },
          ]}
        />

        <View
          style={[
            styles.circle,
            {
              backgroundColor: color,
              top: 0,
              right: -coreSize / 2,
            },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heartContainer: {
    position: 'relative',
    marginTop: 10, 
  },
  mainSquare: {
    flex: 1,
  },
  circle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 100, 
  },
});