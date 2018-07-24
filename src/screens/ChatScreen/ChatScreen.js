import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { connect } from 'react-redux';

class ChatScreen extends Component {
    state = {
        messages: [],
      }
      componentWillMount() {
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello developer',
              createdAt: new Date(),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ],
        })
      }
    
      onSend(messages = []) {
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }

      onBackScreen(){
        this.props.dispatch({type: 'BACK_SCREEN'});
      }
    
      render() {
        return (
          <View style={styles.container}>
              <GiftedChat
              messages={this.state.messages}
              onSend={messages => this.onSend(messages)}
              user={{
                _id: 1,
              }}
            />
            <TouchableOpacity onPress={() => this.onBackScreen()}  style={styles.backbutton}>
              <Image style={styles.backbutton} source={require('@assets/images/icons8-back-filled-100.png')}/>
            </TouchableOpacity>
          </View>
        )
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backbutton: {
    position: 'absolute',
    top: 20, 
    left: 10, 
    zIndex: 1,
    width: 30,
    height: 30
  },
  backimage: {
    width: 30,
    height: 30
  }
});

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(ChatScreen);