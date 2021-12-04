const INITIAL_STATE = {
  isLoading: false,
  message: "",
  ikd: {},
  host: null,
  gold: {},
  modalOpen: false,
  modalTitle: "",
  modalBody: null
};

export const reducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "GET_IKD_START":
      return { ...state, isLoading: true, message: "" };
    case "GET_IKD_SUCCESS":
      return {
        ...state,
        ikd: action.payload.data,
        host: action.payload.host,
        isLoading: false
      };
    case "GET_IKD_ERROR":
      return { ...state, message: action.payload, isLoading: false };
    case "GET_GOLD_SUCCESS":
      return {
        ...state,
        gold: { ...state.gold, [action.payload.path]: action.payload.data },
        isLoading: false
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
