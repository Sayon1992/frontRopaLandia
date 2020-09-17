import { ApiGeneral } from "../../API/Api";

export const ALTA_PRODUCTO = "ALTA_PRODUCTO";
export const PRODUCTOS_TIENDA = "PRODUCTOS_TIENDA";
export const PRODUCTOS_TENDENCIA = "PRODUCTOS_TENDENCIA";
export const VER_PRODUCTO = "VER_PRODUCTO";

export const getProductosTendencia = () => {};

export const getProductosTienda = () => {};

export const altaProducto = (values, picture) => {
  return async (dispatch, getState) => {
    const response = await ApiGeneral.post("altaProducto", { values, picture });
    const resData = await response.data;
    dispatch({ type: ALTA_PRODUCTO, productos: resData });
  };
};

export const getProducto = (id, tienda) => {
  return async (dispatch, getState) => {
    const response = await ApiGeneral.post("getProducto", { id, tienda });
    const resData = await response.data;
    dispatch({ type: VER_PRODUCTO, producto: resData });
  };
};
