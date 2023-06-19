import React, { useEffect } from 'react';
import { StyleSheet, View,Text, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Percobaan Belajar</Text>
      <Image source={require('../assets/logos/wagner_cvk.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: "50%", 
    height: "50%",
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
