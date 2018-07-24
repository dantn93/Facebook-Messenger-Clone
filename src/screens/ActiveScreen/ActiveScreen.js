import React, { Component } from 'react';
import {View, Text, FlatList, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { BottomScreenStyles } from '@config/styles';
import { users } from '@assets/fake_data';
import { connect } from 'react-redux';

class ActiveScreen extends Component {
    state = {  
        people: []
    }

    getAsyncData = async () => {
        people = [];
        for (let index = 0; index < 20; index++) {
            await axios.get('https://randomuser.me/api/')
        .then(res => {
            people.push(res.data.results[0]);
            this.setState({people});
        })
        .catch(err => console.log(err.message()));
        }
    }
    getFakeData(){
        this.setState({people: users.results})
    }
    componentDidMount(){
        this.getFakeData();
    }

    listItem(item){
        return (
            <View style={styles.viewItem}>
                <TouchableOpacity onPress={() => {this.props.dispatch({type: "GOTO_CHAT"})}} style={styles.touchItem}>
                    <Image source={{uri: item.item.picture.thumbnail}} style={styles.avatar}/>
                    <Text style={styles.personname}>{item.item.name.first}</Text>
                    <Image source={require('@assets/images/wave.png')} style={styles.wave}/>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={BottomScreenStyles.container}>
                <FlatList
                    data={this.state.people}
                    renderItem={(item) => this.listItem(item)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewItem: {
        width: '100%', 
        height: 60, 
        marginBottom: 2,
        // backgroundColor: 'gray',
        
    },
    touchItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 50, 
        height: 50, 
        borderRadius: 25,
        marginLeft: 10
    },
    personname: {
        marginLeft: 5
    },
    wave: {
        width: 40,
        height: 40,
        position: 'absolute',
        right: 10
    }
})

const mapStateToProps = state => ({
    nav: state.nav,
  });
  
export default connect(mapStateToProps)(ActiveScreen);

