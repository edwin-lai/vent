/* eslint semi: [2, "always"] */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';
import Button from 'react-native-button';

class vent extends Component {
  constructor (props) {
    super(props);
    this.state = {text: ''};
  }

  _handlePress () {
    return undefined;
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Vent
        </Text>
        <TextInput
          style={styles.textBox}
          multiline={true}
          placeholder='Vent here'
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={styles.instructions}>
          Preview
        </Text>
        <Text style={styles.instructions}>{this.state.text}</Text>
        <Button
          style={styles.button}
          styleDisabled={styles.disabled}
          onPress={() => this._handlePress()}>
          Submit
        </Button>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  instructions: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 5,
  },
  textBox: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 100,
    margin: 10,
    backgroundColor: 'white',
    padding: 6,
    borderRadius: 4
  },
  button: {
    fontSize: 20,
    color: 'cyan',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 6,
    width: 128
  },
  disabled: {
    color: 'red'
  }
});

AppRegistry.registerComponent('vent', () => vent);
