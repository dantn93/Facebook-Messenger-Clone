import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { BottomScreenStyles } from '../config/styles'

export default class CameraScreen extends Component {
    state = {  }
    render() {
        return (
            <View style={BottomScreenStyles.container}>
                <Text>CameraScreen</Text>
            </View>
        );
    }
}
