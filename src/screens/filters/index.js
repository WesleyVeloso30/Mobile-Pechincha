import { SafeAreaView, View, Text, ScrollView, TextInput } from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import SearchableDropdown from "../../components/SelectDropdown";
// import company from "../../services/company";
import Skeleton from "../../components/Load-Skeleton";
import products from "../../services/product";
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';

const productService = new products();
// const companyService = new company();
const skeleton = new Skeleton();

const Filters = () => {
  const [companysName, setCompanysName] = useState(null);
  const [productTitles, setProductTitles] = useState(null);
  const [minimumValue, setMinimumValue] = useState(0);
  const [inputMinimumValue, setInputMinimumValue] = useState('0');
  const [maximumValue, setMaximumValue] = useState(0);
  const [inputMaximumValue, setInputMaximumValue] = useState('0');
  
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
          name: "R Carvalho",
        },
        {
          id: 1,
          name: "Assaí",
        },
        {
          id: 2,
          name: "Atacadão",
        },
        {
          id: 0,
          name: "R Carvalho",
        },
        {
          id: 1,
          name: "Assaí",
        },
        {
          id: 2,
          name: "Atacadão",
        },
        {
          id: 0,
          name: "R Carvalho",
        },
        {
          id: 1,
          name: "Assaí",
        },
        {
          id: 2,
          name: "Atacadão",
        },
        {
          id: 0,
          name: "R Carvalho",
        },
        {
          id: 1,
          name: "Assaí",
        },
        {
          id: 2,
          name: "Atacadão",
        },
        {
          id: 0,
          name: "R Carvalho",
        },
        {
          id: 1,
          name: "Assaí",
        },
        {
          id: 2,
          name: "Atacadão",
        },
      ];
      companyNames.unshift({ id: 0, name: "Remover selecionado" });
      setCompanysName(companyNames);
      titles = [
        {
          id: 1,
          titles: "Kg de Linguiça",
        },
        {
          id: 2,
          titles: "Carne na Rola",
        },
        {
          id: 3,
          titles: "Sabonete Ypê",
        },
      ];
      titles.unshift({ id: 0, titles: "Remover selecionado" });
      setProductTitles(titles);
    }
    return;
  };

  return (
    <SafeAreaView>
      {companysName && productTitles ? (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 35,
            }}
          >
            <View style={{ padding: 5, width: "48%" }}>
              <Text>Mercado:</Text>
              <SearchableDropdown
                listItems={companysName}
                placeholder="Escolha um mercado"
              />
            </View>
            <View style={{ width: "48%", padding: 5 }}>
              <Text>Produto:</Text>
              <SearchableDropdown
                listItems={productTitles}
                placeholder="Selecione um produto"
              />
            </View>
          </View>
          <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{width: '48%', padding: 5}}>
              <Text>Valor mínimo do produto:</Text>
              <TextInputMask
                type={'money'}
                value={inputMinimumValue}
                maxLength={11}
                style={{
                  borderWidth: 1,
                  fontSize: 18,
                  paddingLeft: 6,
                  borderColor: '#ccc',
                  width: '100%',
                  height: 50,
                }}
                onChangeText={value => {
                  setInputMinimumValue(value);
                  value = value.replace('R$', '');
                  value = value.replace('.', '');
                  value = value.replace(',', '.');
                  setMinimumValue(value);
                }}
              />
            </View>
            <View style={{width: '48%', padding: 5}}>
              <Text>Valor máximo do produto:</Text>
              <TextInputMask
                type={'money'}
                value={inputMaximumValue}
                maxLength={11}
                style={{
                  borderWidth: 1,
                  fontSize: 18,
                  paddingLeft: 6,
                  borderColor: '#ccc',
                  width: '100%',
                  height: 50,
                }}
                onChangeText={value => {
                  setInputMaximumValue(value);
                  value = value.replace('R$', '');
                  value = value.replace('.', '');
                  value = value.replace(',', '.');
                  setMaximumValue(value);
                }}
              />
            </View>
          </View>
          <View>
            <DateTimePicker 
              value={new Date()}
            />
            <Text>Período da Promoção:</Text>
            <TextInput
              placeholder={false ? `De: ${"variavel"}` : `De: `}
            ></TextInput>
            <TextInput
              placeholder={false ? `Até: ${"variavel"}` : `Até: `}
            ></TextInput>
          </View>
        </View>
      ) : (
        <Text>sedrftghjkl,l.,mlkj</Text>
      )}
    </SafeAreaView>
  );
};

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
{
  /* <SelectDropdown
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
            /> */
}
// </ScrollView>
// );
// }

// export default Filters;
