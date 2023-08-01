import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import ProductCard from "../../components/Card";
import isMocked from "../../../shared";
import products from "../../services/product";
import styles from "./styles";

const productService = new products();

async function getData(setProductsData) {
  let data;
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
    } else {
      data = await productService.getProducts();
    }
  setProductsData(data);
}

const Homepage = ({ navigation }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect( () => {
    
    getData(setProductsData);

  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
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
      </View>
      <ProductCard productsData={productsData} />
    </SafeAreaView>
  );
};

export default Homepage;
