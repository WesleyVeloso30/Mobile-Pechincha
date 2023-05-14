import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/login';
import Homepage from './src/screens/homepage';
import Register from './src/screens/register';
import MyTabs from './src/components/MenuBottom';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Component" screenOptions={{
    headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Homepage" component={Homepage} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Component" component={MyTabs} />
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
