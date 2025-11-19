import { Routes, Route } from "react-router-dom";
import ListaProdutos from "../pages/ListaProdutos.jsx";
import DetalhesProduto from "../pages/DetalhesProduto.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListaProdutos />} />
      <Route path="/product/:id" element={<DetalhesProduto />} />
    </Routes>
  );
}