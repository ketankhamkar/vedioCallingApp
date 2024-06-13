/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';

const FirstScreen = ({navigation}) => {
  const [meetId, setMeetId] = useState('');
  const newMeeting = () => {
    const randomId = Math.floor(Math.random() * 100000000000).toString();
    console.log('new', randomId);
    navigation.navigate('StartMeet', {
      id: randomId,
    });
  };
  console.log('asdas==', meetId);
  const joinMeeting = () => {
    console.log('JoinMeet');

    navigation.navigate('StartMeet', {
      id: meetId,
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 10}}>
      <View style={{marginVertical: 10}}>
        <Button title="start meeting 🎧" onPress={newMeeting} />
      </View>
      <View style={{marginVertical: 10}}>
        <TextInput
          keyboardType="numeric"
          style={{
            // width: 150,
            borderWidth: 1,
            borderColor: '#000',
            color: '#000',
          }}
          onChangeText={id => setMeetId(id)}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Button title="Join meeting 🎧" onPress={joinMeeting} />
      </View>
    </View>
  );
};

export default FirstScreen;
