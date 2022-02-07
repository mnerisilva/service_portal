import { useState, useEffect } from "react";
import "./App.css";
import { contratante } from "./api/api";
import Infosection from "./components/infosection/Infosection";
import Content from "./components/contratante/main/Content";
function App() {
  const [list, setList] = useState(contratante);
  const [listpending, setListpending] = useState([]);
  const [pendingcount, setPendingcount] = useState(0);
  const [concludedcount, setConcludedcount] = useState(0);
  useEffect(() => {
    console.log("entrou no useEffect");
    let pending_contador = 0;
    let concluded_contador = 0;
    list.forEach(function (elemento) {
      elemento.declaracao.forEach(function (ele) {
        if (ele.status === "pendente") {
          pending_contador++;
          setPendingcount(pending_contador);
        }
        if (ele.status === "concluida") {
          concluded_contador++;
          setConcludedcount(concluded_contador);
        }
      });
    });
  }, [list, pendingcount, concludedcount]);

  return (
    <div className="container-fluid">
      <h1>Dashboard</h1>
      <Infosection
        pendingcount={pendingcount}
        concludedcount={concludedcount}
      />

      <Content lista={list} />

      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <span className="stamp stamp-md bg-blue mr-3">
                <i className="fa fa-dollar"></i>
              </span>
              <div>
                <h4 className="m-0">
                  <a href="">
                    132
                    <small>Sales</small>
                  </a>
                </h4>
                <small className="text-muted">12 waiting payments</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <span className="stamp stamp-md bg-green mr-3">
                <i className="fa fa-shopping-cart"></i>
              </span>
              <div>
                <h4 className="m-0">
                  <a href="">
                    78
                    <small>Orders</small>
                  </a>
                </h4>
                <small className="text-muted">32 shipped</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <span className="stamp stamp-md bg-red mr-3">
                <i className="fa fa-users"></i>
              </span>
              <div>
                <h4 className="m-0">
                  <a href="">
                    1,352
                    <small>Members</small>
                  </a>
                </h4>
                <small className="text-muted">163 registered today</small>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-lg-3">
          <div className="card p-3">
            <div className="d-flex align-items-center">
              <span className="stamp stamp-md bg-yellow mr-3">
                <i className="fa fa-envelope"></i>
              </span>
              <div>
                <h4 className="m-0">
                  <a href="">
                    132
                    <small>Comments</small>
                  </a>
                </h4>
                <small className="text-muted">16 waiting</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
