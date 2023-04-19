import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import ErrorBoundary from 'react-native-error-boundary';

import ErrorBox from '@components/error-box/errorBox';
import colors from '@theme/colors';
import Root from './navigation/root';

import {getStore} from './store';

const Init = () => {
  const errorHandler = () => {
    /* TODO: Log the error to an error reporting service */
  };

  return (
    <ErrorBoundary onError={errorHandler} FallbackComponent={ErrorBox}>
      <Provider store={getStore().store}>
        <PersistGate loading={null} persistor={getStore().persistor}>
          <StatusBar barStyle="dark-content" backgroundColor={colors.WHITE} />
          <Root />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};
export default Init;
