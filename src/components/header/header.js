import React, { useState, useEffect } from "react";
import { FaTasks } from "react-icons/fa";
import MainMenu from "../navigation/MainMenu";
import "./header.scss";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggler = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <header>
        <div className="title">
          <FaTasks style={{ color: "green" }} />
          Todo App
          <button 
            className={`navToggler ${isActive? "active": ""}`} 
            hidden={isMobile? false: true}
            onClick={handleMenuToggler}
          >
          </button>
        </div>
        <MainMenu 
          active={isActive}
          activeToggler={handleMenuToggler}
        />
        <div className="author">by Denis Tagaev</div>
      </header>
    </>
  );
}

export default Header;
