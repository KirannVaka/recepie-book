import { useContext } from "react";
import { AppContext } from "../context";

const Meals = () => {
  const context = useContext(AppContext);
  console.log(context);
  return <h1>Meals Component</h1>;
};

export default Meals;
