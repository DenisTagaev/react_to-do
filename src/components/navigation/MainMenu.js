import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.scss';

export default function MainMenu({active, activeToggler}) {
  return (
    <nav className={`mainNavContainer ${active ? "active" : ""}`}>
      <ul className="mainNav">
        <NavLink to="/" onClick={activeToggler}>
          Tasks
        </NavLink>
        <NavLink to="/add" onClick={activeToggler}>
          New Task
        </NavLink>
        <NavLink to="/help" onClick={activeToggler}>
          Support
        </NavLink>
      </ul>
    </nav>
  );
}
