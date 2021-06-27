import React, {useState} from 'react';
import {Text} from 'react-native';

const SideEffects2 = () => {
  const [name, setName] = useState('');

  return (
    <>
      <Text>Texto: {name}</Text>
    </>
  );
};

export default SideEffects2;
