import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import avatar from '.././assets/assets/therefor.jpg';
import { Audio } from 'expo-av';

import second from '../assets/Lagu/MbakNgajuk.mp3'

export default function PlayMusic({ navigation }) {
    const [sound, setSound] = React.useState();

    async function playSound() {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
         require('../assets/Lagu/MbakNgajuk.mp3')
      );
      setSound(sound);
  
      console.log('Playing Sound');
      await sound.playAsync(); }
  
    React.useEffect(() => {
      return sound
        ? () => {
            console.log('Unloading Sound');
            sound.unloadAsync(); }
        : undefined;
    }, [sound]);
  



    return (

        <ImageBackground
            source={require('../assets/assets/bcgrn.jpg')}
            style={styles.bg}>

            <SafeAreaView style={{ ...styles.container, alignItems: 'center', paddingHorizontal: 30, }} >
                <View style={{ ...styles.row, marginTop: 20 }}>

                    <TouchableOpacity
                        style={{}}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('home')}
                    >
                        <Icons name='chevron-back' size={24} color={'#210a6a'} style={{ marginRight: 70 }} />
                    </TouchableOpacity>


                    <Text style={{ ...styles.h1, marginRight: 75 }}>Now Playing</Text>
                </View>
                <View style={styles.circle}>
                <Image source={avatar} style={styles.avtr}/>   
                </View>
                <Text style={{ ...styles.h2, marginTop: '10%' }}>Therefore I Am</Text>
                <Text style={{ ...styles.h2, fontSize: 16 }}>Billie Eilish</Text>
                <View style={styles.line}>
                    <View style={styles.bubble}></View>
                </View>
                <View style={{ ...styles.row, marginTop: '3%' }}>
                    <Text style={styles.h3}>02.10</Text>
                    <Text style={{ ...styles.h3, marginLeft: "65%" }}>03.50</Text>
                </View>
                <View style={{ ...styles.row, marginVertical: '20%' }}>
                    <Icons name='heart' size={24} color={'#210a6a'} style={{ marginRight: '5%' }} />
                    <View style={{ backgroundColor: '#4d8092', height: 40, width: 220, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ ...styles.row, justifyContent: 'center' }}>
                            <Icons name='play-skip-back' size={24} color={'#FFFFFF'} style={{ marginRight: '10%' }} />
                            <TouchableOpacity
                       
                       onPress={playSound}
                    >
                        <View style={{ backgroundColor: '#4d8092', height: 50, width: 50, borderRadius: 25, borderColor: '#709fb0', borderWidth: 4, justifyContent: 'center', alignItems: 'center' }}>
                                <Icons name='play' size={24} color={'#FFFFFF'} />
                            </View>
                    </TouchableOpacity>
                            
                           
                           
                           
                           
                           <Icons name='play-skip-forward' size={24} color={'#FFFFFF'} style={{ marginLeft: '10%' }} />
                        
                        
                        </View>
                    </View>
                    <Icons name='volume-high' size={24} color={'#210a6a'} style={{ marginLeft: '5%' }} />
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
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    h1: {
        color: '#210a6a',
        fontWeight: '700',
        fontSize: 22,
        marginTop: 5,
    },
    h2: {
        color: '#210a6a',
        fontWeight: '500',
        fontSize: 24
    },
    h3: {
        color: '#210a6a',
        fontSize: 12
    },
    circle: {
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: '#C4C4C4',
        marginTop: '20%'
    },
    avtr:{
        height: 200,
        width: 200,
        borderRadius: 100,
        backgroundColor: '#C4C4C4',
        marginTop: '0%'
    },
    line: {
        width: 278,
        height: 2,
        borderRadius: 7,
        backgroundColor: '#C4C4C4',
        marginTop: '20%'
    },
    bubble: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#210a6a',
        position: 'absolute',
        left: '35%',
        top: -4
    }
})