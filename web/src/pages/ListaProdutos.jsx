import { useEffect, useState } from "react";
import produtoService from "../services/produtoService";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  const carregarProdutos = async () => {
    const lista = await produtoService.listar();
    setProdutos(lista);
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  return (
    <>
      <main class="container py-4">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="mb-0">Lista de Produtos</h3>
            </div>
            <div class="card">
              <div class="card-body p-2">
                <div class="table-responsive">
                  <table id="alunos-table" class="table table-sm table-hover mb-0">
                    <thead class="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Produto</th>
                        <th>Preço</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {produtos.map((produto) => (
                        <tr key={produto.id}>
                          <td>{produto.id}</td>
                          <td>{produto.nome}</td>
                          <td>R$ {produto.preco}</td>
                          <td><a href={`/product/${produto.id}`} class= "btn btn-sm btn-primary">Detalhes</a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}