import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Screen3() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logos/azov.png')} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Azov Regiment</Text>
        <Text style={styles.bodyText}>Azov Regiment /Штурмова бригада «Азов»
 merupakan Batalyon Sukarelawan Pro Ukraina yang menjadi bagian dari National Guard of Ukraine . Dibentuk di Mariupol , Ukraina pada Tahun 2014 . Komandan nya saat ini adalah Mykyta Nadtochiy </Text>
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
  
