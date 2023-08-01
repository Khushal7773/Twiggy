import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 sm:p-2 sm:m-2">
          <li className="px-4">Online Status: {onlineStatus ? "😎" : "☹"}</li>
          <li className="px-4 hover:text-cyan-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-cyan-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:text-cyan-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:text-cyan-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-cyan-500">Cart</li>
          <button
            className="login  hover:text-cyan-500"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;


