import axios from "axios";

export interface Aluno {
  id: number;
  nome: string;
  turma: string;
  curso: string;
  matricula: string;

}

const API_URL = "https://proweb.leoproti.com.br/alunos";

const listar = async (): Promise<Aluno[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

const obter = async (id: number): Promise<Aluno> => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export default {
  listar,
  obter,
};
