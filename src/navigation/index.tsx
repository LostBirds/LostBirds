import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigator from './bottom-tab';

// import ResultDetails from './navigations/ResultDetails'
export type RootStackParamList = {
  Main: undefined;
  Upload: undefined;
  Feature: undefined;
  Result: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        {/* <Stack.Screen name="Upload" component={UploadingPage} /> */}
        {/*   <Stack.Screen name="Result" component={ResultDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
