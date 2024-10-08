import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import useApiData from './hooks/getData'

export default function App() {
  const { data, loading, error, getApiData } = useApiData()

  const handlePress = () => {
    getApiData()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lausegeneraattori pöhisijälle</Text>
      {loading && <Text style={styles.text}>Ladataan...</Text>}
      {error && <Text style={styles.text}>{error}</Text>}
      {!loading && data && <Text style={styles.text}>{data.phrase}</Text>}
      <Button title="Luo uusi lause" onPress={handlePress}></Button>
      <StatusBar style="auto" />
    </View>
  )
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
    fontWeight: 'bold',
  },
  text: {
    marginBottom: 32,
    paddingHorizontal: 48,
    fontSize: 16,
    textAlign: 'center',
  },
})
