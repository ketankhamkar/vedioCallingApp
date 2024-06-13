/* eslint-disable prettier/prettier */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [userId, setUserId] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const handleLogin = async () => {
    console.log('kkkkk');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter User ID"
        value={userId}
        onChangeText={setUserId}
      />
      <TextInput
        placeholder="Enter Access Token (optional)"
        value={accessToken}
        onChangeText={setAccessToken}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
