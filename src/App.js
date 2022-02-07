import { useState, useEffect } from "react";
import Contratante from "./components/contratante/Contratante";
import "./App.css";
import { contratante } from "./api/api";
function App() {
  const [list, setList] = useState(contratante);
  useEffect(() => {}, []);

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <ul>
        <Contratante lista={list} />
      </ul>
      <div className="row">
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-green">
                6%
                <i className="fa fa-chevron-up"></i>
              </div>
              <div className="h1 m-0">43</div>
              <div className="text-muted mb-4">New Tickets</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-red">
                -3%
                <i className="fa fa-chevron-down"></i>
              </div>
              <div className="h1 m-0">17</div>
              <div className="text-muted mb-4">Closed Today</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-green">
                9%
                <i className="fa fa-chevron-up"></i>
              </div>
              <div className="h1 m-0">7</div>
              <div className="text-muted mb-4">New Replies</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-green">
                3%
                <i className="fa fa-chevron-up"></i>
              </div>
              <div className="h1 m-0">27.3K</div>
              <div className="text-muted mb-4">Followers</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-red">
                -2%
                <i className="fa fa-chevron-down"></i>
              </div>
              <div className="h1 m-0">$95</div>
              <div className="text-muted mb-4">Daily Earnings</div>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <div className="card">
            <div className="card-body p-3 text-center">
              <div className="text-right text-red">
                -1%
                <i className="fa fa-chevron-down"></i>
              </div>
              <div className="h1 m-0">621</div>
              <div className="text-muted mb-4">Products</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Development Activity</h3>
            </div>
            <div className="table-responsive">
              <table className="table card-table table-striped table-vcenter">
                <thead>
                  <tr>
                    <th colSpan="2">User</th>
                    <th>Commit</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="w-1">
                      <span
                        className="avatar"
                        style={{
                          backgroundImage: "url(assets/faces/male/9.jpg)",
                        }}
                      ></span>
                    </td>
                    <td>Ronald Bradley</td>
                    <td>Initial commit</td>
                    <td className="text-nowrap">May 6, 2018</td>
                    <td className="w-1">
                      <a href="" className="icon">
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="avatar">BM</span>
                    </td>
                    <td>Russell Gibson</td>
                    <td>Main structure</td>
                    <td className="text-nowrap">April 22, 2018</td>
                    <td>
                      <a href="" className="icon">
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span
                        className="avatar"
                        style={{
                          backgroundImage: "url(assets/faces/female/1.jpg)",
                        }}
                      ></span>
                    </td>
                    <td>Beverly Armstrong</td>
                    <td>Left sidebar adjustments</td>
                    <td className="text-nowrap">April 15, 2018</td>
                    <td>
                      <a href="" className="icon">
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span
                        className="avatar"
                        style={{
                          backgroundImage: "url(assets/faces/male/4.jpg)",
                        }}
                      ></span>
                    </td>
                    <td>Bobby Knight</td>
                    <td>Topbar dropdown style</td>
                    <td className="text-nowrap">April 8, 2018</td>
                    <td>
                      <a href="" className="icon">
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span
                        className="avatar"
                        style={{
                          backgroundImage: "url(assets/faces/female/11.jpg)",
                        }}
                      ></span>
                    </td>
                    <td>Sharon Wells</td>
                    <td>Fixes #625</td>
                    <td className="text-nowrap">April 9, 2018</td>
                    <td>
                      <a href="" className="icon">
                        <i className="fa fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-md-6">
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
        </div>
      </div>

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
