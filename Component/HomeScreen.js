import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import DataMusik from "./DataMusik";



export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
          source={require('../assets/assets/bcgrn.jpg')}
          style={styles.bg}>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View style={styles.icon}>
          <TouchableOpacity
            style={{ marginRight: 20, width: 30, height: 30, }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('notif')}
          >
            <Icons name='notifications-outline' size={30} color={'#210a6a'} style={{}} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: 30, height: 30, }}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Settings')}
          >
            <Icons name='settings-outline' size={30} color={'#210a6a'} />
          </TouchableOpacity>
        </View>
        <Text style={{ ...styles.h1 }}>Hi, User</Text>
        <Text style={{ ...styles.h1, marginTop: 20, marginBottom: 10 }}>Playlist</Text>
        <View >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

            {DataMusik.map((V) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('PlayMusic')}
              >
                <View style={styles.BoxPlylst}>
                  <Image source={V.Image} style={styles.ImagePlylst} />
                  <View style={{ marginTop: 30 }}>
                  <Text style={{ ...styles.h2, fontSize: 18 }}>{V.Name}</Text>
                    <Text style={{ ...styles.h2, }}>{V.Artist} </Text>
                   
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>


        </View>
        <Text style={{ ...styles.h1, marginTop: 35, marginBottom: 15, fontSize: 25 }}>
          Top Of The Song
        </Text>

        {DataMusik.map((V) => (

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('PlayMusic')}
          >
            <View style={styles.box}>
              <View style={styles.row}>
                <Image source={V.Image} style={styles.square} />
                <View style={{ marginLeft: 20 }}>
                <Text style={{ ...styles.h2, fontSize: 21 }}>{V.Name}</Text>
                <Text style={{ ...styles.h2, fontSize: 17}}>{V.Artist} </Text>
               
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  // scrl:{
    
  // },
  bg:{
    flex: 1,
  },
  container: {
    marginLeft:20,
    marginRight: 20,
    
    // backgroundColor: '#FFFFFF',
    // paddingHorizontal: 20
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 45
  },
  h1: {
    color: '#210a6a',
    fontWeight: '700',
    fontSize: 22
  },
  h2: {
    color: '#210a6a',
    fontWeight: '400',
    fontSize: 13
  },


  //   bar playlist

  BoxPlylst: {
    borderRadius: 15,
    backgroundColor: '#cfebfd',
    margin: 5,
    width: 125,
    height: 150,
    padding: 5,
    marginTop: 40,
    marginRight: 8,

  },
  ImagePlylst: {
    marginVertical: -30,
    width: 115,
    height: 115,
    borderRadius: 10,
  },

  //end playlist

  box: {
    backgroundColor: '#cfebfd',
    height: 100,
    width: 350,
    borderRadius: 10,
    justifyContent: 'center',
    padding: 20,
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: '#C4C4C4'
  }
})