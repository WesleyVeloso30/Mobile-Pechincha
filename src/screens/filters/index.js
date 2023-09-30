import { View, Text } from "react-native";
import { useState, useEffect } from 'react';
import styles from "./styles";
import SearchableDropdown from 'react-native-searchable-dropdown';
// import company from "../../services/company";
import Skeleton from "../../components/Load-Skeleton";
import products from "../../services/product";

const productService = new products();
// const companyService = new company();
const skeleton = new Skeleton();

const Filters = () => {
    const [ companysName, setCompanysName ] = useState(null);
    const [ productTitles, setProductTitles ] = useState(null);
    useEffect(() => {
        getCompany();
    }, []);
    
    const getCompany = () => {
        let companyNames;
        let titles;
        setCompanysName(null);
        if (true) {
          companyNames = [
            {
                id: 1,
                name: 'R Carvalho',
            },
            {
                id: 2,
                name: 'Assaí',
            },
            {
                id: 3,
                name: 'Atacadão',
            },
          ];
          setCompanysName(companyNames);
          titles = [
            {
                id: 1,
                titles: 'Kg de Linguiça',
            },
            {
                id: 2,
                titles: 'Carne na Rola',
            },
            {
                id: 3,
                titles: 'Sabonete Ypê',
            },
          ];
        }
          setProductTitles(titles);
        return;
    }
    console.log(companysName)
    console.log(productTitles)
    return (
        
        <View>
        {companysName && productTitles ? (
            <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={(item) => alert(JSON.stringify(item))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '50%',
          }}
          items={companysName}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="placeholder"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
            ) : (
                <Text>sedrftghjkl,l.,mlkj</Text>
                )}
                </View>
    )
}

export default Filters;

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