import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { BottomScreenStyles } from '../config/styles';

export default class PeopleScreen extends Component {
    state = {  }
    render() {
        return (
            <View style={BottomScreenStyles.container}>
                <Text>People Screen</Text>
            </View>
        );
    }
}