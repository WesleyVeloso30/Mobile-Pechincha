import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import ProductCard from '../components/Card'

const Homepage = () => {

    const productsData = [
        {
            id: 1, title: 'Linguiça', subtitle: '', company: 'R Carvalho', regularPrice: 16.21, promotionalPrice: 12.02, initialDate: '20/02', finalDate: '24/02'
        },
        {
            id: 2, title: 'Linguiça', subtitle: '', company: 'R Carvalho', regularPrice: 16.21, promotionalPrice: 12.02, initialDate: '20/02', finalDate: '24/02'
        },
        {
            id: 3, title: 'Linguiça', subtitle: '', company: 'R Carvalho', regularPrice: 16.21, promotionalPrice: 12.02, initialDate: '20/02', finalDate: '24/02'
        }
    ]

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text>Entrou </Text> */}
            <ProductCard 
                productsData= {productsData}
                />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35
    }
})

export default Homepage;