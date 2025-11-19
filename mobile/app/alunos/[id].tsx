import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import alunoService, { Aluno } from "../../script/alunoService";
import FormAluno from "../../components/FormProduto";

export default function EditarProduto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [aluno, setAluno] = useState<Aluno>({ });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
      alunoService.obter(Number(id)).then((data) => {
        setAluno({id: data.id, nome: data.nome, turma: data.turma, curso: data.curso, matricula: data.matricula });
        setLoading(false);
      });
    }
    , [id]);

  const handleChange = (name: keyof Aluno, value: string) => {
    setAluno((prev) => ({
      ...prev,
      [name]: name === "matricula" ? value : value,
    }));
  };

  const handleSubmit = async (data?: any) => {
  };

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FormAluno
        aluno={aluno}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => {
          if (router.canGoBack?.()) {
            router.back();
          } else {
            router.replace("/alunos");
          }
        }}
      />
    </View>
  );
}
