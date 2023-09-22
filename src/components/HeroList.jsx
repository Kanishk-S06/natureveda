import React, { useState } from "react";
import RecipeForm from "./RecipeForm";
import PatientForm from "./PatientForm";
import DisplayDetails from "./DisplayDetails";
import {motion} from 'framer-motion';
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
    // <div>
    //   {" "}
    //   <div className="container mx-auto p-4">
    //     <h1 className="text-3xl font-semibold mb-4">
    //       Recipe and Patient Details
    //     </h1>
    //     <RecipeForm onSubmit={handleRecipeSubmit} />
    //     <PatientForm onSubmit={handlePatientSubmit} />
    //     <button
    //       onClick={handleSubmit}
    //       className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 mt-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:shadow-lg"
    //     >
    //       Submit
    //     </button>
    //     {showDetails && (
    //       <DisplayDetails recipes={recipeDetails} patients={patientDetails} />
    //     )}
    //   </div>
    // </div>
    <div className="container mx-auto p-4">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    className="text-3xl font-semibold mb-4"
  >
    Recipe and Patient Details
  </motion.h1>
  <RecipeForm onSubmit={handleRecipeSubmit} />
  <PatientForm onSubmit={handlePatientSubmit} />
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={handleSubmit}
    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 mt-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
  >
    Submit
  </motion.button>
  {showDetails && (
    <DisplayDetails recipes={recipeDetails} patients={patientDetails} />
  )}
</div>
  );
};

export default HeroList;
