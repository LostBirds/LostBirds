import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';
import {colors} from '@/style/theme';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const style = StyleSheet.create({
  contents: {
    marginTop: 60,
    paddingHorizontal: 20,
    height: 240,
  },
  contentsHeader: {
    flex: 1,
    marginLeft: 15,
    flexDirection: 'row',
  },
  contentsBox: {
    flex: 4,
    marginTop: 10,
    paddingHorizontal: 35,
    width: '100%',
    backgroundColor: colors.background2,
    borderRadius: 20,
    justifyContent: 'center',
  },
  title: {
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'SFProText-Bold',
    fontSize: 38,
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

const SubmitButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={style.submitButton}>
    <Text style={style.submitButtonText}>{title}</Text>
  </TouchableOpacity>
);

const viewStyle = {
  flex: 1,
  backgroundColor: colors.background1,
};

export default function Home() {
  return (
    <SafeAreaView style={viewStyle}>
      <View style={style.contents}>
        <View style={style.contentsHeader}>
          <View style={{height: '100%', justifyContent: 'center'}}>
            <FontAwesome5 name="kiwi-bird" color={colors.birdIcon} size={30} />
          </View>
          <View style={style.title}>
            <Text style={style.titleText}> LostBirds</Text>
          </View>
        </View>
        <View style={style.contentsBox}>
          <Text style={style.descriptionText}>
            Lost Birds looks at photos of birds around you and lets you know if
            a bird is lost or wandering.
          </Text>
        </View>
      </View>
      <View style={style.buttonView}>
        <SubmitButton
          title="Submit your photo!"
          onPress={() => Alert.alert('Submit button pressed')}
        />
      </View>
    </SafeAreaView>
  );
}
