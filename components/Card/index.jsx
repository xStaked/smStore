import React from "react";

function Card(dispositivo) {
  return (
    <>
      <div className="bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 m-8">
        <div className="h-340px ">
          <img
            src="https://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png"
            alt=""
            className="w-full flex-shrink-0"
          />
        </div>

        <h3 className="text-white text-base font-medium tracking-tight text-center mt-2">
          Iphone 13 pro{" "}
        </h3>
        <p className="text-slate-400 mt-2 text-sm">
          <b>Especificaciones:</b>
        </p>
        <p className="text-slate-400 mt-2 pl-2 text-sm">
          Pantalla: 6.1", 1170 x 2532 pixels
          <br />
          Procesador: Apple A15 Bionic
          <br />
          Almacenamiento: 256GB
          <br />
          Expansión: sin microSD
          <br />
          Cámara: Cuádruple, 12MP+12MP +12MP+TOF 3D
          <br />
          OS: iOS 15
          <br />
          Perfil: 7.7 mm
          <br />
          Peso: 204 g<br />
        </p>
      </div>
    </>
  );
}

export default Card;
