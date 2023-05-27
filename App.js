import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/screens/login';
import Homepage from './src/screens/homepage';
import Register from './src/screens/register';
import Menu from './src/components/MenuBottom';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabNavigator () {
  return(
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={Homepage} />
      <BottomTab.Screen name="Login" component={Login} />
    </BottomTab.Navigator> 
  )
}

function MyStack() {
  return (
    <>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homepage" component={BottomTabNavigator} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Component" component={Menu} />
      </Stack.Navigator>
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

// import 'react-native-gesture-handler'; //must be the first import
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItem,
// } from '@react-navigation/drawer'; //version higher than 6.2.0 throws error "r.g.__reanimatedWorkletInit is not a function. (In 'r.g.__reanimatedWorkletInit(p)', 'r.g.__reanimatedWorkletInit' is undefined)" on Expo Snack
// import { Button, Platform } from 'react-native';

// // import Screen from './src/screens/Main';
// import { AuthProvider, useAuth } from './AuthContext';

// const RootStack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const BottomTab = createBottomTabNavigator();
// const HomeStack = createNativeStackNavigator();
// const CompanyStack = createNativeStackNavigator();
// const TopTabFeedStack = createMaterialTopTabNavigator();

// function getDefaultHeaderOptions({ navigation: { openDrawer, goBack } }) {
//   return {
//     headerLeft: ({ canGoBack }) => {
//       if (canGoBack) {
//         if (Platform.OS === 'web') {
//           return <Button title="Go back" onPress={goBack} />;
//         } else {
//           return undefined;
//         }
//       }

//       return <Button title="Open Drawer" onPress={openDrawer} />;
//     },
//   };
// }

// // function TopTabFeedNavigator() {
// //   return (
// //     <TopTabFeedStack.Navigator>
// //       <TopTabFeedStack.Screen name="AllPosts" component={Screen} />
// //       <TopTabFeedStack.Screen name="FavoritePosts" component={Screen} />
// //     </TopTabFeedStack.Navigator>
// //   );
// // }

// function HomeNavigator() {
//   return (
//     <HomeStack.Navigator
//       screenOptions={(props) => getDefaultHeaderOptions(props)}>
//       {/* <FeedStack.Screen name="Feed" component={TopTabFeedNavigator} /> */}
//       <HomeStack.Screen name="Home" component={Homepage} />
//       {/* <FeedStack.Screen name="Settings" component={Screen} /> */}
//       {/* <FeedStack.Screen name="ResetPassword" component={Screen} /> */}
//     </HomeStack.Navigator>
//   );
// }

// function CompanyNavigator() {
//   return (
//     <CompanyStack.Navigator
//       screenOptions={(props) => getDefaultHeaderOptions(props)}>
//       <CompanyStack.Screen name="Company" component={Homepage} />
//     </CompanyStack.Navigator>
//   );
// }

// function BottomTabNavigator() {
//   return (
//     <BottomTab.Navigator screenOptions={{ headerShown: false }}>
//       <BottomTab.Screen name="HomeNavigator" component={HomeNavigator} />
//       <BottomTab.Screen name="CompanyNavigator" component={CompanyNavigator} />
//     </BottomTab.Navigator>
//   );
// }

// function DrawerContent(props) {
//   const { dispatch } = useAuth();
//   const routes = ['Profile', 'Settings'];

//   const bottomTabNavigator = props.state.routes.find(
//     ({ name }) => name === 'BottomTabNavigator'
//   );
//   const homeNavigator = bottomTabNavigator.state?.routes.find(
//     ({ name }) => name === 'HomeNavigator'
//   );
//   const currentScreen =
//     homeNavigator?.state?.routes[homeNavigator.state.index].name;

//   return (
//     <DrawerContentScrollView {...props}>
//       {routes.map((screen) => (
//         <DrawerItem
//           focused={screen === currentScreen}
//           key={screen}
//           label={screen}
//           onPress={() => props.navigation.navigate(screen)}
//         />
//       ))}
//       <DrawerItem
//         label="Invalidate Sign Up"
//         onPress={() => dispatch({ type: 'invalidateSignUp' })}
//       />
//       <DrawerItem
//         label={'Sign Out'}
//         onPress={() => dispatch({ type: 'signOut' })}
//       />
//       <DrawerItem
//         label="Sign Out and Invalidate Sign Up"
//         onPress={() => dispatch({ type: 'signOutAndInvalidateSignUp' })}
//       />
//     </DrawerContentScrollView>
//   );
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{ headerShown: false }}
//       drawerContent={(props) => <DrawerContent {...props} />}>
//       <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
//     </Drawer.Navigator>
//   );
// }

// function RootNavigator() {
//   const {
//     state: { isAuthenticated, isSignUpValidated },
//   } = useAuth();

//   return (
//     <NavigationContainer>
//       <RootStack.Navigator screenOptions={{ headerShown: false }}>
//         {isAuthenticated ? (
//           isSignUpValidated ? (
//             <>
//               <RootStack.Screen
//                 name="DrawerNavigator"
//                 component={DrawerNavigator}
//               />
//               <RootStack.Group
//                 screenOptions={{ presentation: 'fullScreenModal' }}>
//                 <RootStack.Screen name="PostForm" component={Homepage} />
//               </RootStack.Group>
//             </>
//           ) : (
//             <RootStack.Screen name="Login" component={Login} />
//           )
//         ) : (
//           <>
//             <RootStack.Screen name="Login" component={Login} />
//             <RootStack.Screen name="Register" component={Register} />
//           </>
//         )}
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//       <RootNavigator />
//     </AuthProvider>
//   );
// }

