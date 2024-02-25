import {  Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/AuthProvider/AuthProvider";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  // console.log(user)
  const navItem = (
    <>
    
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/shops'}>Shops</NavLink></li>
      <li><NavLink to={'/category'}>Categories</NavLink></li>
      <li><NavLink to={'/cart'}>My Cart</NavLink></li>
      <li><NavLink to={'/createAccount'}>Create Account</NavLink></li>
      <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
      <li><NavLink to={'/addProduct'}>Add Product</NavLink></li>


     
    </>

 
  );

  const handleLogOut = () => {
    logOut()
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {/* /////// nav item /// */}
          {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl"><img className="w-28 h-10" src="https://cdn.worldvectorlogo.com/logos/dtg.svg" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
       {navItem}
          </ul>
        </div>
        <div className="navbar-end">


        <div className="">
            {user ? <div className="flex items-center">
            <p>{user?.displayName}</p>
              <a href="">
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
               
              </a>
              
            
            </div> : (
              <FaUserAlt className="text-2xl ms-2"></FaUserAlt>
            )}
          </div>

          {
            user ? <button className="btn" onClick={handleLogOut}>Log Out</button> : <Link to={'/logIn'}><a className="btn">LogIn</a></Link>
          }
     
          
        </div>
      </div>
    </div>
  );
};

export default Header;
