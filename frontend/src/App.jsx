import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SearchPage from "./SearchPage";
import Login from "./Pages/Loginform";
import ShowStudent from "./Pages/ShowStudent";
import AddStudent from "./Pages/AddStudent";
import Tutorform from "./Pages/Tutorform";
// import Tutorform from "./Pages/ShowTutor";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="/user" element={<ShowStudent />} />
      <Route path="/tutorform" element={<Tutorform/>}/>
      <Route path="SearchPage" element={<SearchPage />} />
      <Route path="home" element={<Home />} />
      <Route path="/user/create" element={<AddStudent />} />
    </Routes>
  );
};
export default App;
