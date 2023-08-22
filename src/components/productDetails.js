import React, {useEffect} from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  SafeAreaView,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { mockProductDetails } from "../shared/mock";
import Constants from 'expo-constants';

const isMocked = Constants.manifest.extra.isMocked === 'true';

const LeftContent = () => <Avatar.Icon size={30} icon="pizza" />;

const ProductDetails = ({ productId }) => {

    useEffect( () => {
    
        getDetails();

      }, []);
      
      const getDetails = async () => {
        let data;
        setProductsData(null);
        if (isMocked) {
          data = mockProductDetails(productId);
          setProductsData(data);
        } else {
          data = await productService.getProducts();
  
          setProductsData(data);
        }
        return data;
      }

  return (
    <View style={{ flex: 1, alignItems: "center", marginBottom: 20 }}>
        <Card
        style={[
            styles.card,
            { borderColor: borderColor(productsData.companyId), borderWidth: 5 },
        ]}
        >
        <LinearGradient colors={borderColor(productsData.companyId)}>
            <Card.Cover
            source={require("../assets/foto.jpeg")}
            style={{ marginBottom: 10 }}
            />
            <Card.Content style={[styles.CardContent, { marginBottom: 10 }]}>
            <Title style={{ fontSize: 30 }}>{productsData.title}</Title>
            <Title style={{ fontSize: 20 }}>
                De R${productsData.regularPrice} - Por R${productsData.promotionalPrice}
            </Title>
            <Paragraph>Mercado: {productsData.company.name}</Paragraph>
            <Paragraph>
                Periodo da promoção: {productsData.startAt} - {productsData.endAt}
            </Paragraph>
            </Card.Content>
            <Card.Actions>
            <Button
                icon="share-variant"
                onPress={() => alert("Compartilhado!")}
            >
                COMPARTILHAR
            </Button>
            <Button
                style={{ backgroundColor: "#ffd803", color: "#272343" }}
                onPress={() => alert("Calma q ainda vou fazer a tela!")}
            >
                VER DETALHES
            </Button>
            </Card.Actions>
        </LinearGradient>
        </Card>
    </View>
  );
};

function borderColor(companyId) {
  // R Carvalho
  if (companyId === 1) {
    return ["green", "white"];
  } else if (companyId === "Assaí") {
    return ["blue", "white"];
  } else if (companyId === "Atacadão") {
    return ["yellow", "white"];
  } else {
    return ["white", "red"];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,

    // backgroundColor: 'blue',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  card: {
    width: "95%",
    height: "90%",
  },
  CardContent: {
    // flex: 1,
    // justifyContent: 'space-around',
  },
});

export default ProductDetails;
