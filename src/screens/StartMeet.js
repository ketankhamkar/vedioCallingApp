/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  Call,
  StreamCall,
  useStreamVideoClient,
  CallContent,
} from '@stream-io/video-react-native-sdk';

const StartMeet = ({navigation, route}) => {
  const {id} = route.params;
  const [call, setCall] = useState(null);
  const client = useStreamVideoClient();
  useEffect(() => {
    const call = client.call('default', id);
    call.join({create: true}).then(() => setCall(call));
  }, [client]);

  if (!call) return null;

  return (
    <StreamCall call={call}>
      <View style={{flex: 1}}>
        <Text>Here we will add Video Calling UI</Text>
        <CallContent onHangupCallHandler={() => navigation.goBack()} />
      </View>
    </StreamCall>
  );
};

export default StartMeet;
