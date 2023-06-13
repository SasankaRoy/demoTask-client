import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export const Sidebar = () => {
  const [showSide, setShowSide] = useState(false);
  const [Replys, setReplys] = useState(false);
  return (
    <>
      <div className="h-full  lg:w-[30%] bg-[#fff]/30 ">
        <div className="hidden lg:flex flex-col">
          <h1 className="text-center text-2xl font-mono tracking-normal my-3">
            In Touch
          </h1>
          <div className="w-[80%] mx-auto flex justify-center items-center bg-[#ffffff] p-2 rounded-md shadow ">
            <SearchOutlinedIcon className="mr-1 cursor-pointer" />
            <input
              type="text"
              placeholder="Search..."
              className="flex-1  border-black/40  border-r-0 border-t-0 border-b-0 border-l px-2 outline-none"
            />
          </div>
          <div className="h-[92%]">
            <div
              onClick={() => setReplys(true)}
              className="h-[90%]  px-2 mt-3 overflow-y-auto"
            >
              <div className="flex justify-start items-center my-2 space-x-3 p-2 bg-[#ffffff] rounded-md shadow-md cursor-pointer hover:bg-[#ffffff]/80  transition-all duration-150 ease-out">
                <Avatar src="/vite.svg" />
                <h1 className="text-lg capitalize tracking-wide font-mono">
                  the name to the manufacturer
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="inline lg:hidden">
          <MenuIcon
            onClick={() => setShowSide(true)}
            className="text-5xl cursor-pointer"
          />
        </div>
      </div>
      {showSide && <InTouch setShowSide={setShowSide} setReplys={setReplys} />}
      {Replys && <ReplyBack setReplys={setReplys} />}
    </>
  );
};

export const InTouch = ({ setShowSide, setReplys }: any) => {
  return (
    <>
      <div className="bg-[#000]/20 lg:hidden  h-[92%] w-screen top-14 absolute backdrop-blur-md">
        <h1 className="text-center text-2xl font-mono font-medium tracking-wide underline underline-offset-2 capitalize mt-3">
          In Touch
        </h1>
        <div className="w-[80%] mx-auto mt-5 flex justify-center items-center bg-[#ffffff] p-2 rounded-md shadow ">
          <SearchOutlinedIcon className="mr-1 cursor-pointer" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1  border-black/40  border-r-0 border-t-0 border-b-0 border-l px-2 outline-none"
          />
        </div>
        <div className="h-[82%] ">
          <div className="h-[95%]  px-2 mt-3 overflow-y-auto">
            <div
              onClick={() => {
                setShowSide(false);
                setReplys(true);
              }}
              className="flex justify-start items-center my-2 space-x-3 p-2 bg-[#ffffff] rounded-md shadow-md cursor-pointer hover:bg-[#ffffff]/80  transition-all duration-150 ease-out"
            >
              <Avatar src="/vite.svg" />
              <h1 className="text-lg capitalize tracking-wide font-mono">
                the name to the manufacturer
              </h1>
            </div>
          </div>
        </div>

        <CloseIcon
          onClick={() => setShowSide(false)}
          className="fixed top-3 right-5 scale-110 cursor-pointer"
        />
      </div>
    </>
  );
};

export const ReplyBack = ({ setReplys }: any) => {
  return (
    <>
      <div className="bg-[#000]/20 flex justify-center items-center h-[92%] w-screen top-14 absolute backdrop-blur-md">
        <div className="bg-[#ffffff] w-[95%] h-[70%] lg:w-[50%] lg:h-[65%] rounded-md shadow-md">
          <div className="flex justify-start items-center space-x-4 w-full py-2 px-3 shadow-md">
            <Avatar />
            <h1>user Name</h1>
          </div>
          <div className="h-[72%]  overflow-y-auto scroll-smooth p-3">
            <div className=" mt-2 float-left clear-both bg-[#000]/10 w-[40%] shadow-sm rounded-md p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quidem asperiores ipsum minima repudiandae. Suscipit
              dolores
            </div>
            <div className=" mt-2 float-right clear-both bg-[#000]/10 w-[40%] shadow-sm rounded-md p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quidem
            </div>
            <div className=" mt-2 float-left clear-both bg-[#000]/10 w-[40%] shadow-sm rounded-md p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quidem asperiores ipsum minima repudiandae. Suscipit
              dolores
            </div>
            <div className=" mt-2 float-right clear-both bg-[#000]/10 w-[40%] shadow-sm rounded-md p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quidem
            </div>
            <div className=" mt-2 float-left clear-both bg-[#000]/10 w-[40%] shadow-sm rounded-md p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quidem asperiores ipsum minima repudiandae. Suscipit
              dolores
            </div>
            <div className=" mt-2 float-right clear-both bg-[#000]/10 w-[40%] shadow-sm rounded-md p-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati quidem
            </div>
          </div>
          <div className="w-[80%] mt-2 mx-auto flex justify-center items-center space-x-3 bg-gray-200 p-2 rounded-md shadow-md">
            <input
              type="text"
              placeholder="send reply..."
              className="flex-1 bg-transparent border-none outline-none text-lg px-2"
            />
            <button className="text-xl capitalize font-mono tracking-wide bg-[#d9afd9] rounded-md shadow-md px-2 py-1">
              send
            </button>
          </div>
        </div>
        <CloseIcon
          onClick={() => setReplys(false)}
          className="fixed top-3 right-5 scale-110 cursor-pointer"
        />
      </div>
    </>
  );
};
