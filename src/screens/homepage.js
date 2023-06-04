import { View, Text } from "react-native";
import ProductCard from '../components/Card'

const Homepage = () => {

    const productsData = [
        {
            id: 1, title: 'Linguiça', subtitle: 'Opcional', company: 'R Carvalho', regularPrice: 16.21, promotionalPrice: 12.02, initialDate: '20/02', finalDate: '24/02'
        },
    ]

    return (
        <View>
            <Text>Entrou </Text>
            <ProductCard 
                productsData
                />
        </View>
    )
}

export default Homepage;