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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "#075985",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#fff",
  },
  textInput: {
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 6,
    borderColor: "#ccc",
    width: "100%",
    height: 50,
    color: "#5c6b60",
    backgroundColor: "#FAF7F6",
    borderRadius: 5,
  },
  containerInput: {
    width: "48%",
    padding: 5,
  },
  inputPairContainer: {
    flexDirection: "row",
    paddingBottom: 50,
    justifyContent: "space-around",
  },
  containerTwoFilterButtons: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    // backgroundColor: 'red',
    flexDirection: "row",
    justifyContent: "space-around",
  },
  filterButtonContainer: {
    backgroundColor: "#ffd803",
    width: 140,
    borderRadius: 20,
    height: 50,
  },
  filterButtonText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    paddingTop: 7,
  },
  noApiData: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
