import React, { useEffect } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { TextInput, Button } from "react-native-paper";
import { Aluno } from "../script/alunoService";

interface Props {
  aluno: Aluno;
  loading: boolean;
  onChange: (name: keyof Aluno, value: string) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function FormAluno({
  aluno: aluno,
  loading,
  onChange,
  onCancel,
}: Props) {
  const { control, setValue } = useForm({
    defaultValues: {
      id:aluno.id,
      nome: aluno.nome,
      turma: aluno.turma,
      curso: aluno.curso,
      matricula: aluno.matricula,
    },
  });

  useEffect(() => {
    setValue("id", aluno.id);
    setValue("nome", aluno.nome);
    setValue("turma", aluno.turma);
    setValue("curso", aluno.curso);
    setValue("matricula", aluno.matricula);
  }, [aluno, setValue]);

  return (
    <View style={{ width: "100%" }}>
      <Controller
        control={control}
        name="id"
        render={({ field: { onChange: onChangeField, value }, fieldState }) => (
          <TextInput
            disabled
            label="Id"
            inputMode="decimal"
            value={value}
            mode="outlined"
            style={{ marginBottom: 16, backgroundColor: "#b5b4b4ff" }}
            underlineColor="#1976d2"
            selectionColor="#1976d2"
            textColor="#222"
          />
        )}
      />
      <Controller
        control={control}
        name="nome"
        rules={{ required: "Nome obrigatório" }}
        render={({ field: { onChange: onChangeField, value }, fieldState }) => (
          <TextInput
            disabled
            label="Nome"
            value={value}
            mode="outlined"
            style={{ marginBottom: 16, backgroundColor: "#b5b4b4ff" }}
            autoFocus
            textColor="#222"
            underlineColor="#1976d2"
            selectionColor="#1976d2"
          />
        )}
      />
      <Controller
        control={control}
        name="turma"
        render={({ field: { onChange: onChangeField, value }, fieldState }) => (
          <TextInput
            disabled
            label="Turma"
            value={value}
            mode="outlined"
            style={{ marginBottom: 16, backgroundColor: "#b5b4b4ff" }}
            underlineColor="#1976d2"
            selectionColor="#1976d2"
            textColor="#222"
          />
        )}
      />
      <Controller
        control={control}
        name="curso"
        render={({ field: { onChange: onChangeField, value }, fieldState }) => (
          <TextInput
            disabled
            label="Curso"
            value={value}
            mode="outlined"
            style={{ marginBottom: 16, backgroundColor: "#b5b4b4ff" }}
            underlineColor="#1976d2"
            selectionColor="#1976d2"
            textColor="#222"
          />
        )}
      />
      <Controller
        control={control}
        name="matricula"
        render={({ field: { onChange: onChangeField, value }, fieldState }) => (
          <TextInput
            disabled
            label="Matricula"
            value={value}
            mode="outlined"
            style={{ marginBottom: 16, backgroundColor: "#b5b4b4ff" }}
            underlineColor="#1976d2"
            selectionColor="#1976d2"
            textColor="#222"
          />
        )}
      />

      <Button
        mode="outlined"
        onPress={onCancel}
        labelStyle={{ color: "#c3680cff" }}
      >
        Voltar
      </Button>
    </View>
  );
}
