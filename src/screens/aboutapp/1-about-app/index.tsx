import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '@/style/theme';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const style = StyleSheet.create({
  contents: {
    flexDirection: 'column',
    marginTop: 40,
    paddingHorizontal: 20,
    height: 550,
  },
  contentsHeader: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
    height: 50,
  },
  contentsBox: {
    flex: 6,
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    height: 50,
  },
  questionBox: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginVertical: 10,
    width: '100%',
    backgroundColor: colors.background2,
    borderRadius: 10,
  },
  title: {
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 30,
    color: 'black',
  },
  descriptionText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 18,
    color: 'black',
    lineHeight: 40,
    justifyContent: 'center',
    textAlign: 'left',
  },
  buttonView: {
    marginTop: 140,
    marginHorizontal: 70,
    height: 100,
  },
  submitButton: {
    borderRadius: 20,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.selected2,
  },
  submitButtonText: {
    fontFamily: 'SFProText-Regular',
    color: colors.background2,
    fontSize: 22,
  },
});

const viewStyle = {
  flex: 1,
  backgroundColor: colors.background1,
};

export default function AboutApp() {
  return (
    <SafeAreaView style={viewStyle}>
      <View style={style.contents}>
        <View style={style.contentsHeader}>
          <View style={{height: '100%', justifyContent: 'center'}}>
            <Entypo name="chat" color={colors.selected1} size={30} />
          </View>
          <View style={style.title}>
            <Text style={style.titleText}> About Lost Birds</Text>
          </View>
        </View>
        <View style={style.contentsBox}>
          <View style={style.questionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="information"
                color={colors.selected2}
                size={23}
              />
              <Text style={style.descriptionText}>
                {' '}
                Photos do not upload well.
              </Text>
            </View>
          </View>
          <View style={style.questionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="information"
                color={colors.selected2}
                size={23}
              />
              <Text style={style.descriptionText}>
                {' '}
                It says I don't know what kind
              </Text>
            </View>
            <Text style={style.descriptionText}>{'     '}of bird it is.</Text>
          </View>
          <View style={style.questionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="information"
                color={colors.selected2}
                size={23}
              />
              <Text style={style.descriptionText}>
                {' '}
                I don't know which pose to
              </Text>
            </View>
            <Text style={style.descriptionText}>
              {'     '}take a picture of.
            </Text>
          </View>
          <View style={style.questionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="information"
                color={colors.selected2}
                size={23}
              />
              <Text style={style.descriptionText}>
                {' '}
                I can't see the record of a
              </Text>
            </View>
            <Text style={style.descriptionText}>
              {'     '}previously checked bird.
            </Text>
          </View>
          <View style={style.questionBox}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <MaterialCommunityIcons
                name="information"
                color={colors.selected2}
                size={23}
              />
              <Text style={style.descriptionText}>
                {' '}
                Will I be charged for using the
              </Text>
            </View>
            <Text style={style.descriptionText}>{'      '}application?</Text>
          </View>
        </View>
      </View>
      <View style={style.buttonView}></View>
    </SafeAreaView>
  );
}
