import { useReducer } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {


  const [displayState, displayDispatch] = useReducer(displayReducer, {value: 0})

  const displayReducer = (state, action) => {
    switch(action.type) {
      case 'ADD':
        return {
          value: state + action.newValue
        }
        break
      case 'SUB':
        return {
          value: state - action.newValue
        }
        break
      case 'MUL':
        return {
          value: state - action.newValue
        }
        break
      case 'DIV':
        return {
          value: state - action.newValue
        }
        break
      case 'CAL':
        return {
          value: state - action.newValue
        }
        break
      case 'CLR':
        return {
          value: state - action.newValue
        }
        break
      case 'DEL':
        return {
          value: state - action.newValue
        }
        break
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kalkulatorku</Text>  
      <TextInput style={styles.input} type="number" value={display}/>
      <TextInput style={styles.operatorInput} type="number"/>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button}>CE</Pressable>
          <Pressable style={styles.button}>+/-</Pressable>
          <Pressable style={styles.button}>Erase</Pressable>
          <Pressable style={styles.button}>÷</Pressable>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={() => update("7")}>7</Pressable>
          <Pressable style={styles.button} onPress={() => update("8")}>8</Pressable>
          <Pressable style={styles.button} onPress={() => update("9")}>9</Pressable>
          <Pressable style={styles.button} onPress={() => update("X")}>X</Pressable>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={() => update("4")}>4</Pressable>
          <Pressable style={styles.button} onPress={() => update("5")}>5</Pressable>
          <Pressable style={styles.button} onPress={() => update("6")}>6</Pressable>
          <Pressable style={styles.button} onPress={() => update("-")}>-</Pressable>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.button} onPress={() => update("1")}>1</Pressable>
          <Pressable style={styles.button} onPress={() => update("2")}>2</Pressable>
          <Pressable style={styles.button} onPress={() => update("3")}>3</Pressable>
          <Pressable style={styles.button} onPress={() => update("+")}>+</Pressable>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.buttonSpan} onPress={() => update("0")}>0</Pressable>
          <Pressable style={styles.button} onPress={() => update(".")}>.</Pressable>
          <Pressable style={styles.button} onPress={() => update("=")}>=</Pressable>
        </View>
      </View>

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
    marginTop: 30,
    fontSize: 36,
    textAlign: 'right',
    fontWeight: 'bold',
  },

  operatorInput: {
    width: '100%',
    color: 'grey',
    marginTop: 10,
    fontSize: 24,
    textAlign: 'right'
  },

  buttonContainer: {
    flex: 4,
    maxWidth: '400px',
    rowGap: 10,
    marginTop: 40

  },

  buttonRow: {
    flexDirection: 'row',
    columnGap: 6
  },

  button: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    fontSize: 16,
    backgroundColor: 'grey',
    borderRadius: 10
  },
  
  buttonSpan: {
    width: 206,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    fontSize: 16,
    backgroundColor: 'grey',
    borderRadius: 10
  },
});
