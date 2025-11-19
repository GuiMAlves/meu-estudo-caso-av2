import { Stack } from "expo-router";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { useEffect } from "react";
import { StatusBar } from "react-native";

// Tema global claro com azul
const lightBlueTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#f5fafd",
    surface: "#fff",
    primary: "#1976d2",
    text: "#222",
    onSurface: "#222",
    onBackground: "#222",
  },
};

export default function RootLayout() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#1976d2");
  }, []);

  return (
    <PaperProvider theme={lightBlueTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#020202ff" },
          headerTintColor: "#ff8913ff",
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#e3e0e0ff" },
        }}
      >
        <Stack.Screen
          name="alunos/index"
          options={{ title: "Lista de Alunos" }}
        />

        <Stack.Screen
          name="alunos/[id]"
          options={{ title: "Detalhes do Aluno" }}
        />
      </Stack>
    </PaperProvider>
  );
}
