import { View, Text, ScrollView, TextInput } from "react-native";
import styles from "./styles";
import company from "../../services/company";
import products from "../../services/product";
import { useEffect, useState } from "react";

const productService = new products();
const companyService = new companys();

const Filters = () => {
    const { companysName, setCompanysName } = useState(null);
    const { productTitles, setProductTitles } = useState(null);
    useEffect(() => {
        getCompany();
    }, []);
    
    const getCompany = async () => {
        let companyNames;
        setCompanysName(null);
        if (isMocked) {
          companyNames = [
            {
                name: 'R Carvalho',
            },
            {
                name: 'Assaí',
            },
            {
                name: 'Atacadão',
            },
          ];
          setCompanysName(companyNames);
          productTitles = [
            {
                title: 'Kg de Linguiça',
            },
            {
                titles: 'Carne na Rola',
            },
            {
                titles: 'Sabonete Ypê',
            },
          ];
          setProductTitles(productTitles);
        } else {
          setRefreshing(true);
          companyNames = await companyService.getProducts();
          companyNames = await productService.getProducts();
    
          setCompanysName(companyNames);
        }
        setRefreshing(false);
        return;
    }

    return (
        <ScrollView>
            <TextInput></TextInput>
        </ScrollView>
    );
}

export default Filters;