import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView
} from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import avatar from '.././assets/assets/allof.jpg';
import { BackHandler } from 'react-native-web';

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/assets/bcgrn.jpg')} 
      style={styles.bg}>
      <SafeAreaView style={styles.container}>
        <View style={{ ...styles.row, marginTop: -80 }}>
          <Text style={{ ...styles.h1 }}>User Profile</Text>
        </View>

        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('PlayMusic')}>
            <View style={styles.BoxPlylst}>
              <View style={{ marginTop: 10 }}>
               <Image source={avatar} style={styles.avtr}/>              
              </View>
              <View>
                <Text style={styles.us}>Dodolipet</Text>
                <Text style={styles.us2}>08********83</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.pbutton}>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.textBtn}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.textBtn}>Sign Up</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    // width:
  },
  container :{
   
    alignItems:'center',
  },
  h1: {
    color: '#210a6a',
    fontWeight: '700',
    fontSize: 22,
  },
  row: {
    alignItems: 'center'
  },

  // Boxprofle
  avtr:{
    width:70,
    height:70,
    alignItems: 'center',
    borderRadius: 50,
  },
  us:{
    marginTop: 18,
    marginLeft: 18,
    marginBottom: -15,
    fontSize : 22,
  },
  us2:{
    marginTop: 18,
    marginLeft: 18,
    fontSize : 13,
  },
  BoxPlylst: {
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#cfebfd',
    width: 320,
    height: 90,
    paddingLeft:15,
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,

  },
  ImagePlylst: {
    marginLeft: 10,
    marginVertical: 6,
    width: 68,
    height: 68,
    borderRadius: 10,
  },

  btn: {
    backgroundColor: '#4d8092',
    flexDirection: 'row',
    width: 140,
    height: 35,
    borderRadius: 35,
    margin: 10,
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 280,
  },

  textBtn: {
    fontSize: 17,
    color: '#FFFFFF'
  },

  pbutton: {
    flexDirection: 'row',

   

  }



})