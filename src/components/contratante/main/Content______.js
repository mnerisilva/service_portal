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

  function handleForm(e) {
    e.preventDefault();
    console.log("Submeteu o form");
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
      <Modal values={values} fullscreen={fullscreen} show={show} />
    </div>
  );
}

export default Content;
