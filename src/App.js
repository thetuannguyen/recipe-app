import React, { useEffect, useState } from "react";
import "./App.scss";
import Recipes from "./Recipes";
const App = () => {
  // GET API FROM : "api.edamam.com"
  const APP_ID = "26739542";
  const APP_KEY = "f3207fc9df5704b6260dc8b989798096";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  // GET RECIPE
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  // UPDATE REARCHING
  const updateSearch = (e) => {
    // get value from form
    setSearch(e.target.value);
  };
  // GET SEARCHING
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="search-form" autoComplete="off" onSubmit={getSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="EX:Cake..."
          value={search}
          onChange={updateSearch}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipes
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
