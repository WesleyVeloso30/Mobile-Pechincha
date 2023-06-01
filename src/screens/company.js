import { View, Text, FlatList, Image, StyleSheet } from "react-native";
const image = require('../../assets/Logo.png')

const Company = () => {
    const companys = [
        { name: 'R Carvalho', logo: require('../../assets/Logo.png'), backgroundColor: '#50cf01'},
        { name: 'Atacadão', logo: require('../../assets/Logo.png'), backgroundColor: '#fdf063'},
        { name: 'Açaí', logo: require('../../assets/Logo.png'), backgroundColor: '#00bfff'},
    ]

    const styles = StyleSheet.create({
        containerItem: {
            flexDirection: 'row',
            padding: 10,
            margin: 20
        },
        logo: {
            width: 50,
            height: 50
        },
    })

    return (
        <View>
            <Text>Mercados </Text>
            <FlatList
            data={ companys }
            renderItem={ ({item}) => 
                <View style={[styles.containerItem, {backgroundColor: item.backgroundColor}]}>
                    <Image style={styles.logo} source={item.logo} />
                    <Text>{item.name}</Text>
                </View>
            }
            />
        </View>
        )
    
}

export default Company;