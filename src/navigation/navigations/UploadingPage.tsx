import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import styled from 'styled-components/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {colors} from '@/style/theme';

const Photo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
const ImagePickerButton = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 8px;
  border-color: #cccccc;
  padding: 8px 32px;
  margin-top: 16px;
`;
const Label = styled.Text``;

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
  const [imageSource, setImageSource] = useState<string | undefined>(undefined);

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
        setImageSource(response.assets.uri);
      }
    });
  };

  const showCamera = (): void => {
    launchCamera({mediaType: 'photo'}, response => {
      if (response.errorCode) {
        console.log('LaunchCamera Error: ', response.errorCode);
      } else {
        setImageSource(response.assets.uri);
      }
    });
  };

  return (
    <SafeAreaView style={viewStyle}>
      <ScrollView>
        <View>
          {imageSource && <Photo source={{uri: imageSource}} />}
          <ImagePickerButton onPress={showImagePicker}>
            <Label>Load Photo</Label>
          </ImagePickerButton>
          <ImagePickerButton onPress={showCamera}>
            <Label>Take Photo</Label>
          </ImagePickerButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
