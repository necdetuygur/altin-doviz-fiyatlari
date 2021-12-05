import axios from "axios";
import { Dispatch } from "redux";

const getBaseUrl = () =>
  "https://thegold" + ~~(Math.random() * 13 + 1) + ".herokuapp.com/";

export const getGold = () => (dispatch: Dispatch) => {
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
  paths.forEach(function (path) {
    dispatch({
      type: "GET_GOLD_SUCCESS",
      payload: {
        data: null,
        path: path === "ikd" ? path : path.split("/")[2],
      },
    });
    axios.get(getBaseUrl() + path).then((r) =>
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
