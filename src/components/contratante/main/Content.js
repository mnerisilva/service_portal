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
import TableContratante from "../contratante_table/TableContratante";
import TableDeclarante from "../contratante_table/TableDeclarantes";

function Content({ lista, add }) {
  const [values, setValues] = useState(true);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const [nomecontratante, setNomecontratante] = useState("");

  // campos formulário
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [pessoa, setPessoa] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [uf, setUf] = useState("");
  const [celular, setCelular] = useState("");
  const [fixo, setFixo] = useState("");
  const [whats, setWhats] = useState("");

  function handleInput(e) {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "nome") setNome(e.target.value);
    if (e.target.name === "cpf") setCpf(e.target.value);
    if (e.target.name === "pessoa") setPessoa(e.target.value);
    if (e.target.name === "rua") setRua(e.target.value);
    if (e.target.name === "numero") setNumero(e.target.value);
    if (e.target.name === "complemento") setComplemento(e.target.value);
    if (e.target.name === "bairro") setBairro(e.target.value);
    if (e.target.name === "cep") setCep(e.target.value);
    if (e.target.name === "municipio") setMunicipio(e.target.value);
    if (e.target.name === "uf") setUf(e.target.value);
    if (e.target.name === "celular") setCelular(e.target.value);
    if (e.target.name === "fixo") setFixo(e.target.value);
    if (e.target.name === "whats") setWhats(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShow(false);
    console.log("email: " + email);
    console.log("nome: " + nome);
    console.log("cpf: " + cpf);
    console.log("pessoa: " + pessoa);
    console.log("rua: " + rua);
    console.log("numero: " + numero);
    console.log("complemento: " + complemento);
    console.log("bairro: " + bairro);
    console.log("cep: " + cep);
    console.log("municipio: " + municipio);
    console.log("uf: " + uf);
    console.log("celular: " + celular);
    console.log("fixo: " + fixo);
    console.log("whats: " + whats);
    let nextId = lista.length + 1;
    let _pessoa = pessoa === "1" ? "fisica" : "juridica";
    add(montaObjeto(nextId, _pessoa));
  }

  function handleShow(breakpoint) {
    console.log("v: " + breakpoint);
    console.log("BREAKPOINT: " + breakpoint);
    setFullscreen(breakpoint);
    setShow(true);
  }

  function montaObjeto(nextId, _pessoa) {
    return {
      id: nextId,
      codigo_cpf: cpf,
      nome: nome,
      identificacao: cpf,
      pessoa: _pessoa,
      foto: "",
      email: email,
      endereco: [
        {
          rua: rua,
          numero: numero,
          complemento: complemento,
          bairro: bairro,
          cep: cep,
          municipio: municipio,
          uf: uf,
        },
      ],
      contato: [
        {
          celular: celular,
          fixo: fixo,
          whats: whats,
        },
      ],
      declaracao: [],
    };
  }

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
                variant=""
                className="btn btn-outline-secondary me-2 shadow-none"
                onClick={() => handleShow(values)}
              >
                <i className="fa fa-plus-circle fa-2x"></i>
              </Button>
            }
          </div>
          <div className="table-responsive">
            <TableContratante lista={lista} />
          </div>
        </div>
      </div>

      <div className="col-md-7">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Declarantes de: {nomecontratante}</h3>
          </div>
          <div className="table-responsive">
            <TableDeclarante lista={lista} />
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
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-4 tab-form">
                  <h3>Dados pessoais</h3>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      name="email"
                      onChange={handleInput}
                      value={email}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      placeholder="Nome"
                      name="nome"
                      onChange={handleInput}
                      value={nome}
                    />
                    <label htmlFor="nome">Nome</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="cpf"
                      placeholder="Cpf"
                      name="cpf"
                      onChange={handleInput}
                      value={cpf}
                    />
                    <label htmlFor="cpf">Cpf</label>
                  </div>
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="pessoa"
                      aria-label="Física / Jurídica"
                      name="pessoa"
                      onChange={handleInput}
                      value={pessoa}
                    >
                      <option value="DEFAULT" disabled>
                        Selecione...
                      </option>
                      <option value="1">Física</option>
                      <option value="2">Jurídica</option>
                    </select>
                    <label htmlFor="pessoa">Pessoa</label>
                  </div>
                </div>
                <div className="col-lg-4 tab-form">
                  <h3>Endereço</h3>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="rua"
                      placeholder="Rua"
                      name="rua"
                      onChange={handleInput}
                      value={rua}
                    />
                    <label htmlFor="rua">Rua</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="numero"
                      placeholder="Número"
                      name="numero"
                      onChange={handleInput}
                      value={numero}
                    />
                    <label htmlFor="floatingPassword">Número</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="complemento"
                      placeholder="Complemento"
                      name="complemento"
                      onChange={handleInput}
                      value={complemento}
                    />
                    <label htmlFor="complemento">Complemento</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="bairro"
                      placeholder="Bairro"
                      name="bairro"
                      onChange={handleInput}
                      value={bairro}
                    />
                    <label htmlFor="bairro">Bairro</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="cep"
                      placeholder="Cep"
                      name="cep"
                      onChange={handleInput}
                      value={cep}
                    />
                    <label htmlFor="municipio">Cep</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="municipio"
                      placeholder="Município"
                      name="municipio"
                      onChange={handleInput}
                      value={municipio}
                    />
                    <label htmlFor="municipio">Município</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="uf"
                      placeholder="UF"
                      name="uf"
                      onChange={handleInput}
                      value={uf}
                    />
                    <label htmlFor="uf">UF</label>
                  </div>
                </div>
                <div className="col-lg-4 tab-form">
                  <h3>Dados de contato</h3>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="celular"
                      placeholder="Celular"
                      name="celular"
                      onChange={handleInput}
                      value={celular}
                    />
                    <label htmlFor="celular">Celular</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="fixo"
                      placeholder="Telefone fixo"
                      name="fixo"
                      onChange={handleInput}
                      value={fixo}
                    />
                    <label htmlFor="fixo">Telefone fixo</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="whats"
                      placeholder="WhatsApp"
                      name="whats"
                      onChange={handleInput}
                      value={whats}
                    />
                    <label htmlFor="whats">WhatsApp</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary salvar-cadastro-contratante"
              >
                Salvar
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary cancelar-cadastro-contratante"
                onClick={() => setShow(false)}
              >
                Cancelar
              </button>
            </form>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Content;
