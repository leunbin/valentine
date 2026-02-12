import React from "react"
import { Text, View, TextInput, Pressable, Modal, ImageBackground } from "react-native"
import { styles } from "../styles/styles"

type LoginTypePorp = {
  textValue: string;
  onChangeText : React.Dispatch<React.SetStateAction<string>>;
  setHintVisible : React.Dispatch<React.SetStateAction<boolean>>;
  hintVisible: boolean;
}

export default function Login({onChangeText, textValue, setHintVisible, hintVisible } : LoginTypePorp ){
  return(
    <ImageBackground
      style={styles.bgimg}
      source={require('../assets/loginbg.png')}
      resizeMode="cover"
    >
      <View style={styles.LoginContainer}>

        <Text style={styles.passwordTitle}>
          Enter password
        </Text>
        <TextInput 
          style = {styles.loginInput}
          secureTextEntry={true}
          onChangeText = {text => onChangeText(text)}
          value={textValue}
          keyboardType="number-pad"
        />
        <Pressable onPress={() => setHintVisible(true)}>
          <Text style={styles.hintText}>Need a hint? 💌</Text>
        </Pressable>

      </View>
      <Modal
          transparent
          animationType='fade'
          visible={hintVisible}
        >
          <Pressable
            style={styles.modalOverlay}
            onPress={() => setHintVisible(false)}
          >
            <View style={styles.envelope}>
              <Text style={styles.envelopeTitle}>💌 HINT</Text>
              <Text style={styles.envelopeText}>
                The day we started dating
              </Text>
              <Text style={styles.subText}>
                tap anywhere to close
              </Text>
            </View>
          </Pressable>
        </Modal>
    </ImageBackground>
  )
}