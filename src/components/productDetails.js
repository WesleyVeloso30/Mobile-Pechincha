import React, {useEffect, useState} from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from '@react-navigation/native';
import ProductButton from './ProductButton';
import { formatDateShort } from '../shared/util'
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

const Close = () => <Avatar.Icon size={30} icon="close" style={{backgroundColor: 'white'}} color="black" />;
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
const ProductDetails = ({ productId, navigation, setModalVisible, modalVisible }) => {
  // const [loading, setLoading] = useState(true);
  // productId=1;
  const [productsData, setProductsData] = useState(null);
    useEffect( () => {
    
        getDetails();

      }, []);
      
    const getDetails = async () => {
      let data;
      // setModalVisible(true);
      console.log('isMock', productId);
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
    <View style={{padding: 6}}>
    { !productsData ? (<Text style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}> <Text style={{fontSize: 200}}>fytgbhjnffhfhfhcfhcfhcfhcfhctrygvhbjn m</Text> </Text>) : (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // alert('Modal has n closed.');
        setModalVisible(false);
      }}>
      {/* <SkeletonContent
        // isLoading={loading}ScrollView
        // animationDirection="horizontalLeft"
      // > */}
        <ScrollView>
          <SafeAreaView>
          <LinearGradient style={{marginTop: 35}} colors={borderColor(productsData.company.name)}>
            <View style={{ alignItems: "center", marginTop: 15}}>
              <Image
                source={require("../assets/foto.jpeg")}
                style={{ width: '97%', height:200}}
                alt='Imagem do produto'
              />
            </View>
            <Text style={{position: 'absolute', right: 8, top: 4}} onPress={ () => setModalVisible(false)}>
              <Close/>
            </Text>
            <Text style={{ fontSize: 30 }}>
              {productsData.title}
            </Text>
            {
              productsData.subTitle ? (
                <Text style={[ styles.lineBreak ,{ fontSize: 18 }]}>
                  {productsData.subTitle}
                </Text>
              ) : (
                <Text style={{ fontSize: 18 }}
                ></Text>
              )
            }
            <View>
              <Text style={{ fontSize: 20 }}>
                PROMOÇÃO:
              </Text>
              <Text style={[ styles.lineBreak ,{ fontSize: 20 }]}>
                De R${productsData.regularPrice} - Por R${productsData.promotionalPrice}
              </Text>
              
            </View>
            <Text style={[styles.lineBreak, { fontSize: 18 }]}>
              PERIODO DA PROMOÇÃO: {formatDateShort(productsData.startAt)} - {formatDateShort(productsData.endAt)}
            </Text>
            <Text style={{ fontSize: 16 }}>
              MERCADO: {productsData.company.name}
            </Text>
            <Link style={[styles.lineBreak, { fontSize: 12 }]} to={{ screen: 'Company', params: { id: productsData.company.id }}}>
              Mais informações do Mercado {productsData.company.name} &gt;
            </Link>
            <Text style={[styles.lineBreak, { fontSize: 16 }] }>
              DESCRIÇÃO DO PRODUTO:
              {'\n'}
              {productsData.description}
            </Text>
            <View style={{width: '100%', flexDirection: "row", justifyContent: 'space-around'}}>
              <ProductButton />
              <ProductButton setModalVisible={setModalVisible} modalVisible={modalVisible} buttonColor={'#ffd803'} name={'FECHAR'}  />
            </View>
          </LinearGradient>
          </SafeAreaView>
        </ScrollView>
      {/* </SkeletonContent> */}
    </Modal>
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
