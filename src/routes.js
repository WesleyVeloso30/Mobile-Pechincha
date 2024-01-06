import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/login';
import Homepage from './screens/homepage';
import Register from './screens/register';
import Company from './screens/company';
import Filters from './screens/filters';
import Profile from './screens/profile';
import Search from './screens/search';
import ProductDetails from './components/productDetails';
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
            },
        }}
        initialRouteName="Home">
        {/* <BottomTab.Screen 
            name="Profile" 
            component={Profile}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if (focused) {
                        return <Ionicons name='person' size={size} color={color}/>
                    }
                    
                    return <Ionicons name='person-outline' size={size} color={color}/>
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
        /> */}
        <BottomTab.Screen 
            name="Search" 
            component={Search}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if (focused) {
                        return <Ionicons name='search' size={size} color={color}/>
                    }
                    
                    return <Ionicons name='search-outline' size={size} color={color}/>
                }
            }}
        />
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
            name="Filters" 
            component={Filters}
            options={{
                tabBarIcon: ({ color, size, focused}) => {
                    if (focused) {
                        return <Ionicons name='filter' size={size} color={color}/>
                    }

                    return <Ionicons name='filter-outline' size={size} color={color}/>
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
        <Stack.Navigator initialRouteName="Homepage" screenOptions={{
        headerShown: false
        }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Homepage" component={BottomTabNavigator} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
    );
}