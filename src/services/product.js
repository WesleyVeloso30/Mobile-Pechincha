import Constants from "expo-constants";

const { baseUrl } = Constants.manifest.extra;

export default class Product {
  async getProducts(params) {
    const initialDate = params?.initialDate ? params?.initialDate.toISOString() : '';
    const finalDate = params?.finalDate ? params?.finalDate.toISOString() : '';

    let selectedProducts = Array.isArray(params?.selectedProducts) ? params?.selectedProducts : [params?.selectedProducts]
    selectedProducts = params?.selectedProducts ? selectedProducts : params?.selectedProducts;
    const selectedTitles = selectedProducts ? selectedProducts?.map( (product) => product.title ) : '';
    const selectedCompanyId = params?.selectedCompany?.id || '';
    const maximumValue = params?.maximumValue || '';
    const minimumValue = params?.minimumValue || '';

    const queryTitlesList = selectedTitles === '' ? selectedTitles : selectedTitles?.join("&titles=");

    try {
      const url = `${baseUrl}/product?startAt=${initialDate}&endAt=${finalDate}&titles=${queryTitlesList}&companyId=${selectedCompanyId}&minimumPromotionalPrice=${minimumValue}&maximumPromotionalPrice=${maximumValue}`;
      const resp = await fetch(url);
      if (resp.status == 200) {
        const resposta = await resp.json();
        return resposta;
      } else {
        const resposta = await resp.json();
        console.log("Erro: ", resposta);
        alert(resposta ? resposta : 'Ocorreu um erro ao consultar as promoções.');
        return 'error';
      }
    } catch (error) {
      console.log("Erro: ", error);
      alert("Erro ao consultar api");
      return 'error';
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
        return 'error';
      }
    } catch (error) {
      console.log("Erro: ", error);
      alert("Erro ao consultar api");
      return 'error';
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
