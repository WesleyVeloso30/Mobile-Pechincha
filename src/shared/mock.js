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
            };
            break
        case 2: 
            data = {
                id: 2,
                title: "Carne na Rola",
                subtitle: "",
                company: {
                    name: "Assaí",
                },
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                startAt: '2024-01-19T21:27:20.100Z',
                endAt: '2024-02-19T22:12:20.100Z',
            };
            break
        case 3:
            data = {
                id: 3,
                title: "Sabonete Ypê",
                subtitle: "",
                company: {
                    name: "R Carvalho",
                },
                regularPrice: 16.21,
                promotionalPrice: 12.02,
                startAt: '2023-12-03T01:17:29.120Z',
                endAt: '2023-12-14T00:56:52.100Z',
            };
            break
        default:
            data = null
            break
        }

    return data;
}