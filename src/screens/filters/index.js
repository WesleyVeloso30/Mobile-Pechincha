import { SafeAreaView, View, Text, ScrollView, TextInput } from "react-native";
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
    const [ selectedItems, setSelectedItems ] = useState(null);
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
                id: 0,
                name: 'R Carvalho',
            },
            {
                id: 1,
                name: 'Assaí',
            },
            {
                id: 2,
                name: 'Atacadão',
            },
            {
              id: 0,
              name: 'R Carvalho',
          },
          {
              id: 1,
              name: 'Assaí',
          },
          {
              id: 2,
              name: 'Atacadão',
          },
          {
            id: 0,
            name: 'R Carvalho',
        },
        {
            id: 1,
            name: 'Assaí',
        },
        {
            id: 2,
            name: 'Atacadão',
        },
        {
          id: 0,
          name: 'R Carvalho',
      },
      {
          id: 1,
          name: 'Assaí',
      },
      {
          id: 2,
          name: 'Atacadão',
      },
      {
        id: 0,
        name: 'R Carvalho',
    },
    {
        id: 1,
        name: 'Assaí',
    },
    {
        id: 2,
        name: 'Atacadão',
    },
          ];
          companyNames.unshift({id:0, name: 'Remover selecionado'})
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

    return (
        <SafeAreaView>
          {companysName && productTitles ? (
            <View>
          <View style={{flexDirection: "row", justifyContent: "space-around", marginTop: 35}}>
            <SearchableDropdown
            multi={false}
            onRemoveItem={(item, index) => {
              const items = selectedItems.filter((sItem) => sItem.id !== item.id);
              setSelectedItems(items);
            }}
            onTextChange={(text) => console.log(text)}
            //On text change listner on the searchable input
            onItemSelect={(item) => {
              setSelectedItems(item);

              if (item.name === 'Remover selecionado') setSelectedItems(null);

              // console.log(selectedItems);
            }}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5, width: '48%' }}
          // selectedItems={console.log(selectedItems)}
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
            maxHeight: '70%',
          }}
          chip={false}
          items={companysName}
          //mapping of item array
          // defaultIndex={2}
          //default selected item index
          placeholderTextColor= '#000000'
          placeholder= {selectedItems && selectedItems.name ? selectedItems.name : 'Selecione o produto'}
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          // underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        <SearchableDropdown
            multi={false}
            onRemoveItem={(item, index) => {
              const items = selectedItems.filter((sItem) => sItem.id !== item.id);
              setSelectedItems(items);
            }}
            onTextChange={(text) => console.log(text)}
            //On text change listner on the searchable input
            onItemSelect={(item) => {
              setSelectedItems(item);

              if (item.name === 'Remover selecionado') setSelectedItems(null);

              // console.log(selectedItems);
            }}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5, width: '48%' }}
          selectedItems={console.log(selectedItems)}
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
            maxHeight: '70%',
          }}
          chip={false}
          items={companysName}
          //mapping of item array
          // defaultIndex={2}
          //default selected item index
          placeholderTextColor= '#000000'
          placeholder= {selectedItems && selectedItems.name ? selectedItems.name : 'Escolha um mercado'}
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          // underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        </View>
        <View>
          <Text>
            Faixa de Preço:
          </Text>
          <View>
            <TextInput placeholder={false ? `De: ${'variavel'}`: `De: `}></TextInput>
            <TextInput placeholder={false ? `Até: ${'variavel'}`: `Até: `}></TextInput>
          </View>
          <View>
          <Text>
            Período da Promoção:
          </Text>
            <TextInput placeholder={false ? `De: ${'variavel'}`: `De: `}></TextInput>
            <TextInput placeholder={false ? `Até: ${'variavel'}`: `Até: `}></TextInput>
          </View>
        </View>
        </View>
            ) : (
                <Text>sedrftghjkl,l.,mlkj</Text>
                )}
                </SafeAreaView>
                
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