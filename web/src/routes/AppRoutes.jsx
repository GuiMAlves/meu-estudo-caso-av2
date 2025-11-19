import { Routes, Route } from "react-router-dom";
import ListaAlunos from "../pages/ListaAlunos.jsx";
import DetalhesAluno from "../pages/DetalhesAluno.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListaAlunos />} />
      <Route path="/aluno/:id" element={<DetalhesAluno />} />
    </Routes>
  );
}