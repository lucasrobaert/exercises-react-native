import React from 'react';
import {Text, ActivityIndicator} from 'react-native';

export default class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), loading: true};
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 500);

    this.setState({loading: false});
  }

  componentWillUnmount() {
    clearInterval();
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    if (this.state.loading) return <ActivityIndicator />;
    else {
      return (
        <>
          <Text>Hello, world!</Text>
          <Text>It is {this.state.date.toLocaleTimeString()}.</Text>
        </>
      );
    }
  }
}
