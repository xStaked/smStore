import React from "react";
import Card from "../components/Card";
import { samsungBrands } from "../data/samsung";

export default function samsung() {
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        {samsungBrands.map((item, ind) => (
          <Card
            imageURL={item.image}
            name={item.model}
            pulgadas={item.features.pulgadas}
            procesador={item.features.procesador}
            almacenamiento={item.features.rom}
            ram={item.features.ram}
            camara={item.features.camera}
            os={item.features.os}
            peso={item.features.peso}
            resolucion={item.features.resolucion}
            bateria={item.features.bateria}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}
