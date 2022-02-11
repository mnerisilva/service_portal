function TableDeclarante({ lista }) {
  return (
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
  );
}

export default TableDeclarante;
