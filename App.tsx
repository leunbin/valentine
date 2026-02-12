import { StatusBar } from 'expo-status-bar';
import { Text, Pressable, View, Image, Modal, Platform, ImageBackground } from 'react-native';
import { styles } from './styles/styles';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import LoveScreen from './screens/LoveScreen';
import Login from './screens/Login';


export default function App() {
  const [fontsLoaded] = useFonts({
    font: require('./assets/fonts/PlaywriteNZBasic-VariableFont_wght.ttf'),
  })
  const [modalVisible, setModalVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [isFalse, setIsFalse] = useState(false);
  const [textValue, onChangeText] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const [webHeight, setWebHeight] = useState<number | null>(null);

  useEffect(() => {
    if(Platform.OS === 'web'){
      const updateHeight = () => {
        setWebHeight(window.innerHeight);
      };

      updateHeight();
      window.addEventListener('resize', updateHeight);

      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  useEffect(() => {
    if(textValue === '0403'){
      setIsLogin(true);
    }
  }, [textValue])

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

  if(!isLogin) {
    return(
      <Login 
        onChangeText={onChangeText} 
        textValue={textValue} 
        setHintVisible={setHintVisible}
        hintVisible={hintVisible}
      />
    );
  }

  if(accepted) {
    return <LoveScreen setAccepted={setAccepted} setIsFalse={setIsFalse} />
  }


  return (
      <View 
        style={[
          styles.container,
          Platform.OS === 'web' && webHeight ? {height : webHeight} : null
        ]}>
        <View style={styles.topImageContainer}>
          <Image
            source={require('./assets/defaultimg.jpg')}
            style={styles.defalutimg}
            resizeMode='contain'
          />
        </View>
        
        <Image
          source={require('./assets/bemybf.gif')}
          style={styles.image}
        />
        <Text style={styles.title}>💖 Would you be my BOYFRIEND? 💖</Text>

        <View style={styles.buttonRow}>
          <Pressable 
            style={styles.ybutton}
            onPress={() => setAccepted(true)}>
            <Text style={styles.buttonText}>Yes</Text>
          </Pressable>

          {isFalse ? <Pressable 
            style={styles.ybutton}
            onPress={() => setAccepted(true)}>
            <Text style={styles.buttonText}>Yes</Text>
          </Pressable> : <Pressable 
            style={styles.nbutton}
            onPress={async () => {
              await playErrorSound();
              setModalVisible(true);
              setIsFalse(true);
            }}>
            <Text style={styles.buttonText}>No</Text>
          </Pressable>}
        
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
                  🚨 System Warning🚨
                </Text>
                <Text style={styles.modalSubText}>
                  This is option is not supported in this universe.
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