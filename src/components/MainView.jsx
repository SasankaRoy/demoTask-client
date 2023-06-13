import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const MainView = () => {
  const [data, setData] = useState({
    city: "",
    projectName: "",
    location: "",
    latitude: "",
    longitude: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  const handleOnSubmit = async () => {
    try {
      const createNewData = await axios.post(
        "https://demotask-api.onrender.com/data/create",
        data
      );
      if (createNewData.status === 200) {
        toast.success(createNewData.data.success);
        navigate("/alldata");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex-1 flex  justify-center items-center w-full bg-[#fff]/30 h-full px-1">
      <div className="bg-[#ffffff] w-[90%] lg:w-[55%] h-[85%] rounded-md shadow-md">
        <h1 className="text-2xl font-mono tracking-wide m-3 underline underline-offset-4">
          Details
        </h1>
        <div className="w-[85%] mx-auto flex flex-col justify-start items-start space-y-3">
          <div className=" w-full flex flex-col justify-start items-start space-y-2">
            <label htmlFor="city" className="text-lg  font-normal">
              City
            </label>

            <select
              className="bg-transparent w-full text-xl py-1 px-2 rounded-md outline-none shadow-[#d9afd9]/30 shadow"
              name="city"
              onChange={handleOnChange}
              value={data.city}
            >
              <option value="select city">select city</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
          <div className=" w-full flex flex-col justify-start items-start space-y-2">
            <label htmlFor="projectName" className="text-lg  font-normal">
              Project Name
            </label>
            <input
              className="bg-transparent w-full text-xl py-1 px-2 rounded-md outline-none shadow-[#d9afd9]/30 shadow"
              type="text"
              placeholder="project name..."
              name="projectName"
              onChange={handleOnChange}
              value={data.projectName}
            />
          </div>
          <div className=" w-full flex flex-col justify-start items-start space-y-2">
            <label htmlFor="location" className="text-lg  font-normal">
              Location
            </label>
            <select
              className="bg-transparent w-full text-xl py-1 px-2 rounded-md outline-none shadow-[#d9afd9]/30 shadow"
              name="location"
              onChange={handleOnChange}
              value={data.location}
            >
              <option value="select location">select location</option>
              <option value="Khadki">Khadki</option>

              <option
                value="Pimple
Saudagar"
              >
                Pimple Saudagar
              </option>
              <option value="Khadadi">Khadadi </option>
              <option value="Hinjewadi">Hinjewadi</option>
            </select>
          </div>
          <h3 className="text-xl my-2 self-center font-mono font-medium">or</h3>
          <div className="w-full flex justify-evenly items-center space-x-3">
            <div className=" w-full flex flex-col justify-start items-start space-y-2">
              <label htmlFor="quantity" className="text-lg  font-normal">
                Latitude
              </label>
              <input
                className="bg-transparent w-full text-xl py-1 px-2 rounded-md outline-none shadow-[#d9afd9]/30 shadow"
                type="text"
                placeholder="latitude..."
                name="latitude"
                onChange={handleOnChange}
                value={data.latitude}
              />
            </div>
            <div className=" w-full flex flex-col justify-start items-start space-y-2">
              <label htmlFor="address" className="text-lg  font-normal">
                Longitude
              </label>
              <input
                className="bg-transparent w-full text-xl py-1 px-2 rounded-md outline-none shadow-[#d9afd9]/30 shadow"
                type="text"
                placeholder="longitude..."
                name="longitude"
                onChange={handleOnChange}
                value={data.longitude}
              />
            </div>
          </div>

          <button
            onClick={handleOnSubmit}
            className="w-full bg-[#d9afd9] rounded-md shadow py-2 text-xl font-mono font-normal tracking-wide hover:bg-[#d9afd9]/80 transition-all duration-150 ease-in-out"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
