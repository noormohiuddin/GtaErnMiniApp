import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from './components/home/HomeScreen';
import TorScreen from './components/tor/TorScreen';

const RootStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Tor: {
    screen: TorScreen,
  }
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />
  }
}