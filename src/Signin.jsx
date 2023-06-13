import { useState } from "react";
import { Navbar } from "./components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signin = () => {
  const [signInDeltails, setSignInDeltails] = useState({
    name: "",
    email: "",
    password: "",
    conPassword: "",
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSignInDeltails({ ...signInDeltails, [name]: value });
  };
  const handleOnSubmit = async () => {
    try {
      const { name, email, password, conPassword } = signInDeltails;
      if (!name || !email || !password) {
        toast.error("enter deltails");
      } else if (password !== conPassword) {
        toast.error("password not matched");
      } else {
        const signInReq = await axios.post(
          "https://demotask-api.onrender.com/auth/signin",
          {
            name,
            email,
            password,
          }
        );
        if (signInReq.status === 200) {
          toast.success("SignIn successful");
          navigate("/login");
        } else {
          toast.error("singIn failed");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-[90%] flex justify-center items-center">
        <div className="bg-[#fff]   w-[90%] lg:w-[45%] h-[70%] shadow-xl rounded-md px-3 py-1">
          <h1 className="text-3xl m-3 underline underline-offset-2">
            Sign In.
          </h1>
          <div className="flex flex-col justify-center items-center  space-y-1 ">
            <div className="flex flex-col justify-start items-start space-y-1 w-[90%]">
              <label htmlFor="name" className="text-lg  font-normal">
                Name
              </label>
              <input
                type="text"
                placeholder="enter name..."
                name="name"
                value={signInDeltails.name}
                onChange={handleOnChange}
                className="bg-[#fff] w-full text-xl py-1 px-2 rounded-md border border-b-2 border-l-0 border-r-0 border-t-0 outline-none shadow-md"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-[90%] space-y-1">
              <label className="text-lg  font-normal" htmlFor="name">
                Email
              </label>
              <input
                className="bg-[#fff] w-full text-xl py-1 px-2 rounded-md border border-b-2 border-l-0 border-r-0 border-t-0 outline-none shadow-md"
                type="text"
                placeholder="enter email..."
                name="email"
                value={signInDeltails.email}
                onChange={handleOnChange}
              />
            </div>

            <div className="flex flex-col justify-start items-start space-y-1 w-[90%]">
              <label className="text-lg  font-normal" htmlFor="name">
                Password
              </label>
              <input
                className="bg-[#fff] w-full text-xl py-1 px-2 rounded-md border border-b-2 border-l-0 border-r-0 border-t-0 outline-none shadow-md"
                type="password"
                placeholder="set password..."
                name="password"
                value={signInDeltails.password}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex flex-col justify-start items-start space-y-1 w-[90%]">
              <label className="text-lg  font-normal" htmlFor="name">
                Comfirm Password
              </label>
              <input
                className="bg-[#fff] w-full text-xl py-1 px-2 rounded-md border border-b-2 border-l-0 border-r-0 border-t-0 outline-none shadow-md"
                type="password"
                placeholder="comfirm password..."
                name="conPassword"
                value={signInDeltails.conPassword}
                onChange={handleOnChange}
              />
            </div>
            <div className="flex justify-between items-center w-full py-2 px-1">
              <button
                onClick={handleOnSubmit}
                className="bg-[#97d9e1] px-3 py-1 text-lg capitalize rounded-md shadow-md hover:scale-105 transition-all duration-150 ease-linear"
              >
                Create Account
              </button>
              <button>Already have an account?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
