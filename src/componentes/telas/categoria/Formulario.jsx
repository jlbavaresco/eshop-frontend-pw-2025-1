import { useContext } from 'react'
import Alerta from '../../comuns/Alerta';
import CategoriaContext from './CategoriaContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Formulario() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(CategoriaContext);

    return (
        <Modal show={exibirForm} onHide={() => setExibirForm(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Categoria</Modal.Title>
            </Modal.Header>
            <form id="formulario" onSubmit={acaoCadastrar}>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Alerta alerta={alerta} />
                            <Col xs={12} md={12}>
                                <FloatingLabel controlId="txtCodido" label="Código" className="mb-3">
                                    <Form.Control type="text" readOnly name="codigo"
                                        value={objeto.codigo}
                                        onChange={handleChange} />
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} md={12}>
                                <FloatingLabel controlId="txtNome" label="Nome" className="mb-3">
                                    <Form.Control type="text" required name="nome"
                                        value={objeto.nome}
                                        onChange={handleChange} placeholder="Informe o nome" />
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setExibirForm(false)}>
                        Fechar
                    </Button>
                    <Button variant="success" type="submit">
                        Salvar  <i className="bi bi-save"></i>
                    </Button>
                </Modal.Footer>
            </form>
        </Modal>
    )
}

export default Formulario;