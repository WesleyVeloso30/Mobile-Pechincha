import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    filter: {
        backgroundColor: '#ffd803',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 5,
    },
    headerContainer: {
        paddingTop: 35,
        flexDirection: "row",
        alignContent: 'center',
        justifyContent: 'space-around',
        
    },
    namePechincha: {
        marginVertical: 5,
        color: '#ffd803',
        fontSize: 35,
    },
    noApiData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default styles;
