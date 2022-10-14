import { useGolbalContext } from "../context";
import { BsHandThumbsUp, BsHandThumbsUpFill } from "react-icons/bs";

const Meals = () => {
  const { meals, loading, selectMeal, addToFavorites, favorites } =
    useGolbalContext();

  if (loading) {
    return (
      <section className="section">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (meals.length < 1) {
    return (
      <section className="section">
        <h4>No meals matched your search term. Please try again</h4>
      </section>
    );
  }

  return (
    <section className="section-center">
      {meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
        return (
          <article key={idMeal} className="single-meal">
            <img
              src={image}
              alt={"picture of" + image}
              className="img"
              onClick={() => selectMeal(idMeal, false)}
            />
            <footer>
              <h5>{title}</h5>
              <button
                className="like-btn"
                onClick={() => addToFavorites(idMeal)}
              >
                {favorites.find((meal) => meal.idMeal === idMeal) ? (
                  <BsHandThumbsUpFill />
                ) : (
                  <BsHandThumbsUp />
                )}
              </button>
            </footer>
          </article>
        );
      })}
    </section>
  );
};

export default Meals;
