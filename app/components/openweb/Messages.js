import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';

class Messages extends Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello Vardaan :)',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
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

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
          name: 'Vardaan Aashish'
        }}
      />
    )
  }
}

export default Messages

/*
import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native';

class Messages extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Text> Messages </Text>
      </View>
    );
  }
}

const styles = {
  main: {
    flex: 1
  }
}

export default Messages

*/
