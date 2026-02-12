import React from 'react';
import Heart from './Heart';
import { Dimensions, View, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export default function FloatingHearts() {
  const hearts = Array.from({ length: 10 });

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents='none'>
      {hearts.map((_, index) => (
        <Heart key={index} delay={index * 400} />
      ))}
    </View>
  );
}
