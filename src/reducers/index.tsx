const INITIAL_STATE = {
  isLoading: false,
  gold: {},
  modalOpen: false,
  modalTitle: "",
  modalBody: null,
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GET_GOLD_SUCCESS":
      return {
        ...state,
        gold: { ...state.gold, [action.payload.path]: action.payload.data },
        isLoading: false,
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
