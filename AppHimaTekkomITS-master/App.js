import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import NewsItem from './components/ScreenNews';
import TestScreen from './components/TestScreen';

const Stack = createStackNavigator();

const App = ({ posts, post }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2}  options={{ title: 'Berita' }} />
        <Stack.Screen name="Screen3" component={Screen3}  />
        <Stack.Screen name="NewsItem" component={NewsItem} options={{ title: 'Detail Berita' }} />

        <Stack.Screen name="TestScreen" component={TestScreen} options={{ title: 'Testing Environment' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

