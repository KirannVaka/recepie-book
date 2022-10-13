import React, { useContext, useEffect } from "react";

const AppContext = React.createContext();

const useGolbalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=a"
      );
      const allMealsUrl = await response.json();
      console.log(allMealsUrl);
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const randomMealUrl = await response.json();
      console.log(randomMealUrl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ name: "John", role: "Student" }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useGolbalContext };
