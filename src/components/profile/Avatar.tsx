import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Camera } from 'lucide-react-native';
import Colors from '@src/constants/Colors';

interface AvatarProps {
  size?: number;
  name?: string;
  image?: string;
}

export default function Avatar({ size = 80, name = 'MS', image }: AvatarProps) {
  return (
    <View style={styles.container}>
      <View 
        style={[
          styles.avatar,
          { width: size, height: size, borderRadius: size / 2 }
        ]}
      >
        <Text style={styles.initials}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.cameraButton}>
        <Camera size={16} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  avatar: {
    backgroundColor: 'rgba(0, 210, 122, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: Colors.light.primary,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.light.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
});