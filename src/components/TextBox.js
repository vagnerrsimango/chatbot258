import React from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Textbox = ({ onChangeText, onSend }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textboxContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          placeholderTextColor="#fff"
          onChangeText={onChangeText}
        />
        <View>
          <TouchableOpacity style={styles.sendButton} onPress={onSend}>
            <Icon name="send" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  rgButton: {
    backgroundColor: "#2BC3B1",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  textboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginBottom: 0,
  },
  input: {
    backgroundColor: "transparent",
    height: 50,
    width: "80%",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    paddingHorizontal: 10,
    color: "#fff",
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#D06279",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
  },
});

export default Textbox;
