import { useState, useEffect } from "react";
import { Input } from "./formDesktop";

enum Tipo {
  texto = "texto",
  numero = "number",
}

export function Form() {
  const [cedula, setCedula] = useState(0);

  const manejarCambioCedula = (e: object) => {
    const nuevaCedula = e.target.value.trim();
		if(nuevaCedula.length > 5){
			setCedula(nuevaCedula);
		}
  };

	useEffect(() => {
		console.log(cedula);
		console.log(cedula);
	},[cedula])

  return (
    <>
      <form>
        <Input type={Tipo.numero} placeholder="cedula" manejarCambio={manejarCambioCedula}></Input>
      </form>
    </>
  );
}
