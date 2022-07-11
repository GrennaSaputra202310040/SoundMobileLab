import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Mina_400Regular, Mina_700Bold } from '@expo-google-fonts/mina';
import { Mako_400Regular } from '@expo-google-fonts/mako';
 
export default function SignupScreen({navigation}) {
    const [name, setName] = useState("jamal");
    const [username, setUsername] = useState("jamal kodim");
    const [password, setPassword] = useState("grendivdlan");
    const [email, setEmail] = useState("soundlanb@gmail.com");
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
      <Text style={styles.judul}>Let's Get Started</Text> 
      <Text style={styles.bawahjudul}>Create Account To Continue</Text> 
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput2}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput3}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput4}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
    
        <View style={styles.tombol}>
            <View style={styles.SignIn_Button}>
                <Text style={styles.ygbawah}>Already have an account?
                </Text>
      
                <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.Si_button}>Sign In</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.loginBtn}
            onPress={() => navigation.navigate('home')}>
            <Text style={styles.signupText}>SIGN UP</Text>
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
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 15,
    width: 260,
    color: '#FFFFFF'
  },

  TextInput2 : {
    height: 50,
    flex: 1,
    padding: 10,
    width: 260,
    fontSize: 15,
    color: '#FFFFFF'
  },

  TextInput3: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 15,
    width: 260,
    color: '#FFFFFF'
  },

  TextInput4: {
    height: 50,
    flex: 1,
    padding: 10,
    fontSize: 15,
    width: 260,
    color: '#FFFFFF'
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "47%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4d8092",
    marginLeft: 20,
    
  },

  signupText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: 'Mina_700Bold',
  },

  judul: {
    fontSize: 35,
    marginBottom: 70,
    fontFamily: 'Mina_700Bold',
  },

  bawahjudul: {
    marginTop: -60,
    marginBottom: 70,
    fontSize:18,
    fontFamily: 'Mako_400Regular',
  },

  SignIn_Button: {
    marginLeft: 5,
  },

  tombol: {
    flexDirection: "row",
    width: '60%',
    marginRight: 50,
    // backgroundColor: '#ff0000',
  },
});