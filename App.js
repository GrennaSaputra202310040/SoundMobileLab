import { NavigationContainer, StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavigasiBawah from "./Component/NavigasiBawah";
import OnBoardScreen from './Component/OnBoardScreen';
import PlayMusic from './Component/PlayMusic';
import Notification from './Component/Notifiacation';
import SignupScreen from './Component/SignupScreen';
import Settings from './Component/Settings';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import SiginScreen from './Component/SiginScreen';

const stack = createStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator screenOptions={{ headerShown: false }}>
          <stack.Screen name='Onboard' component={OnBoardScreen} />
          <stack.Screen name='home' component={NavigasiBawah} options={{ headerShown: false }} />
          <stack.Screen name='PlayMusic' component={PlayMusic} />
          <stack.Screen name='notif' component={Notification} />
          <stack.Screen name='SignIn' component={SiginScreen} />
          <stack.Screen name='Settings' component={Settings} />
          <stack.Screen name='SignUp' component={SignupScreen} />
        </stack.Navigator>
      </NavigationContainer></>

  );
}