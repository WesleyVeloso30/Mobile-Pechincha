import Constants from "expo-constants";

const { baseUrl } = Constants.manifest.extra;

export default class Product {
  async getProducts(params) {
    try {
      const resp = await fetch(`${baseUrl}/product?`);
      if (resp.status == 200) {
        const resposta = await resp.json();
        return resposta;
      } else {
        console.log("Erro: ", resp);
        alert("Erro ao consultar api");
      }
    } catch (error) {
      console.log("Erro: ", error);
      alert("Erro ao consultar api");
    }
  }

  async getProductById(id) {
    try {
      const resp = await fetch(`${baseUrl}/product/${id}`);
      if (resp.status == 200) {
        const resposta = await resp.json();
        return resposta;
      } else {
        console.log("Erro: ", resp);
        alert("Erro ao consultar api");
      }
    } catch (error) {
      console.log("Erro: ", error);
      alert("Erro ao consultar api");
    }
  }

  async getTitles() {
    try {
      const resp = await fetch(
        `${baseUrl}/product/titles?dateLimit=2021-01-12T00:00:00.000`
      );
      if (resp.status == 200) {
        const resposta = await resp.json();
        return resposta;
      } else {
        console.log("Erro: ", resp);
        alert("Erro ao consultar titulos do produto");
        return "erro";
      }
    } catch (error) {
      console.log("Erro: ", error);
      alert("Erro ao consultar titulos do produto");
      return "erro";
    }
  }
}
