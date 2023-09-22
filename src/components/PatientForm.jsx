import React, { useState } from "react";
import {motion} from 'framer-motion';
const PatientForm = ({ onSubmit }) => {
  const [patientData, setPatientData] = useState({
    patientName: "",
    sex: "",
    symptoms: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(patientData);
    setPatientData({
      patientName: "",
      sex: "",
      symptoms: "",
      age: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <motion.h2 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="text-[25px] mt-2 font-semibold mb-2">Patient Details</motion.h2>
      <div className="mb-4">
        <label htmlFor="patientName" className="block mb-2 text-lg text-indigo-600 font-semibold">
          Patient Name:
        </label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={patientData.patientName}
          onChange={handleChange}
          className="border p-2 rounded w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sex" className="block mb-2 text-lg text-indigo-600 font-semibold">
          Sex:
        </label>
        <input
          type="text"
          id="sex"
          name="sex"
          value={patientData.sex}
          onChange={handleChange}
          className="border p-2 rounded w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="symptoms" className="block mb-2 text-lg text-indigo-600 font-semibold">
          Symptoms:
        </label>
        <input
          type="text"
          id="symptoms"
          name="symptoms"
          value={patientData.symptoms}
          onChange={handleChange}
          className="border p-2 rounded w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2 text-lg text-indigo-600 font-semibold">
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={patientData.age}
          onChange={handleChange}
          className="border p-2 rounded w-full shadow appearance-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 hover:shadow-lg "
      >
        Add Patient
      </button>
    </form>
  );
};

export default PatientForm;
