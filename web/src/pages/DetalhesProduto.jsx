import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import produtoService from "../services/produtoService";

export default function DetalhesProduto() {
    const { id } = useParams();
    const [produto, setProduto] = useState({});

    useEffect(() => {
      produtoService.obter(id).then((data) => {
        setProduto(data);
      });
    }, [id]);

    return (
        <>
            <div class="container">
                <h3 id="form-title">Detalhes do Produto</h3>
                <div class="card">
                    <div class="mb-3">
                        <strong>ID</strong>&nbsp;
                        <span>{produto.id}</span>
                    </div>
                    <div class="mb-3">
                        <strong>Produto</strong>&nbsp;
                        <span>{produto.nome}</span>
                    </div>
                    <div class="mb-3">
                        <strong>Preço</strong>&nbsp;
                        <span>R$ {produto.preco}</span>
                    </div>
                    <div class="d-flex gap-2">
                        <a id="btn-cancel" class="btn btn-secondary" href="/">Cancelar</a>
                    </div>
                </div>
            </div>
        </>
    );
}