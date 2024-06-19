import React from "react";

const InfoSection = () => {
  return (
    <div className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-700 underline">
        About Us
      </h2>
      <p className="text-gray-800 mb-6 leading-relaxed text-lg">
        Welcome to <span className="font-semibold text-blue-700">Tutify</span>,
        a platform dedicated to bridging the gap between students and quality
        education through personalized online tutoring. Our mission is to
        provide accessible learning tools and connect learners with expert
        educators worldwide.
      </p>
      <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
      <p className="text-gray-800 leading-relaxed text-lg">
        To empower students to achieve their educational goals by providing a
        comprehensive, engaging, and interactive learning environment. We aim to
        be your trusted partner in{" "}
        <span className="italic">lifelong learning</span>.
      </p>
    </div>
  );
};

export default InfoSection;
