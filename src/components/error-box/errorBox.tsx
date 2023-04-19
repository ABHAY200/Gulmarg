import React from 'react';
import {View, Text} from 'react-native';

import strings from '@localization/Localized';

import styles from './styles';

const ErrorBox = () => (
  <View style={styles.errorBox}>
    <Text style={styles.title}>{`${strings.oops} 😕`}</Text>
    <Text style={styles.subTitle}>{strings.app_error_title}</Text>
    <Text style={styles.description}>{strings.app_error}</Text>
  </View>
);

export default ErrorBox;
