import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Pressable, ImageBackground, Dimensions, Animated, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';
import FloatingHearts from '../components/FloatingHearts';
import Envelope from '../components/Envelope';

type LoveScreenProps = {
  setAccepted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsFalse: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoveScreen({ setAccepted, setIsFalse }: LoveScreenProps) {
  const { height, width } = Dimensions.get('window');

  const translateY = useRef(new Animated.Value(height * 0.8)).current;
  const scale = useRef(new Animated.Value(1)).current;
  const moveX = useRef(new Animated.Value(0)).current;
  const moveY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;
  const badgeScale = useRef(new Animated.Value(0)).current;

  const [showBadge, setShowBadge] = useState(false);
  const [isLetterVisible, setIsLetterVisible] = useState(false);
  const letterScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      // 1. 화면 중앙으로 올라오기
      Animated.timing(translateY, {
        toValue: height * 0.05,
        duration: 2000,
        useNativeDriver: true,
      }),
      // 잠시 멈춤
      Animated.delay(500),
      // 2. 우측 상단으로 이동하며 작아지기
      Animated.parallel([
        Animated.timing(moveX, {
          toValue: width / 2 - 55, // 우측 끝 방향
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(moveY, {
          toValue: -height * 0.05, // 상단 방향
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.05, // 아주 작게
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0, // 사라짐
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      // 3. 애니메이션 완료 후 뱃지 등장
      setShowBadge(true);
      Animated.spring(badgeScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }).start();
    });
  }, []);

  const handleBadgePress = () => {
    setIsLetterVisible(true);
    Animated.spring(letterScale, {
      toValue: 1,
      friction: 5,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.loveContainer}>
      {showBadge && (
        <Animated.View style={[styles.badgeContainer, { transform: [{ scale: badgeScale }] }]}>
          <Pressable onPress={handleBadgePress} style={styles.letter}>
            <Text style={{ fontSize: 25 }}>✉️</Text>
            <View style={styles.notificationDot}>
              <Text style={styles.dotText}>1</Text>
            </View>
          </Pressable>
        </Animated.View>
      )}
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

        <Animated.View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            opacity: opacity,
            transform:[
              { translateY },
              { translateX: moveX },
              {translateY: moveY },
              { scale }
            ]
          }}
        >
          <Envelope />
        </Animated.View>

{/* 클릭 시 나타나는 편지 모달 */}
{isLetterVisible && (
  <View style={[StyleSheet.absoluteFill, styles.modalOverlay, { zIndex: 1999 }]}>
    <Animated.View 
      style={[
        styles.letterPaper, 
        { transform: [{ scale: letterScale }] }
      ]}
    >
      {/* 1. 편지 이미지로 꽉 채우기 */}
      <Image 
        source={require('../assets/letter.png')} 
        style={styles.letterImage}
        resizeMode="stretch" // 이미지를 컨테이너에 꽉 맞춤
      />

      {/* 2. 우측 상단 동그라미 X 버튼 */}
      <Pressable 
        onPress={() => {
          Animated.timing(letterScale, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }).start(() => setIsLetterVisible(false));
        }} 
        style={styles.closeButton}
      >
        <Text style={styles.closeButtonText}>✕</Text>
      </Pressable>
    </Animated.View>
  </View>
)}
    </View>
  );
}
