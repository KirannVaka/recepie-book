import { useGolbalContext } from "../context";

const Meals = () => {
  const { meals } = useGolbalContext();
  console.log(meals.map((meal) => meal.idMeal));
  return <h1>{meals.map((meal) => " " + meal.idMeal)}</h1>;
};

export default Meals;
