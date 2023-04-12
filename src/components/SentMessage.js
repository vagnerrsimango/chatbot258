import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SentMessage = ({ message }) => {
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
    flexDirection: "row-reverse",
  },

  sub: {
    marginTop: 10,
    backgroundColor: "#D06279",
    padding: 16,
    borderRadius: 10,
    maxWidth: "80%",
  },
});

export default SentMessage;
