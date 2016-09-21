import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';
import TimeAgo from 'react-native-timeago';

export default class Vents extends Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    vents: React.PropTypes.array
  }

  render () {
    return (
      <ScrollView style={styles.box}>
        {this.props.vents.map(function(obj){
          return (
            <View style={styles.row} key={obj.postTime}>
              <Text style={styles.rowText}>{obj.content}</Text>
              <TimeAgo style={styles.timestamp} time={obj.postTime} />
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    borderColor: '#ddd',
    borderTopWidth: 1,
  },
  row: {
    borderBottomWidth:1,
    borderColor: '#ddd',
    justifyContent: 'space-between',
    padding: 10
  },
  rowText: {
    color: 'gray',
  },
  timestamp: {
    color: 'gray',
    textAlign: 'right'
  },
});
