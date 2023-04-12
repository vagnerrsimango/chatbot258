import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReceivedMessage = ({ message }) => {
  return (
    <View style={styles.general}>
      <View style={styles.sub}>
        <Text>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  general: {
    flexDirection: "row",
    marginBottom: 10,
  },

  sub: {
    marginTop: 10,
    backgroundColor: "#EAEAEA",
    padding: 16,
    borderRadius: 10,
    maxWidth: "80%",
  },
});

export default ReceivedMessage;
