import React from "react";
import "../styles/BtnWhatsapp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsappBtn = ({ isBtnON, urlToWhatsapp }) => {
  return (
    <React.Fragment>
      {isBtnON ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={`${urlToWhatsapp}`}
          className={`buttonChat active`}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      ) : (
        <div className="buttonChat"><FontAwesomeIcon icon={faWhatsapp} /></div>
      )}
    </React.Fragment>
  );
};
export default WhatsappBtn;
