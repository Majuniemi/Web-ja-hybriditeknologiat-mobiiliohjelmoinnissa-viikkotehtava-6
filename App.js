import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { getApiData } from './hooks/getData'

const url = 'https://corporatebs-generator.sameerkumar.website'

export default function App() {
  const [sentence, setSentence] = useState('Luo lause painamalla nappia')

  const handleClick = () => {
    getApiData(url)
      .then(data => {
        setSentence(data.phrase)
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Satunnaislauseiden generaattori</Text>
      <Text style={styles.text}>{sentence}</Text>
      <Button title='Luo lause' onPress={handleClick}></Button>
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
  },
  header: {
    marginBottom: 32,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    marginBottom: 32,
    paddingHorizontal: 40,
    fontSize: 16,
    textAlign: 'center',
  }
});
