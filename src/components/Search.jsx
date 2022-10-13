import { useState } from "react";
import { useGolbalContext } from "../context";

function Search() {
  const [serach, setSearch] = useState("");
  const { meals } = useGolbalContext;

  return (
    <header className="search-container">
      <form action="submit">
        <input
          type="text"
          className="form-input"
          placeholder="Type favorite meal"
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button className="btn btn-hipster" type="button">
          Suprise Me!
        </button>
      </form>
    </header>
  );
}

export default Search;
