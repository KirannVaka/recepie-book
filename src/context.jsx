import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const useGolbalContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl);
  };

  const fetchMeals = async (url) => {
    setLoading(true);

    try {
      const { data } = await axios.get(url);
      data.meals ? setMeals(data.meals) : setMeals([]); //set to empty if no data returns otherwise push data
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{ loading, meals, setSearchTerm, fetchRandomMeal }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider, useGolbalContext };
