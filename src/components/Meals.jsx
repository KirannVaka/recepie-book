import { useGolbalContext } from "../context";

const Meals = () => {
  const context = useGolbalContext();
  console.log(context);
  return <h1>Meals Component</h1>;
};

export default Meals;
