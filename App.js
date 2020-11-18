import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FaceBook from './screens/FacebookScreen';
import Instagram from './screens/InstagramScreen';


export default class App extends React.Component{
  render(){
    return(

         <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  fb: {screens: FaceBookScreen},
  in: {screens: InstagramScreen},
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
