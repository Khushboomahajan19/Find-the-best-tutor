import React, { useState } from "react";
import { tutor } from "../data"; // Importing the tutor data from data.jsx
import { useNavigate } from "react-router-dom";

function Tutorform() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    password: "",
  });
  const [tutorDetails, setTutorDetails] = useState(null); // State variable to store the details of the signed-in tutor
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form submitted:", formData);

    // Extracting the entered ID from the form data
    const enteredId = parseInt(formData.id); // Convert to integer

    // Find the tutor object with the entered ID from the imported tutor data
    const selectedTutor = tutor.find((t) => t.id === enteredId);

    // Check if a tutor with the entered ID was found
    if (selectedTutor) {
      // If found, set the tutor details in state
      setTutorDetails(selectedTutor);
    } else {
      // If not found, handle the error (e.g., show an error message)
      console.log("Tutor not found with ID:", enteredId);
      // You might want to display an error message to the user
    }
  };
  const handleBack = () => {
    // Implement navigation to the previous page
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="id"
                className="block text-sm font-medium text-gray-700"
              >
                ID
              </label>
              <input
                id="id"
                name="id"
                type="text"
                required
                className="mt-1 p-3 appearance-none block w-full border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your ID"
                value={formData.id}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 p-3 appearance-none block w-full border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 p-3 appearance-none block w-full border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get your details
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Display tutor details if available */}
      {tutorDetails && (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-center text-xl font-semibold mb-4">
              Tutor Details
            </h2>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">Name:</label>
              <span className="text-sm text-gray-900 mb-2">
                {tutorDetails.name}
              </span>
              <label className="text-sm font-medium text-gray-700">
                Qualification:
              </label>
              <span className="text-sm text-gray-900 mb-2">
                {tutorDetails.qualification}
              </span>
              <label className="text-sm font-medium text-gray-700">
                Experience:
              </label>
              <span className="text-sm text-gray-900 mb-2">
                {tutorDetails.experience}
              </span>
              <label className="text-sm font-medium text-gray-700">
                Specialization:
              </label>
              <span className="text-sm text-gray-900 mb-2">
                {Array.isArray(tutorDetails.specialization)
                  ? tutorDetails.specialization.join(", ")
                  : tutorDetails.specialization}
              </span>
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tutorform;
