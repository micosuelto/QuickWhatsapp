import React from "react";
import "../styles/InfoApp.scss";
import { useTranslation } from "react-i18next";
import MobileShare from "./MobileShare";

const InfoApp = () => {
  const { t } = useTranslation();
  return (
    <header className="InfoApp">
      <div className="container">
        <div className="app-title">
          <h1 className="app-name text-3xl font-bold underline">
            Quick<span>Whatsapp</span>
          </h1>
          <h2 className="slogan">{t("slogan")}</h2>
        </div>
        
        {!navigator.share ? <MobileShare /> : null }

      </div>
    </header>
  );
};

export default InfoApp;
