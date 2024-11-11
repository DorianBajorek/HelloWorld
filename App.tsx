import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Funkcja asynchroniczna do pobierania danych
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {error && <Text>Error: {error}</Text>}
      {data ? (
        <View>
          <Text>Title: {data.title}</Text>
          <Text>Body: {data.body}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});