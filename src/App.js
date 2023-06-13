import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signin from "./Signin";
import { Toaster } from "react-hot-toast";
import { ShowData } from "./ShowData";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/alldata" element={<ShowData />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};
