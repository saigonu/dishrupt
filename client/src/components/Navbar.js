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
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/create-recipe" className="navbar-link">Create Recipe</Link>
        {!cookies.access_token && (
          <Link to="/auth" className="buton">Login / Register</Link>
        )}
        {cookies.access_token && (
          <Link to="/saved-recipes" className="navbar-link">Saved Recipes</Link>
        )}
      </div>
      {cookies.access_token && (
        <div className="navbar-button-container">
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
  
  
};
