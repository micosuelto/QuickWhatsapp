import React from "react";
import "../styles/InfoApp.scss";

const InfoApp = () => {
  return (
    <header className="InfoApp">
      <div className="container">
        <div className="app-title">
          <h1 className="app-name text-3xl font-bold underline">
            Quick<span>Whatsapp</span>
          </h1>
          <h2 className="slogan">Chat with unsaved numbers.</h2>
        </div>
        <a href='/credits' title="View credits" className="info">
            Development<br />by <span className="text-secondary">micosuelto</span>
        </a>
      </div>
    </header>
  );
};

export default InfoApp;
