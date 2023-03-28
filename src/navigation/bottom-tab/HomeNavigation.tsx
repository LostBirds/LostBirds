import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/home/1-main';
import Upload from '@screens/home/2-upload';
import Result from '@screens/home/3-result';
export type HomeParamList = {
  'home/main': undefined;
  'home/upload': undefined;
  'home/result': undefined;
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
      <HomeStack.Screen
        name="home/result"
        component={Result}
        options={{
          headerShown: false,
          headerTitle: '결과',
        }}
      />
    </HomeStack.Navigator>
  );
}
