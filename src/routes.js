import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Homepage from './screens/homepage';
import Register from './screens/register';
import Company from './screens/company';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator () {
    return(
      <BottomTab.Navigator screenOptions={{
        // tabBarActiveTintColor: '',
        // tabBarInactiveTintColor: '',
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
            // backgroundColor: '',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            height: 70,
        }
      }}>
        <BottomTab.Screen 
            name="Home" 
            component={Homepage} 
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if (focused) {
                        return <Ionicons name='home' size={size} color={color}/>
                    }

                    return <Ionicons name='home-outline' size={size} color={color}/>
                }
            }}
        />
        <BottomTab.Screen 
            name="Company" 
            component={Company}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if (focused) {
                        return <Ionicons name='bookmark' size={size} color={color}/>
                    }

                    return <Ionicons name='bookmark-outline' size={size} color={color}/>
                }
            }}
        />
      </BottomTab.Navigator> 
    // <Ionicons name='bookmark' size={size} color={color}/>
    // <Ionicons name='person' size={size} color={color}/>
    )
  }
  
export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{
        headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Homepage" component={BottomTabNavigator} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
);
}