import axios from "axios";
import { Dispatch } from "redux";

const getBaseUrl = () => {
  return "https://g7vercel.vercel.app/";
};

export const getGold = () => (dispatch: Dispatch) => {
  const baseUrl = getBaseUrl();
  const paths = [
    "ikd",
    "fw/altin/gram",
    "fw/altin/ceyrek",
    "fw/altin/yarim",
    "fw/altin/tam",
    "fw/doviz/usd",
    "fw/doviz/eur",
    "fw/doviz/gbp",
    "namaz",
  ];
  paths.forEach((path) => {
    // Clear
    dispatch({
      type: "GET_GOLD_SUCCESS",
      payload: {
        data: null,
        path: path === "ikd" || path === "namaz" ? path : path.split("/")[2],
      },
    });

    // Fill
    axios.get(baseUrl + path).then((r) =>
      dispatch({
        type: "GET_GOLD_SUCCESS",
        payload: {
          data: r.data,
          path: path === "ikd" || path === "namaz" ? path : path.split("/")[2],
        },
      })
    );
  });
};

export const loadOldGold = () => (dispatch: Dispatch) => {
  dispatch({
    type: "LOAD_OLD_GOLD",
  });
};

export const setModalOpen = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_MODAL_OPEN",
    payload: data,
  });
};

export const setModalTitle = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_MODAL_TITLE",
    payload: data,
  });
};

export const setModalBody = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_MODAL_BODY",
    payload: data,
  });
};

export const setProMode = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_PRO_MODE",
    payload: data,
  });
};

export const setFavs = (data: any) => (dispatch: Dispatch) => {
  dispatch({
    type: "SET_FAVS",
    payload: data,
  });
};

export const toggleEditFavs = () => (dispatch: Dispatch) => {
  dispatch({
    type: "TOGGLE_EDIT_FAVS",
  });
};

export const toggleIsDark = () => (dispatch: Dispatch) => {
  dispatch({
    type: "TOGGLE_IS_DARK",
  });
};

export const getIkdHistory = (date: string) => (dispatch: Dispatch) => {
  const baseUrl = getBaseUrl();

  // Clear
  dispatch({
    type: "GET_IKD_HISTORY_SUCCESS",
    payload: [],
  });

  // Fill
  axios.get(baseUrl + "ikd/" + date).then((r) =>
    dispatch({
      type: "GET_IKD_HISTORY_SUCCESS",
      payload: r.data,
    })
  );
};
