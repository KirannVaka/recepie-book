import React, { useContext } from "react";

const AppContext = React.createContext();

const useGolbalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ name: "John", role: "Student" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useGolbalContext };
