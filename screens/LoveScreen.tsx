import React from 'react';
import { View, Text, Image, Pressable, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import FloatingHearts from '../components/FloatingHearts';

type LoveScreenProps = {
  setAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFalse: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoveScreen({ setAccepted, setIsFalse }: LoveScreenProps) {
  return (
    <View style={styles.loveContainer}>
      <View style={styles.loveImgTop}>
        <Image 
          source={require('../assets/lovestop.jpg')}
          style={styles.lovestop}
        />
      </View>
      <FloatingHearts />
      <Image
        source={require('../assets/love.gif')}
        style={styles.loveGif}
      />
      <Text style={styles.loveText}>
        I knew you'd say YES! 🧸
      </Text>
      <Pressable
        style={styles.ybutton}
        onPress={() =>{
          setAccepted(false);
          setIsFalse(false);
        }}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
    </View>
  );
}
