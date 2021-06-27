import React from 'react';
import {View, Button} from 'react-native';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo deu errado.</h1>;
    }

    return this.props.children; 
  }
}

class Children extends React.Component {
  state = {hasError: false};

  handleClick = () => {
    this.setState({hasError: true});
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Boom');
    }

    return (
      <Button
        title="Botao"
        onPress={() => {
          this.handleClick();
        }}
      />
    );
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <View>
        <Children />
      </View>
    </ErrorBoundary>
  );
};

export default App;
