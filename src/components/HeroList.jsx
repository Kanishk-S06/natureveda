import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import PatientForm from "./PatientForm";
import DisplayDetails from "./DisplayDetails";

const HeroList = () => {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [patientDetails, setPatientDetails] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const handleRecipeSubmit = (data) => {
    setRecipeDetails([...recipeDetails, data]);
  };

  const handlePatientSubmit = (data) => {
    setPatientDetails([...patientDetails, data]);
  };

  const handleSubmit = () => {
    setShowDetails(true);
  };
  return (
    <div>
      {" "}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">
          Recipe and Patient Details
        </h1>
        <RecipeForm onSubmit={handleRecipeSubmit} />
        <PatientForm onSubmit={handlePatientSubmit} />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
        {showDetails && (
          <DisplayDetails recipes={recipeDetails} patients={patientDetails} />
        )}
      </div>
    </div>
  );
};

export default HeroList;
