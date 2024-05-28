import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kalkulatorku</Text>  
      <TextInput style={styles.input} type="number"/>
      <TextInput style={styles.operatorInput} type="number"/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  input: {
    width: '100%',
    backgroundColor: 'red',
    marginTop: 10,
    fontSize: 28,
    textAlign: 'right'
  },

  operatorInput: {
    width: '100%',
    color: 'grey',
    marginTop: 10,
    fontSize: 24,
    textAlign: 'right'
  }
});
