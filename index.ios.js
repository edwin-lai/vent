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

class vent extends Component {
  constructor (props) {
    super(props);
    this.state = {text: ''};
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
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textBox: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 100,
    margin: 10
  }
});

AppRegistry.registerComponent('vent', () => vent);
