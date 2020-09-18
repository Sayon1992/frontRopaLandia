import { ApiGeneral } from "../../API/Api";

export const LOGIN = "LOGIN";
export const SIGN_UP = "SIGN_UP";

export const login = (login) => {
  return async (dispatch, getState) => {
    try {
      const response = await ApiGeneral.post("loguearse", {
        login,
      });
      const resData = await response.data;
      dispatch({
        type: LOGIN,
        resData,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};

export const signUpUsuario = (data) => {
  return async (dispatch, getState) => {
    try {
      await ApiGeneral.post("registrarUsuario", {
        data,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};

export const signUpTienda = (data) => {
  return async (dispatch, getState) => {
    try {
      await ApiGeneral.post("registrarTienda", {
        data,
      });
    } catch (e) {
      throw new Error(e.message);
    }
  };
};
