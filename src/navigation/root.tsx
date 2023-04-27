import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {useAppDispatch, useAppSelector} from '@hooks/hooks';
import AuthStack from './authStack';
import AppStack from './appStack';
import {setUserData} from '@screens/login/loginSlice';

const Root = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.login.user);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = userData => {
    dispatch(setUserData(userData));
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Root;
