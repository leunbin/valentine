import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StyleSheet } from 'react-native';
import HeartShape from './HeartShape';

const { width, height } = Dimensions.get('window');

type HeartProps = {
  delay: number;
};

export default function Heart({ delay }: HeartProps) {
  const progress = useRef(new Animated.Value(Math.random())).current;

  const randomX = useRef(Math.random() * (width - 40)).current;
  const size = useRef(Math.random() * 25 + 20).current;

  const durationRef = useRef(3000 + Math.random() * 2000).current;  
  const colors = ['#FF4D6D', '#FF85A1', '#FF99AC', '#FFB3C1'];
  const color = useRef(colors[Math.floor(Math.random() * colors.length)]).current;

  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [height, -60],
  });

  const opacity = progress.interpolate({
    inputRange: [0, 0.1, 0.8, 1],
    outputRange: [0, 1, 1, 0],
  });

  useEffect(() => {
    const runAnimation = (isInitial = false) => {
      if (!isInitial) progress.setValue(0);

      const currentVal = (progress as any)._value || 0;
      const duration = durationRef * (1 - currentVal);

      Animated.timing(progress, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          const nextDelay = isInitial ? delay : Math.random() * 1000;
          setTimeout(() => runAnimation(false), nextDelay);
        }
      });
    };

    runAnimation(true);
  }, []);

  return (
    <Animated.View
      style={[
        styles.heartWrapper,
        {
          left: randomX,
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <HeartShape size={size} color={color} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  heartWrapper: {
    position: 'absolute',
    zIndex: 1000,
  },
});