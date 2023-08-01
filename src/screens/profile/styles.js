
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25
    },
    subContainer: {
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 50,
        width: 300,
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5
    }, 
    input: {
            width: 250,
            fontSize: 20,
            borderWidth: 1,
            borderColor: 'black',
            margin: 10,
            padding: 5
    },
    pokeName: {
        fontSize: 20,
        fontWeight: 900
    },
    tempMessage: {
        position: 'absolute',
        top: 25,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        backgroundColor: 'rgb(149, 187, 255)',
        padding: 10
    }
});

export default styles;