import logo from "../assets/pet care.jpg";
import userIcon from "../assets/user.png";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router";
import { toast } from "react-toastify"; // ✅ Add this

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("You Logged Out successfully"))
      .catch((error) => {
        console.log(error);
        toast.error("Error logging out!");
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-3">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-3">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost text-3xl p-2">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 ml-2 sm:ml-0">
          <img
            src={logo}
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full shadow-md"
            alt="Logo"
          />
          <span className="hidden sm:block text-3xl sm:text-4xl md:text-4xl font-bold text-green-700">
            PetCare🐾
          </span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu menu-horizontal px-1 font-semibold text-green-700 flex flex-row gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <img
              src={user.photoURL || userIcon}
              alt="User"
              id="user-avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
            />
            <Tooltip
              anchorId="user-avatar"
              place="top"
              content={user.displayName || user.email}
            />
            <button
              onClick={handleLogOut}
              className="btn bg-green-700 px-4 sm:px-6 md:px-8 text-white"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/auth/login" className="btn bg-green-700 text-white px-6">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
