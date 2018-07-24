import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { connect } from 'react-redux';

import styles from './styles';

class SplashScreen extends Component {
    onPress = () => {
        const { navigation } = this.props;
        navigation.navigate('MainScreen');
    };

    goToChat = () => {
        const { navigation } = this.props;
        navigation.navigate('ChatScreen');
    }

    // componentDidMount(){
    //     this.props.dispatch({type: "TEST"});
    // }

    render() {
        return (
            <View style={styles.container}>
                <Button raised color="#0084ff" onPress={this.onPress}>
                    CONTINUE AS USER
                </Button>
                <Button raised color="red" onPress={() => {this.props.dispatch({type: "TEST"})}}>
                    GO TO CHAT SCREEN
                </Button>
            </View>
        );
    }
}


const mapStateToProps = state => ({
    nav: state.nav,
  });
  
  export default connect(mapStateToProps)(SplashScreen);
