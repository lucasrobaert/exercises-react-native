import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Texto = (props) => (
  <View style={style.row}>
    <Text>{props.firstName}</Text>
    <Text>{props.lastName}</Text>
  </View>
);

export class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((state, props) => ({
        count: state.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <View>
        <Texto firstName="Jose" lastName={this.state.count} />
      </View>
    );
  }
}

export const FunctionalComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button title="Click me" onPress={() => setCount(count + 1)} />
    </View>
  );
};

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
   const [count, setCount] = useState(0);

   useEffect(() => {
     setInterval(() => {
       setCount(count + 1);
     }, 1000);
   });

   return (
     <View>
       <Texto firstName="Jose" lastName={count} />
     </View>
   );
 };

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});
