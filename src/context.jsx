import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const useGolbalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState({});

  const fetchMeals = async (url) => {
    try {
      const { data } = await axios.get(url);
      setMeals(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return <AppContext.Provider value={meals}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider, useGolbalContext };
