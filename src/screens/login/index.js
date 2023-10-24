import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button2 from "../../components/Button";
import Input2 from "../../components/Input";
import styles from "./styles";

// const [isLogado, setIsLogado] = React.useState(false);
// name={isLogado ? 'Logado' : 'Entrar'}
// onClick={setIsLogado}

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <Image
          style={{ height: 120, width: 250 }}
          source={require("../../assets/Logo.png")}
          alt="Logo do aplicativo Pechincha"
        />
        {/* <Text style={[styles.text]}>Pechincha</Text> */}
        <Input2 label="E-mail" placeHolder="Ex: Email@gmail.com" />
        <Input2 label="Senha" placeHolder="********" />
        <Button2
          navigation={navigation}
          directPage={"Homepage"}
          name={"Entrar"}
        />
        <Text
          onPress={() => navigation.navigate("Register")}
          style={{ fontSize: 18, width: 500, textAlign: "center" }}
        >
          Não possui cadastro? Click Aqui
        </Text>
      </View>
    </View>
  );
};

export default Login;
