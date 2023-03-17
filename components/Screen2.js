import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Screen2() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/somaligrup.png')} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Somali Batallion</Text>
        <Text style={styles.bodyText}>Somali Batallion /Батальон «Сомали»
    merupakan sebuah Batalyon Sukarelawan Separatis Donetsk , Bagian dari Militer Republik Rakyat Donetsk /Донецкая Народная Республика . Komandan saat ini adalah Timur Kulikin , Komandan Terkenal nya adalah Mihail Tolstykh aka Givi </Text>
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
  
