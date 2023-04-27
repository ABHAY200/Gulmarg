import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as ScreenTypes from '@constants/types';
import Home from '@screens/home/home';

import {setTopLevelNavigator} from './navigationUtils';
import BottomTabs from './tabNavigator';

export type RootStackParamList = {
  BottomTabs: ScreenTypes.BottomTabsParams;
  Home: ScreenTypes.HomeScreenParams;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => (
  <NavigationContainer
    ref={navigatorRef => {
      setTopLevelNavigator(navigatorRef);
    }}>
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
