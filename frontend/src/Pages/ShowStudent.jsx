import axios from "axios"; // to hit api of backend
import { useEffect, useState } from "react"; //to render the component/page/data
import SERVER_URL from "../ServerURL";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";

// ShowStudent is a component
const ShowStudent = () => {
  const [students, setstudents] = useState([]); //can store array objects
  const [loading, setLoading] = useState(false); // to show loading of page
  const fetchStudent = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(`${SERVER_URL}/user`);
      console.log(resp.data);
      setstudents(resp.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);
  return (
    <>
      <h1 className="text-3xl bg-sky-700 text-white p-4 text-center">
        Registered Students
      </h1>
      <div className="p-4">
        <Link to="/user/create">
          <MdOutlineAddBox className="text-4xl text-blue-800" />
        </Link>
        <div className="flex justify-between items-center">
          {loading ? (
            <h3>Loading...</h3>
          ) : (
            <table className="w-full border-separate border-spacing-2">
              <thead>
                <tr>
                  <th className="border border-slate-500 rounded-md">Sno</th>
                  <th className="border border-slate-500 rounded-md">Name</th>
                  <th className="border border-slate-500 rounded-md">Email</th>
                  <th className="border border-slate-500 rounded-md">Conatct</th>
                  
                </tr>
              </thead>
              <tbody>
                {students.map((Student, index) => {
                  return (
                    <tr key={Student._id}>
                      <td className="border border-slate-500 rounded-md text-center">
                        {index + 1}
                      </td>
                      <td className="border border-slate-500 rounded-md text-center">
                        {Student.name}
                      </td>
                      <td className="border border-slate-500 rounded-md text-center">
                        {Student.email}
                      </td>
                      <td className="border border-slate-500 rounded-md text-center">
                        {Student.contact}
                      </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default ShowStudent;
