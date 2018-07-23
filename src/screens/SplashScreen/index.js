import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';

export default class SplashScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('MainScreen');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button raised color="#0084ff" onPress={this.onPress}>
                    CONTINUE AS USER
                </Button>
            </View>
        );
    }
}