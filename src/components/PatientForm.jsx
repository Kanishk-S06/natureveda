import React, { useState } from "react";

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
      <h2 className="text-xl font-semibold mb-2">Patient Details</h2>
      <div className="mb-4">
        <label htmlFor="patientName" className="block mb-2">
          Patient Name:
        </label>
        <input
          type="text"
          id="patientName"
          name="patientName"
          value={patientData.patientName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sex" className="block mb-2">
          Sex:
        </label>
        <input
          type="text"
          id="sex"
          name="sex"
          value={patientData.sex}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="symptoms" className="block mb-2">
          Symptoms:
        </label>
        <input
          type="text"
          id="symptoms"
          name="symptoms"
          value={patientData.symptoms}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2">
          Age:
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={patientData.age}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Add Patient
      </button>
    </form>
  );
};

export default PatientForm;
