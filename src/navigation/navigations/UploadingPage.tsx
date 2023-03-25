import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors} from '@/style/theme';

const Photo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
const ImagePickerButton = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #cccccc;
  padding: 8px 32px;
  margin-top: 16px;
`;
const Label = styled.Text``;

const ButtonBox = styled.View`
  margin: 10%;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 300px;
  height: 50px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #cccccc;
  padding: 8px 32px;
  margin-top: 40px;
`;

const style = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3.43,
    marginTop: 20,
    borderRadius: 12,
  },
});

const viewStyle = {
  flex: 1,
  backgroundColor: colors.background1,
};

export default function SubmitPage() {
  const [imageSource, setImageSource] = useState<any>(undefined);

  const showImagePicker = (): void => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else {
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        setImageSource(response.assets[0].uri);
        console.log('imageSource = ', imageSource);
      }
    });
  };

  const showCamera = (): void => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.errorCode) {
        console.log('LaunchCamera Error: ', response.errorCode);
      } else {
        setImageSource(response.assets[0].uri);
      }
    });
  };

  const Submit = async (): Promise<void> => {
    var body = new FormData();

    body.append('image', {uri: imageSource, type: 'multipart/form-data'});

    axios.post('serverUrl', body, {
      headers: {'content-type': 'multipart/form-data'},
    });
    console.log('Submitted.');
  };

  return (
    <SafeAreaView style={viewStyle}>
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ButtonBox>
            <ImagePickerButton
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={showImagePicker}>
              <Label>Load Photo</Label>
            </ImagePickerButton>
            <ImagePickerButton
              onPress={showCamera}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <Label>Take Photo</Label>
            </ImagePickerButton>
          </ButtonBox>
          <Image
            source={{uri: imageSource}}
            style={{width: 300, height: 300}}
          />
          <SubmitButton
            style={{justifyContnet: 'center', alignItems: 'center'}}
            onPress={Submit}>
            <Label>Submit</Label>
          </SubmitButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
