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
  //const values = true;
  const [values, setValues] = useState(true);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleStatus(status) {
    setShow(status);
  }

  function handleShow(breakpoint) {
    console.log("v: " + breakpoint);
    console.log("BREAKPOINT: " + breakpoint);
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
            {
              <Button
                variant="btn btn-ghost-darky"
                className="btn btn-outline-secondary me-2"
                onClick={() => handleShow(values)}
              >
                <i className="fa fa-plus fa-2x"></i>
              </Button>
            }
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
                          <i className="fa fa-trash text-dark"></i>
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
                        <span className="legend-indicator bg-warning"></span>
                        {item.status}
                      </td>
                      <td className="w-1">
                        <a href="" className="icon">
                          <i className="fa fa-trash text-dark"></i>
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

          <span className="badge badge-soft-success">
            <i className="tio-trending-up"></i> 12.5%
          </span>
          <span className="text-body font-size-sm ml-1">from 70,104</span>
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
            <form>
              <div className="row">
                <div className="col-lg-4">
                  <h3>Dados pessoais</h3>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome"
                    />
                    <label htmlFor="nome">Nome</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="cpf"
                      placeholder="Cpf"
                    />
                    <label htmlFor="cpf">Cpf</label>
                  </div>
                  <div class="form-floating">
                    <select
                      class="form-select"
                      id="pessoa"
                      aria-label="Física / Jurídica"
                    >
                      <option selected>Selecione...</option>
                      <option value="1">Física</option>
                      <option value="2">Jurídica</option>
                    </select>
                    <label for="pessoa">Pessoa</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h3>Endereço</h3>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="rua"
                      placeholder="Rua"
                    />
                    <label htmlFor="rua">Rua</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="numero"
                      placeholder="Número"
                    />
                    <label htmlFor="floatingPassword">Número</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="complemento"
                      placeholder="Complemento"
                    />
                    <label htmlFor="complemento">Complemento</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="bairro"
                      placeholder="Bairro"
                    />
                    <label htmlFor="bairro">Bairro</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="cep"
                      placeholder="Cep"
                    />
                    <label htmlFor="municipio">Cep</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="municipio"
                      placeholder="Município"
                    />
                    <label htmlFor="municipio">Município</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="uf"
                      placeholder="UF"
                    />
                    <label htmlFor="uf">UF</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h3>Dados de contato</h3>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                </div>
              </div>
            </form>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Content;
