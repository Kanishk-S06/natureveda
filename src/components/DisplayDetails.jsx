import React from "react";

const DisplayDetails = ({ recipes, patients }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Recipe Details:</h2>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <p>Recipe Name: {recipe.recipeName}</p>
          <p>Units: {recipe.units}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <hr className="my-4" />
        </div>
      ))}
      <h2 className="text-xl font-semibold mt-4 mb-2">Patient Details:</h2>
      {patients.map((patient, index) => (
        <div key={index}>
          <p>Patient Name: {patient.patientName}</p>
          <p>Sex: {patient.sex}</p>
          <p>Symptoms: {patient.symptoms}</p>
          <p>Age: {patient.age}</p>
          <hr className="my-4" />
        </div>
      ))}
    </div>
  );
};

export default DisplayDetails;
