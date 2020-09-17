import { ApiGeneral } from "../../API/Api";

export const altaTienda = (data) => {
  return async (dispatch, getState) => {
    try {
      await ApiGeneral.post("altaTienda", { data });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};
