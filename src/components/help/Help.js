import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import HelpMenu from "../navigation/HelpMenu";
import './Help.scss';

export default function Help() {
  const [route, setRoute] = useState("/help/add");
  const navigate = useNavigate();
  // const location = useLocation();

  const changeRoute = (route) => {
    setRoute(route);
  }

  useEffect(() => {
    // changeRoute(route);
    navigate(route);
  }, [navigate, route]);

  return (
    <div className="helpRootPageContainer">
      <HelpMenu onRouteChange={changeRoute}/>
      <Outlet />
    </div>
  );
}
