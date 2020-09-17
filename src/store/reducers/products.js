import { VER_PRODUCTO } from "../actions/products";

const initialState = {
  idProductoSeleccionado: "",
  verProducto: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case VER_PRODUCTO:
      return {
        ...state,
        verProducto: action.producto,
      };
    default:
      return state;
  }
};
