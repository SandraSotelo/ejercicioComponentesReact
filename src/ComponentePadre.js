import ComponenteHijo from "./ComponenteHijo";

const ComponentePadre = () => {
  const varString = `Esto es un saludo que envía el padre`;

  return (
    <>
      <div>
        <h1>Bienvenidos a este taller</h1>
        <ComponenteHijo mensajePadre={varString} />
      </div>
    </>
  );
};

export default ComponentePadre;
