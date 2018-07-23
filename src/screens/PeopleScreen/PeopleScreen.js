import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { BottomScreenStyles } from '@config/styles';
import axios from 'axios';
import { users } from '@assets/fake_data';


export default class PeopleScreen extends Component {
    state = {  
        people: []
    }

    getData = async () => {
        people = [];
        for (let index = 0; index < 20; index++) {
            await axios.get('https://randomuser.me/api/')
        .then(res => {
            people.push(res.data.results[0]);
        })
        .catch(err => console.log(err.message()));
        }

        this.setState({people})
        console.log(this.state.people);
    }
    componentDidMount(){
        // this.getData;
        console.log(users);
    }
    render() {
        return (
            <View style={BottomScreenStyles.container}>
                <Text>People Screen</Text>
            </View>
        );
    }
}