import React, {useState} from 'react';
import {Dimensions, Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '@/style/theme';

const win = Dimensions.get('window');

const style = StyleSheet.create({
    title: {
        flex: 0.5,
        marginTop: '3%',
        marginLeft: '10%',
        marginBottom: '2%',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        flex: 1,
    },
    speciesBox: {
        flexDirection: 'row',
        margin: '1%',
        backgroundColor: 'white',
        borderRadius: 10,
        flex: 1.5,
    },
    img: {
        resizeMode: 'contain',
        width: win.width/3.3,
        height: win.height/10,
        flex: 1,
        borderRadius: 10
    },
    imgBox: {
        flex: 1,
        margin: '2%'
    },
    infoBox: {
        flex: 2,
    },
    mine: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: '1%',
    },
    description: {
        margin: '1%',
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        flex: 1,
    },
    bottom: {
        flex: 6,
        flexDirection: 'column',
    },
    scientific: {
        color: 'black',
        fontStyle: 'italic',
        flex: 1,
    },
    name: {
        color: 'black',
        fontWeight: 'bold',
        flex: 1,
    },
    endangered: {
        color: 'black',
        flex: 1,
    },
    submitImg: {
        resizeMode: 'contain',
        width: win.width/1.1,
        height: win.height/4.5,
        borderRadius: 10,
    },
    submitTitleBox: {
        flex: 2
    },
    submitImgBox: {
        flex: 10
    }
})

export default function Result() {

    return (
        <SafeAreaView style={{margin: '2%', flex: 1, backgroundColor: colors.background1}}>
            <View style={style.title}>
                <Text style={style.titleText}>Result</Text>
            </View>
            <View style={style.speciesBox}>
                <View style={style.imgBox}>
                    <Image style={style.img} source={require('../../../assets/images/swan.png')}></Image>
                </View>
                <View style={style.infoBox}>
                    <Text style={style.scientific}>Cygnus columbianus columbianus</Text>
                    <Text style={style.name}>Swan</Text>
                    <Text style={style.endangered}>Endangered Wildlife Level 2</Text>
                    <Text style={{flex: 1}}></Text>
                </View>
            </View>
            <View style={style.bottom}>
                <View style={style.mine}>
                    <View style={style.submitTitleBox}>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 30, marginBottom: '1%'}}>Your Birds</Text>
                    </View>
                    <View style={style.submitImgBox}>
                        <Image style={style.submitImg} source={require('../../../assets/images/submitted_image.png')}></Image>
                    </View>
                </View>
                <View style={style.description}>
                    <Text style={{color: 'black',fontWeight: 'bold', fontSize: 30}}>Outline</Text>
                    <ScrollView>
                        <Text style={{fontFamily: 'SFProText-Regular', fontSize: 17, color: 'black'}}>It is a rare winter bird as a bird of the order Anatidae [Endangered Wildlife Class II]. Body length 120 cm. Male and female morphology is similar. The adult bird has a white body and the young bird has a grayish brown body. At first glance, it looks similar to the big swans, but it is smaller than the big swans, and the yellow part of the beak is narrow and round. Observed in lakes, river estuaries, seashores, grasslands, farmlands, reclaimed lands, etc. As a winter bird, it puts its head into the water and eats leaves, stems or roots of water plants, and sometimes seeks food in farmlands or grasslands. In the past, not a small number came across the country, but now it has greatly decreased and a very small number overwinter. It winters in Gangwon-do's east coast lagoon, Nakdong River estuary, Taehwa River, Junam Reservoir, Geum River estuary, Cheonsu Bay, Sapgyo Lake and Han River. Worldwide, it breeds in northern Eurasia, Alaska, and northern Canada, and winters in western Europe, around the Caspian Sea, Korea, eastern China, and Japan.</Text>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}