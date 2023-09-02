import { View, Text, ScrollView, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

const Filters = () => {
    const { companysName, setCompanysName } = useState(null);
    return (
        <ScrollView>
            <TextInput></TextInput>
        </ScrollView>
    );
}

export default Filters;