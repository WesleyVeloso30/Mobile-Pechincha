
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
        // height: '95%',
    },
    search: {
        width: '95%',
        // height: 60,
        borderRadius: 10,
        marginTop: 30,
    },
    searchButtonContainerMain: {
        position: "absolute",
        bottom: 30,
        right: 20
    },
    searchButtonContainer: {
        backgroundColor: "#ffd803",
        width: 140,
        borderRadius: 20,
        height: 50,
    },
    searchButtonText: {
        fontSize: 30,
        color: "#fff",
        textAlign: "center",
        paddingTop: 7,
    },
});

export default styles;