import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './styles';

const Home = () => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [otp, setOtpNumber] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const onSubmitPhone = async () => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  const onSubmitOtp = async () => {
    try {
      await confirm.confirm(otp);
      console.log('login successfully');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  console.log('confirm', confirm);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        value={phoneNumber}
        style={styles.textInput}
        onChangeText={value => setPhoneNumber(value)}
      />
      <TextInput
        style={styles.textInput}
        value={otp}
        onChangeText={value => setOtpNumber(value)}
      />
      <Button color={'blue'} title="Submit phone" onPress={onSubmitPhone} />
      <Button color={'red'} title="Submit otp" onPress={onSubmitOtp} />
    </View>
  );
};

export default Home;
