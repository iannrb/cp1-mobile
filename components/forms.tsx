import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { IncreaseFormSchema, increaseFormSchema } from "../schemas/form";
import { RenderData } from "./render-data";

export function FormsWrapper() {
    const [name, setName] = useState("")
    const [value, setValue] = useState("0")
    const [increase, setIncrease] = useState("0")
    const [render, setRender] = useState(false)

    const form = useForm<IncreaseFormSchema>({
        resolver: zodResolver(increaseFormSchema),
        defaultValues: {
            name: "",
            value: 0,
            increase: 0
        }
    })

    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    placeholder="Digite o nome do produto"
                    onChangeText={name => setName(name)}
                />
            </View>
            <View>
                <Text style={styles.label}>Valor</Text>
                <TextInput
                    style={styles.input}
                    value={value}
                    keyboardType="numeric"
                    placeholder="Digite o valor do produto"
                    onChangeText={value => setValue(value)}
                />
            </View>
            <View>
                <Text style={styles.label}>Taxa de aumento</Text>
                <TextInput
                    style={styles.input}
                    value={increase}
                    keyboardType="numeric"
                    placeholder="Digite a % para aumentar"
                    onChangeText={increase => setIncrease(increase)}
                />
            </View>
            <Button
                color={"#DCE9F3FF"}
                title="Enviar"
                onPress={() => setRender(true)}
            />

            {render && <RenderData name={name} value={value} increase={increase} />}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
    },
    label: {
        color: "#160e00",
        fontWeight: 600
    },
    input: {
        borderRadius: "8px",
        backgroundColor: "#DCE9F3FF",
        color: "#160e00",
        padding: 10,
        marginTop: 5
    },

});