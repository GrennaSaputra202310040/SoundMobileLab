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

export default function Settings({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/assets/bcgrn.jpg')}
      style={styles.bg}>
      <SafeAreaView style={styles.container}>
        <View style={{ ...styles.row, }}>
          
          <TouchableOpacity
                        style={{ marginRight: 70, marginLeft:-100}}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('home')}
                    >
                        <Icons name='chevron-back' size={24} color={'#210a6a'} style={{  }} />
                    </TouchableOpacity>

          <Text style={{ ...styles.h1 }}>Settings</Text>
        </View>

        <View style={{ alignItems: 'center' }} >

          <View style={styles.BoxPlylst}>

            <View style={{ marginTop: 10 }}>
              <Text style={{ ...styles.h2, }}>Versions : 0.0.1 Alpa Test</Text>

              <Text style={{ ...styles.h2, fontSize: 15 }}>Release Date : 30 june 22</Text>
              <Text style={{ ...styles.h2, fontSize: 15 }}></Text>

            </View>
          </View>

        </View>

      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: 'cover',

  },
  container: {
    marginTop: 20,
  alignItems:'center'
  },

  h1: {
    color: '#210a6a',
    fontWeight: '700',
    fontSize: 22,
    backgroundColor: "#FFFFFFF",
    alignItems: 'center'
  

  },

  row: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',

  },

  BoxPlylst: {
    borderRadius: 15,
    backgroundColor: '#cfebfd',
    width: 300,
    height: "70%",
    padding: 5,
    marginTop: 50,
    alignContent: 'center'

  },
}
)


