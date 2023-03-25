import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const Screen3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    if (sound === null) {
      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri: 'https://22283.live.streamtheworld.com/PRAMBORS_FM_SC?dist=pramborsweb&pname=tdwidgets' },
        { shouldPlay: true }
      );
      setSound(newSound);
    } else {
      await sound.playAsync();
    }
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    await sound.pauseAsync();
    setIsPlaying(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/pmuiraq.png')} style={styles.albumImage} />
      <Text style={styles.title}>Radio 1 Rock</Text>
      <Text style={styles.artist}>Bulgaria</Text>
      <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
        <View style={[styles.button, { backgroundColor: isPlaying ? '#1DB954' : '#fff' }]}>
          <Text style={[styles.buttonText, { color: isPlaying ? '#fff' : '#1DB954' }]}>
            {isPlaying ? 'PAUSE' : 'PLAY'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  albumImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  artist: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    borderRadius: 30,
    width: 150,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#1DB954',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Screen3;
