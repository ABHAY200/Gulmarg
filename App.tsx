import React from 'react';
import {View} from 'react-native';

import helperStyles from '@theme/helpers';
import Init from './src/init';

function App(): JSX.Element {
  return (
    <View style={helperStyles.fill}>
      <Init />
    </View>
  );
}

export default App;
