import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/home/1-main';
import Upload from '@screens/home/2-upload';
export type HomeParamList = {
  'home/main': undefined;
  'home/upload': undefined;
};

const HomeStack = createNativeStackNavigator<HomeParamList>();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home/main"
        component={Home}
        options={{
          headerShown: false,
          headerTitle: '홈',
        }}
      />
      <HomeStack.Screen
        name="home/upload"
        component={Upload}
        options={{
          headerShown: false,
          headerTitle: '업로드',
        }}
      />
    </HomeStack.Navigator>
  );
}
