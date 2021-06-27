import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const FirstLastName = (props) => (
  <View style={style.row}>
    <Text>{props.firstName}</Text>
    <Text>{props.lastName}</Text>
  </View>
);

FirstLastName.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}


const ValidateWithProptype = () => {
  return (
    <View>
      <FirstLastName firstName="Jose" lastName="Duarte" />
      <FirstLastName firstName="Maria" lastName="Duarte" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default ValidateWithProptype;
