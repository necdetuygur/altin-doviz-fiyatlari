import axios from "axios";
import { Dispatch } from "redux";

const getBaseUrl = (isFirstRequest: boolean) => {
  if (isFirstRequest) {
    let day = new Date().getDate();
    day = day > 17 ? day - 17 : day;
    return "https://thegold" + day + ".herokuapp.com/";
  }
  return "https://thegold" + ~~(Math.random() * 17 + 1) + ".herokuapp.com/";
};

export const getGold = (isFirstRequest: boolean) => (dispatch: Dispatch) => {
  const baseUrl = getBaseUrl(isFirstRequest);
  const paths = [
    "ikd",
    "fw/altin/gram",
    "fw/altin/ceyrek",
    "fw/altin/yarim",
    "fw/altin/tam",
    "fw/doviz/usd",
    "fw/doviz/eur",
    "fw/doviz/gbp",
  ];
  paths.forEach((path) => {
    // Clear
    dispatch({
      type: "GET_GOLD_SUCCESS",
      payload: {
        data: null,
        path: path === "ikd" ? path : path.split("/")[2],
      },
    });

    // Fill
    axios.get(baseUrl + path).then((r) =>
      dispatch({
        type: "GET_GOLD_SUCCESS",
        payload: {
          data: r.data,
          path: path === "ikd" ? path : path.split("/")[2],
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
