import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { MainView } from "./components/MainView";
import { AuthContext } from "./Context/AuthProvider";
import Cookies from "js-cookie";
import axios from "axios";

const Home = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const userTokens = Cookies.get("userTokens"); // getting the user token from the cookie
      dispatch({ type: "LOGIN_START" });
      const loginReq = await axios.post(
        "https://demotask-api.onrender.com/auth/login",
        { userTokens }
      );
      if (loginReq.status === 200) {
        dispatch({ type: "LOGIN_SUCCESS", payload: loginReq.data.user });
      }
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex justify-start items-center h-[92%]">
        <MainView />
      </div>
    </div>
  );
};

export default Home;
