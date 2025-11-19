import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { Card, Button, Text } from "react-native-paper";
import { useRouter } from "expo-router";
import alunoService, { Aluno } from "../../script/alunoService";

export default function Produtos() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const carregarAlunos = async () => {
    setLoading(true);
    try {
      const lista = await alunoService.listar();
      setAlunos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  if (loading)
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={alunos}
        keyExtractor={(item) => item.id?.toString() ?? ""}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 12 }}>
            <Card.Title
              title={item.nome}
              subtitle={item.matricula}
            />
            <Card.Actions>
              <Button
                mode="outlined"
                onPress={() => router.replace(`/alunos/${item.id}`)}
                style={{ marginRight: 8 }}
                labelStyle={{ color: "#c3680cff" }}
              >
                Detalhes
              </Button>
            </Card.Actions>
          </Card>
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            Nenhum aluno cadastrado.
          </Text>
        }
      />
    </View>
  );
}
