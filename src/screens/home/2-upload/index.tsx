import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
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

const style = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3.43,
    marginTop: 20,
    borderRadius: 12,
  },
  button: {
    backgroundColor: colors.background2,
    width: 300,
    height: 50,
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'SFProText-Regular',
    color: 'black',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: colors.selected2,
    width: 300,
    height: 50,
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
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

export default function Upload() {
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

  const SubmitButton = () => (
    <TouchableOpacity onPress={Submit} style={style.submitButton}>
      <Text style={style.submitButtonText}>Submit</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={viewStyle}>
      <ScrollView>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ButtonBox>
            <TouchableOpacity style={style.button} onPress={showImagePicker}>
              <Text style={style.buttonText}>Load Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showCamera} style={style.button}>
              <Text style={style.buttonText}>Take Photo</Text>
            </TouchableOpacity>
          </ButtonBox>
          <Photo
            source={{uri: imageSource}}
            style={{width: 300, height: 300}}
          />
          <SubmitButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
