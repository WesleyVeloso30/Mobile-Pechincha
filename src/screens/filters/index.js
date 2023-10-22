import {
  SafeAreaView, View, Text, ScrollView, TextInput, Pressable, Platform,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import styles from "./styles";
import SearchableDropdown from "../../components/SelectDropdown";
// import company from "../../services/company";
import Skeleton from "../../components/Load-Skeleton";
import products from "../../services/product";
import { TextInputMask } from 'react-native-masked-text';
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDateBr } from "../../shared/util";

const productService = new products();
// const companyService = new company();
const skeleton = new Skeleton();

const Filters = ({navigation}) => {
  const [companysName, setCompanysName] = useState(null);
  const [productTitles, setProductTitles] = useState(null);
  const [minimumValue, setMinimumValue] = useState(0);
  const [inputMinimumValue, setInputMinimumValue] = useState('0');
  const [initialDate, setInitialDate] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [showPickerStart, setShowPickerStart] = useState(false);
  const [showPickerEnd, setShowPickerEnd] = useState(false);
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

  const toogleInitialDatePicker = () => {
    setShowPickerStart(!showPickerStart);
  };

  const toogleFinalDatePicker = () => {
    setShowPickerEnd(!showPickerEnd);
  };

  const onChangeInitialDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setInitialDate(currentDate);

      if(Platform.OS === 'android') toogleInitialDatePicker();
    } else {
      toogleInitialDatePicker();
    }
  }

  const onChangeFinalDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setFinalDate(currentDate);

      if(Platform.OS === 'android') toogleFinalDatePicker();
    } else {
      toogleFinalDatePicker();
    }
  }

  const confirmIosInitialDate = () => {
    setInitialDate(initialDate);
    toogleInitialDatePicker();
  }

  const confirmIosFinalDate = () => {
    setFinalDate(finalDate);
    toogleFinalDatePicker();
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      {companysName && productTitles ? (
        <View style={{flex: 1}}>
          <View
            style={[
              { marginTop: 35 },
              styles.inputPairContainer
            ]}
          >
            <View style={styles.containerInput}>
              <Text>Mercado:</Text>
              <SearchableDropdown
                listItems={companysName}
                placeholder="Escolha um mercado"
              />
            </View>
            <View style={styles.containerInput}>
              <Text>Produto:</Text>
              <SearchableDropdown
                listItems={productTitles}
                placeholder="Selecione um produto"
              />
            </View>
          </View>
          <View style={[{width: '100%'}, styles.inputPairContainer]}>
            <View style={styles.containerInput}>
              <Text>Valor mínimo do produto:</Text>
              <TextInputMask
                type={'money'}
                value={inputMinimumValue}
                maxLength={11}
                style={styles.textInput}
                onChangeText={value => {
                  setInputMinimumValue(value);
                  value = value.replace('R$', '');
                  value = value.replace('.', '');
                  value = value.replace(',', '.');
                  setMinimumValue(value);
                }}
              />
            </View>
            <View style={styles.containerInput}>
              <Text>Valor máximo do produto:</Text>
              <TextInputMask
                type={'money'}
                value={inputMaximumValue}
                maxLength={11}
                style={styles.textInput}
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
            {showPickerStart && (
              <DateTimePicker 
                value={initialDate ? initialDate : new Date()}
                mode="date"
                display="spinner"
                onChange={onChangeInitialDate}
                style={styles.datePicker}
              />
            )}
            {showPickerEnd && (
              <DateTimePicker 
                value={finalDate ? finalDate : new Date()}
                mode="date"
                display="spinner"
                onChange={onChangeFinalDate}
                style={styles.datePicker}
              />
            )}

            {showPickerStart && Platform.OS === 'ios' && (
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity style={[
                  styles.iosPickerbutton,
                  styles.pickerButton,
                  {backgroundColor: '#11182711'}
                ]}
                onPress={toogleInitialDatePicker}
                >
                  <Text style={[
                    styles.buttonText,
                    {color: '#075985'}
                  ]}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                  styles.iosPickerbutton,
                  styles.pickerButton,
                ]}
                  onPress={confirmIosInitialDate}
                >
                  <Text style={[
                    styles.buttonText,
                  ]}>
                    Confirmar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            {showPickerEnd && Platform.OS === 'ios' && (
              <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TouchableOpacity style={[
                  styles.iosPickerbutton,
                  styles.pickerButton,
                  {backgroundColor: '#11182711'}
                ]}
                onPress={toogleFinalDatePicker}
                >
                  <Text style={[
                    styles.buttonText,
                    {color: '#075985'}
                  ]}>
                    Cancelar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[
                  styles.iosPickerbutton,
                  styles.pickerButton,
                ]}
                  onPress={confirmIosFinalDate}
                >
                  <Text style={[
                    styles.buttonText,
                  ]}>
                    Confirmar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={[styles.inputPairContainer, {width: '100%'}]}>
              <View style={[styles.containerInput]}>
                <Text>Data inicial da Promoção:</Text>
                {!showPickerStart && (
                  <Pressable
                  onPress={toogleInitialDatePicker}
                  >
                    <TextInput
                      style={styles.textInput}
                      placeholder={false ? `De: ${"variavel"}` : `De: `}
                      value={`De: ${formatDateBr(initialDate)}`}
                      // onChangeText={setDate()}
                      editable={false}
                      onPressIn={toogleInitialDatePicker}
                      ></TextInput>
                  </Pressable>
                )}
              </View>
              <View style={[styles.containerInput]}>
                <Text>Data final da Promoção:</Text>
                {!showPickerEnd && (
                  <Pressable
                    onPress={toogleFinalDatePicker}
                  >
                    <TextInput
                      style={styles.textInput}
                      placeholder={false ? `Até: ${"variavel"}` : `Até: `}
                      value={`Até: ${formatDateBr(finalDate)}`}
                      // onChangeText={setDate()}
                      editable={false}
                      onPressIn={toogleFinalDatePicker}
                    ></TextInput>
                  </Pressable>
                )}
              </View>
            </View>
          </View>
          <View style={styles.containerTwoFilterButtons}>
            <TouchableOpacity style={[styles.filterButtonContainer, {backgroundColor: 'white', borderWidth: 1, borderColor: '#ccc'}]}>
              <Text style={[styles.filterButtonText, {color: '#993399', fontSize: 25, paddingTop: 10}]}>
                  Limpar Filtros
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterButtonContainer, {backgroundColor: '#ffd803',}]}
              onPress={() => navigation.navigate("Home")}
              params={{
                initialDate,
                finalDate,
                maximumValue,
                minimumValue,
                
              }}
            >
              <Text style={[styles.filterButtonText, {}]}>
                  Filtrar
              </Text>
            </TouchableOpacity>
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
