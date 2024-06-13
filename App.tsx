/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  Text,
  Vibration,
  View,
} from 'react-native';
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import {HomeScreen} from './src/screens/HomeScreen';
import {CallScreen} from './src/screens/CallScreen';
import StartMeet from './src/screens/StartMeet';
import JoinMeet from './src/screens/JoinMeet';
import FirstScreen from './src/screens/FirstScreen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const apiKey = 'twktamyjn2av'; // the API key can be found in the "Credentials" section
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidWI0dHphMWszcyJ9.Bz6Ud2DepY3TXHAzH3XIfeq8eA62JcjNlW8cDr1qHq8'; // the token can be found in the "Credentials" section
const userId = 'ub4tza1k3s'; // the user id can be found in the "Credentials" section
const callId = '9Cdya9uocuRb'; // the call id can be found in the "Credentials" section

const user = {
  id: userId,
  name: 'ketan',
  // image: `https://getstream.io/random_png/?id=${userId}&name=Kir+Kanos`,
};
const client = new StreamVideoClient({apiKey, user, token});

export default function App() {
  console.log('clientclient', client);
  const [activeScreen, setActiveScreen] = useState('home');
  const goToCallScreen = () => setActiveScreen('call-screen');
  const goToHomeScreen = () => setActiveScreen('home');

  return (
    // <StreamVideo client={client}>
    //   {/* <CallScreen /> */}
    //   <SafeAreaView style={styles.container}>
    //     {activeScreen === 'call-screen' ? (
    //       <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
    //     ) : (
    //       <HomeScreen goToCallScreen={goToCallScreen} />
    //     )}
    //   </SafeAreaView>
    // </StreamVideo>
    <GestureHandlerRootView style={{flex: 1}}>
      <StreamVideo client={client}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={FirstScreen} />
            <Stack.Screen name="StartMeet" component={StartMeet} />
            <Stack.Screen name="JoinMeet" component={JoinMeet} />
          </Stack.Navigator>
        </NavigationContainer>
      </StreamVideo>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
