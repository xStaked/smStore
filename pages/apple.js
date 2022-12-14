import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { appleBrands } from "../data/apple";

export default function brands() {
  return (
    <Layout>
       {appleBrands.map((item, ind) => (
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
    </Layout>
  );
}
