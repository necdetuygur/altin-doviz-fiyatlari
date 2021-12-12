const INITIAL_STATE = {
  gold: {},
  modalOpen: false,
  modalTitle: "",
  modalBody: null,
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GET_GOLD_SUCCESS":
      if (action.payload.data != null) {
        localStorage.setItem(
          "gold",
          JSON.stringify({
            ...JSON.parse(localStorage.getItem("gold") || "{}"),
            [action.payload.path]: action.payload.data,
          })
        );
      }
      return {
        ...state,
        gold: {
          ...state.gold,
          [action.payload.path]: action.payload.data,
        },
      };
    case "LOAD_OLD_GOLD":
      return {
        ...state,
        gold: JSON.parse(localStorage.getItem("gold") || "{}"),
      };
    case "SET_MODAL_OPEN":
      return { ...state, modalOpen: action.payload };
    case "SET_MODAL_TITLE":
      return { ...state, modalTitle: action.payload };
    case "SET_MODAL_BODY":
      return { ...state, modalBody: action.payload };
    default:
      return state;
  }
};
