import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';

export default function Notification({ navigation }) {
    return (

        <ImageBackground
            source={require('../assets/assets/bcgrn.jpg')}
            style={styles.bg}>

            <SafeAreaView style={{ ...styles.container, }} >
                <View style={{ ...styles.row,}}>

                    <TouchableOpacity
                        style={{}}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('home')}
                    >
                        <Icons name='chevron-back' size={24} color={'#210a6a'} style={styles.icnbck} />
                    </TouchableOpacity>


                    <Text style={{ ...styles.h1}}>Notification</Text>
                    

                </View>

                <View >
                <Text style={{ ...styles.h2}}>What's new</Text>
                </View>

                <View style={styles.pbutton}>
                
                        <TouchableOpacity
                            style={styles.btn}
                            activeOpacity={0.8}
                            onPress={()=>alert('Wait For Next Update (～￣▽￣)～')}>
                            <Text style={styles.textBtn}>Song's Update</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btn}
                            activeOpacity={0.8}
                            onPress={()=>alert('Wait For Next Update (～￣▽￣)～')}>
                            <Text style={styles.textBtn}>News</Text>
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
        
    },
    container:{  
        marginTop:20,
        marginLeft:20,
    },

    h1: {
        color: '#210a6a',
        fontWeight: '700',
        marginLeft: '12%',
        fontSize: 22,
        backgroundColor: "#FFFFFFF",
    },

    row: {
        marginTop:50,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
   
    h2: {
        color: '#210a6a',
        fontSize: 20,
        marginLeft: '5%',
        marginTop: 20,
    },

    btn: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        width: 140,
        height: 35,
        borderRadius: 35,
        margin: 10,
        justifyContent: 'center',
        alignItems:'center',
    },

    pbutton: {
        flexDirection: 'row',
        marginLeft: '3%',
        marginRight: 20,
        height: 45,

      },

    icnbck:{
        marginLeft:'15%',
    }
})