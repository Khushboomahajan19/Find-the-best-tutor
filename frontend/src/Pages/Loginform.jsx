import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    contact: "",
    type: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleUser = () => {
    navigate("/SearchPage");
  };
  const validateForm = () => {
    const exp1 = /^[A-Za-z]+$/;
    if (!formData.fname.match(exp1)) {
      alert("Enter a valid name");
      return false;
    }

    const exp2 = /^[0-9]+$/;
    if (!formData.contact.match(exp2)) {
      alert("Contact is invalid");
      return false;
    }

    const exp3 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email.match(exp3)) {
      alert("Email is invalid");
      return false;
    }

    // Additional validation can be added for the password and type fields
    // Example:
    // if (formData.password.length < 6) {
    //   alert("Password must be at least 6 characters long");
    //   return false;
    // }

    // if (formData.type === "") {
    //   alert("Please select a type");
    //   return false;
    // }

    return true;
  };

  const handleSubmit = async(e) => {
        try {
      const data = { name, email, contact};
      setLoading(true);
      const resp = await axios.post(`${SERVER_URL}/user`, data);
      console.log(resp.data);
      setLoading(false);
      enqueueSnackbar("Student Added Succcessfully", { variant: "success" });
      navigate("/");
    } catch (error) {
      enqueueSnackbar("Error", { variant: "error" });
      setLoading(false);
    }
  
    // e.preventDefault(); // Prevent default form submission behavior
    // if (validateForm()) {
    //   // Handle form submission, e.g., send data to backend
    //   console.log("Form submitted:", formData);
    //   // Reset form after submission
    //   setFormData({
    //     fname: "",
    //     email: "",
    //     contact: "",
    //     type: "",
    //     password: "",
    //   });
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="fname"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="fname"
                name="fname"
                type="text"
                autoComplete="name"
                required
                className="mt-1 p-3 appearance-none block w-full border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Name"
                value={formData.fname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 p-3 appearance-none block w-full border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700"
              >
                Contact no
              </label>
              <input
                id="contact"
                name="contact"
                type="tel"
                autoComplete="tel"
                required
                className="mt-1 p-3 appearance-none block w-full border border-gray-300 rounded-md placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Contact no"
                value={formData.contact}
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
            <div className="text-sm mb-4">
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleUser}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
