import React from 'react'
import { NavLink } from "react-router-dom";

export default function HelpMenu({onRouteChange}) {
  const handleLinkClick = (event) => {
    onRouteChange(event.target.pathname);
  }

  return (
    <nav className="helpNavContainer">
      <ul className="helpNav">
        <NavLink to="/help/add" onClick={handleLinkClick}>
          Add Help
        </NavLink>
        <NavLink to="/help/remove" onClick={handleLinkClick}>
          Remove Help
        </NavLink>
        <NavLink to="/help/change" onClick={handleLinkClick}>
          Change Help
        </NavLink>
      </ul>
    </nav>
  );
}
