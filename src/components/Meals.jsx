import { useGolbalContext } from "../context";

const Meals = () => {
  const { meals } = useGolbalContext();
  console.log(meals);
  return (
    <section>
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              alt={"picture of" + image}
              className="img"
              style={{ width: "200px" }}
            />
            <footer>
              <h5>{title}</h5>
              <button className="like-btn">Click me</button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
