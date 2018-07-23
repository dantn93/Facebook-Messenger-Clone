import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';

export default class SplashScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('MainScreen');
    };

    goToChat = () => {
        const { navigation } = this.props;
        navigation.navigate('ChatScreen');
    }

    render() {
        return (
            <View style={styles.container}>
                <Button raised color="#0084ff" onPress={this.onPress}>
                    CONTINUE AS USER
                </Button>
                <Button raised color="red" onPress={this.goToChat}>
                    GO TO CHAT SCREEN
                </Button>
            </View>
        );
    }
}