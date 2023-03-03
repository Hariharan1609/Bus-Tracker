import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import HomeScreen from './src/Screens/HomeScreen';
import MapScreen from './src/Screens/MapScreen';




const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator

    screenOptions={{
      headerShown: false,
      header: () => null,
      contentStyle: { backgroundColor: 'white' },
    }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
