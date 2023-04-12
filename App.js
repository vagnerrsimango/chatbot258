import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Textbox from "./src/components/TextBox";
import SplashScreen from "react-native-splash-screen";
import Chat from "./src/components/Chat";
import { getRandomInt } from "./src/utils/Calculator";
import { RootSiblingParent } from "react-native-root-siblings";
import Toast from "react-native-root-toast";

export default function App() {
  const [newText, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, message: "Olá! Precisa de ajuda?", type: "received" },
  ]);

  const handleInputChange = (text) => {
    setText(text);
  };

  const handleSend = async () => {
    setLoading(true);
    if (newText.length === 0) {
      setLoading(false);
      return Toast.show("Digite um texto válido", {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
    }
    setMessages((prev) => [
      ...prev,
      {
        id: getRandomInt(1000),
        message: newText,
        type: "sent",
      },
    ]);

    const response = await fetch("https://vaegptbackend.vercel.app/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        text: newText,
      }),
    });

    const data = await response.json();

    if (data.success === true) {
      setMessages((prev) => [
        ...prev,
        {
          id: getRandomInt(1000),
          message: data.message,
          type: "received",
        },
      ]);
      setNewText(""); // Limpa o TextBox
      Keyboard.dismiss(); // Faz o teclado cair
    }

    setLoading(false);
  };

  return (
    <RootSiblingParent>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          {/* Green Button */}
          <TouchableOpacity style={styles.rgButton}>
            <View style={styles.btnContent}>
              <Icon name="refresh" size={20} style={styles.icon} />
              <Text style={styles.btnText}>
                {loading
                  ? "Aguarde, respondendo..."
                  : "Resposta enviada com sucesso!"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.midContainer}>
          <Chat messages={messages} />
        </View>

        <KeyboardAvoidingView
          style={styles.bottomContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={30}
        >
          <Textbox onChangeText={handleInputChange} onSend={handleSend} />
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </View>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#070858",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  topContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#38376F",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  midContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80%",
    marginBottom: 8,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 0,
    width: "100%",
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
  txt: {
    color: "#fff",
  },
});
