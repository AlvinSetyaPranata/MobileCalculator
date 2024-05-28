import { useReducer } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { TextInput } from "react-native-web";


function Button({children, onPress=() => {}}, ) { 

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  )
}
 
export default function App() {

  const displayReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return {
          value: state.value + action.newValue,
        };
      case "SUB":
        return {
          value: state.value - action.newValue,
        };
      case "MUL":
        return {
          value: state.value - action.newValue,
        };
      case "DIV":
        return {
          value: state.value - action.newValue,
        };
      case "CAL":
        return {
          value: state.value - action.newValue,
        };
      case "CLR":
        return {
          value: 0,
        };
      case "DEL":
        return {
          value: state.value - action.newValue,
        };

      case 'CHANGE':
        return {
          value: action.display
        };

      case 'DEC':
        return {
          value: 0
        }

      case "PUT":
        if (state == "0" || state == "") {
          return {
            display: action.newValue,
          };
        } else {
          return {
            display: state.value + action.newValue,
          };
        }
    }
  };

  const [displayState, displayDispatch] = useReducer(displayReducer, {
    display: "",
    values: []
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Kalkulatorku</Text>
      <TextInput
        style={styles.input}
        type="number"
        value={displayState.value}
        onChange={event => displayDispatch({type: 'CHANGE', display: event.value})}
      />
      <TextInput style={styles.operatorInput} type="number" />

      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <Button style={styles.button}>CE</Button>
          <Button style={styles.button}>+/-</Button>
          <Button style={styles.button}>Erase</Button>
          <Button style={styles.button}>÷</Button>
        </View>
        <View style={styles.buttonRow}>
          <Button
            style={styles.button}
            onPress={() => displayDispatch({ type: "PUT", newValue: 7 })}
          >
            7
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: 8 })}>
            8
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: 9 })}>
            9
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "MUL", newValue: null})}>
            X
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: 4 })}>
            4
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: 5 })}>
            5
          </Button>
          <Button style={styles.button} onPress={() => console.log("6")}>
            6
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "SUB", newValue: null })}>
            -
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: 1 })}>
            1
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: 2 })}>
            2
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: 3 })}>
            3
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "ADD", newValue: null })}>
            +
          </Button>
        </View>
        <View style={styles.buttonRow}>
          <Button style={styles.buttonSpan} onPress={() => displayDispatch({ type: "PUT", newValue: 0 })}>
            0
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "PUT", newValue: '.' })}>
            .
          </Button>
          <Button style={styles.button} onPress={() => displayDispatch({ type: "CAL", newValue: null })}>
            =
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    marginTop: 30,
    fontSize: 36,
    textAlign: "right",
    fontWeight: "bold",
  },

  operatorInput: {
    width: "100%",
    color: "grey",
    marginTop: 10,
    fontSize: 24,
    textAlign: "right",
  },

  buttonContainer: {
    flex: 4,
    maxWidth: "400px",
    rowGap: 10,
    marginTop: 40,
  },

  buttonRow: {
    flexDirection: "row",
    columnGap: 6,
  },

  button: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    fontSize: 16,
    backgroundColor: "grey",
    borderRadius: 10,
  },

  buttonSpan: {
    width: 206,
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    fontSize: 16,
    backgroundColor: "grey",
    borderRadius: 10,
  },
});
