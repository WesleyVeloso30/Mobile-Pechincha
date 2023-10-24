import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  Share,
  View,
  RefreshControl,
  StyleSheet,
  FlatList,
} from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { formatDateShort } from "../shared/util";
import ProductDetails from "./productDetails";

const LeftContent = () => <Avatar.Icon size={30} icon="pizza" />;

const ProductCard = ({ item, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const titleToShare = `${item.title} em Promoção`;
  const messageToShare = `
    PRODUTO:
${item.title}

PREÇO:
${item.promotionalPrice}

PERODO DA PROMOÇÃO:
${formatDateShort(item.startAt)} - ${formatDateShort(item.endAt)}

MERCADO:
${item.company.name}
  `;

  const shareProduct = async () => {
    const result = Share.share({
      title: titleToShare,
      message: messageToShare,
    });
  };

  return (
    // <SafeAreaView style={styles.container}>
    //     <ScrollView style={styles.container}>
    //   {
    //     productsData.map(( item )=>
    //     <Card>
    //             <Card.Title title={item.title} subtitle={item.subtitle ? item.subtitle : ""} left={LeftContent} />
    //             <Card.Cover source={require('../../assets/Logo.png')} />
    //             <Card.Content>
    //               <Paragraph>Mercado: {item.company}</Paragraph>
    //               <Paragraph>De {item.regularPrice} - Por {item.promotionalPrice}</Paragraph>
    //               <Paragraph>Periodo da promoção: {item.initialDate} - {item.finalDate}</Paragraph>
    //             </Card.Content>
    //             <Card.Actions>
    //               <Button icon="credit-card" onPress={() => alert('Comprado!')}>
    //                 COMPRAR
    //               </Button>
    //               <Button icon="share-variant" onPress={() => alert('Compartilhado!')}>
    //                 COMPARTILHAR
    //               </Button>
    //             </Card.Actions>
    //          </Card>
    //          )
    //   }
    // </ScrollView>
    // <SafeAreaView style={{flex: 1}} >
    // <View style={{justifyContent: 'center', flex: 1}}>
    <View style={{ flex: 1, alignItems: "center", marginBottom: 20 }}>
      <Card
        style={[
          styles.card,
          { borderColor: borderColor(item.company.name), borderWidth: 5 },
        ]}
      >
        <LinearGradient colors={borderColor(item.company.name)}>
          <Card.Cover
            source={require("../assets/foto.jpeg")}
            style={{ marginBottom: 10 }}
          />
          <Card.Content style={[styles.CardContent, { marginBottom: 10 }]}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Title style={{ fontSize: 30 }}>{item.title}</Title>
              <Title style={{ fontSize: 30, marginRight: 0 }}>
                R${item.promotionalPrice}
              </Title>
            </View>
            <Paragraph>Mercado: {item.company.name}</Paragraph>
            <Paragraph>
              Periodo da promoção: {formatDateShort(item.startAt)} -{" "}
              {formatDateShort(item.endAt)}
            </Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button
              icon="share-variant"
              onPress={shareProduct}
            >
              COMPARTILHAR
            </Button>
            <Button
              style={{ backgroundColor: "#ffd803" }}
              onPress={() => setModalVisible(true)}
            >
              VER DETALHES
            </Button>
          </Card.Actions>
        </LinearGradient>
      </Card>
      <ProductDetails
        navigation={navigation}
        productId={item.id}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        messageToShare={messageToShare}
        titleToShare={titleToShare}
      />
    </View>
    // </SafeAreaView>
  );
};

function borderColor(company) {
  if (company === "R Carvalho") {
    return ["#90ee90", "white"];
  } else if (company === "Assaí") {
    return ["#4dddf6", "white"];
  } else if (company === "Atacadão") {
    return ["yellow", "white"];
  } else {
    return ["white", "white"];
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
    width: "90%",
    height: 350,
  },
  CardContent: {
    // flex: 1,
    // justifyContent: 'space-around',
  },
});

export default ProductCard;
