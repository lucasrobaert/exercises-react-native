import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

class FlatListBasics extends React.Component {
  constructor() {}



  render() {
    const requestResult = [];
    return (
      <View style={styles.container}>
        <FlatList
          data={requestResult}
          renderItem={({item}) => <Text style={styles.item}>{item.id}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'gray',
  },
});

export {FlatListBasics};
