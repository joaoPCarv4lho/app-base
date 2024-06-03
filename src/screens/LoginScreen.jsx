import { useState } from "react";
import { View } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
    const [text, setText] = useState("admin@gmail.com");
    const [senha, setSenha] = useState("123");

    const onChangeText = text => setText(text);

    const handleLogin = () => {
        if(text == "admin@gmail.com" && senha == "123"){
            navigation.navigate('Home', {name: 'Home'});
        }
    }

    const hasErrors = () => {
        return !text.includes('@');
    };

    const hasErrorsCampo = () => {
        if(text === "" && senha === ""){
            return;
        }
    };

    const onChangeSenha = senha => setSenha(senha);

    const hasErrorsSenha = () => {
        return senha == !setSenha
    }


    return (
        <View style={styles.container}>
            <View style={styles.container_inner}>
            <Text style={styles.alinhamento} variant="displaySmall">LOGIN</Text>
            <Text>{"\n"}</Text>
            <TextInput
                mode="outlined"
                label={"Email"}
                placeholder={"Digite seu e-mail"}
                value={text}
                onChangeText={onChangeText}
            />
            <HelperText type="error" visible={hasErrorsCampo()}>
                PorFavor preencha o campo
            </HelperText>
            <HelperText type="error" visible={hasErrors()}>
                Endereço de Email inválido!!
            </HelperText>
            <TextInput
                mode="outlined"
                label={"Senha"}
                placeholder={"Digite sua Senha"}
                value={senha}
                onChangeText={onChangeSenha}
                secureTextEntry // Para esconder a Senha
            />
            <HelperText type="error" visible={hasErrorsCampo()}>
                PorFavor preencha o campo
            </HelperText>
            <HelperText type="error" visible={hasErrorsSenha()}>
                Por favor colocar uma senha!!
            </HelperText>
            <Text>{"\n"}</Text>
            <Button mode={"contained"} onPress={handleLogin}>Login</Button>
            <Text>{"\n"}</Text>
            <Button
                onPress={() =>
                    navigation.navigate('RegisterScreen', { name: 'RegisterScreen' })}
                mode={"text"}>Fazer Cadastro</Button>
            </View>    
        </View>
    )
}