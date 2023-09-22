import React, { useState } from "react";

const RecipeForm = ({ onSubmit }) => {
  const [recipeData, setRecipeData] = useState({
    recipeName: "",
    units: "",
    ingredients: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(recipeData);
    setRecipeData({
      recipeName: "",
      units: "",
      ingredients: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-2">Recipe Details</h2>
      <div className="mb-4">
        <label htmlFor="recipeName" className="block mb-2">
          Recipe Name:
        </label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          value={recipeData.recipeName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="units" className="block mb-2">
          Units:
        </label>
        <input
          type="text"
          id="units"
          name="units"
          value={recipeData.units}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block mb-2">
          Ingredients:
        </label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
