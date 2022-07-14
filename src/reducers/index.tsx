const INITIAL_STATE = {
  gold: {},
  modalOpen: false,
  modalTitle: "",
  modalBody: null,
  proMode: false,
  favs: JSON.parse(localStorage.getItem("favs") || "[]"),
  editFavs: false,
  isDark:
    localStorage.getItem("isDark") === null
      ? (function () {
          localStorage.setItem("isDark", "1");
          return true;
        })()
      : localStorage.getItem("isDark") === "1" || false,
  ikdHistory: [],
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
    case "SET_PRO_MODE":
      return { ...state, proMode: action.payload };
    case "SET_FAVS":
      localStorage.setItem("favs", JSON.stringify(action.payload));
      return { ...state, favs: action.payload };
    case "TOGGLE_EDIT_FAVS":
      return { ...state, editFavs: !state.editFavs };
    case "TOGGLE_IS_DARK":
      const newIsDark = !state.isDark;
      localStorage.setItem("isDark", newIsDark ? "1" : "0");
      document.body.style.backgroundColor = newIsDark ? "#0f2537" : "#c8d0d9";
      return { ...state, isDark: newIsDark };
    case "GET_IKD_HISTORY_SUCCESS":
      return { ...state, ikdHistory: action.payload };
    default:
      return state;
  }
};
