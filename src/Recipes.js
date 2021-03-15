import React from "react";
import style from "./recipe.module.scss";
const Recipes = ({ title, image, calories, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h2 className="recipe-title">{title}</h2>
      <img src={image} alt="this is image" className={style.image} />
      <span className={style.calo}>{calories}calo</span>
      <ol className="recipe-desc">
        {ingredients.map((item) => (
          <li>{item.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipes;
