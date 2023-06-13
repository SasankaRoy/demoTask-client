import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-full bg-blue-100 flex justify-between items-center px-4 py-2 shadow-md">
        <ul className="flex justify-center items-center space-x-5">
          {["home", "our products", "about us", "contact us"].map(
            (item, id) => (
              <li
                key={id}
                className="cursor-pointer text-xl font-mono tracking-wide capitalize"
              >
                {item}
              </li>
            )
          )}
        </ul>
        <div className="flex justify-center items-center space-x-3">
          <button
            onClick={() => navigate("/signin")}
            className="text-lg font-semibold text-red-400  bg-transparent capitalize border border-red-400 rounded-xl px-2 py-1 "
          >
            register
          </button>
          <button
            onClick={() => navigate("/login")}
            className="text-lg font-semibold capitalize text-red-400  bg-transparent border border-red-400  rounded-xl px-2 py-1 "
          >
            Log in
          </button>
        </div>
      </nav>
    </>
  );
};
