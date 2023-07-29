import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";

const Company = () => {
  const [companys, setCompanys] = useState(null);

  useEffect(() => {
    const data = [
      {
        id: 1,
        name: "R Carvalho",
        logo: require("../assets/Logo.png"),
        backgroundColor: "#50cf01",
      },
      {
        id: 2,
        name: "Atacadão",
        logo: require("../assets/Logo.png"),
        backgroundColor: "#fdf063",
      },
      {
        id: 3,
        name: "Açaí",
        logo: require("../assets/Logo.png"),
        backgroundColor: "#00bfff",
      },
    ];

    setCompanys(data);
  }, []);

  const styles = StyleSheet.create({
    containerItem: {
      flexDirection: "row",
      padding: 10,
      margin: 20,
    },
    logo: {
      width: 50,
      height: 50,
    },
  });

  return (
    <>
      {!companys ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <View>
          <Text>Mercados </Text>
          <FlatList
            data={companys}
            keyExtractor={(_, id) => id.toString()}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.containerItem,
                  { backgroundColor: item.backgroundColor },
                ]}
              >
                <Image style={styles.logo} source={item.logo} />
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
      )}
    </>
  );
};

export default Company;

// import React from "react";
// import {FlatList, Text, View, Image, Button, TouchableOpacity, StyleSheet, TextInput } from "react-native";
// import styles from "./App.styles";

// class GetPokemons extends React.Component {
//   constructor(props) {
//     super(props);
//     // console.log("O componente está sendo montado!")
//     this.state = {
//       dados: {},
//       err: {},
//       inputId: "1",
//     }}

//  fetchDados(i) {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//       .then(response => response.json())
//       .then(json => { return ({ dados: json }) })
//       .catch(err => {
//         console.log("error:", err)
//         { return ({ dados: 'Deu ruim' }) }
//       })
//   }

//    async a() {
//   let lista;
//     for (let i = 1; i <5; i++) {
//         let namePokemon = await this.fetchDados(i);
//         lista = namePokemon;

//         lista += lista;
//         if (i=4) {
//             return lista
//         }
//     }
//     console.log(lista);
//   }
//  async render() {

//     const styles = StyleSheet.create({
//         container: {width: 100, backgroundColor: 'blue'}
//     });

//     const lista = await this.a();
//     console.log(lista)
//     return (
//       <FlatList style={styles.container}
//         data={ lista }
//         renderItem={ ({item}) =>
//             <View>
//                 <Text>{item.name}</Text>
//             </View>
//         }
//       />
//     )
//   }
// }

// export default GetPokemons;
