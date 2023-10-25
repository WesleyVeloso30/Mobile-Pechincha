import Constants from "expo-constants";

const { baseUrl } = Constants.manifest.extra;

export default class Company {
  async getCompanys() {
    try {
      const resp = await fetch(`${baseUrl}/company`);
      if (resp.status == 200) {
        const resposta = await resp.json();
        return resposta;
      } else {
        console.log("Erro: ", resp);
        alert("Erro ao consultar as companias");
        return "erro";
      }
    } catch (error) {
      console.log("Erro: ", resp);
      alert("Erro ao consultar as companias");
      return "erro";
    }
  }
}
