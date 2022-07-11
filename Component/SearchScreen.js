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
import DataMusik from './DataMusik'

export default function SearchScreen({ navigation }) {
  return (
    <ImageBackground
          source={require('../assets/assets/bcgrn.jpg')}
          style={styles.bg}>
    <SafeAreaView style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={false} >
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
        <Text style={{ ...styles.h1, marginTop: 10 }}>Search</Text>
        <View style={styles.search}>
          <Icons name='search-outline' size={20} color={'#000000'} style={{ marginRight: 10 }} />
          <Text>Artis, songs, more...</Text>
        </View>
        <Text style={{ ...styles.h1, marginTop: 35, marginBottom: 15, fontSize: 25 }}>
          Today's Biggest Hits
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
                  <Text style={{ ...styles.h2, }}>{V.Artist} </Text>
                  <Text style={{ ...styles.h2, fontSize: 15 }}>{V.Name}</Text>
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
  bg:{
    flex: 1,
  },
  container: {
    paddingHorizontal: 35
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
    fontWeight: '500',
    fontSize: 23
  },
  search: {
    width: 320,
    height: 30,
    backgroundColor: '#C4C4C4',
    borderRadius: 7,
    marginTop: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row'
  },
  box: {
    backgroundColor: '#cfebfd',
    height: 100,
    width: 320,
    borderRadius: 10 ,
    justifyContent: 'center',
    padding: 10,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  square: {
    width: 80,
    height: 80,
    backgroundColor: '#C4C4C4'
  }
})