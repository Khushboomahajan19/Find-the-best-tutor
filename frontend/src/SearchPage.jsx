import React, { useState } from "react";
import { tutor } from "./data";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const navigate = useNavigate();

  // Extract unique specializations from tutor data
  const specializations = Array.from(
    new Set(tutor.flatMap((t) => t.specialization))
  );

  const handleBack = () => {
    navigate("/home");
  };

  const handleSearch = () => {
    const filteredData = tutor.filter((t) =>
      t.specialization.includes(selectedSpecialization)
    );
    const sortedData = filteredData.sort((a, b) => b.experience - a.experience);
    setFilteredResults(sortedData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Search Results</h1>
      <div className="flex items-center mb-4">
        <select
          value={selectedSpecialization}
          onChange={(e) => setSelectedSpecialization(e.target.value)}
          className="px-4 py-2 rounded-md bg-gray-200 focus:outline-none focus:border-purple-500 mr-4"
        >
          <option value="">Select Subject</option>
          {specializations.map((specialization) => (
            <option key={specialization} value={specialization}>
              {specialization}
            </option>
          ))}
        </select>
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          Search
        </button>
      </div>
      {filteredResults.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResults.map((tut) => (
            <div key={tut.id} className="border border-gray-300 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{tut.name}</h3>
              <p className="mb-2">
                <span className="font-semibold">Qualification:</span>{" "}
                {tut.qualification}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Experience:</span>{" "}
                {tut.experience}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Specialization:</span>{" "}
                {tut.specialization.join(", ")}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl">No tutors found for the specified subject.</p>
      )}
      <button
        className="mt-8 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 focus:outline-none focus:bg-sky-700"
        onClick={handleBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default SearchPage;
