import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image
} from 'react-native';

const Welcome = (props) => {
  return (
  <View>
    <Text>Hello {props.name}!</Text>
    {
      !props.height || (
        <Text>You are {props.height} tall!</Text>
      )
    }
  </View>
  )
}

const Emoji = (props) => {
  let emotion;
  switch (props.emotion) {
    case 'Happy':
      emotion = '😄'
      break
    case 'Sad':
      emotion = '😢'
      break
    case 'Wacky':
      emotion = '😜'
      break
    default:
      emotion = '😐'
  }
  return (
    <View style={styles.emojiContainer}>
      <Text style={styles.emoji}>
        {emotion}
      </Text>
    </View>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      poster: {
        uri: "hello"
      }
    }

    this.updatePoster = this.updatePoster.bind(this)
  }

  async updatePoster(title) {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=6aaddf81`
      );
      let responseJson = await response.json();
      console.log(responseJson.Poster)
      this.setState({
        poster: {
          uri: responseJson.Poster
        }
      })
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    
    const state = this.state
    return (
      <View style={styles.container}>
        {/* <Emoji emotion={state.emotion} /> */}
        <Image source={state.poster} style={styles.poster} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Movie?"
            onChangeText={this.updatePoster}
          />
        </View>
        {/* <TouchableHighlight
          onPress={() => this.setState({
            emotion: 'Wacky'
          })}
          underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Woot woot</Text>
          </View>
        </TouchableHighlight> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'papayawhip',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: 54,
    height: 60,
    textAlign: 'center'
  },
  text: {
    color: 'green',
    fontSize: 53,
  },
  emojiContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    flex: 1,
    textAlign: 'center',
    fontSize: 60
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  } ,
  poster: {
    height: 500,
    width: 300
  }
});
