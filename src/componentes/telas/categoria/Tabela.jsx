import { useContext } from "react";
import CategoriaContext from "./CategoriaContext";
import Alerta from "../../comuns/Alerta";
import { Table, Button } from "react-bootstrap";

function Tabela() {

    const { alerta, listaObjetos, remover, 
        novoObjeto, editarObjeto } = useContext(CategoriaContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Categorias</h1>
            <Alerta alerta={alerta} />
            <Button variant="primary" onClick={()=> novoObjeto()}>
                Novo <i className="bi bi-file-earmark-plus"></i>
            </Button>
            {listaObjetos.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {
                listaObjetos.length > 0 &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>Código</th>
                            <th>Nome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObjetos.map((objeto) => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                        <Button variant="info" onClick={()=>
                                            editarObjeto(objeto.codigo)
                                        }>
                                            <i class="bi bi-pencil-square"></i>
                                        </Button>
                                        <Button variant="danger"
                                            onClick={() => remover(objeto.codigo)}>
                                            <i class="bi bi-trash-fill"></i>
                                        </Button>
                                    </td>
                                    <td>{objeto.codigo}</td>
                                    <td>{objeto.nome}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
        </div>
    )
}

export default Tabela;