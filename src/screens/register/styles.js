
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#fffffe',
        flex: 1,
        inset: 0,
    },
    image: {
        flex: 1,
    },
    containerRegister: {
        // inset: 0,
        flex: 1,
        alignItems: 'center',
        // gap: 2,
        justifyContent: 'space-between',
    },
    input: {
        backgroundColor: 'white',
        margin: 30,
        borderRadius: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        // marginTop: 100,
        width: 300,
        borderRadius: 10,
        fontSize: 42,
        lineHeight: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#0078e0' 
    }
});

export default styles;