import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
// Import Pages
import Home from "../pages/Home";
import Credits from "../pages/Credits";
import NotFound from "../pages/NotFound";
// Import Global Styles
import "../styles/global.scss";

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
