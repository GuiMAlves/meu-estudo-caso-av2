import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alunoService from "../services/alunoService";

export default function DetalhesProduto() {
    const { id } = useParams();
    const [aluno, setAluno] = useState({});

    useEffect(() => {
      alunoService.obter(id).then((data) => {
        setAluno(data);
      });
    }, [id]);

    return (
        <>
            <div class="container">
                <h3 id="form-title">Detalhes do Aluno</h3>
                <div class="card">
                    <div class="mb-3">
                        <strong>ID</strong>&nbsp;
                        <span>{aluno.id}</span>
                    </div>
                    <div class="mb-3">
                        <strong>Nome</strong>&nbsp;
                        <span>{aluno.nome}</span>
                    </div>
                    <div class="mb-3">
                        <strong>Turma</strong>&nbsp;
                        <span>{aluno.turma}</span>
                    </div>
                    <div class="mb-3">
                        <strong>Curso</strong>&nbsp;
                        <span>{aluno.curso}</span>
                    </div>
                    <div class="mb-3">
                        <strong>Matrícula</strong>&nbsp;
                        <span>{aluno.matricula}</span>
                    </div>
                    <div class="d-flex gap-2">
                        <a id="btn-cancel" class="btn btn-secondary" href="/">Voltar</a>
                    </div>
                </div>
            </div>
        </>
    );
}