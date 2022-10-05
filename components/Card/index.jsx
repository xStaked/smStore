import React from "react";
import Image from "next/image";

function Card({
  imageURL,
  name,
  pulgadas,
  procesador,
  almacenamiento,
  camara,
  os,
  peso,
  resolucion,
  bateria,
  ram,
}) {
  return (
    <>
      <div className="bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 m-8">
        <div className="h-340px flex">
          <Image
            src={imageURL}
            alt={name}
            width="250"
            height="250"
            className="w-full flex-shrink-0"
          />
        </div>

        <h3 className="text-white text-base font-medium tracking-tight text-center mt-2">
          {name}
        </h3>
        <p className="text-slate-400 mt-2 text-sm">
          <b>Especificaciones:</b>
        </p>
        <p className="text-slate-400 mt-2 pl-2 text-sm">
          Pantalla: {pulgadas}
          <br />
          Resolución: {resolucion}
          <br />
          Procesador:{procesador}
          <br />
          Bateria: {bateria}
          <br />
          Almacenamiento: {almacenamiento} {ram}
          <br />
          Cámara: {camara}
          <br />
          OS: {os}
          <br />
          Peso: {peso}
          <br />
        </p>
      </div>
    </>
  );
}

export default Card;
