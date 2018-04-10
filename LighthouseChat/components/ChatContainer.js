import React from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9I14GPn-qRzj7WmpAdh9MpM-7ACYFjmw",
  authDomain: "lighthouse-chat.firebaseapp.com",
  databaseURL: "https://lighthouse-chat.firebaseio.com",
  projectId: "lighthouse-chat",
  storageBucket: "lighthouse-chat.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export class ChatContainer extends React.Component {
  constructor(props) {
    super(props)

    state = {
      messages: [],
    }  

    this.addMessage = this.addMessage.bind(this)
    this.startMessagesListening()
  }

  componentWillMount() {
    this.setState({
      messages: [
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))

    this.addMessage(messages.slice(-1).pop())
  }
  
  addMessage(message) {
    const props = this.props
    firebase.database().ref('messages/').push({
      createdAt: new Date().getTime(),
      ...message,
      user: {
        avatar: `https://api.adorable.io/avatars/28/${props.name}.jpg`,
        ...message.user,
      },
    });
  }

  startMessagesListening() {
    firebase.database().ref('messages/').on('value', (snapshot) => {
      const messagesObj = snapshot.val();
      const messages = Object.keys(messagesObj).map(msgKey => messagesObj[msgKey])
      this.setState({
        messages: messages.reverse()
      })
    });
  }

  render() {
    const props = this.props
    return (
      <View style={styles.container}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: props.name,
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
