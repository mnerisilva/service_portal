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
                variant="btn btn-ghost-darky"
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
            {/*<table className="table card-table table-striped table-vcenter">*/}
            <table className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle table-striped">
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
            <table className="table table-lg table-borderless table-thead-bordered table-nowrap table-align-middle">
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
                      <td>
                        <span class="legend-indicator bg-warning"></span>
                        {item.status}
                      </td>
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

      <a className="card card-hover-shadow h-100" href="#">
        <div className="card-body">
          <h6 className="card-subtitle">Total Users</h6>

          <div className="row align-items-center gx-2 mb-1">
            <div className="col-6">
              <span className="card-title h2">72,540</span>
            </div>

            <div className="col-6"></div>
          </div>

          <span class="badge badge-soft-success">
            <i class="tio-trending-up"></i> 12.5%
          </span>
          <span class="text-body font-size-sm ml-1">from 70,104</span>
        </div>
      </a>

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark text-bolder">
            Modal - <span className="modalTitle">CADASTRO DE CONTRATANTE</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <Form>
              <h2>Dados pessoais</h2>
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
                controlId="formHorizontalNome"
              >
                <Form.Label column sm={1}>
                  Nome
                </Form.Label>
                <Col sm={3}>
                  <Form.Control
                    type="text"
                    placeholder="nome"
                    variant="form-control-light"
                  />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCpf"
              >
                <Form.Label column sm={1}>
                  Cpf
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="text" placeholder="cpf" />
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={1}>
                    Tipo/Pessoa
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Check
                      type="radio"
                      label="Física"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Jurídica"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                  </Col>
                </Form.Group>
                <h2>Endereço</h2>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalRua"
                >
                  <Form.Label column sm={1}>
                    Rua
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="rua" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalNumero"
                >
                  <Form.Label column sm={1}>
                    Número
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control
                      type="text"
                      placeholder="Número"
                      variant="form-control-light"
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalComplemento"
                >
                  <Form.Label column sm={1}>
                    Compelmento
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="complemento" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalBairro"
                >
                  <Form.Label column sm={1}>
                    Bairro
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="bairro" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalCep"
                >
                  <Form.Label column sm={1}>
                    Cep
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control
                      type="text"
                      placeholder="cep"
                      variant="form-control-light"
                    />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalMunicipio"
                >
                  <Form.Label column sm={1}>
                    Município
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="municipio" />
                  </Col>
                </Form.Group>

                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formHorizontalUf"
                >
                  <Form.Label column sm={1}>
                    Uf
                  </Form.Label>
                  <Col sm={3}>
                    <Form.Control type="text" placeholder="Uf" />
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
                  <Button type="submit">Salvar</Button>
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
