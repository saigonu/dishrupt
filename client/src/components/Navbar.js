import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import logo from "../Logo.png";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };

  return (
    <div className="navbar">
    <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create-recipe">Create Recipe</Link>
        
      </div>
      {!cookies.access_token ? (
        <Link to="/auth" className="buton">Login / Register</Link>
      ) : ( 
        <>
      <Link to="/saved-recipes">Saved Recipes</Link>
        <div className="navbar-button-container">
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
        </>
      )}
    </div>
  );
};
