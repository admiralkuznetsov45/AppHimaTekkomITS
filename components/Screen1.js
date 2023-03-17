import React from 'react';
import { View, Text, StyleSheet, Image , Dimensions  } from 'react-native';

export default function Screen1() {
    

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/pmuiraq.png')} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Popular Mobilization Unit</Text>
        <Text style={styles.bodyText}>Popular Mobilization Unit / PMU merupakan Pasukan Paramiliter Iraq yang dibentuk pascsa Perang Irak 2003 , Mayoritas dari berbagai milisi baik Sunni , Syiah dll </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: "50%", 
      height: "50%",
      resizeMode: 'contain',
    },
    textContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    square: {
        width: 300,
        height: 300,
        borderWidth: 4,
        borderRadius: 1520, // half of width or height
        alignItems: 'center',
        justifyContent: 'center',
      },
    bodyText: {
      fontSize: 14,
      fontWeight: '500',
      textAlign: 'justify',
      justifyContent: 'center',
    },
  });
  
