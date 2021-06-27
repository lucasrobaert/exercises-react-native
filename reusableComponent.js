import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FirstLastName = ({firstName, lastName}) => {
  return (

      <View style={style.row}>
        <Text>{firstName}</Text>
        <Text>{lastName}</Text>
      </View>
  );
};

const ReusableExercise = () => {
  return (
    <View style={style.container}>
      <FirstLastName firsName="Jose" lastName="Urbano"/>
      <FirstLastName firsName="Maria" lastName="Duarte"/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  row: {flexDirection: 'row'},
});

export default ReusableExercise;
