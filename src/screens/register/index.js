import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Button2 from "../../components/Button";
import Input2 from "../../components/Input";
import styles from "./styles";

const Register = ({ navigation }) => {
  const [isCadastred, setIsCadastred] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerRegister}>
        <Image
          style={{ height: 120, width: 250 }}
          source={require("../../assets/Logo.png")}
          alt="Logo do aplicativo Pechincha"
        />
        <Input2 label="Name" placeHolder="Ex: Wesley Carrasco" />
        <Input2 label="E-mail" placeHolder="Ex: Email@gmail.com" />
        <Input2 label="Senha" placeHolder="********" />
        <Input2 label="Confirme Senha" placeHolder="********" />

        <Button2
          // name={isCadastred ? 'Cadastrado' : 'Cadastrar'}
          // onClick={setIsCadastred}
          navigation={navigation}
          directPage={"Login"}
          name={"Cadastrar"}
        />
      </View>
    </View>
  );
};

export default Register;
