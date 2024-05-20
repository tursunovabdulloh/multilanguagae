import { createContext, useContext, useEffect, useReducer } from "react";

export const store = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      localStorage.setItem("darkmode", JSON.stringify(!state.darkmode));
      return { ...state, darkmode: !state.darkmode };
    case "CHANGE_LANG":
      localStorage.setItem("language", JSON.stringify(action.payload));

      return { ...state, lang: action.payload };
  }
}

const initialState = {
  darkmode: JSON.parse(localStorage.getItem("darkmode")) ?? false,
  lang: JSON.parse(localStorage.getItem("language")) ?? "uz",
};

export function Provider({ children }) {
  const [state, dispacht] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.darkmode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [state.darkmode]);

  function ChangeMode() {
    return dispacht({ type: "CHANGE_MODE" });
  }

  function ChangeLang(lang) {
    return dispacht({ type: "CHANGE_LANG", payload: lang });
  }
  return (
    <store.Provider value={{ state, ChangeMode, ChangeLang }}>
      {children}
    </store.Provider>
  );
}
