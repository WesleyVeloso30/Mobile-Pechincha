import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dateComponent: {
        width: 350,
    },
    datePicker: {
        height: 20,
        marginTop: -10,
    },
    pickerButton: {
        paddingHorizontal: 20,
    },
    iosPickerbutton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: '#075985',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#fff',
    },
    textInput: {
        borderWidth: 1,
        fontSize: 18,
        paddingLeft: 6,
        borderColor: '#ccc',
        width: '100%',
        height: 50,
        color: '#000000',
        backgroundColor: "#FAF7F6",
    },
    containerInput: {
        width: '48%',
        padding: 5,
    },
    inputPairContainer: {
        flexDirection: 'row',
        paddingBottom: 50,
        justifyContent: 'space-around',
    },
    filterButtonContainer: {
        backgroundColor: '#ffd803',
        position: "absolute",
        right: 20,
        bottom: 30,
        width: 150,
        borderRadius: 20,
        height: 70,
    },
    filterButtonText: {
        fontSize: 40,
        color: '#fff',
        textAlign: "center",
        paddingTop: 10
    }
});

export default styles;