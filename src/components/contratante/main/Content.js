import { useEffect, useState } from "react";

function Content({ lista }) {
  const [nomecontratante, setNomecontratante] = useState("");
  useEffect(() => {
    setNomecontratante(lista[1].nome);
  }, []);
  return (
    <div className="row">
      <div className="col-lg-5">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Contratante</h3>
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

      {/*<div className="col-md-6">
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body text-center">
                <div className="h5">New feedback</div>
                <div className="display-4 font-weight-bold mb-4">62</div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-red"
                    style={{ width: "28%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body text-center">
                <div className="h5">Today profit</div>
                <div className="display-4 font-weight-bold mb-4">$652</div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-green"
                    style={{ width: "84%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body text-center">
                <div className="h5">New feedback</div>
                <div className="display-4 font-weight-bold mb-4">62</div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-red"
                    style={{ width: "28%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body text-center">
                <div className="h5">Today profit</div>
                <div className="display-4 font-weight-bold mb-4">$652</div>
                <div className="progress progress-sm">
                  <div
                    className="progress-bar bg-green"
                    style={{ width: "84%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </div>
  );
}

export default Content;
