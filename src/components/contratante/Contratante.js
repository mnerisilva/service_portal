function Contratante({ lista }) {
  console.log("De dentro do componente:");
  console.log(lista);
  return (
    <>
      {lista.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </>
  );
}

export default Contratante;
