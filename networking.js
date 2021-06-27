import React, {useState, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      {isError && <Text>Something went wrong ...</Text>}
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <ScrollView>
          <Text key={data.id}> Title: {data.title}</Text>
        </ScrollView>
      )}
    </>
  );
};

export default App;
