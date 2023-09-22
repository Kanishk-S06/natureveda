// src/components/Task.js
import React from "react";

const Task = ({ task }) => {
  return (
    <div className="border p-4 rounded-md shadow-md mb-4">
      <p className="text-lg font-semibold">Name: {task.name}</p>
      <p>Age: {task.age}</p>
      <p>Symptoms: {task.symptoms}</p>
      <p>Sex: {task.sex}</p>
    </div>
  );
};

export default Task;
