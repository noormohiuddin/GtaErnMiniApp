import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ToolbarAndroid } from 'react-native';

import styles from './home-screen-style';
import toolbarMenuIcon from '../../assets/icons/icons8-menu-24.png';

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  };

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={{ height: 56, alignSelf: 'stretch', backgroundColor: 'steelblue' }}
          navIcon={toolbarMenuIcon}
          onIconClicked={this.openDrawer.bind(this)}
          title='Home'
          titleColor='white'
        //actions={[{ title: 'Sidebar', show: 'always' }]}
        //onActionSelected={this.onActionSelected.bind(this)} 
        />
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Welcome Home</Text>
          <Button
            title="Go to Tor"
            onPress={() => this.props.navigation.navigate('Tor')}
          />
          <Button
            title="Open Drawer"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </View>
      </View>
    );
  }

  openDrawer(position) {
    this.props.navigation.openDrawer();
  }
}