function TableContratante({ lista }) {
  return (
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
                >
                  {item.foto ? "" : item.nome.substr(0, 2).toUpperCase()}
                </span>
              </td>
              <td>{item.nome}</td>
              <td>{item.codigo_cpf}</td>
              <td>{item.endereco[0].municipio}</td>
              <td className="w-1"></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableContratante;
