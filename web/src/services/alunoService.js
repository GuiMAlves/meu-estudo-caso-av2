import axios from "axios";

const API_URL = "https://proweb.leoproti.com.br/alunos";

const listar = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

const obter = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export default {
  listar,
  obter,
};
