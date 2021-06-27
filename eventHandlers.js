import React, {Component} from 'react';
import {Button, Text} from 'react-native';

export default class EventHandlers extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};

  }


  handleClick() {
      this.setState(state => ({
      counter: state.counter + 1
    }));
    }

  render() {



    return (
      <>
        <Text>{this.state.counter}</Text>
        <Button title="Press me" onPress={this.handleClick.bind(this)} />
      </>
    );
  }
}
