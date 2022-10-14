import { useGolbalContext } from "../context";

function Favorites() {
  const { favorites, removeFromFavorites, selectMeal } = useGolbalContext();

  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Fovorites</h5>
        <div className="favorites-container">
          {favorites.map((meal) => {
            const { strMealThumb: image, idMeal, strMeal: title } = meal;
            return (
              <div key={idMeal}>
                <img src={image} alt={title} className="favorite-img img" />
                <button
                  className="remove-btn"
                  onClick={() => removeFromFavorites(idMeal)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Favorites;
