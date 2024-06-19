import { useEffect, useState } from "react";
import axios from "axios";
import SERVER_URL from "../ServerURL";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditTutor = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [specialization, setSpecialization] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleBack = () => {
    navigate("/Search");
  };
  const fetchTutorEditTutor = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(`${SERVER_URL}/tutor/${id}`);
      setName(resp.data.data.name);
      setQualification(resp.data.data.qualification);
      setExperience(resp.data.data.experience);
      setSpecialization(resp.data.data.specialization);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTutorEditTutor();
  }, []);
  const handleUpdate = async () => {
    try {
      const data = { name, qualification, experience, specialization };
      setLoading(true);
      const resp = await axios.put(`${SERVER_URL}/tutor/${id}`, data);
      console.log(resp.data);
      setLoading(false);
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-3xl bg-sky-700 text-white p-4 text-center">
        Update Your details
      </h1>
      {loading ? <h2>Loading...</h2> : ""}
      <div className="flex flex-col border-2 border-sky-300 rounded-sm w-[600px] p-4 mx-auto my-4">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Qualification</label>
          <input
            type="text"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Experience</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-600">Specialization</label>
          <input
            type="text"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="border-2 border-gray-400 px-4 py-2 w-full"
          />
        </div>
        <button
          className="p-2 bg-sky-600 m-8 text-white rounded-sm"
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          onClick={handleBack}
          className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
        >
          Back
        </button>
      </div>
    </>
  );
};
export default EditTutor;
