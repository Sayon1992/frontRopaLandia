import { ApiGeneral } from "../../API/Api";

export const altaTienda = (data) => {
  return async (dispatch, getState) => {
    try {
      await ApiGeneral("", data, "altaTienda");
    } catch (e) {
      throw new Error(e.message);
    }
  };
};
