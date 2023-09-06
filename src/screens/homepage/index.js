import { View, Text, SafeAreaView, StyleSheet, FlatList, RefreshControl } from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Card";
import products from "../../services/product";
import styles from "./styles";
import Constants from 'expo-constants';

const isMocked = Constants.manifest.extra.isMocked === 'true';

const productService = new products();

const Homepage = ({ navigation }) => {
  const [productsData, setProductsData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getData();
    // setProductsData(data);
  }, []);
  
  const getData = async () => {
    let data;
    setProductsData(null);
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
      setProductsData(data);
    } else {
      setRefreshing(true);
      data = await productService.getProducts();

      setProductsData(data);
    }
    setRefreshing(false);
    return data;
  };
  return (
    <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.headerContainer}>
          <Text
            style={styles.namePechincha}
            onPress={() => navigation.navigate("Login")}
          >
            PECHINCHA
          </Text>
          <Text
            style={styles.filter}
            onPress={() => navigation.navigate("Filters")}
            navigation={navigation}
          >
            FILTRAR
          </Text>
        </SafeAreaView>
      {productsData ? (
        <SafeAreaView style={styles.container}>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={getData}
              />
            }
            data={productsData}
            keyExtractor={(_, id) => id.toString()}
            renderItem={({item}) => ( <ProductCard item={item} /> ) }/>
        </SafeAreaView>
      ) : (
        <View style={styles.noApiData}>
          <Text style={{fontSize: 20}}>Carregando dados da API...</Text>
        </View>
      )}
    </View>
  );
};

export default Homepage;
