import { useEffect, useState } from "react";
import alunoService from "../services/alunoService";

export default function ListaAlunos() {
  const [alunos, setAlunos] = useState([]);

  const carregarAlunos = async () => {
    const lista = await alunoService.listar();
    setAlunos(lista);
  };

  useEffect(() => {
    carregarAlunos();
  }, []);

  return (
    <>
      <main class="container py-4">
        <div class="row">
          <div class="col-12">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h3 class="mb-0">Lista de Alunos</h3>
            </div>
            <div class="card">
              <div class="card-body p-2">
                <div class="table-responsive">
                  <table id="alunos-table" class="table table-sm table-hover mb-0">
                    <thead class="table-light">
                      <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Matrícula</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {alunos.map((aluno) => (
                        <tr key={aluno.id}>
                          <td>{aluno.id}</td>
                          <td>{aluno.nome}</td>
                          <td>{aluno.matricula}</td>
                          <td><a href={`/aluno/${aluno.id}`} class= "btn btn-sm btn-primary">Detalhes</a></td>
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