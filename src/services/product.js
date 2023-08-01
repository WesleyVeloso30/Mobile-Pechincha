

export default class Product {
    async getProducts() {
        fetch('http://localhost:3000/product')
        .then( async (resp) => {
            console.log('ertyui' ,resp)
            if (resp.status == 200) {
                return resp.json();
            } else {
                throw new Error('Erro:', resp);
            }
        })
        .catch(resp => {
            console.log('2', resp);
            alert('Erro ao consultar Api');
        })
    }

}