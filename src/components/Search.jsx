import { useState } from "react";
import { useGolbalContext } from "../context";

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGolbalContext();

  const [text, setText] = useState("");

  const handleChange = ({ target }) => {
    console.log(target.value);
    setText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Type favorite meal"
          onChange={handleChange}
          value={text}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          className="btn btn-hipster"
          type="button"
          onClick={fetchRandomMeal}
        >
          Suprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
