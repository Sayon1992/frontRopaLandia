import React, { useEffect, useState } from "react";
// import productosTienda from "../../jsonPruebas/verTiendaElegida.json";
import CompDrawer from "../productos/CompDrawer";
import articulosTienda from "../../jsonPruebas/articulos.json";
import CardProducto from "../productos/CardProducto";

const VerTienda = () => {
  const [articulos, setArticulos] = useState([]);
  const [cardArticulo, setCardArticulo] = useState([]);

  useEffect(() => {
    setArticulos(articulosTienda);
    setCardArticulo([
      ...cardArticulo,
      ...articulosTienda.map(
        (article) => article[0][`${Object.keys(article[0])}`]
      ),
    ]);
    console.log(cardArticulo);
    // eslint-disable-next-line
  }, [articulos]);

  return (
    <div>
      <CompDrawer articulos={articulos} />
      {/* eslint-disable-next-line}*/}
      {cardArticulo.map((items) => {
        items.map((item) => {
          console.log(item);
          return (
            <CardProducto
              nombre={item.id}
              key={item.id}
              precio={item.precio}
              imagen={item.imagen}
            />
          );
        });
      })}
    </div>
  );
};

export default VerTienda;
