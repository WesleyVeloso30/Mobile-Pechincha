import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "@react-navigation/native";
import ProductButton from "./ProductButton";
import Skeleton from "./Load-Skeleton";
import { formatDateShort } from "../shared/util";
// import SkeletonContent from 'react-native-skeleton-content';
import {
  Modal,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Share,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import { mockProductDetails } from "../shared/mock";
import Constants from "expo-constants";
import products from "../services/product";

const isMocked = Constants.manifest.extra.isMocked == "true";

const productService = new products();
const skeleton = new Skeleton();

const Close = () => (
  <Avatar.Icon
    size={30}
    icon="close"
    style={{ backgroundColor: "white" }}
    color="black"
  />
);
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
const ProductDetails = ({
  productId,
  navigation,
  setModalVisible,
  modalVisible,
  titleToShare,
  messageToShare,
}) => {
  // const [loading, setLoading] = useState(true);
  // productId=1;
  const [productsData, setProductsData] = useState(null);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let data;
    // setModalVisible(true);
    console.log("isMock", productId);
    setProductsData(null);
    // setLoading(true)
    if (isMocked) {
      data = mockProductDetails(productId);
      setProductsData(data);
    } else {
      data = await productService.getProductById(productId);

      setProductsData(data);
      // setLoading(false);
    }
    return data;
  };

  return (
    <View style={{ padding: 6 }}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // alert('Modal has n closed.');
          setModalVisible(false);
        }}
      >
        {/* <SkeletonContent
        // isLoading={loading}ScrollView
        // animationDirection='horizontalLeft'
      // > */}
        <ScrollView style={{ paddingHorizontal: 12 }}>
          <SafeAreaView>
            {!productsData ? (
              <skeleton.productDetails></skeleton.productDetails>
            ) : (
              <LinearGradient
                style={{
                  marginTop: 35,
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 10,
                }}
                colors={borderColor(productsData.company.name)}
              >
                <View
                  style={{ alignItems: "center", width: "100%", marginTop: 15 }}
                >
                  <Image
                    source={require("../assets/foto.jpeg")}
                    style={{ width: "97%", height: 200 }}
                    alt="Imagem do produto"
                  />
                </View>
                <Text
                  style={{ position: "absolute", right: 8, top: 4 }}
                  onPress={() => setModalVisible(false)}
                >
                  <Close />
                </Text>
                <View style={{ width: "97%" }}>
                  <Text style={{ fontSize: 30 }}>{productsData.title}</Text>
                  {productsData.subTitle ? (
                    <Text style={[styles.lineBreak, { fontSize: 18 }]}>
                      {productsData.subTitle}
                    </Text>
                  ) : (
                    <Text style={{ fontSize: 18 }}></Text>
                  )}
                  <View>
                    <Text style={{ fontSize: 20 }}>PROMOÇÃO:</Text>
                    <Text style={[styles.lineBreak, { fontSize: 20 }]}>
                      De R${productsData.regularPrice} - Por R$
                      {productsData.promotionalPrice}
                    </Text>
                  </View>
                  <Text style={[styles.lineBreak, { fontSize: 18 }]}>
                    PERIODO DA PROMOÇÃO: {formatDateShort(productsData.startAt)}{" "}
                    - {formatDateShort(productsData.endAt)}
                  </Text>
                  <Text style={{ fontSize: 16 }}>
                    MERCADO: {productsData.company.name}
                  </Text>
                  <Link
                    style={[styles.lineBreak, { fontSize: 12 }]}
                    to={{
                      screen: "Company",
                      params: { id: productsData.company.id },
                    }}
                  >
                    Mais informações do Mercado {productsData.company.name} &gt;
                  </Link>
                  {productsData.description ? (
                    <Text style={[styles.lineBreak, { fontSize: 16 }]}>
                      DESCRIÇÃO DO PRODUTO:
                      {"\n"}
                      {productsData.description}
                    </Text>
                  ) : (
                    <Text></Text>
                  )}
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <ProductButton
                    name={"COMPARTILHAR"}
                    color={"#993399"}
                    messageToShare={messageToShare}
                  />
                  <ProductButton
                    setModalVisible={setModalVisible}
                    modalVisible={modalVisible}
                    buttonBackgroundColor={"#ffd803"}
                    name={"FECHAR"}
                  />
                </View>
              </LinearGradient>
            )}
          </SafeAreaView>
        </ScrollView>
        {/* </SkeletonContent> */}
      </Modal>
    </View>
  );
};

function borderColor(companyId) {
  // R Carvalho
  if (companyId === "R Carvalho") {
    return ["#90ee90", "white"];
  } else if (companyId === "Assaí") {
    return ["#4dddf6", "white"];
  } else if (companyId === "Atacadão") {
    return ["yellow", "white"];
  } else {
    return ["white", "white"];
  }
}

const styles = StyleSheet.create({
  lineBreak: {
    marginBottom: 20,
  },
});

export default ProductDetails;
