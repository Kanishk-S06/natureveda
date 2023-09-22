// src/components/TodoList.js
import React, { useState } from "react";
import Task from "./Task";

const TodoList = () => {
  const [patientTasks, setPatientTasks] = useState([]); // State for patient tasks
  const [ingredientTasks, setIngredientTasks] = useState([]); // State for ingredient tasks
  const [newPatientTask, setNewPatientTask] = useState({
    name: "",
    age: "",
    symptoms: "",
    sex: "",
  });
  const [newIngredientTask, setNewIngredientTask] = useState({
    recipeName: "",
    units: "",
    ingredients: "",
  });
  const [showAddPatient, setShowAddPatient] = useState(false); // State to control patient form visibility
  const [showSubmit, setShowSubmit] = useState(false); // State to control submit button visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPatientTask({ ...newPatientTask, [name]: value });
  };

  const handleChangeIngredient = (e) => {
    const { name, value } = e.target;
    setNewIngredientTask({ ...newIngredientTask, [name]: value });
  };

  const handleAddIngredientTask = () => {
    setIngredientTasks([...ingredientTasks, newIngredientTask]);
    setNewIngredientTask({ recipeName: "", units: "", ingredients: "" });
  };

  const handleAddPatientTask = () => {
    setPatientTasks([...patientTasks, newPatientTask]);
    setNewPatientTask({ name: "", age: "", symptoms: "", sex: "" });
    setShowSubmit(true); // Show the submit button after adding a patient
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">Todo List</h1>

      {/* Ingredient Form (Always Visible) */}
      <div className="task-form space-y-2 mb-4">
        <input
          type="text"
          placeholder="Recipe Name"
          name="recipeName"
          value={newIngredientTask.recipeName}
          onChange={handleChangeIngredient}
          className="border rounded-md py-2 px-3"
        />
        <input
          type="text"
          placeholder="Units"
          name="units"
          value={newIngredientTask.units}
          onChange={handleChangeIngredient}
          className="border rounded-md py-2 px-3"
        />
        <input
          type="text"
          placeholder="Ingredients"
          name="ingredients"
          value={newIngredientTask.ingredients}
          onChange={handleChangeIngredient}
          className="border rounded-md py-2 px-3"
        />
        <button
          onClick={handleAddIngredientTask}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Add Ingredient
        </button>
      </div>

      {/* Add Patient Button */}
      {!showAddPatient && (
        <button
          onClick={() => setShowAddPatient(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mb-4"
        >
          Add Patient
        </button>
      )}

      {/* Patient Form */}
      {showAddPatient && (
        <div className="task-form space-y-2 mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newPatientTask.name}
            onChange={handleChange}
            className="border rounded-md py-2 px-3"
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={newPatientTask.age}
            onChange={handleChange}
            className="border rounded-md py-2 px-3"
          />
          <input
            type="text"
            placeholder="Symptoms"
            name="symptoms"
            value={newPatientTask.symptoms}
            onChange={handleChange}
            className="border rounded-md py-2 px-3"
          />
          <input
            type="text"
            placeholder="Sex"
            name="sex"
            value={newPatientTask.sex}
            onChange={handleChange}
            className="border rounded-md py-2 px-3"
          />
          <button
            onClick={handleAddPatientTask}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
          >
            Add Patient
          </button>
        </div>
      )}

      {/* Submit Button */}
      {showSubmit && (
        <div className="task-list space-y-4">
          <div className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2">Patient Details:</h2>
            {patientTasks.map((task, index) => (
              <Task key={`patient-${index}`} task={task} />
            ))}
            <h2 className="text-xl font-semibold mt-4 mb-2">
              Ingredient Details:
            </h2>
            {ingredientTasks.map((task, index) => (
              <Task key={`ingredient-${index}`} task={task} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
