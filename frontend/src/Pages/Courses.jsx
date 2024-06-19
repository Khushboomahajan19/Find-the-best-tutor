import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; // Import the Navbar component

const Courses = () => {
  const navigate = useNavigate();

  const handleteacher = () => {
    navigate("/tutorform");
  };

  const handlestudent = () => {
    navigate("/Login");
  };

  return (
    <>
      <Navbar />
      <section
        className="relative w-full h-screen bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://image.shutterstock.com/image-photo/hispanic-teen-girl-latin-young-260nw-1738498538.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto p-4 relative z-10 flex flex-col items-center justify-center h-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl text-white font-bold">Welcome to Tutify</h1>
            <p className="text-white mt-4">Choose your role to get started</p>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleteacher}
            >
              Continue as a Teacher
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlestudent}
            >
              Continue as a Student
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
