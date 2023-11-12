export const mockProductDetails = (productId) => {
    let data;
    switch (productId) {
        case 1:
            data = {
                id: 1,
                title: "Kg de Linguiça",
                subtitle: "",
                company: {
                    name: "Atacadão",
                },
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                startAt: '2023-11-02T22:27:20.100Z',
                endAt: '2023-12-01T22:17:20.100Z',
                imageUrl: 'https://swiftbr.vteximg.com.br/arquivos/ids/178656-636-636/linguica-pernil-swift-700g-615900-1.png?v=637707648975300000',
            };
            break
        case 2: 
            data = {
                id: 2,
                title: "1Kg Batata",
                subtitle: "",
                company: {
                    name: "Assaí",
                },
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                startAt: '2024-01-19T21:27:20.100Z',
                endAt: '2024-02-19T22:12:20.100Z',
                imageUrl: 'https://storage.googleapis.com/pechincha-image-product.appspot.com/Product%2F1699195027959.jfif',
            };
            break
        case 3:
            data = {
                id: 3,
                title: "Caixa de Sabonete",
                subtitle: "",
                company: {
                    name: "R Carvalho",
                },
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                startAt: '2023-12-03T01:17:29.120Z',
                endAt: '2023-12-14T00:56:52.100Z',
                imageUrl: 'https://www.phebo.com.br/media/catalog/product/e/a/ean7896512934529_0118.jpg?optimize=medium&fit=bounds&height=&width=&canvas=:',
            };
            break
        default:
            data = null
            break
        }

    return data;
}