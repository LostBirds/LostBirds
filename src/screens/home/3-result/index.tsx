import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const style = StyleSheet.create({
    title: {
        flex: 1,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    species: {
        flexDirection: 'row',
        flex: 2,
    },
    img: {
        backgroundColor: 'blue',
        flex: 1,
    },
    name: {
        flexDirection: 'column',
        flex: 2,
    },
    mine: {
        backgroundColor: 'yellow',
        flex: 1,
    },
    description: {
        backgroundColor: 'green',
        flex: 1,
    },
    bottom: {
        flex: 6,
        flexDirection: 'column',
    }
})

export default function Result() {

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={style.title}>
                <Text style={style.titleText}>Result Page</Text>
            </View>
            <View style={style.species}>
                <View style={style.img}></View>
                <View style={style.name}>
                    <Text>Cygnus columbianus columbianus</Text>
                    <Text>Swan</Text>
                    <Text>Endangered Wildlife Level 2</Text>
                </View>
            </View>
            <View style={style.bottom}>
                <View style={style.mine}>
                    <Text>Submitted Image.</Text>
                </View>
                <View style={style.description}>
                    <Text>Description</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}