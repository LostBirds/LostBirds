import React, {useEffect, useRef} from 'react';
import HomeNavigator from './HomeNavigation';
import AboutAppNavigator from './AboutAppNavigation';
import ProfileNavigator from './ProfileNavigation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '@style/theme';
import * as Animatable from 'react-native-animatable';

export type BottomTabParamList = {
  Home: undefined;
  AboutApp: undefined;
  Profile: undefined;
};

const TabArr: any[] = [
  {route: 'Home', name: 'home', component: HomeNavigator},
  {route: 'AboutApp', name: 'question-circle', component: AboutAppNavigator},
  {route: 'Profile', name: 'user-circle', component: ProfileNavigator},
];

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 1.2},
        1: {scale: 1.6},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.6},
        1: {scale: 1.2},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={350} style={styles.container}>
        <FontAwesome5
          name={item.name}
          color={focused ? colors.selected1 : colors.unselected}
          size={35}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.selected1,
        tabBarInactiveTintColor: colors.unselected,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          flex: 0.15,
          backgroundColor: colors.background2,
        },
      }}
      safeAreaInsets={{
        bottom: Platform.select({android: 6}),
      }}>
      {TabArr.map((item, index) => {
        return (
          <BottomTab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
