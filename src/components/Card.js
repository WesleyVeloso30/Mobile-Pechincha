import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet, FlatList } from 'react-native'; 
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = () => <Avatar.Icon size={30} icon="pizza" />

const ProductCard = ({ productsData }) => { 
  console.log(productsData)
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
        <FlatList style={styles.container} 
          data={ productsData }
          keyExtractor={(_, id) => id.toString()}
          renderItem={ ({item}) => 
          <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', marginBottom: 20}}>
            <Card style={styles.card}>
              <Card.Title title={item.title} subtitle={item.subtitle ? item.subtitle : ""} left={LeftContent} />
              <Card.Cover source={require('../../assets/Logo.png')} />
              <Card.Content>
                <Paragraph>Mercado: {item.company}</Paragraph>
                <Paragraph>De R${item.regularPrice} - Por R${item.promotionalPrice}</Paragraph>
                <Paragraph>Periodo da promoção: {item.initialDate} - {item.finalDate}</Paragraph>
              </Card.Content>
              <Card.Actions>
                <Button icon="credit-card" onPress={() => alert('Comprado!')}>
                  COMPRAR
                </Button>
                <Button icon="share-variant" onPress={() => alert('Compartilhado!')}>
                  COMPARTILHAR
                </Button>
              </Card.Actions>
           </Card>
        </View>
          }   
        /> 
    // </SafeAreaView>
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingTop: 10, 
    backgroundColor: 'blue', 
    // justifyContent: 'center',
    // alignItems: 'center'
  }, 
  card: {
    width: '90%',
    height: 400
  }
});

export default ProductCard;