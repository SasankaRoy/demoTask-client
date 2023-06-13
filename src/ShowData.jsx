import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import axios from "axios";

export const ShowData = () => {
  const [data, setData] = useState([]);

  const getAllData = async () => {
    try {
      const recivedData = await axios.get(
        "https://demotask-api.onrender.com/data/get"
      );

      setData(recivedData?.data?.getAllData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[92%] grid grid-cols-2 md:grid-cols-3 gap-5 px-4 py-5">
        {data.length > 0 ? (
          <>
            {data.map((item, id) => (
              <div
                key={id}
                className=" flex flex-col justify-center items-center bg-gray-50 shadow-md rounded-md h-[300px] px-5 py-3"
              >
                <h1 className="text-2xl font-mono font-semibold tracking-wide capitalize">
                  <span className="font-normal text-lg">city :</span>{" "}
                  {item.city}
                </h1>
                <h1 className="text-2xl font-mono font-semibold tracking-wide capitalize">
                  <span className="font-normal text-lg">projectName :</span>{" "}
                  {item.projectName}
                </h1>
                <h1 className="text-2xl font-mono font-semibold tracking-wide capitalize">
                  <span className="font-normal text-lg">location :</span>{" "}
                  {item.location}
                </h1>
                <h1 className="text-2xl font-mono font-semibold tracking-wide capitalize">
                  <span className="font-normal text-lg">latitude :</span>{" "}
                  {item.latitude}
                </h1>
                <h1 className="text-2xl font-mono font-semibold tracking-wide capitalize">
                  <span className="font-normal text-lg">longitude :</span>{" "}
                  {item.longitude}
                </h1>
              </div>
            ))}
          </>
        ) : (
          <h1 className="text-xl font-mono tracking-wide text-gray-400">
            Create something to display it here.
          </h1>
        )}
      </div>
    </div>
  );
};
