import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const Chat = ({ messages }) => {
  const renderMessage = ({ item }) => {
    if (item.type === "received") {
      return <ReceivedMessage message={item.message} />;
    } else {
      return <SentMessage message={item.message} />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 8,
    width: "100%",
  },
});

export default Chat;
