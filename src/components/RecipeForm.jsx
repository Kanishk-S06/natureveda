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
      <h2 className="text-[25px] font-semibold mb-2 ">Recipe Details</h2>
      <div className="mb-4">
        <label htmlFor="recipeName" className="block mb-2 text-lg text-indigo-600 font-semibold">
          Recipe Name:
        </label>
        <input
          type="text"
          id="recipeName"
          name="recipeName"
          value={recipeData.recipeName}
          onChange={handleChange}
          className="border p-2 rounded w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="units" className="block mb-2 text-lg text-indigo-600 font-semibold ">
          Units:
        </label>
        <input
          type="text"
          id="units"
          name="units"
          value={recipeData.units}
          onChange={handleChange}
          className="border p-2 rounded w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ingredients" className="block mb-2 text-lg text-indigo-600 font-semibold ">
          Ingredients:
        </label>
        <input
          type="text"
          id="ingredients"
          name="ingredients"
          value={recipeData.ingredients}
          onChange={handleChange}
          className="border p-2 rounded w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:shadow-lg"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
