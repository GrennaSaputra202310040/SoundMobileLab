import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Mina_400Regular, Mina_700Bold } from '@expo-google-fonts/mina';
import { Mako_400Regular } from '@expo-google-fonts/mako';
 
export default function SignScreen({navigation}) {
  const [username, setUsername] = useState("soundlanb@gmail.com");
  const [password, setPassword] = useState("grendivdlan");
  let [fontsLoaded] = useFonts({
    Mina_400Regular,
    Mina_700Bold,
    Mako_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {


 
  return (
    <ImageBackground
      source={require('../assets/assets/bcgrn.jpg')} 
      style={styles.bg}>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/assets/logo1.png")} />
      <Text style={styles.judul}>SOUNDLAB</Text> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput2}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}
             onPress={() => navigation.navigate('home')}
             >
        <Text style={styles.loginText}>SIGN IN</Text>
      </TouchableOpacity>
      
      <View style={styles.SignUp_Button}>
      <Text style={styles.ygbawah}>Don’t have an account?
      </Text>
      
      <TouchableOpacity
      onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.SU_button}>Sign Up</Text>
      </TouchableOpacity>

      </View>
    </View>
    </ImageBackground>
  );
}
};
 
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#709fb0",
    borderRadius: 15,
    width: "70%",
    height: 50,
    marginBottom: 32,
    alignItems: "center",
    color: '#FFFFFF'
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    // fontSize: 15,
    width: 260,
    color: '#FFFFFF'
  },
  TextInput2 : {
    height: 50,
    flex: 1,
    padding: 10,
    width: 260,
    fontSize: 15,
    marginLeft:-10,
    color:'#FFFFFF'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  SU_button: {
    color:'red'
  },
  loginBtn: {
    width: "55%",
    borderRadius: 25,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4d8092",
  },

  loginText: {
    fontSize: 20,
    fontFamily: 'Mina_700Bold',
    color: '#FFFFFF'
  },

  judul: {
    fontSize: 37,
    marginBottom: 65,
    fontFamily: 'Mina_700Bold',
  },

  SignUp_Button: {
    flexDirection: "row",
    marginTop: 20,

  },
});