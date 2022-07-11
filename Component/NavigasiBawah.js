import { createBottomTabNavigator, StyleSheet } from '@react-navigation/bottom-tabs';
import ProfileScreen from "./HomeScreen";
import HomeScreen from "./ProfileScreen";
import SearchScreen from './SearchScreen';
import PlayMusic from './PlayMusic'

import { NavigationContainer } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native-web';



const Tab = createBottomTabNavigator();

export default function Navigation({ navigation }) {
  return (
  
    <Tab.Navigator
  
    tabBarOptions={{ customTabBarStyle,
      showLabel: false,
   

        }}>
      <Tab.Screen name="Home" component={ProfileScreen} options={{ headerShown: false, 
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icons name="home" color={color} size={size} />),  }} />
            
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false,
        tabBarLabel: 'search',
        tabBarIcon: ({ color, size }) => (
          <Icons name="search" color={color} size={size} />),  }} />

      <Tab.Screen name="Profile" component={HomeScreen} options={{ headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Icons name="person" color={color} size={size} />
          ), }} />

    </Tab.Navigator>
  );
}

const customTabBarStyle = {
  activeTintColor: '#4d8092',
  inactiveTintColor: '#709fb0',
   
}