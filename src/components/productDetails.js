import React, {useEffect, useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from '@react-navigation/native';
import SkeletonContent from 'react-native-skeleton-content';
import {
  Modal,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Button,
  Image,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { mockProductDetails } from "../shared/mock";
import Constants from 'expo-constants';

const isMocked = Constants.manifest.extra.isMocked === 'true';

const LeftContent = () => <Avatar.Icon size={30} icon="pizza" />;
// id               Int                @id @default(autoincrement())
//   startAt          DateTime?
//   endAt            DateTime?
//   regularPrice     Int?
//   promotionalPrice Int?
//   title            String?
//   subTitle         String?
//   description      String?
//   imageUrl         String?
//   companyId        Int
const ProductDetails = ({ productId }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log('erdtfygbhnjk');
  productId=1
  const [productsData, setProductsData] = useState(null);
    // useEffect( () => {
    
    //     getDetails();

    //   }, []);
      
      const getDetails = async () => {
        let data;
        console.log(isMocked);
        setProductsData(null);
        setLoading(true)
        if (isMocked) {
          data = mockProductDetails(productId);
          setProductsData(data);
        } else {
          // data = await productService.getProducts();
  
          setProductsData(data);
          setLoading(false);
        }
        return data;
      }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      {/* <SkeletonContent
        isLoading={loading}
        animationDirection="horizontalLeft"
      > */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <LinearGradient colors={borderColor(productsData.company.name)}>
            <Image
              source={require("../assets/foto.jpeg")}
              style={{}}
              alt='Imagem do produto'
            />
            <Text style={{ fontSize: 30 }}>
              {productsData.title}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {productsData.subTitle}
            </Text>
            <View>
              <Text>
                PROMOÇÃO:
              </Text>
              <Text style={{ fontSize: 20 }}>
                De R${productsData.regularPrice} - Por R${productsData.promotionalPrice}
              </Text>
            </View>
            <Text>
              Periodo da promoção: {productsData.startAt} - {productsData.endAt}
            </Text>
            <Text>
              Mercado: {productsData.company.name}
            </Text>
            <Link to={{ screen: 'Company', params: { id: productsData.company.id }}}>
              Mais informações do Mercado &gt;
            </Link>
            <Text>
              Descrição do Produto:
              {productsData.description}
            </Text>
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
              FECHAR
            </Button>
          </LinearGradient>
                {/* <Card.Content style={[styles.CardContent, { marginBottom: 10 }]}>
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
            
            </Card> */}
        </View>
      {/* </SkeletonContent> */}
    </Modal>
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

// const styles = StyleSheet.create({
  
// });

export default ProductDetails;
