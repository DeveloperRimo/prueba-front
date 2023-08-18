// import react from "react";

enum Tipo {
  texto= "texto",
  numero = "number"
}

type Props = {
  type: Tipo,
  placeholder: string,
  manejarCambio: (e: object) => void
}


export function Input(props: Props) {

  return (
    <>
      <div>
        <input type={props.type} placeholder={props.placeholder} onChange={(e) => props.manejarCambio(e)}></input>
      </div>
    </>
  );
}
