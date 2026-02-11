import { StatusBar } from 'expo-status-bar';
import { Text, Pressable, View, Image, Modal, Platform } from 'react-native';
import { styles } from './styles/styles';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import LoveScreen from './screens/LoveScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    font: require('./assets/fonts/PlaywriteNZBasic-VariableFont_wght.ttf'),
  })
  const [modalVisible, setModalVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const playErrorSound = async () => {
    if(Platform.OS === 'web'){
      const audio = new Audio('/error.mp3');
      audio.play();
    } else {
      const { Audio } = await import('expo-av');
      const { sound } = await Audio.Sound.createAsync(
        require('./assets/sound/error.mp3')
      );
      await sound.playAsync();
    }
  };

  if(!fontsLoaded){
    return null;
  }

  if(accepted) {
    return <LoveScreen setAccepted={setAccepted}/>
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/moltees.gif')}
        style={styles.image}
      />
      <Text style={styles.title}>💖 Would you be my BOYFRIEND? 💖</Text>

      <View style={styles.buttonRow}>
        <Pressable 
          style={styles.ybutton}
          onPress={() => setAccepted(true)}>
          <Text style={styles.buttonText}>Yes</Text>
        </Pressable>
      
        <Pressable 
          style={styles.nbutton}
          onPress={async () => {
            await playErrorSound();
            setModalVisible(true);
          }}>
          <Text style={styles.buttonText}>No</Text>
        </Pressable>

        <Modal
          transparent={true}
          animationType='fade'
          visible={modalVisible}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.modalBox}>
              <Text style={styles.modalText}>
                ⚠️ 404 SYSTEMS NOT FOUND
              </Text>
              <Text style={styles.subText}>
                Tap anywhere to close
              </Text>
            </View>
          </Pressable>
        </Modal>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}