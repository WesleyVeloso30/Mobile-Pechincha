import Constants from 'expo-constants';

const { baseUrl } = Constants.manifest.extra;

export default class Product {
  async getProducts() {
    try {
      const resp = await fetch(`${baseUrl}/product`);
      if (resp.status == 200) {
        const resposta = await resp.json();
        return resposta;
      } else {
        console.log("Erro: ", resp);
        alert("Erro ao consultar api");
      }
    } catch (error) {
      console.log("Erro: ", resp);
      alert("Erro ao consultar api");
    }
  }
}
