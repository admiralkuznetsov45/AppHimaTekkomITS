import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Screen1 from '../components/Screen1';
import Screen2 from '../components/Screen2';
import Screen3 from '../components/Screen3';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


export default function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'black' },
        tabBarActiveTintColor: 'white',
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Halaman Satu') {
            iconName = 'home-outline';
          } else if (route.name === 'Halaman Dua') {
            iconName = 'search-outline';
          } else if (route.name === 'Halaman Tiga') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Halaman Satu" component={Screen1} />
      <Tab.Screen name="Halaman Dua" component={Screen2} />
      <Tab.Screen name="Halaman Tiga" component={Screen3} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

