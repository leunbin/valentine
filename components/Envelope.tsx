import React from 'react';
import { View } from 'react-native';

export default function Envelope() {
  return (
    <View style={{ 
      width: 200, 
      height: 120, 
      backgroundColor: '#F9D976', // 가장 밝은 배경색
      borderRadius: 8, 
      overflow: 'hidden' 
    }}>
      
      {/* 1. 우측 삼각형 (그늘진 느낌) */}
      <View
        style={{
          position: 'absolute',
          right: 0,
          width: 0,
          height: 0,
          borderTopWidth: 60,
          borderBottomWidth: 60,
          borderRightWidth: 100,
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          borderRightColor: '#F4C430', // 약간 진한 노란색
        }}
      />

      {/* 2. 좌측 삼각형 (그늘진 느낌) */}
      <View
        style={{
          position: 'absolute',
          left: 0,
          width: 0,
          height: 0,
          borderTopWidth: 60,
          borderBottomWidth: 60,
          borderLeftWidth: 100,
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent',
          borderLeftColor: '#F4C430', // 약간 진한 노란색
        }}
      />

      {/* 3. 위쪽 덮개 (가장 강조되는 윗부분) */}
      <View
        style={{
          position: 'absolute',
          top: 0,
          width: 0,
          height: 0,
          borderLeftWidth: 100,
          borderRightWidth: 100,
          borderTopWidth: 65, // 살짝 더 깊게 내려오도록 조정
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderTopColor: '#FFCC33', // 선명한 골드 옐로우
        }}
      />
    </View>
  );
}