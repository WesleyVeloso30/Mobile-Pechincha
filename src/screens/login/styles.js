import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: '#fffffe',
        flex: 1,
      },
      image: {
        flex: 1,
      },
      containerLogin: {
        // inset: 0,
        paddingVertical: 50,
        flex: 1,
        // width: 100,
        // backgroundColor: 'orange',
        alignItems: 'center',
        // gap: 2,
        justifyContent: 'space-between'
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
        width: 300,
        borderRadius: 10,
        fontSize: 42,
        lineHeight: 150,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#272343' 
      }
});

export default styles;