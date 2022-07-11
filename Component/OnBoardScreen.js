import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';
import logo1 from '../assets/assets/logo1.png';
import AppLoading from 'expo-app-loading';
import { useFonts, Mina_400Regular, Mina_700Bold } from '@expo-google-fonts/mina';
import { Mako_400Regular } from '@expo-google-fonts/mako';

export default function OnBoardScreen({ navigation }) {
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
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />

            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.logo} source={logo1} />
                </View>
                <View style={{... styles.header ,alignItems: 'center' }}>
                    <Text style={styles.headerText}>SoundLab</Text>
                </View>

                <View style={{... styles.PDesk}}>
                <Text style={styles.title}>Music is a harmonius combination of tunes, vocals, and instrumentals to express anything emotional</Text>
                <Text style={styles.description}>“Lexicographer”</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                    style={styles.btn}
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('home')}
                >
                    <Text style={styles.textBtn}>Get Started</Text>
                    <Ionicons name='arrow-forward' size={30} color='#ffff' style={styles.icon} />

                </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
        </ImageBackground>
    )
}
};

const styles = StyleSheet.create({
    bg:{
        flex: 1,
    },
    container: {
        marginLeft:20,
        marginRight: 20,
        alignItems: 'center'
    },
    header: {
       },
    logo: {
        marginTop:100,
        marginBottom:30,
        
        width: 130,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    PDesk:{
        alignItems: 'center'
    }
    ,
    headerText: {
        fontFamily: 'Mina_700Bold',
        color: '#1a0757',
        fontSize: 35,
    
       
    },
    title: {
        color: '#210a6a',
        fontSize: 16,
        marginHorizontal: 30,
        textAlign: 'center',
        fontFamily:'Mako_400Regular',
    },
    description: {
        marginTop: 8,
        color: '#210a6a',
        fontSize: 16,
        textAlign: 'center',
        fontFamily:'Mako_400Regular',
    },
    btn: {
        flexDirection: 'row',
        marginTop: 170,
        width: 200,
        height: 54,
        borderRadius: 35,
        backgroundColor: '#4d8092',
        alignItems: 'center'
    },
    textBtn: {
        marginVertical: 15,
        color: '#FFFFFF',
        fontSize: 19,
        marginRight: 20,
        marginLeft: 35,
  
        fontFamily: 'Mina_700Bold',
    },

})

