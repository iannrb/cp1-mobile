import { Image, StyleSheet, View } from "react-native";
import { FormsWrapper } from "./components/forms";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/fiap-logo.jpg")}
      />
      <FormsWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
})
