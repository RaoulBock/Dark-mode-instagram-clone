import React, { useState } from "react";
import { APP_PAGES } from "./settings";

export const AppContext = React.createContext({
  navPage: APP_PAGES.HOME,
  setNavPage: (val) => {},
  user: "",
  setUser: (val) => {}
});

export const AppProvider = ({ children }) => {
  const [navPage, setNavPage] = useState(APP_PAGES.HOME);
  const [user, setUser] = React.useState(false);

  return (
    <AppContext.Provider
      value={{
        navPage,
        setNavPage,
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
