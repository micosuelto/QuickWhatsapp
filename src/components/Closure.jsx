import React from "react";
import "../styles/Closure.scss";
import { useTranslation } from "react-i18next";

const Closure = () => {
  const { t } = useTranslation();
  return (
    <footer className="Closure">
      <div className="container">
        <a dangerouslySetInnerHTML={{__html: t("developed")}} href='/credits' title="View credits" className="developed" />   
      </div>
    </footer>
  );
};

export default Closure;
