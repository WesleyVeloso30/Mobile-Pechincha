import React, {useEffect, useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from '@react-navigation/native';
import ProductButton from './ProductButton';
// import SkeletonContent from 'react-native-skeleton-content';
import {
  Modal,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Button,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { mockProductDetails } from "../shared/mock";
import Constants from 'expo-constants';

const isMocked = Constants.manifest.extra.isMocked == 'false';

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
  // const [modalVisible, setModalVisible] = useState(false);
  // const [loading, setLoading] = useState(true);
  productId=1;
  const [productsData, setProductsData] = useState(null);
    useEffect( () => {
    
        getDetails();

      }, []);
      
    const getDetails = async () => {
      let data;
      console.log('isMock', isMocked);
      setProductsData(null);
      // setLoading(true)
      if (isMocked) {
        data = mockProductDetails(productId);
        setProductsData(data);
      } else {
        // data = await productService.getProducts();

        setProductsData(data);
        // setLoading(false);
      }
      return data;
    }

  return (
    <View>
    { !productsData ? (<Text style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}> <Text style={{fontSize: 200}}>fytgbhjnffhfhfhcfhcfhcfhcfhctrygvhbjn m</Text> </Text>) : (
    // <Modal
    //   animationType="slide"
    //   transparent={true}
    //   visible={modalVisible}
    //   onRequestClose={() => {
    //     // Alert.alert('Modal has been closed.');
    //     setModalVisible(!modalVisible);
    //   }}>
      // {/* <SkeletonContent
        // isLoading={loading}ScrollView
        // animationDirection="horizontalLeft"
      // > */}
        <ScrollView>
          <SafeAreaView>
          <LinearGradient style={{marginTop: 50}} colors={borderColor(productsData.company.name)}>
            <View style={{flex: 1, alignItems: "center"}}>
              <Image
                source={require("../assets/foto.jpeg")}
                style={{ width: '97%', height:200}}
                alt='Imagem do produto'
              />
            </View>
            <Text style={[ styles.lineBreak ,{ fontSize: 30 }]}>
              {productsData.title}
            </Text>
            <Text style={{ fontSize: 20 }}>
              {productsData.subTitle}
            </Text>
            <View>
              <Text>
                PROMOÇÃO:
              </Text>
              <Text style={[ styles.lineBreak ,{ fontSize: 20 }]}>
                De R${productsData.regularPrice} - Por R${productsData.promotionalPrice}
              </Text>
              
            </View>
            <Text style={styles.lineBreak}>
              Periodo da promoção: {productsData.startAt} - {productsData.endAt}
            </Text>
            <Text>
              Mercado: {productsData.company.name}
            </Text>
            <Link style={styles.lineBreak} to={{ screen: 'Company', params: { id: productsData.company.id }}}>
              Mais informações do Mercado &gt;
            </Link>
            <Text style={styles.lineBreak }>
              Descrição do Produto:
              {productsData.description}
            </Text>
            <View style={{width: '100%', flexDirection: "row", justifyContent: 'space-around'}}>
              <ProductButton />
              <ProductButton />
            </View>
          </LinearGradient>
          </SafeAreaView>
        </ScrollView>
      // {/* </SkeletonContent> */}
    // </Modal>
    )
          }
          </View>
          );
};

function borderColor(companyId) {
  // R Carvalho
  if (companyId === 'R Carvalho') {
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
  lineBreak: {
    marginBottom: 20,
  }
});

export default ProductDetails;
