import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontWeight: '900',
    fontSize: 45,
    paddingTop:25,
    fontStyle:'italic'}}>LOGIN SCREEN</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}
