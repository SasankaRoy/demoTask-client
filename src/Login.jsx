import { useContext, useState } from "react";
import { Navbar } from "./components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthProvider";
import Cookies from "js-cookie";
import { toast } from "react-hot-toast";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const [loginDeltails, setLoginDeltails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginDeltails({ ...loginDeltails, [name]: value });
  };
  const handleSubmit = async () => {
    try {
      if (!loginDeltails.email || !loginDeltails.password) {
        toast.error("Please enter deltails!");
      } else {
        dispatch({ type: "LOGIN_START" });
        const loginReq = await axios.post(
          "https://demotask-api.onrender.com/auth/login",
          loginDeltails
        );
        if (loginReq.status === 200) {
          Cookies.set("userTokens", loginReq.data.token, { expires: 1 });
          toast.success("login Successfull");
          dispatch({ type: "LOGIN_SUCCESS", payload: loginReq.data.user });
          navigate("/");
        } else {
          dispatch({ type: "LOGIN_FAILED" });
          toast.error("login failed");
        }
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED" });
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <div className="h-[90%]  flex justify-center items-center">
          <div className="bg-[#fff] w-[90%] lg:w-[35%] h-[50%] shadow-xl rounded-md px-3 py-1">
            <h1 className="text-3xl m-3 underline underline-offset-2">
              welcome to Log In.
            </h1>
            <div className="flex flex-col justify-start items-center space-y-1 ">
              <div className="flex flex-col justify-start items-start w-[90%] space-y-1">
                <label className="text-lg  font-normal" htmlFor="name">
                  Email
                </label>
                <input
                  className="bg-[#fff] w-full text-xl py-1 px-2 rounded-md border border-b-2 border-l-0 border-r-0 border-t-0 outline-none shadow-md"
                  type="text"
                  placeholder="enter email..."
                  name="email"
                  value={loginDeltails.email}
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
                  placeholder="enter password..."
                  name="password"
                  value={loginDeltails.password}
                  onChange={handleOnChange}
                />
              </div>

              <div className="flex justify-between items-center w-full py-2 px-1">
                <button
                  onClick={handleSubmit}
                  className="bg-[#97d9e1] px-3 py-1 text-lg capitalize rounded-md shadow-md hover:scale-105 transition-all duration-150 ease-linear"
                >
                  Login
                </button>
                <button>create an account?</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
