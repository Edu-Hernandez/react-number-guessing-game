function Titulo() {
  const nombre = "Edu";
  if (nombre) {
    return <h3>Hola {nombre}</h3>;
  }
  return <h1>Hola mundo</h1>;
}

export default Titulo;
