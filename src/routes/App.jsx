import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
// Import Global Styles
import "../styles/global.scss";
// Import Pages
import Home from "../pages/Home";
import Credits from "../pages/Credits";
import NotFound from "../pages/NotFound";
// Import Google Analytics
import ReactGA from "react-ga";
const TRACKING_ID = "G-X3DY82NWV8";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
