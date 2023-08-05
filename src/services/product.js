import { baseUrl } from '../../shared'

export default class Product {
    async getProducts() {
        try {
            console.log(baseUrl);
            const resp = await fetch(`${baseUrl}/product`);
            if(resp.status == 200) {
                const resposta = await resp.json();
                console.log(resposta);
                return resposta;
            } else {
                console.log('Erro: ', resp);
                alert('Erro ao consultar api');
            }
        } catch (error) {
            console.log('Erro: ', resp);
            alert('Erro ao consultar api');
        }
    }

}