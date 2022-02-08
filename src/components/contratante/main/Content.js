import { useEffect, useState } from "react";
import "./Content.css";
import {
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";

function Content({ lista }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  const [nomecontratante, setNomecontratante] = useState("");
  useEffect(() => {
    setNomecontratante(lista[1].nome);
  }, []);
  return (
    <div className="row">
      <div className="col-lg-5">
        <div className="card">
          <div className="card-header add-contratante">
            <h3 className="card-title">Contratante</h3>
            {values.map((v, idx) => (
              <Button
                variant="outline-secondary"
                key={idx}
                className="btn btn-outline-secondary me-2"
                onClick={() => handleShow(v)}
              >
                <i className="fa fa-plus fa-2x"></i>
                {typeof v === "string" && `below ${v.split("-")[0]}`}
              </Button>
            ))}
          </div>
          <div className="table-responsive">
            <table className="table card-table table-striped table-vcenter">
              <thead>
                <tr>
                  <th colSpan="2">Nome</th>
                  <th>Cpf</th>
                  <th>Cidade</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {lista.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="w-1">
                        <span
                          className="avatar"
                          style={{
                            backgroundImage: `url(${item.foto})`,
                          }}
                        ></span>
                      </td>
                      <td>{item.nome}</td>
                      <td>{item.codigo_cpf}</td>
                      <td>{item.endereco[0].municipio}</td>
                      <td className="w-1">
                        <a href="" className="icon">
                          <i className="fa fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="col-md-7">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Declarantes de: {nomecontratante}</h3>
          </div>
          <div className="table-responsive">
            <table className="table card-table table-striped table-vcenter">
              <thead>
                <tr>
                  <th>Declarante</th>
                  <th>Cpf</th>
                  <th>Número</th>
                  <th>Vínculo</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {lista[1].declaracao.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.declarante}</td>
                      <td>{item.codigo_unico}</td>
                      <td>{item.numero_declaracao}</td>
                      <td>{item.vinculo}</td>
                      <td>{item.status}</td>
                      <td className="w-1">
                        <a href="" className="icon">
                          <i className="fa fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Email
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={1}>
                  Nome
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="text" placeholder="nome" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={1}>
                  Cpf
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="text" placeholder="cpf" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={1}>
                  Tipo
                </Form.Label>
                <Col sm={3}>
                  <Form.Select defaultValue="Choose...">
                    <option>Escolha...</option>
                    <option value="1">Pessoa Física</option>
                    <option value="2">Pessoa Jurídica</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={1}>
                    Radios
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Check
                      type="radio"
                      label="first radio"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="second radio"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="third radio"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 3, offset: 1 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 3, offset: 1 }}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Content;
