import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@screens/home/home';
import tabRoutes from './tabConfig';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const tabScreens = {
    Home: HomeScreen,
  };

  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={() => ({
        headerShown: false,
      })}>
      {tabRoutes.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tabScreens[tab.target]}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;
