import { View, Text } from "react-native";
import styles from "./styles";

const Homepage = () => {
    return (
        <View>
            <Text>Entrou </Text>
        </View>
    )
}

export default Homepage;

// import { View, Text, ScrollView, TextInput } from "react-native";
// import styles from "./styles";
// import company from "../../services/company";
// import products from "../../services/product";
// import SelectDropdown from 'react-native-select-dropdown'
// import { useEffect, useState } from "react";

// const productService = new products();
// const companyService = new companys();

// const Filters = () => {
    // const { companysName, setCompanysName } = useState(null);
    // const { productTitles, setProductTitles } = useState(null);
    // useEffect(() => {
    //     getCompany();
    // }, []);
    
    // const getCompany = async () => {
    //     let companyNames;
    //     setCompanysName(null);
    //     if (isMocked) {
    //       companyNames = [
    //         {
    //             name: 'R Carvalho',
    //         },
    //         {
    //             name: 'Assaí',
    //         },
    //         {
    //             name: 'Atacadão',
    //         },
    //       ];
    //       setCompanysName(companyNames);
    //       productTitles = [
    //         {
    //             title: 'Kg de Linguiça',
    //         },
    //         {
    //             titles: 'Carne na Rola',
    //         },
    //         {
    //             titles: 'Sabonete Ypê',
    //         },
    //       ];
    //       setProductTitles(productTitles);
    //     } else {
    //       setRefreshing(true);
    //       companyNames = await companyService.getProducts();
    //       companyNames = await productService.getProducts();
    
    //       setCompanysName(companyNames);
    //     }
    //     setRefreshing(false);
    //     return;
    // }

    // return (
        // <ScrollView>
            {/* <SelectDropdown
                data={companysName}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            /> */}
        // </ScrollView>
    // );
// }

// export default Filters;