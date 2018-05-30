import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Movie?"
            onChangeText={() => null}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    
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
});
