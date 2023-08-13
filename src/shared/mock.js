export const mockProductDetails = (productId) => {
    let data;
    switch (productId) {
        case 1:
            data = {
                id: 1,
                title: "Kg de Linguiça",
                subtitle: "",
                company: "Atacadão",
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                initialDate: "20/02",
                finalDate: "24/02",
            };
        case 2: 
            data = {
                id: 2,
                title: "Carne na Rola",
                subtitle: "",
                company: "Assaí",
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                initialDate: "20/02",
                finalDate: "24/02",
            };
        case 3:
            data = {
                id: 3,
                title: "Sabonete Ypê",
                subtitle: "",
                company: "R Carvalho",
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                initialDate: "20/02",
                finalDate: "24/02",
            }
    }

    return data;
}