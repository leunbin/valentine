import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../styles/styles';
import FloatingHearts from '../components/FloatingHearts';

type LoveScreenProps = {
  setAccepted: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoveScreen({ setAccepted }: LoveScreenProps) {
  return (
    <View style={styles.loveContainer}>
      <FloatingHearts />
      <Image
        source={require('../assets/love.gif')}
        style={styles.loveGif}
      />
      <Text style={styles.loveText}>
        I LOVE YOU 💖
      </Text>
      <Pressable
        style={styles.ybutton}
        onPress={() =>{
          setAccepted(false);
        }}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
    </View>
  );
}
