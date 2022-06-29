import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../Header/Header";

const Home = React.lazy(() => import("../../pages/Home/Home"));

const MasterConfig = React.lazy(() =>
  import("../../pages/MasterConfig/MasterConfig")
);

function Layout() {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <br />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/master-config" element={<MasterConfig />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default Layout;
