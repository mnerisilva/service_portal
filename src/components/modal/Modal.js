import {
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
function Modal({ values, fullscreen, show, handleStatus }) {
  return (
    <Modal
      show={show}
      fullscreen={fullscreen}
      onHide={() => handleStatus(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-dark text-bolder">
          Modal - <span className="modalTitle">CADASTRO DE CONTRATANTE</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Teste</label>
        <input type="text" placeholder="teste" />
        <button type="submit">Salvar</button>
      </Modal.Body>
    </Modal>
  );
}

export default Modal;
