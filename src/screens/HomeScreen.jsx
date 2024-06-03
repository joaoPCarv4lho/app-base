import { Button, Text, View } from "react-native";
import { styles } from "../config/styles";


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.container_home}>
                <Text style={styles.alinhamento}>Bem-Vindo Ao meu App</Text>
                <Text>{"\n"}</Text>
                <Text>Essa é a Tela de HomeScreen 💗💗💗</Text>
            </View>
        </View>
    )
}