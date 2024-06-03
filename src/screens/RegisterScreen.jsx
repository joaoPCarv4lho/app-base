import { View } from "react-native";
import { styles } from "../config/styles";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { useState } from "react";

export default function CadastroScreen() {
    const [text, setText] = useState("admin@gmail.com");
    const [senha, setSenha] = useState("123");
    const [repetirSenha, SetRepetirSenha] = useState("123");

    const onChangeText = text => setText(text);

    const handleCadastro = () => {
        if (text == "admin@gmail.com" && senha == "123" && repetirSenha == "123") {
            return (
                alert("Cadastro Realizado com Sucesso")
            )
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

    const onChangeRepetirSenha = repetirSenha => SetRepetirSenha(repetirSenha);

    const hasErrorsRepetirSenha = () => {
        return !(senha == repetirSenha);
    }

    // realizar de lógica de login

    return (
        <View style={styles.container}>
            <View style={styles.container_inner}>
                <Text style={styles.alinhamento} variant="displaySmall">Cadastro</Text>
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

                <TextInput
                    mode="outlined"
                    label={"Repetir Senha"}
                    placeholder={"Repita sua Senha"}
                    value={repetirSenha}
                    onChangeText={onChangeRepetirSenha}
                    secureTextEntry // Para esconder a Senha
                />
                <HelperText type="error" visible={hasErrorsCampo()}>
                    PorFavor preencha o campo
                </HelperText>
                <HelperText type="error" visible={hasErrorsRepetirSenha()}>
                    RepetirSenha não semelhante a senha!!
                </HelperText>
                <Text>{"\n"}</Text>
                <Button mode={"contained"} onPress={handleCadastro}>Cadastrar</Button>
                <Text>{"\n"}</Text>
                <Button
                onPress={() =>
                    navigation.navigate('LoginScreen', { name: 'LoginScreen' })}
                mode={"text"}>Cadastrado 👉 Logar</Button>
                <Text>{"\n"}</Text>
                <Text>Obs.: Você é um Admin use a conta de Admin com uma senha fácil de 3 digitos.</Text>
            </View>
        </View>
    )
}