import { useGolbalContext } from "../context";

function Modal() {
  const { selectedMeal, closeModal } = useGolbalContext();

  const {
    idMeal,
    strMeal: title,
    strMealThumb: image,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank" rel="noreferrer">
            Original Source
          </a>
        </div>
        <button onClick={closeModal}>close</button>
      </div>
    </aside>
  );
}

export default Modal;
