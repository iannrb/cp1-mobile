import { StyleSheet, Text, View } from "react-native"

interface RenderProps {
    name: string
    value: string
    increase: string
}

export function RenderData({name, value, increase}: RenderProps) {
    const newValue = parseFloat(value) * parseFloat(1 + increase)

    return (
        <View style={styles.container}>
            <Text>Nome: {name}</Text>
            <Text>Valor: {value}</Text>
            <Text>Taxa: {increase}</Text>
            <Text>Novo valor: {newValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      gap: "0.5rem",
      backgroundColor: "#DCE9F3FF",
      alignItems: "center",
      justifyContent: "center",
    },
  });