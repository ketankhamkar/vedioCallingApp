/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  Call,
  StreamCall,
  useStreamVideoClient,
  CallContent,
} from '@stream-io/video-react-native-sdk';

type Props = {goToHomeScreen: () => void; callId: any};

export const CallScreen = ({goToHomeScreen, callId}: Props) => {
  const [call, setCall] = React.useState<Call | null>(null);
  const client: any = useStreamVideoClient();
  useEffect(() => {
    const calls = client.call('default', callId);
    calls.join({create: true}).then(() => setCall(calls));
  }, [client]);

  if (!call) {
    return <Text>Joining call...</Text>;
  }
  return (
    <StreamCall call={call}>
      <View style={styles.container}>
        <Text style={styles.text}>Here we will add Video Calling UI</Text>
        <Button title="Go back" onPress={goToHomeScreen} />
        <CallContent onHangupCallHandler={goToHomeScreen} />
      </View>
    </StreamCall>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
