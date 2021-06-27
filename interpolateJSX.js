import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Reescreva a componente abaixo alterando XXXX pelo nome e X pelo número de letras no nome.
const Texto = ({firstName, lastName}) => (
  <View style={style.row}>
    <Text>O nome completo é {firstName + " " + lastName} e tem {firstName.length + lastName.length} letras</Text>
  </View>
);

const interpolateJSX = () => {
  return (
    <View>
      <Texto firstName="Jose" lastName="Urbano" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default interpolateJSX;
