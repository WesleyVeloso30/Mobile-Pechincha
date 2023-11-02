import { View, Text, SafeAreaView, FlatList, RefreshControl, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import SearchableDropdown from '../../components/SelectDropdown';
import styles from "./styles";
import Constants from 'expo-constants';
import Products from "../../services/product";
import ProductCard from "../../components/Card";

const productService = new Products();
const isMocked = Constants.manifest.extra.isMocked == 'true';

const Search = ({navigation}) => {
  const [productTitles, setProductTitles] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getTitles();
  }, []);

  const getTitles = async () => {
    let titles;
    setProductTitles(null);
    if (isMocked) {
      titles = [
        {
          id: 1,
          title: "Kg de Linguiça",
        },
        {
          id: 2,
          title: "Carne na Rola",
        },
        {
          id: 3,
          title: "Sabonete Ypê",
        },
      ];
      titles.unshift({ id: 0, titles: "Remover selecionado" });
      setProductTitles(titles);
    } else {
      const titles = await productService.getTitles();
      titles.unshift({ id: 0, title: "Remover selecionado" });
      setProductTitles(titles);
    }
  };

  const getProductsByTitles = async () => {
    let data;
    setProducts(null);
    if (isMocked) {
      data = [
        {
          id: 1,
          title: "Kg de Linguiça",
          subtitle: "",
          company: {
            name: "Atacadão",
          },
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          startAt: '2023-11-22T11:07:00.100Z',
          endAt: '2024-12-01T10:00:00.100Z',
        },
        {
          id: 2,
          title: "Carne na Rola",
          subtitle: "",
          company: {
            name: "Assaí",
          },
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          startAt: '2024-01-19T22:27:20.100Z',
          endAt: '2024-01-21T22:27:20.100Z',
        },
        {
          id: 3,
          title: "Sabonete Ypê",
          subtitle: "",
          company: {
            name: "R Carvalho",
          },
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          startAt: '2024-01-03T00:07:20.100Z',
          endAt: '2024-01-19T22:27:20.100Z',
        },
      ];
      setProducts(data);
    } else {
      data = await productService.getProducts({ selectedProducts });

      setProducts(data);
    }
    return data;
  };
    return (
        <View>
          {
            productTitles ? (
              <View style={{height: '100%'}}>
                <SafeAreaView style={styles.searchContainer}>
                <View style={styles.search}>
                  <SearchableDropdown
                    listItems={productTitles}
                    placeholder="Selecione um produto"
                    selectedItems={selectedProducts}
                    setSelectedItems={setSelectedProducts}
                    fontSize={25}
                    multi={true}
                  />
                </View>
                </SafeAreaView>
                {
                  products ? (
                    <FlatList
                      refreshControl={
                        <RefreshControl
                        refreshing={false}
                        onRefresh={getTitles}
                        />
                      }
                      data={products}
                      keyExtractor={(_, id) => id.toString()}
                      renderItem={({item}) => ( <ProductCard item={item} navigation={navigation} /> ) }
                    />
                  ) : (
                    <View></View>
                  )
                }
                <View style={styles.searchButtonContainerMain}>
                  <TouchableOpacity
                    style={[
                      styles.searchButtonContainer,
                      { backgroundColor: "#ffd803" },
                    ]}
                    onPress={getProductsByTitles}
                  >
                    <Text style={[styles.searchButtonText, {}]}>Pesquisar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <Text>kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</Text>
            )
          }
        </View>
    );
}

// import React, { Component, Fragment } from 'react';
// import SearchableDropdown from 'react-native-searchable-dropdown';

// var items = [
//   {
//     id: 1,
//     name: 'JavaScript',
//   },
//   {
//     id: 2,
//     name: 'Java',
//   },
//   {
//     id: 3,
//     name: 'Ruby',
//   },
//   {
//     id: 4,
//     name: 'React Native',
//   },
//   {
//     id: 5,
//     name: 'PHP',
//   },
//   {
//     id: 6,
//     name: 'Python',
//   },
//   {
//     id: 7,
//     name: 'Go',
//   },
//   {
//     id: 8,
//     name: 'Swift',
//   },
// ];
// class Homepage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedItems: [
//         {
//           id: 7,
//           name: 'Go',
//         },
//         {
//           id: 8,
//           name: 'Swift',
//         }
//       ]
//     }
//   }
//   render() {
//     return (
//       <Fragment>
//         {/* Multi */}
//         <SearchableDropdown
//           multi={true}
//           selectedItems={this.state.selectedItems}
//           onItemSelect={(item) => {
//             const items = this.state.selectedItems;
//             items.push(item)
//             this.setState({ selectedItems: items });
//           }}
//           containerStyle={{ padding: 5 }}
//           onRemoveItem={(item, index) => {
//             const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
//             this.setState({ selectedItems: items });
//           }}
//           itemStyle={{
//             padding: 10,
//             marginTop: 2,
//             backgroundColor: '#ddd',
//             borderColor: '#bbb',
//             borderWidth: 1,
//             borderRadius: 5,
//           }}
//           itemTextStyle={{ color: '#222' }}
//           itemsContainerStyle={{ maxHeight: 140 }}
//           items={items}
//           defaultIndex={2}
//           chip={true}
//           resetValue={true}
//           textInputProps={
//             {
//               placeholder: "placeholder",
//               underlineColorAndroid: "transparent",
//               style: {
//                   padding: 12,
//                   borderWidth: 1,
//                   borderColor: '#ccc',
//                   borderRadius: 5,
//               },
//               onTextChange: text => alert(text)
//             }
//           }
//           // listProps={
//           //   {
//           //     nestedScrollEnabled: true,
//           //   }
//           // }
//         />
//         {/* Single */}
//         <SearchableDropdown
//           onItemSelect={(item) => {
//             const items = this.state.selectedItems;
//             items.push(item)
//             this.setState({ selectedItems: items });
//           }}
//           containerStyle={{ padding: 5 }}
//           onRemoveItem={(item, index) => {
//             const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
//             this.setState({ selectedItems: items });
//           }}
//           itemStyle={{
//             padding: 10,
//             marginTop: 2,
//             backgroundColor: '#ddd',
//             borderColor: '#bbb',
//             borderWidth: 1,
//             borderRadius: 5,
//           }}
//           itemTextStyle={{ color: '#222' }}
//           itemsContainerStyle={{ maxHeight: 140 }}
//           items={items}
//           defaultIndex={2}
//           resetValue={false}
//           textInputProps={
//             {
//               placeholder: "placeholder",
//               underlineColorAndroid: "transparent",
//               style: {
//                   padding: 12,
//                   borderWidth: 1,
//                   borderColor: '#ccc',
//                   borderRadius: 5,
//               },
//               onTextChange: text => alert(text)
//             }
//           }
//           listProps={
//             {
//               nestedScrollEnabled: true,
//             }
//           }
//       />
//     </Fragment>
// );
//   }
// }

export default Search;