import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ToolbarAndroid } from 'react-native';

import styles from './tor-screen-style';
import toolbarMenuIcon from '../../assets/icons/icons8-menu-24.png';

export default class TorScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Time Off Request',
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
                    title='Time Off Request'
                    titleColor='white'
                //actions={[{ title: 'Sidebar', show: 'always' }]}
                //onActionSelected={this.openDrawer.bind(this)} 
                />

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Time Off Request Screen</Text>
                    <Button
                        title="Go to TOR ... again"
                        onPress={() => this.props.navigation.navigate('Tor')}
                    />
                    <Button
                        title="Go to Home"
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <Button
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
            </View>
        );
    }

    openDrawer(position) {
        this.props.navigation.openDrawer();
    }
}