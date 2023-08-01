

export default class Product {
    async getProducts() {
        try {
            fetch('http://localhost:3000/product')
            .then(resp => {
                console.log('1', resp)
                return resp.json();
            })
            .then(res=> {
                console.log(res)
                if (res.status === 200) {
                    throw new Error('Erro na resposta da API');
                }
            })
            .catch(res => {
                console.log('2', res);
                alert('Erro ao consultar Api');
            })

        } catch {
            console.log(res);
            alert('Erro ao consultar Api2');
        }
    }

}