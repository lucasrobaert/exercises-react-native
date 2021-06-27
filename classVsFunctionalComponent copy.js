import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export class Exemplo extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: 0, contador2: 100};
  }

  handleButton() {
    this.setState({
      contador: this.state.contador + 1,
      contador2: this.state.contador2 + 1,
    });
  }

  render() {
    return (
      <View>
        <Text>
          You clicked {this.state.contador} times e o contador2 esta em
          {this.state.contador2}
        </Text>
        <Button title="Click me" onPress={() => this.handleButton()} />
      </View>
    );
  }
}

export const FunctionalComponent = () => {
  /**
   *
   */
};
