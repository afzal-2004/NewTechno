import "./NavBar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
const NavBar = () => {
  const [OpenNav, setOpenNav] = useState(false);
  const handelClicked = () => {
    setOpenNav(!OpenNav);
  };
  return (
    <>
      <nav className=" flex   justify-between p-3  items-center bg-white    sticky top-0 z-50 ">
        <h1 className="   md:text-[35px]  text-[20px] font-bold ">NewTecho</h1>
        <div className="  md:flex gap-[30px] hidden ">
          <Link to={"/"}>Home</Link>
          <HashLink to={"#about"}>About</HashLink>
          <HashLink to="#brand">Brand</HashLink>
          <Link to={"contact"}>Contact</Link>
          <Link to={"service"}>Service</Link>
        </div>

        {OpenNav ? (
          <RxCross1
            className=" text-[25px] font-bold sm; md:hidden"
            onClick={handelClicked}
          />
        ) : (
          <CiMenuFries
            className=" text-[25px] font-bold sm; md:hidden"
            onClick={handelClicked}
          />
        )}
      </nav>
      <div>
        {OpenNav ? (
          <div className="parent">
            <ul
              className="  flex flex-col bg-white 
            w-[80%]  min-h-[70vh]  z-50  right-0  text-[20px]  text-red-500   fixed "
            >
              <li
                className="  w-full p-4 border border-b-2 "
                onClick={handelClicked}
              >
                <Link to={"/"}>Home</Link>
              </li>

              <li
                className="  w-full p-4 border border-b-2 "
                onClick={handelClicked}
              >
                <HashLink to={"#about"}>About</HashLink>
              </li>
              <li
                className="  w-full p-4 border border-b-2 "
                onClick={handelClicked}
              >
                <HashLink to="#brand">Brand</HashLink>
              </li>
              <li
                className="  w-full p-4 border border-b-2 "
                onClick={handelClicked}
              >
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li
                className="  w-full p-4 border border-b-2 "
                onClick={handelClicked}
              >
                <Link to={"service"}>Service</Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavBar;
