import { View, Text, SafeAreaView, StyleSheet, Image, FlatList, RefreshControl } from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Card";
import products from "../../services/product";
import styles from "./styles";
import Constants from 'expo-constants';

const isMocked = Constants.manifest.extra.isMocked == 'true';

const productService = new products();

const Homepage = ({ navigation, route }) => {
  const [productsData, setProductsData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  let params = route?.params?.params;
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
          imageUrl: 'https://swiftbr.vteximg.com.br/arquivos/ids/178656-636-636/linguica-pernil-swift-700g-615900-1.png?v=637707648975300000'
        },
        {
          id: 2,
          title: "1Kg Batata",
          subtitle: "",
          company: {
            name: "Assaí",
          },
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          startAt: '2024-01-19T22:27:20.100Z',
          endAt: '2024-01-21T22:27:20.100Z',
          imageUrl: 'https://storage.googleapis.com/pechincha-image-product.appspot.com/Product%2F1699195027959.jfif'
        },
        {
          id: 3,
          title: "Caixa de Sabonete",
          subtitle: "",
          company: {
            name: "R Carvalho",
          },
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          startAt: '2024-01-03T00:07:20.100Z',
          endAt: '2024-01-19T22:27:20.100Z',
          imageUrl: 'https://www.phebo.com.br/media/catalog/product/e/a/ean7896512934529_0118.jpg?optimize=medium&fit=bounds&height=&width=&canvas=:'
        },
      ];
      setProductsData(data);
    } else {
      setRefreshing(true);
      data = await productService.getProducts(params);

      setProductsData(data);
    }
    setRefreshing(false);
    return data;
  };

  if (params) {
    getData();
    route.params.params = null;
  }

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
        productsData !== 'error' ? (
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
              renderItem={({item}) => ( <ProductCard item={item} navigation={navigation} /> ) }/>
          </SafeAreaView>
        ) : (
        <View style={styles.noApiData}>
          <Text style={{fontSize: 20}}>Ocorreu um erro ao consultar as promoções.</Text>
        </View>
        )
      ) : (
        <View style={styles.noApiData}>
          <Image
          style={{ width: "100%", height: '100%' }}
            source={require('../../assets/carregando.gif')}
          />
        </View>
      )}
    </View>
  );
};

export default Homepage;
