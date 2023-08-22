import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Card";
import products from "../../services/product";
import styles from "./styles";
import Constants from 'expo-constants';

const isMocked = Constants.manifest.extra.isMocked === 'true';

const productService = new products();

const Homepage = ({ navigation }) => {
  const [productsData, setProductsData] = useState(null);

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
          company: "Atacadão",
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          initialDate: "20/02",
          finalDate: "24/02",
        },
        {
          id: 2,
          title: "Carne na Rola",
          subtitle: "",
          company: "Assaí",
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          initialDate: "20/02",
          finalDate: "24/02",
        },
        {
          id: 3,
          title: "Sabonete Ypê",
          subtitle: "",
          company: "R Carvalho",
          regularPrice: 16.21,
          promotionalPrice: 12.02,
          initialDate: "20/02",
          finalDate: "24/02",
        },
      ];
      setProductsData(data);
    } else {
      data = await productService.getProducts();

      setProductsData(data);
    }
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
          <ProductCard productsData={productsData} />
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
