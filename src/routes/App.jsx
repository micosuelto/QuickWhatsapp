import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
// Import Global Styles
import "../styles/global.scss";
// Import Pages
import Home from "../pages/Home";
import Credits from "../pages/Credits";
import NotFound from "../pages/NotFound";
import Helmet from "react-helmet"

const App = () => {
  return (
    <BrowserRouter>
      <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/credits" element={<Credits />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
