import { View, Text } from "react-native";
import styles from "./styles";

const Homepage = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('Login')} >Entrou </Text>
        </View>
    );
}

export default Homepage;