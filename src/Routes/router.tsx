import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/home";
import Details from "../Pages/Details/details";
import Panel from "../Pages/Panel/panel";
import Map from "../Pages/Map/map";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/details/:id`} element={<Details />} />
          <Route path={`/panel`} element={<Panel />} />
          <Route path={`/map`} element={<Map />} />
          <Route path="*" element={<>No Match</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
